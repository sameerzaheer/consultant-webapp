/// <reference types="@cloudflare/workers-types" />

interface Env {
  RESEND_API_KEY: string;
}

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
  startedAt?: unknown;
}

// Bot-speed heuristic: no human fills name/email/message faster than this.
// A lightweight stand-in for real rate limiting (which would need KV or Turnstile).
const MIN_ELAPSED_MS = 2000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid request body.' }, 400);
  }

  const { name, email, message, company, startedAt } = payload;

  // Honeypot: bots fill every field. Real users never see or fill this one.
  // Return a generic success so bots don't learn they were caught.
  if (typeof company === 'string' && company.length > 0) {
    return json({ ok: true });
  }

  if (typeof startedAt === 'number' && Date.now() - startedAt < MIN_ELAPSED_MS) {
    return json({ ok: true });
  }

  if (typeof name !== 'string' || name.trim().length < 2 || name.length > 200) {
    return json({ ok: false, error: 'Please enter your name.' }, 400);
  }
  if (typeof email !== 'string' || !EMAIL_RE.test(email) || email.length > 200) {
    return json({ ok: false, error: 'Please enter a valid email address.' }, 400);
  }
  if (typeof message !== 'string' || message.trim().length < 10 || message.length > 5000) {
    return json({ ok: false, error: 'Message is too short — add a bit more detail.' }, 400);
  }

  if (!env.RESEND_API_KEY) {
    return json({ ok: false, error: 'Contact form is not configured yet.' }, 500);
  }

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      // TODO: once automatethis.ca is a verified sending domain in Resend,
      // switch this to a domain address (e.g. no-reply@automatethis.ca).
      from: 'AutomateThis Contact Form <onboarding@resend.dev>',
      to: ['sameer@automatethis.ca'],
      reply_to: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!resendRes.ok) {
    return json({ ok: false, error: 'Failed to send your message. Please try again or email directly.' }, 502);
  }

  return json({ ok: true });
};
