# The Ledger

A minimal blog for posting what you learn as you learn it — articles are
plain markdown files, no CMS or database required.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Add a new post

1. Create a new file in `content/posts/`, e.g. `content/posts/my-new-post.md`
2. Add frontmatter at the top:

```markdown
---
title: "Your post title"
date: "2026-07-10"
summary: "One sentence describing the post."
metrics: ["WACC 8.5%", "IRR 14%"]
---

Your content in normal markdown below.
```

3. `metrics` is optional — it powers the little ticker strip at the top of
   the post. Leave it as `[]` or remove it if there's nothing to show.
4. Save, and it shows up automatically on the home page — no other code
   changes needed.

## Deploy to Vercel (free)

1. Push this folder to a new GitHub repository
2. Go to https://vercel.com, sign in with GitHub
3. Click "Add New Project", select your repo, click Deploy
4. Every time you push a new commit (like a new post), Vercel rebuilds and
   redeploys automatically — usually live within a minute

## Project structure

```
app/                → pages (home, individual post route)
components/         → PostCard (list item), Ticker (metrics strip)
content/posts/      → your markdown articles live here
lib/posts.ts        → reads and parses the markdown files
app/globals.css     → all the design tokens (colors, type, spacing)
```
