#!/usr/bin/env python3
"""
One-off static site generator for 3N Infinity Solutionz.
Produces plain HTML/CSS/JS files in /frontend — no build step needed at deploy time.
Run: python3 build_site.py
"""
import os

ROOT = os.path.join(os.path.dirname(__file__), "frontend")
SECTORS_DIR = os.path.join(ROOT, "sectors")

SECTORS = [
    dict(
        code="SEC-01", slug="solar-panel-cleaning-robotics", nav="Solar Cleaning (Robotics)",
        card_title="Solar Panel Cleaning — Robotics", card_desc="Automated robotic cleaning contracts that protect solar yield without water waste or manual risk.",
        tagline="Autonomous, waterless robotic cleaning that keeps utility and commercial solar arrays at peak yield.",
        overview="Dust and grime can cut solar panel output by 15–25% within weeks in Gulf and Indian conditions. 3N Infinity deploys semi-automated and fully robotic cleaning systems under scheduled maintenance contracts, restoring panel efficiency without the water consumption, labour risk, or downtime of manual cleaning crews.",
        offerings=[
            "Dry & waterless robotic cleaning for ground-mount and rooftop arrays",
            "Scheduled AMC (Annual Maintenance Contracts) with SLA-backed cleaning cycles",
            "Soiling-loss assessment and cleaning-frequency planning",
            "Rope-access and manual cleaning for sites unsuited to robotics",
            "Real-time yield reporting before/after each cleaning cycle",
        ],
        benefits=[
            "Water-free operation — critical for water-scarce sites in India & UAE",
            "Restores 10–20% of soiling-related energy loss on average",
            "Reduces micro-scratch risk vs. manual brush cleaning",
            "Predictable, contract-based OPEX instead of ad-hoc labour costs",
        ],
        applications=["Utility-scale solar farms", "Commercial & industrial rooftops", "Solar carports", "Residential communities / villas"],
    ),
    dict(
        code="SEC-02", slug="cotton-yarn-supply", nav="Cotton & Yarn Supply",
        card_title="Cotton & Yarn Cloth Supply", card_desc="Bulk sourcing and supply of raw cotton, yarn and finished cloth for industrial and export buyers.",
        tagline="Reliable bulk sourcing of cotton, yarn and cloth, backed by quality-checked mill relationships.",
        overview="3N Infinity supplies cotton, yarn, and finished cloth to garment manufacturers, traders, and industrial buyers across India and the UAE, connecting verified mills and ginning units to B2B buyers who need consistent count, grade, and delivery schedules.",
        offerings=[
            "Raw cotton procurement (various staple lengths & grades)",
            "Combed & carded cotton yarn — multiple counts",
            "Grey and finished cloth supply for garmenting and industrial use",
            "Consolidated container shipments India ⇄ UAE",
            "Quality inspection and lab-test documentation on request",
        ],
        benefits=[
            "Direct mill relationships — competitive, transparent pricing",
            "Consistent quality grading across repeat orders",
            "Flexible order sizes from trial lots to full containers",
            "Export documentation and logistics handled end-to-end",
        ],
        applications=["Garment manufacturing", "Home textiles", "Industrial wiping cloth", "Trading & re-export"],
    ),
    dict(
        code="SEC-03", slug="rubber-gloves-hygiene", nav="Rubber Gloves & Hygiene",
        card_title="Rubber Gloves & Hygiene Products", card_desc="Industrial, medical-grade and hygiene supplies sourced and supplied at bulk B2B volumes.",
        tagline="Bulk supply of rubber gloves and hygiene consumables for industrial, medical and facility use.",
        overview="From industrial-grade nitrile and latex gloves to hygiene consumables for facility management, 3N Infinity supplies certified products at bulk volumes for procurement teams who need consistent stock availability and compliance documentation.",
        offerings=[
            "Latex, nitrile & vinyl gloves — industrial and medical grade",
            "Disposable hygiene consumables (masks, sanitiser, wipes)",
            "Facility & housekeeping hygiene supply programmes",
            "Custom branding for corporate bulk orders",
            "Recurring stock-replenishment contracts",
        ],
        benefits=[
            "Certified, compliance-ready product documentation",
            "Bulk pricing with recurring supply agreements",
            "Stock reliability for continuous operations (hospitals, factories, hotels)",
            "Single vendor for multiple hygiene SKUs",
        ],
        applications=["Manufacturing & industrial plants", "Healthcare facilities", "Hospitality & FM companies", "Food processing units"],
    ),
    dict(
        code="SEC-04", slug="heat-pumps", nav="Heat Pumps (Solar & Electric)",
        card_title="Heat Pumps — Solar & Electric", card_desc="Energy-efficient solar-assisted and electric heat pump systems for commercial hot water and process heat.",
        tagline="Solar-assisted and electric heat pump systems that cut water-heating energy costs.",
        overview="3N Infinity supplies and contracts solar-assisted and standalone electric heat pumps for commercial hot water, process heating, and hospitality applications — engineered for the high-ambient conditions common across India and the UAE.",
        offerings=[
            "Solar-assisted hybrid heat pump systems",
            "Standalone electric air-source heat pumps",
            "Sizing, load calculation and system design",
            "Installation, commissioning & AMC support",
            "Retrofit solutions for existing hot-water systems",
        ],
        benefits=[
            "Up to 70% lower running cost vs. conventional electric heaters",
            "Faster payback with solar-assisted hybrid configurations",
            "Reduced carbon footprint for ESG / sustainability reporting",
            "Engineered for high-ambient Gulf & Indian climates",
        ],
        applications=["Hotels & resorts", "Hospitals & institutions", "Industrial process heat", "Residential communities"],
    ),
    dict(
        code="SEC-05", slug="printing-packaging", nav="Printing & Packaging",
        card_title="Printing & Packaging", card_desc="Supply of printing & packaging machinery and consumables for converters and print houses.",
        tagline="Machinery and consumables that keep printing and packaging lines running.",
        overview="3N Infinity supplies printing and packaging machinery alongside the consumables that keep production lines running — serving converters, print houses, and packaging units across both markets from a single procurement point.",
        offerings=[
            "Printing machinery — offset, flexo & digital line components",
            "Packaging machinery — sealing, wrapping & carton-forming equipment",
            "Consumables: inks, plates, adhesives, films & rolls",
            "Spare parts sourcing for existing production lines",
            "Machinery installation & maintenance coordination",
        ],
        benefits=[
            "Single vendor for both machinery and running consumables",
            "Reduced production downtime via reliable consumable stock",
            "Competitive import sourcing across India–UAE trade lanes",
            "Support for both new lines and legacy-machine spares",
        ],
        applications=["Print houses & converters", "FMCG packaging lines", "Corrugated box manufacturers", "Label & flexible-packaging units"],
    ),
    dict(
        code="SEC-06", slug="corporate-gifts", nav="Corporate Gifts & A4/Office",
        card_title="A4 & Corporate Event Gifts", card_desc="Office paper supply and curated corporate gifting for events, onboarding and client relations.",
        tagline="Office paper supply and curated corporate gifting, delivered on schedule for events and offices.",
        overview="From everyday A4 and office paper supply to curated corporate gifting for conferences, client relations, and employee events, 3N Infinity handles bulk, branded and time-sensitive orders for corporate procurement and events teams.",
        offerings=[
            "Bulk A4 & office paper supply on recurring schedules",
            "Corporate event gifting — curated hampers & branded merchandise",
            "Custom branding, packaging & unboxing design",
            "Onboarding kits and client-relations gifting programmes",
            "Time-bound delivery for conferences and launch events",
        ],
        benefits=[
            "One vendor for daily office consumables and premium gifting",
            "Custom branding turnaround built around your event date",
            "Bulk-order pricing with predictable recurring supply",
            "Sourced across India & UAE for widest catalogue choice",
        ],
        applications=["Corporate offices & procurement teams", "Events & conferences", "HR / employee engagement", "Client relationship gifting"],
    ),
    dict(
        code="SEC-07", slug="solar-epc-projects", nav="Solar Panel Projects (EPC)",
        card_title="Solar Panel Projects", card_desc="End-to-end EPC delivery for rooftop, ground-mount and carport solar installations.",
        tagline="End-to-end EPC delivery — design, procurement, installation and commissioning.",
        overview="Beyond maintenance, 3N Infinity delivers full EPC (Engineering, Procurement & Construction) for solar installations — rooftop, ground-mount and carport — for commercial, industrial and utility clients across India and the UAE.",
        offerings=[
            "Site assessment, system design & yield modelling",
            "Panel, inverter & BOS procurement",
            "Installation & grid-interconnection management",
            "Commissioning, testing & handover documentation",
            "Post-install O&M, including robotic cleaning contracts",
        ],
        benefits=[
            "Single accountable EPC partner from design to commissioning",
            "In-house transition to O&M and robotic cleaning post-installation",
            "Experience across utility, commercial and residential scale",
            "Regulatory & grid-compliance handling in both markets",
        ],
        applications=["Utility-scale solar farms", "Industrial & warehouse rooftops", "Commercial carports", "Institutional & government sites"],
    ),
    dict(
        code="SEC-08", slug="metal-scraps", nav="Metal Scraps",
        card_title="Metal Scraps", card_desc="B2B sourcing, grading and trade of ferrous and non-ferrous industrial metal scrap.",
        tagline="Structured sourcing, grading and trade of ferrous and non-ferrous scrap metal.",
        overview="3N Infinity sources, grades and trades ferrous and non-ferrous metal scrap for industrial recyclers, foundries, and export buyers — bringing structured B2B process to a market that often runs informally.",
        offerings=[
            "Ferrous scrap — steel, iron, structural offcuts",
            "Non-ferrous scrap — copper, aluminium, brass",
            "Industrial & demolition scrap sourcing",
            "Grading, weighing & documentation for compliant trade",
            "Bulk lot aggregation for export-scale buyers",
        ],
        benefits=[
            "Transparent grading and weighment process",
            "Consistent lot quality for recurring industrial buyers",
            "Cross-border trade support between India & UAE",
            "Documentation aligned to import/export compliance",
        ],
        applications=["Steel mills & foundries", "Metal recyclers", "Export traders", "Industrial demolition contractors"],
    ),
]

def sector_by_slug(slug):
    return next(s for s in SECTORS if s["slug"] == slug)

# ---------------------------------------------------------------------------
# Shared HEAD / HEADER / FOOTER blocks
# ---------------------------------------------------------------------------

def head(title, desc, css_prefix="assets/css/style.css"):
    return f"""<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <meta name="description" content="{desc}">
  <link rel="icon" href="data:,">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{css_prefix}">"""

def mega_menu_links(prefix):
    cols = SECTORS
    return "\n".join(
        f'<a href="{prefix}sectors/{s["slug"]}.html"><span class="code">{s["code"]}</span>{s["nav"]}</a>'
        for s in cols
    )

def header(active="", prefix=""):
    home_active = "is-active" if active == "home" else ""
    about_active = "is-active" if active == "about" else ""
    contact_active = "is-active" if active == "contact" else ""
    return f"""<header class="site-header">
    <div class="wrap">
      <a href="{prefix}index.html" class="logo">
        <span class="mark"><span>3N</span></span>
        <span>3N Infinity Solutionz<small>India · UAE</small></span>
      </a>
      <nav class="main-nav">
        <a href="{prefix}index.html" class="{home_active}">Home</a>
        <div class="has-mega">
          <a href="{prefix}index.html#sectors" tabindex="0">Sectors ▾</a>
          <div class="mega">
            {mega_menu_links(prefix)}
          </div>
        </div>
        <a href="{prefix}about.html" class="{about_active}">About</a>
        <a href="{prefix}contact.html" class="{contact_active}">Contact</a>
      </nav>
      <div class="nav-cta">
        <a href="{prefix}contact.html" class="btn btn-ghost-dark">Request a Quote</a>
        <button class="burger" data-burger aria-label="Open menu">☰</button>
      </div>
    </div>
  </header>

  <div class="mobile-drawer" data-drawer>
    <button class="close-drawer" data-drawer-close aria-label="Close menu">×</button>
    <nav>
      <a href="{prefix}index.html">Home</a>
      <div class="m-sub">
        {"".join(f'<a href="{prefix}sectors/{s["slug"]}.html">{s["code"]} — {s["nav"]}</a>' for s in SECTORS)}
      </div>
      <a href="{prefix}about.html">About</a>
      <a href="{prefix}contact.html">Contact</a>
    </nav>
  </div>"""

def footer(prefix=""):
    sector_links = "\n".join(f'<li><a href="{prefix}sectors/{s["slug"]}.html">{s["nav"]}</a></li>' for s in SECTORS[:4])
    sector_links2 = "\n".join(f'<li><a href="{prefix}sectors/{s["slug"]}.html">{s["nav"]}</a></li>' for s in SECTORS[4:])
    return f"""<footer class="site-footer">
    <div class="wrap">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="{prefix}index.html" class="logo"><span class="mark"><span>3N</span></span><span>3N Infinity Solutionz</span></a>
          <p>A multi-sector B2B service and product provider spanning renewable energy, industrial supply, textiles, and corporate solutions across India and the UAE.</p>
          <div class="footer-locations">
            <div class="loc"><b>India</b><br>Operations & sourcing hub</div>
            <div class="loc"><b>UAE</b><br>Regional trade & client operations</div>
          </div>
        </div>
        <div>
          <h5>Sectors</h5>
          <ul>{sector_links}</ul>
        </div>
        <div>
          <h5>&nbsp;</h5>
          <ul>{sector_links2}</ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="{prefix}about.html">About Us</a></li>
            <li><a href="{prefix}contact.html">Contact</a></li>
            <li><a href="{prefix}index.html#sectors">All Sectors</a></li>
          </ul>
        </div>
        <div>
          <h5>Get in Touch</h5>
          <ul>
            <li><a href="mailto:info@3ninfinitysolutionz.com">info@3ninfinitysolutionz.com</a></li>
            <li><a href="tel:+91XXXXXXXXXX">+91 XX XXX XXXXX (India)</a></li>
            <li><a href="tel:+971XXXXXXXXX">+971 XX XXX XXXX (UAE)</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span data-year></span> 3N Infinity Solutionz. All rights reserved.</span>
        <span>Renewable Energy · Manufacturing · Textiles · Hygiene · Corporate Solutions</span>
      </div>
    </div>
  </footer>"""

def scripts(prefix=""):
    return f'<script src="{prefix}assets/js/main.js"></script>'

# ---------------------------------------------------------------------------
# Build each sector page
# ---------------------------------------------------------------------------

def build_sector_page(s):
    others = [o for o in SECTORS if o["slug"] != s["slug"]][:4]
    related_cards = "\n".join(f'''
        <a class="sector-card" href="{o['slug']}.html">
          <div><span class="sc-code">{o['code']}</span><h3>{o['nav']}</h3></div>
          <span class="sc-link">View division →</span>
        </a>''' for o in others)

    offerings_html = "\n".join(f"<li>{item}</li>" for item in s["offerings"])
    benefits_html = "\n".join(f"<li>{item}</li>" for item in s["benefits"])
    applications_html = "\n".join(f"<li>{a}</li>" for a in s["applications"])

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  {head(f"{s['card_title']} | 3N Infinity Solutionz", s['card_desc'], css_prefix="../assets/css/style.css")}
</head>
<body>
  {header(active="sector", prefix="../")}

  <section class="sector-hero">
    <div class="wrap">
      <div class="breadcrumb"><a href="../index.html">Home</a> / <a href="../index.html#sectors">Sectors</a> / {s['nav']}</div>
      <span class="code-badge">{s['code']} — CORE COMPETENCY</span>
      <h1>{s['card_title']}</h1>
      <p class="tagline">{s['tagline']}</p>
      <div class="hero-actions" style="margin-top:28px;">
        <a href="../contact.html?sector={s['slug']}" class="btn btn-primary">Request a Quote <span class="btn-arrow">→</span></a>
        <a href="../about.html" class="btn btn-ghost-dark">About 3N Infinity</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap two-col">
      <div>
        <div class="eyebrow">Overview</div>
        <h2 style="font-size:26px; margin-bottom:16px;">What we deliver</h2>
        <p style="color:var(--slate); font-size:15.5px; margin-bottom:32px;">{s['overview']}</p>

        <div class="eyebrow">Offerings</div>
        <ul class="spec-list">
          {offerings_html}
        </ul>
      </div>

      <div>
        <div class="side-card">
          <h4>Why 3N Infinity</h4>
          <ul class="spec-list">
            {benefits_html}
          </ul>
        </div>
        <div class="side-card" style="margin-top:20px;">
          <h4>Typical Applications</h4>
          <ul class="spec-list">
            {applications_html}
          </ul>
        </div>
        <div class="side-card" style="margin-top:20px; background:var(--ink); color:var(--porcelain); border-color:var(--ink);">
          <h4>Start a conversation</h4>
          <p style="font-size:14px; color:var(--slate-light); margin-bottom:18px;">Tell us your volumes, site, or project scope — we'll respond with a scoped proposal within one business day.</p>
          <a href="../contact.html?sector={s['slug']}" class="btn btn-primary" style="width:100%; justify-content:center;">Request a Quote</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--tight" style="border-top:1px solid var(--line-light);">
    <div class="wrap">
      <div class="section-head">
        <div class="eyebrow">Explore More</div>
        <h2>Other divisions at 3N Infinity</h2>
      </div>
      <div class="related-sectors">
        {related_cards}
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="wrap">
      <h2>Ready to scope your {s['nav'].lower()} requirement?</h2>
      <div class="cta-actions">
        <a href="../contact.html?sector={s['slug']}" class="btn btn-primary">Request a Quote <span class="btn-arrow">→</span></a>
        <a href="mailto:info@3ninfinitysolutionz.com" class="btn btn-ghost-dark">Email Us Directly</a>
      </div>
    </div>
  </section>

  {footer(prefix="../")}
  {scripts(prefix="../")}
</body>
</html>"""
    with open(os.path.join(SECTORS_DIR, f"{s['slug']}.html"), "w") as f:
        f.write(html)


def build_index():
    sector_cards = "\n".join(f'''
        <a class="sector-card reveal" href="sectors/{s['slug']}.html">
          <div><span class="sc-code">{s['code']}</span><h3>{s['card_title']}</h3><p>{s['card_desc']}</p></div>
          <span class="sc-link">View division →</span>
        </a>''' for s in SECTORS)

    index_rows = "\n".join(f'''
        <div class="index-row">
          <span class="code">{s['code']}</span>
          <span class="name">{s['nav']}</span>
          <span class="go">↳</span>
          <a class="stretched" href="sectors/{s['slug']}.html" aria-label="Go to {s['nav']}"></a>
        </div>''' for s in SECTORS)

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  {head("3N Infinity Solutionz | Multi-Sector B2B Solutions — India & UAE", "3N Infinity Solutionz delivers renewable energy, industrial supply, textiles, hygiene and corporate solutions to B2B clients across India and the UAE.")}
</head>
<body>
  {header(active="home")}

  <section class="hero">
    <div class="wrap">
      <div class="hero-copy">
        <div class="eyebrow">India · UAE — B2B Service & Product Provider</div>
        <h1>Eight divisions.<br>One accountable <em>partner</em>.</h1>
        <p class="lead">3N Infinity Solutionz supplies and delivers across renewable energy, industrial products, textiles, hygiene, and corporate solutions — built for procurement teams who need one reliable vendor instead of eight.</p>
        <div class="hero-actions">
          <a href="#sectors" class="btn btn-primary">Explore All Sectors <span class="btn-arrow">→</span></a>
          <a href="contact.html" class="btn btn-ghost-dark">Request a Quote</a>
        </div>
        <div class="hero-stats">
          <div><b>8</b><span>Core Divisions</span></div>
          <div><b>2</b><span>Countries — India / UAE</span></div>
          <div><b>B2B</b><span>Contracts &amp; Bulk Supply</span></div>
        </div>
      </div>
      <div class="index-panel">
        <div class="index-panel-head">Divisional Index — select a sector</div>
        {index_rows}
      </div>
    </div>
  </section>

  <div class="trustbar">
    <div class="wrap">
      <span><b>Robotic</b> solar cleaning technology</span>
      <span><b>Cross-border</b> India ⇄ UAE trade infrastructure</span>
      <span><b>Sustainable</b> sourcing &amp; manufacturing</span>
      <span><b>Single-vendor</b> B2B procurement</span>
    </div>
  </div>

  <section class="section" id="sectors">
    <div class="wrap">
      <div class="section-head">
        <div class="eyebrow">Core Competencies</div>
        <h2>Eight sectors, purpose-built for B2B procurement</h2>
        <p>Each division operates as a dedicated specialism with its own catalogue, contracts, and delivery team — explore the one relevant to you.</p>
      </div>
      <div class="sector-grid">
        {sector_cards}
      </div>
    </div>
  </section>

  <section class="section section--dark">
    <div class="wrap">
      <div class="section-head">
        <div class="eyebrow">Why 3N Infinity</div>
        <h2>Built for corporates who judge on reliability first</h2>
        <p>We combine engineering-grade execution with the trade infrastructure of a two-country operation.</p>
      </div>
      <div class="usp-grid">
        <div class="usp-item">
          <h3>Technology-led delivery</h3>
          <p>Robotic solar cleaning and engineered heat-pump systems bring measurable efficiency to sectors most vendors still run manually.</p>
        </div>
        <div class="usp-item">
          <h3>India–UAE trade infrastructure</h3>
          <p>Established sourcing and logistics across both markets means shorter lead times and more competitive landed costs.</p>
        </div>
        <div class="usp-item">
          <h3>Single point of accountability</h3>
          <p>One commercial relationship, one contract framework, across as many of our eight divisions as your business needs.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="feature-banner">
    <div class="wrap">
      <div>
        <div class="eyebrow" style="color:var(--ink);">Featured Division — SEC-01</div>
        <h2>Robotic Solar Panel Cleaning</h2>
        <p>Our flagship technology division: autonomous, waterless robotic cleaning under scheduled AMC contracts — protecting solar yield across utility, commercial and residential installations.</p>
        <ul class="fb-list">
          <li>Waterless cleaning — critical for water-scarce sites</li>
          <li>Restores 10–20% of soiling-related energy loss</li>
          <li>SLA-backed Annual Maintenance Contracts</li>
        </ul>
        <div class="hero-actions" style="margin-top:26px;">
          <a href="sectors/solar-panel-cleaning-robotics.html" class="btn btn-ghost-dark" style="border-color:var(--ink); color:var(--ink);">View Division →</a>
        </div>
      </div>
      <div class="fb-visual">ROBOTIC CLEANING UNIT<br>— DIAGRAM PLACEHOLDER —<br>Replace with product photography</div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-head">
        <div class="eyebrow">Engagement Process</div>
        <h2>How a B2B contract with us runs</h2>
      </div>
      <div class="process-list">
        <div class="process-item"><span class="pnum">01</span><h4>Scope</h4><p>Share your sector, volumes, or site details via our contact form — a specialist from that division reviews it directly.</p></div>
        <div class="process-item"><span class="pnum">02</span><h4>Proposal</h4><p>You receive a scoped commercial proposal, typically within one business day, with pricing and delivery timelines.</p></div>
        <div class="process-item"><span class="pnum">03</span><h4>Contract &amp; Delivery</h4><p>We formalise terms and begin delivery — whether that's a recurring supply schedule, an AMC, or a project timeline.</p></div>
        <div class="process-item"><span class="pnum">04</span><h4>Ongoing Account</h4><p>A single account contact manages renewals, additional divisions, and reporting for the life of the relationship.</p></div>
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="wrap">
      <h2>Tell us what you need — we'll scope it against the right division.</h2>
      <div class="cta-actions">
        <a href="contact.html" class="btn btn-primary">Request a Quote <span class="btn-arrow">→</span></a>
        <a href="about.html" class="btn btn-ghost-dark">About 3N Infinity</a>
      </div>
    </div>
  </section>

  {footer()}
  {scripts()}
</body>
</html>"""
    with open(os.path.join(ROOT, "index.html"), "w") as f:
        f.write(html)


def build_about():
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  {head("About Us | 3N Infinity Solutionz", "3N Infinity Solutionz is a diversified B2B service and product provider operating across India and the UAE.")}
</head>
<body>
  {header(active="about")}

  <section class="sector-hero">
    <div class="wrap">
      <div class="breadcrumb"><a href="index.html">Home</a> / About</div>
      <span class="code-badge">ABOUT 3N INFINITY</span>
      <h1>A diversified B2B partner, built as eight specialisms.</h1>
      <p class="tagline">We operate across renewable energy, manufacturing, textiles, hygiene, and corporate solutions — serving India and the UAE from one commercial relationship.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap two-col">
      <div>
        <div class="eyebrow">Who We Are</div>
        <h2 style="font-size:26px; margin-bottom:16px;">Nature of business</h2>
        <p style="color:var(--slate); font-size:15.5px; margin-bottom:20px;">3N Infinity Solutionz is a multi-sector enterprise specialising in innovative solutions across renewable energy, industrial products, and corporate services. Our integrated business model combines technology-led delivery — including robotic solar panel cleaning — with sustainable manufacturing and premium corporate offerings, serving diverse B2B market segments across India and the UAE.</p>
        <p style="color:var(--slate); font-size:15.5px;">Rather than operating as a single-product vendor, we run each of our eight core competencies as a dedicated division with its own specialists, suppliers, and delivery process — while giving clients the option of a single point of contact across as many divisions as they need.</p>
      </div>
      <div class="side-card">
        <h4>At a Glance</h4>
        <ul class="spec-list">
          <li><b>Business model:</b>&nbsp;B2B service provider &amp; product supplier</li>
          <li><b>Markets:</b>&nbsp;India &amp; UAE</li>
          <li><b>Industry focus:</b>&nbsp;Renewable energy, manufacturing, textiles, hygiene, corporate solutions</li>
          <li><b>Core competencies:</b>&nbsp;8 dedicated divisions</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section section--steel">
    <div class="wrap">
      <div class="section-head">
        <div class="eyebrow">Our Divisions</div>
        <h2>Eight core competencies</h2>
      </div>
      <div class="sector-grid" style="background:var(--line);">
        {"".join(f'''<a class="sector-card" href="sectors/{s['slug']}.html">
          <div><span class="sc-code">{s['code']}</span><h3>{s['card_title']}</h3></div>
          <span class="sc-link">View division →</span>
        </a>''' for s in SECTORS)}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-head">
        <div class="eyebrow">Our Approach</div>
        <h2>What holds eight sectors together</h2>
      </div>
      <div class="usp-grid">
        <div class="usp-item"><h3>Sustainability by design</h3><p>From waterless robotic cleaning to solar-assisted heat pumps and structured scrap-metal recycling, sustainability is built into how several divisions operate — not layered on top.</p></div>
        <div class="usp-item"><h3>Trade-grade operations</h3><p>Sourcing, quality checks, and cross-border logistics between India and the UAE are handled with the documentation and consistency that industrial buyers require.</p></div>
        <div class="usp-item"><h3>Accountability, not hand-offs</h3><p>Each division has a named specialist team, so a scoped enquiry reaches the right expert directly rather than passing through generic sales layers.</p></div>
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="wrap">
      <h2>Want to work with a specific division, or several?</h2>
      <div class="cta-actions">
        <a href="contact.html" class="btn btn-primary">Get in Touch <span class="btn-arrow">→</span></a>
      </div>
    </div>
  </section>

  {footer()}
  {scripts()}
</body>
</html>"""
    with open(os.path.join(ROOT, "about.html"), "w") as f:
        f.write(html)


def build_contact():
    sector_options = "\n".join(f'<option value="{s["slug"]}">{s["code"]} — {s["nav"]}</option>' for s in SECTORS)
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  {head("Contact | 3N Infinity Solutionz", "Get in touch with 3N Infinity Solutionz for quotes, contracts and enquiries across our eight B2B divisions in India and the UAE.")}
</head>
<body>
  {header(active="contact")}

  <section class="sector-hero">
    <div class="wrap">
      <div class="breadcrumb"><a href="index.html">Home</a> / Contact</div>
      <span class="code-badge">GET IN TOUCH</span>
      <h1>Tell us what you need. We'll route it to the right division.</h1>
      <p class="tagline">Most enquiries receive a scoped response within one business day.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap two-col">
      <div>
        <div class="eyebrow">Enquiry Form</div>
        <h2 style="font-size:24px; margin-bottom:24px;">Request a quote</h2>
        <form id="contact-form">
          <div class="form-grid">
            <div>
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div>
              <label for="company">Company</label>
              <input type="text" id="company" name="company" required>
            </div>
            <div>
              <label for="email">Business Email</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div>
              <label for="phone">Phone</label>
              <input type="tel" id="phone" name="phone">
            </div>
            <div class="full">
              <label for="sector">Sector of Interest</label>
              <select id="sector" name="sector" required>
                <option value="">Select a division…</option>
                {sector_options}
                <option value="general">General / Not Sure Yet</option>
              </select>
            </div>
            <div class="full">
              <label for="message">Requirement Details</label>
              <textarea id="message" name="message" placeholder="Volumes, site location, project timeline, or specification details…" required></textarea>
            </div>
            <!-- honeypot -->
            <div class="full" style="position:absolute; left:-9999px;" aria-hidden="true">
              <label for="company_website">Leave blank</label>
              <input type="text" id="company_website" name="company_website" tabindex="-1" autocomplete="off">
            </div>
          </div>
          <button type="submit" class="btn btn-primary" style="margin-top:24px;">Submit Enquiry <span class="btn-arrow">→</span></button>
          <div class="form-status"></div>
        </form>
      </div>

      <div>
        <div class="side-card">
          <h4>Direct Contact</h4>
          <div class="info-list">
            <div class="row"><b>Email</b><a href="mailto:info@3ninfinitysolutionz.com">info@3ninfinitysolutionz.com</a></div>
            <div class="row"><b>India</b><a href="tel:+91XXXXXXXXXX">+91 XX XXX XXXXX</a></div>
            <div class="row"><b>UAE</b><a href="tel:+971XXXXXXXXX">+971 XX XXX XXXX</a></div>
          </div>
        </div>
        <div class="side-card" style="margin-top:20px;">
          <h4>Response Time</h4>
          <p style="font-size:14px; color:var(--slate);">Enquiries submitted via this form are routed directly to the relevant divisional specialist and typically answered within one business day.</p>
        </div>
      </div>
    </div>
  </section>

  {footer()}
  {scripts()}
</body>
</html>"""
    with open(os.path.join(ROOT, "contact.html"), "w") as f:
        f.write(html)


if __name__ == "__main__":
    for s in SECTORS:
        build_sector_page(s)
    build_index()
    build_about()
    build_contact()
    print(f"Built {len(SECTORS)} sector pages + index, about, contact.")
