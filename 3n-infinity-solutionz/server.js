require("dotenv").config();
const express = require("express");
const path = require("path");
const fs = require("fs");

const company = require("./data/company");
const sectors = require("./data/sectors");

const app = express();
const PORT = process.env.PORT || 3000;
const LEADS_FILE = path.join(__dirname, "data", "leads.json");

// ---------- View engine ----------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ---------- Middleware ----------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Make shared data available to every view without repeating it per-route
app.use((req, res, next) => {
  res.locals.company = company;
  res.locals.sectors = sectors;
  res.locals.currentPath = req.path;
  next();
});

// ---------- Helpers ----------
function sectorsByDivision(divisionId) {
  return sectors.filter((s) => s.division === divisionId);
}

function ensureLeadsFile() {
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, "[]", "utf8");
  }
}

async function sendLeadEmail(lead) {
  // Only attempts email if SMTP env vars are configured. Safe to run without them.
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return { attempted: false };
  }
  try {
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });

    await transporter.sendMail({
      from: `"${company.name} Website" <${process.env.SMTP_USER}>`,
      to: process.env.LEAD_NOTIFY_TO || company.contact.salesEmail,
      replyTo: lead.email,
      subject: `New enquiry: ${lead.sector || "General"} — ${lead.name}`,
      text: [
        `Name: ${lead.name}`,
        `Company: ${lead.company || "-"}`,
        `Email: ${lead.email}`,
        `Phone: ${lead.phone || "-"}`,
        `Sector: ${lead.sector || "General enquiry"}`,
        `Region: ${lead.region || "-"}`,
        "",
        "Message:",
        lead.message || "-"
      ].join("\n")
    });
    return { attempted: true, sent: true };
  } catch (err) {
    console.error("Email send failed:", err.message);
    return { attempted: true, sent: false, error: err.message };
  }
}

// ---------- Routes ----------
app.get("/", (req, res) => {
  res.render("index", {
    title: `${company.name} — Multi-Sector B2B Solutions | India & UAE`,
    description: company.metaDescription,
    divisions: company.divisions.map((d) => ({
      ...d,
      sectors: sectorsByDivision(d.id)
    }))
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: `About Us — ${company.name}`,
    description: `Learn about ${company.name}, a diversified B2B service and product provider operating across India & UAE.`
  });
});

app.get("/sectors", (req, res) => {
  res.render("sectors-index", {
    title: `All Divisions & Sectors — ${company.name}`,
    description: "Every core competency of 3N Infinity Solutionz, grouped by division.",
    divisions: company.divisions.map((d) => ({
      ...d,
      sectors: sectorsByDivision(d.id)
    }))
  });
});

app.get("/sectors/:slug", (req, res, next) => {
  const sector = sectors.find((s) => s.slug === req.params.slug);
  if (!sector) return next();

  const division = company.divisions.find((d) => d.id === sector.division);
  const related = sectors.filter(
    (s) => s.division === sector.division && s.slug !== sector.slug
  );

  res.render("sector", {
    title: `${sector.name} — ${company.name}`,
    description: sector.heroSummary,
    sector,
    division,
    related
  });
});

app.get("/contact", (req, res) => {
  const prefillSector = sectors.find((s) => s.slug === req.query.sector);
  res.render("contact", {
    title: `Contact Us — ${company.name}`,
    description: `Get in touch with ${company.name} — India & UAE offices, sector-specific enquiries.`,
    prefillSector: prefillSector || null,
    submitted: false
  });
});

app.post("/contact", async (req, res) => {
  const { name, email, phone, companyName, sector, region, message } = req.body;

  if (!name || !email || !message) {
    if (req.headers.accept && req.headers.accept.includes("application/json")) {
      return res.status(400).json({ ok: false, error: "Name, email and message are required." });
    }
    return res.status(400).render("contact", {
      title: `Contact Us — ${company.name}`,
      description: `Get in touch with ${company.name}.`,
      prefillSector: null,
      submitted: false,
      error: "Please fill in your name, email and message."
    });
  }

  const lead = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    name,
    email,
    phone: phone || "",
    company: companyName || "",
    sector: sector || "",
    region: region || "",
    message,
    submittedAt: new Date().toISOString()
  };

  try {
    ensureLeadsFile();
    const leads = JSON.parse(fs.readFileSync(LEADS_FILE, "utf8"));
    leads.push(lead);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf8");
  } catch (err) {
    console.error("Could not persist lead:", err.message);
  }

  const emailResult = await sendLeadEmail(lead);

  if (req.headers.accept && req.headers.accept.includes("application/json")) {
    return res.json({ ok: true, emailed: emailResult.sent || false });
  }

  res.render("contact", {
    title: `Contact Us — ${company.name}`,
    description: `Get in touch with ${company.name}.`,
    prefillSector: null,
    submitted: true
  });
});

// ---------- 404 ----------
app.use((req, res) => {
  res.status(404).render("404", {
    title: `Page Not Found — ${company.name}`,
    description: "The page you're looking for doesn't exist."
  });
});

app.listen(PORT, () => {
  console.log(`3N Infinity Solutionz running at http://localhost:${PORT}`);
});
