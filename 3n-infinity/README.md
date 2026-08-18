# 3N Infinity Solutionz — Website

A complete, responsive corporate website for **3N Infinity Solutionz** (multi-sector B2B service & product provider, India + UAE). Static frontend (no build step) + a small Express API backend for the contact form. Drop this whole folder into a GitHub repo as-is.

---

## 1. The Website Plan

### 1.1 Reference model
Conglomerates that sell unrelated sectors under one brand (Tata Group, Adani Group, DP World) solve the same problem you have: **the homepage's job is not to explain any one sector — it's to prove the company is credible, then route the visitor to the right sector fast.** That means:
- A single, confident brand statement above the fold (not 8 competing messages)
- A clear, scannable **index of divisions** the visitor can self-select from within seconds
- Each sector gets its own dedicated page/URL — never crammed into homepage tabs — because different sectors have different buyers, different specs, and different SEO keywords
- Trust signals (countries of operation, scale, technology) placed near the top, before any product detail

This build follows that model.

### 1.2 Sitemap
```
/                                    Home — brand statement + 8-division index
/about.html                          Company overview, all divisions, approach
/contact.html                        Enquiry form (routes to divisional team)
/sectors/solar-panel-cleaning-robotics.html
/sectors/cotton-yarn-supply.html
/sectors/rubber-gloves-hygiene.html
/sectors/heat-pumps.html
/sectors/printing-packaging.html
/sectors/corporate-gifts.html
/sectors/solar-epc-projects.html
/sectors/metal-scraps.html
```
Each sector page: hero + code badge (SEC-01…08) → overview → offerings → why-us / applications → related divisions → CTA. Consistent structure = credibility, and it means adding a 9th sector later is a copy-paste job.

### 1.3 Home page anatomy (highest-priority page)
1. **Header** — logo, sector mega-menu, About, Contact, sticky "Request a Quote"
2. **Hero** — split layout: left = headline + CTA + stats; right = a **Divisional Index panel** (the signature element — an elevator-directory-style list of all 8 sectors, numbered SEC-01–08, that doubles as navigation). This is the one memorable, on-brand device: real content that IS a numbered index, not decoration.
3. **Trust bar** — one-line proof points (robotics, cross-border trade, sustainability, single-vendor model)
4. **Sector grid** — all 8 divisions as equal-weight cards (deliberately not ranked — a diversified company shouldn't visually imply one sector matters more)
5. **Why 3N Infinity** — 3 USPs on a dark section for contrast and gravity
6. **Featured division banner** — spotlights the flagship (robotic solar cleaning) without demoting the others
7. **Process** — how an enquiry becomes a contract (sets expectations for corporate buyers)
8. **CTA band** — low-friction "tell us what you need"
9. **Footer** — full sitemap, both country locations, direct contact

### 1.4 Design system
- **Palette:** Ink `#0B1220`, Steel `#142234`, Porcelain `#F5F7F6`, Amber `#E8A33D` (signal/energy accent), Teal `#1F8A70` (sustainability accent), Slate `#4B5563` — an industrial/engineering palette rather than a generic SaaS gradient, fitting robotics + industrial supply + trade.
- **Type:** Space Grotesk (display headings, technical character), IBM Plex Sans (body), IBM Plex Mono (labels, codes, stats — reinforces the "spec sheet / directory" identity).
- **Signature element:** the hero's Divisional Index panel — because with 8 unrelated sectors, a real directory is more honest and more useful than a generic hero image.
- Fully responsive: 4-col → 2-col → 1-col grid breakpoints, mobile slide-in nav drawer, fluid type via `clamp()`.
- Accessibility: visible focus states, `prefers-reduced-motion` respected, semantic headings.

### 1.5 Tech stack
| Layer | Choice | Why |
|---|---|---|
| Frontend | Plain HTML/CSS/JS (no framework, no build step) | Fastest to deploy on GitHub Pages/Netlify; every page is real static HTML, which is best for B2B SEO (crawlers see full content immediately, unlike client-rendered SPAs) |
| Backend | Node.js + Express | Small, well-understood API for the contact form; deploys to any Node host (Render, Railway, a VPS) |
| Email | Nodemailer (SMTP) | Sends enquiry notifications to your inbox; falls back to console logging if SMTP isn't configured yet, so the form still works in dev |
| Security | Helmet, CORS allow-list, rate limiting, honeypot field | Basic hardening appropriate for a public lead-gen form |

---

## 2. Folder structure

```
3n-infinity/
├── build_site.py               # Generator that produced all HTML pages (re-run after editing content)
├── README.md
├── .gitignore
├── frontend/                    # Deploy this folder as your static site
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   ├── sectors/*.html           # 8 sector pages
│   └── assets/
│       ├── css/style.css
│       └── js/main.js, config.example.js
└── backend/                     # Deploy this folder as your Node API
    ├── server.js
    ├── package.json
    ├── .env.example
    ├── middleware/validateContact.js
    ├── utils/mailer.js
    └── routes/contact.js
```

---

## 3. Running it locally

### Frontend only (no backend needed to browse the site)
Open `frontend/index.html` directly, or serve it properly (recommended, avoids `fetch` path issues):
```bash
cd frontend
python3 -m http.server 5500
# visit http://localhost:5500
```

### Backend (contact form API)
```bash
cd backend
cp .env.example .env      # fill in SMTP details when ready — safe to leave blank for now
npm install
npm run dev                # nodemon, auto-restarts on changes
# API on http://localhost:4000 — /api/health and /api/contact
```
With no SMTP configured, submitted enquiries are printed to the backend console instead of emailed — so you can test the full flow before setting up email.

`frontend/assets/js/main.js` auto-detects `localhost` and points the contact form at `http://localhost:4000`. In production it calls same-origin `/api/contact` by default.

---

## 4. Deployment options

**Option A — one server for everything (simplest):**
Deploy `backend/` to Render/Railway/a VPS. The Express server already serves the `frontend/` folder as static files (see `server.js`), so one deployment serves the whole site, and the contact form works same-origin with zero config.

**Option B — split hosting (frontend on GitHub Pages/Netlify, backend elsewhere):**
1. Push `frontend/` as your GitHub Pages / Netlify / Vercel site.
2. Deploy `backend/` to Render/Railway, set its env vars from `.env.example`.
3. In `frontend/assets/js/`, copy `config.example.js` → `config.js`, set `window.API_BASE` to your backend's URL, and add `<script src="assets/js/config.js">` before `main.js` in every HTML file.
4. Set `FRONTEND_ORIGIN` in the backend's env to your deployed frontend URL (CORS allow-list).

**Pushing to GitHub:**
```bash
cd 3n-infinity
git init
git add .
git commit -m "3N Infinity Solutionz — website launch"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

---

## 5. Editing content

- **Sector copy** (offerings, benefits, applications, taglines) lives in one place: the `SECTORS` list at the top of `build_site.py`. Edit it, then re-run `python3 build_site.py` to regenerate all HTML pages consistently — you never hand-edit 8 files individually.
- **Colors/type:** all defined as CSS variables at the top of `frontend/assets/css/style.css`.
- **Contact details, phone numbers:** currently placeholders (`+91 XX…`, `+971 XX…`, `info@3ninfinitysolutionz.com`) — search-replace across `build_site.py`, then regenerate.
- **Images:** the design currently uses a placeholder panel for the featured-division visual (`.fb-visual` in `index.html`) — swap in real product photography (robotic cleaning units, solar sites, product shots) at `frontend/assets/img/` and reference them from `build_site.py`.

---

## 6. Suggested next steps
- Swap placeholder phone numbers/emails for real ones
- Add real photography per division (robots, textiles, gloves, heat pumps, packaging lines, gifting, solar installs, scrap yards)
- Connect a real domain + SSL (automatic on Pages/Netlify/Render)
- Add Google Analytics / Search Console once the domain is live
- Optional: a lightweight CMS later if content updates become frequent (out of scope for this build)
