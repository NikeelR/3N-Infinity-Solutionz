const nodemailer = require("nodemailer");

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
    // No SMTP configured — mailer will log to console instead of sending.
    return null;
  }

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporter;
}

const SECTOR_LABELS = {
  "solar-panel-cleaning-robotics": "Solar Panel Cleaning (Robotics) — SEC-01",
  "cotton-yarn-supply": "Cotton & Yarn Cloth Supply — SEC-02",
  "rubber-gloves-hygiene": "Rubber Gloves & Hygiene Products — SEC-03",
  "heat-pumps": "Heat Pumps (Solar & Electric) — SEC-04",
  "printing-packaging": "Printing & Packaging — SEC-05",
  "corporate-gifts": "A4 & Corporate Event Gifts — SEC-06",
  "solar-epc-projects": "Solar Panel Projects (EPC) — SEC-07",
  "metal-scraps": "Metal Scraps — SEC-08",
  general: "General Enquiry",
};

async function sendContactEnquiry(data) {
  const sectorLabel = SECTOR_LABELS[data.sector] || data.sector;

  const text = `New website enquiry
--------------------
Name:    ${data.name}
Company: ${data.company}
Email:   ${data.email}
Phone:   ${data.phone || "—"}
Sector:  ${sectorLabel}

Message:
${data.message}
`;

  const t = getTransporter();

  if (!t) {
    // Dev fallback — no SMTP configured, log instead of failing the request.
    console.log("\n=== CONTACT ENQUIRY (SMTP not configured — logged only) ===");
    console.log(text);
    console.log("=============================================================\n");
    return { delivered: false, logged: true };
  }

  await t.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
    replyTo: data.email,
    subject: `New Enquiry — ${sectorLabel} — ${data.company}`,
    text,
  });

  return { delivered: true, logged: false };
}

module.exports = { sendContactEnquiry };
