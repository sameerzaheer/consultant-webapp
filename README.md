# AutomateThis

Sameer Zaheer's consultant site — built with [Astro](https://astro.build), React islands, Tailwind CSS v4, and MDX, deployed as a fully static site on Cloudflare Pages with one Cloudflare Pages Function for the contact form.

## Local dev

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

| Command | Action |
|---|---|
| `npm run dev` | Start the Astro dev server |
| `npm run build` | Build the static site to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npx wrangler pages dev dist` | Serve the built site *and* `functions/api/contact.ts` together, for testing the contact form locally |

## Environment variables

The contact form backend (`functions/api/contact.ts`) needs one secret:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | API key for [Resend](https://resend.com), used to send contact-form emails |

For local testing with `wrangler pages dev`, create a `.dev.vars` file (gitignored) from `.env.example`:

```bash
cp .env.example .dev.vars
# then fill in RESEND_API_KEY
```

**Note:** `automatethis.ca` is not yet a verified sending domain in Resend, so the function currently sends `from` Resend's shared sandbox address (`onboarding@resend.dev`). Once the domain is verified in the Resend dashboard, update the `from` address in `functions/api/contact.ts` (marked with a `TODO`) to a domain address like `no-reply@automatethis.ca`.

## Deploy to Cloudflare Pages

1. Push this repo to GitHub or GitLab.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, select the repo.
3. Build settings:

   | Setting | Value |
   |---|---|
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |

4. **Settings → Environment variables** — add `RESEND_API_KEY` as a secret (Production and Preview).
5. Deploy. Every push to the connected branch triggers a new deployment automatically.

`wrangler.toml` sets `pages_build_output_dir = "dist"` so the Pages Function at `functions/api/contact.ts` is picked up automatically alongside the static build — no separate server/adapter needed.

## Adding a blog post

1. Copy `src/content/blog/example-post.mdx` to `src/content/blog/your-post-slug.mdx`.
2. Fill in frontmatter per the schema in `src/content/config.ts`:

   ```yaml
   ---
   title: Your Post Title
   description: Short summary for SEO and the blog index.
   publishDate: 2026-03-15
   tags: [rag, evaluation]
   draft: false
   ---
   ```

3. Write the post body in Markdown/MDX below the frontmatter.
4. Set `draft: false` and commit — it appears at `/blog/your-post-slug/` and in the `/blog/` listing, sorted by `publishDate`.

## Adding a case study

Add a `.md` file to `src/content/caseStudies/`, matching the schema in `src/content/config.ts`:

```yaml
---
title: Short, specific title
client: Client or industry (anonymized where needed)
role: Your role on the engagement
category: consulting        # or "foundry"
platform: Palantir Foundry  # optional — only for category: foundry, shows a platform badge
order: 6                    # sort position within its category
featured: true
heroMetric: "Short, quantified headline for the card"
techStack: [Python, PySpark]
problem: A grounded paragraph — what was actually broken or missing.
approach: What you built and why, including any deliberate tradeoffs.
outcome: A quantified result.
---
```

`category: consulting` entries appear under **Case Studies** on the homepage; `category: foundry` entries appear under **Palantir Foundry Work**, both pulling from the same collection filtered by `category` (see `src/components/sections/CaseStudies.astro` and `FoundryWork.astro`). Every entry also gets a detail page at `/work/<filename-slug>/` via `src/pages/work/[slug].astro`.

## Design decisions

- **Accent color** — a desaturated copper/amber (`#c8853f` family) on near-black/off-white. Chosen to avoid the ubiquitous blue-purple "AI SaaS" gradient and the equally common teal/emerald "AI" accent — copper reads as material and craft rather than generic tech, which fits a consultant whose stated philosophy is interpretable, maintainable systems over flashy ones.
- **Fonts** — [Geist](https://vercel.com/font) for headings/body, [Geist Mono](https://vercel.com/font) for labels, tags, dates, and section numbering. Both are self-hosted via [Fontsource](https://fontsource.org/) (`@fontsource-variable/geist`, `@fontsource-variable/geist-mono`) with `font-display: swap`, so there's no external font request and no render-blocking.
- **Navigation** — a fixed sidebar on desktop, a CSS-only checkbox-driven drawer on mobile (`src/components/layout/Header.astro`). No JavaScript is shipped for navigation at all.
- **Case studies filtering** — deliberately static (no client-side filter/sort island). With 5 consulting + 3 Foundry entries, a filter UI wasn't worth the added JS; hydration is reserved for the Hero role-rotation and the contact form.

## Project structure

```
functions/api/contact.ts   Cloudflare Pages Function — contact form backend
src/
  components/
    layout/     Header.astro, Footer.astro
    sections/   Homepage sections (Hero, About, Skills, CaseStudies, FoundryWork, Contact, ContactForm)
    ui/         Shared building blocks (Button, CaseStudyCard, TechTag, SectionHeading)
  content/
    caseStudies/  Case study & Palantir Foundry entries (single collection, filtered by `category`)
    blog/         MDX blog posts
  layouts/Layout.astro
  pages/          Routes (file-based)
  styles/global.css
public/           Static assets, favicon, _redirects
```
