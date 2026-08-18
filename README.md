# 3N Infinity Solutionz — Website

A responsive, static front-end website for 3N Infinity Solutionz, built with plain HTML, CSS, and vanilla JavaScript (no build step, no framework required).

## Structure

```
/
├── index.html          Homepage
├── about.html           About / company overview
├── energy.html           Division 01 — Energy & Sustainability
├── industrial.html       Division 02 — Industrial & Manufacturing
├── corporate.html        Division 03 — Corporate & Hospitality
├── contact.html          Contact / enquiry form
├── assets/
│   ├── css/styles.css    Full design system (colors, type, components)
│   ├── js/main.js        Header/footer injection, mobile nav, scroll reveal
│   └── img/logo.png      Company logo
└── partials/
    ├── header.html        Shared navigation, injected into every page
    └── footer.html        Shared footer, injected into every page
```

The header and footer live in one place (`partials/`) and are pulled into every page by `assets/js/main.js`, so editing navigation or footer links only needs to happen once.

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `3n-infinity-solutionz`).
2. Upload/push the **contents of this folder** to the repository root (not the folder itself — the files `index.html`, `about.html`, etc. should sit at the repo root).
3. In the repo, go to **Settings → Pages**.
4. Under **Source**, select the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a minute or two.
6. To use your purchased domain (`3ninfinitysolutionz.com`):
   - Add a file named `CNAME` at the repo root containing exactly: `3ninfinitysolutionz.com`
   - At your domain registrar, point an `A` record to GitHub Pages' IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153), or a `CNAME` record (for a `www` subdomain) to `<your-username>.github.io`.
   - Back in **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS** once it's verified.

> Note: the header/footer injection uses `fetch()`, which requires the site to be served over `http://` or `https://` (GitHub Pages, or a local dev server) — it will not load partials if you double-click `index.html` and open it directly as a `file://` URL. To preview locally, run a simple server from this folder, e.g. `python3 -m http.server 8080`, then open `http://localhost:8080`.

## Connecting the contact form to a real inbox

The form on `contact.html` currently only shows a confirmation message — it does not send email, since this is a static site with no backend. Pick one of these to make it functional, in order of least to most setup:

- **Formspree** (easiest): create a free form at formspree.io, then change the `<form>` tag to `<form id="enquiryForm" action="https://formspree.io/f/yourFormID" method="POST">` and remove the `e.preventDefault()` line in the inline script at the bottom of `contact.html`.
- **EmailJS**: send straight from the browser via their JS SDK — no server needed.
- **Your own backend**: replace the `submit` handler in `contact.html` with a `fetch()` call to your API endpoint.

## Editing content

- **Colors, fonts, spacing** — all defined as CSS variables at the top of `assets/css/styles.css`.
- **Navigation links** — edit once in `partials/header.html` and `partials/footer.html`.
- **Division pages** — each competency is its own `.comp-card` block inside `energy.html`, `industrial.html`, and `corporate.html`; duplicate a block to add a new competency, or split a division into its own page later by copying one of these files as a template.
- **Placeholder contact details** (phone numbers) in `contact.html` and `partials/footer.html` should be replaced with your real numbers before launch.

## Browser support & accessibility

- Fully responsive from mobile (360px) through large desktop.
- Respects `prefers-reduced-motion` for users who disable animation.
- Semantic HTML with visible keyboard focus and descriptive alt text/labels throughout.
