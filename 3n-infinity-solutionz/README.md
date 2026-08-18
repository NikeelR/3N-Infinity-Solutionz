# 3N Infinity Solutionz — Website

Full-stack corporate website: Node.js + Express + EJS on the backend, vanilla responsive
CSS/JS on the frontend. No build step — clone it, `npm install`, and it runs.

## What's in here

```
server.js              Express app & all routes
data/company.js         Company-wide info (stats, pillars, contact, divisions)
data/sectors.js          All 9 sector/competency content — EDIT THIS to change any sector copy
data/leads.json          Auto-created — contact form submissions land here
views/                   EJS templates (partials/head, header, footer + page templates)
public/css/style.css     The entire design system
public/js/main.js        Nav, mega-menu, contact form behaviour
```

## Run it locally

```bash
npm install
cp .env.example .env      # optional — only needed for email notifications
npm start
```

Visit `http://localhost:3000`.

## Editing content (no code required for most changes)

- **Add, remove or edit a sector** → edit `data/sectors.js`. Every sector page, the
  homepage grid, the mega-menu and the footer sitemap are all generated from this one file.
- **Company info, phone numbers, addresses, stats** → edit `data/company.js`.
- **Design (colors, fonts, spacing)** → edit the `:root` variables at the top of
  `public/css/style.css`.

## Contact form / leads

Every submission is saved to `data/leads.json` (git-ignored — don't commit real customer data).
Email notifications are **optional**: if you fill in `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` in
`.env`, the form will also email a notification to `LEAD_NOTIFY_TO`. If those are left blank,
the form still works — it just won't send an email, only save the lead to file.

Works with Gmail (use an [App Password](https://support.google.com/accounts/answer/185833)),
Zoho Mail, SendGrid, Brevo, or any standard SMTP provider.

## Deploying

This is a **Node.js server**, not a static site — it needs a Node host, not GitHub Pages alone.

**Recommended (free tier available): Render or Railway**
1. Push this folder to a GitHub repo.
2. On [render.com](https://render.com) → New → Web Service → connect the repo.
3. Build command: `npm install` · Start command: `npm start`.
4. Add your `.env` values under Environment.
5. Point your domain's DNS (3ninfinitysolutionz.com) at the Render/Railway URL via a CNAME.

**Alternative: Vercel** — works with the [Node server pattern](https://vercel.com/docs/frameworks/express) (may need a small `vercel.json` adjustment for serverless routing).

**If you specifically want GitHub Pages** (free, but static-only): you'd need to pre-render
each `.ejs` page to static `.html` and drop the contact form for a third-party form service
(e.g. Formspree). Not recommended here since you already have the dynamic sector-template
setup working — a $0–7/mo Node host (Render free tier, Railway) keeps the maintainable
one-file-per-sector structure intact.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "3N Infinity Solutionz website"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

`node_modules/` and `.env` are already git-ignored — the repo stays clean.

## Adding a 10th sector later

Copy any object in `data/sectors.js`, change every field, pick a unique `slug` and `code`,
set `division` to one of `energy` / `industrial` / `corporate` (or add a new division in
`data/company.js`). It will automatically appear in the mega-menu, homepage grid, `/sectors`
index and footer — and get its own page at `/sectors/your-new-slug`.
