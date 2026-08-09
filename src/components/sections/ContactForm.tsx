import { useRef, useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const startedAt = useRef(Date.now());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const company = String(data.get('company') ?? '');

    if (name.length < 2) {
      setStatus('error');
      setError('Please enter your name.');
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      setError('Please enter a valid email address.');
      return;
    }
    if (message.length < 10) {
      setStatus('error');
      setError('Add a bit more detail to your message.');
      return;
    }

    setStatus('submitting');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, email, message, company, startedAt: startedAt.current }),
      });
      const result: { ok: boolean; error?: string } = await res.json();

      if (!res.ok || !result.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <p role="status" className="rounded-md border border-accent-dim bg-bg-elevated px-4 py-3 text-fg">
        Thanks — your message is in. I'll get back to you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot — hidden from real users, left empty by them; bots that autofill every field trip it */}
      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-fg-subtle">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-md border border-border bg-bg-elevated px-3.5 py-2.5 text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none"
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-fg-subtle">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-md border border-border bg-bg-elevated px-3.5 py-2.5 text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none"
          placeholder="jane@company.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-fg-subtle">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-md border border-border bg-bg-elevated px-3.5 py-2.5 text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none"
          placeholder="What are you trying to build?"
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-accent-bright">
          {error}
        </p>
      )}

      <Button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  );
}
