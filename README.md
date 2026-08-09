# AutomateThis.ca

Strategic consultant website built with [Astro](https://astro.build), React islands, Tailwind CSS, and MDX blog support.

## Run locally

```bash
cd consultant-webapp
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

### Other commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Preview production build locally |

## Project structure

```
src/
  components/     React components (animations, forms)
  content/blog/   MDX blog posts
  layouts/        Page layouts
  pages/          Routes (auto-generated from files)
  styles/         Global CSS
public/           Static assets (favicon, blog images)
```

## Adding blog posts

1. Create `src/content/blog/your-post-slug.mdx`
2. Add frontmatter:

```yaml
---
title: Your Post Title
description: Short summary for SEO and the blog index.
pubDate: 2026-03-15
image: /blog/your-post-slug/hero.jpg  # optional
draft: false
---
```

3. Write content below in Markdown/MDX
4. Put images in `public/blog/your-post-slug/`
5. Commit and deploy — post appears at `/blog/your-post-slug/`

See [`src/content/blog/example-post.mdx`](src/content/blog/example-post.mdx) for a template (`draft: true`, hidden from index).

## Deploy to Cloudflare Pages

### Prerequisites

- Cloudflare account
- Git repo pushed to GitHub or GitLab
- Domain `automatethis.ca` on Cloudflare (or ready to transfer DNS)

### Step 1 — Disconnect from Vercel

1. Log in to [vercel.com](https://vercel.com)
2. Open your project → **Settings** → **Domains**
3. Remove `automatethis.ca` (and `www` if attached)
4. Optional: delete the Vercel project once Cloudflare is live

### Step 2 — Push code to Git

```bash
cd consultant-webapp
git add .
git commit -m "Migrate from Next.js to Astro"
git push origin main
```

### Step 3 — Create Cloudflare Pages project

1. Log in to [dash.cloudflare.com](https://dash.cloudflare.com)
2. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Select your repo
4. Configure build:

| Setting | Value |
|---------|-------|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `consultant-webapp` (if repo root is parent) |

5. **Save and Deploy**

### Step 4 — Custom domain

1. In your Pages project → **Custom domains** → **Set up a custom domain**
2. Add `automatethis.ca` and `www.automatethis.ca`
3. Cloudflare auto-configures DNS if the domain is on Cloudflare
4. Wait for SSL (usually a few minutes)

### Step 5 — Verify

- Visit `https://automatethis.ca`
- Check `/about`, `/services`, `/contact`, `/blog`
- Confirm sitemap at `/sitemap-index.xml`

### Ongoing deploys

Every push to `main` triggers a new Cloudflare Pages deployment automatically.

## DNS note (if domain is elsewhere)

Point your domain to Cloudflare first (change nameservers at your registrar), then follow Step 4. Until DNS propagates, use the `*.pages.dev` URL Cloudflare gives you.
