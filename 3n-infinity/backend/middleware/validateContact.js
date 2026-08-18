const VALID_SECTORS = new Set([
  "solar-panel-cleaning-robotics",
  "cotton-yarn-supply",
  "rubber-gloves-hygiene",
  "heat-pumps",
  "printing-packaging",
  "corporate-gifts",
  "solar-epc-projects",
  "metal-scraps",
  "general",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContact(req, res, next) {
  const { name, company, email, phone, sector, message, company_website } = req.body || {};

  // Honeypot — bots fill hidden fields, humans never see this field
  if (company_website) {
    // Silently succeed so bots don't learn the honeypot rejected them
    return res.status(200).json({ success: true });
  }

  const errors = [];
  if (!name || String(name).trim().length < 2) errors.push("Please provide your full name.");
  if (!company || String(company).trim().length < 2) errors.push("Please provide your company name.");
  if (!email || !EMAIL_RE.test(String(email).trim())) errors.push("Please provide a valid business email.");
  if (!sector || !VALID_SECTORS.has(String(sector))) errors.push("Please select a valid sector of interest.");
  if (!message || String(message).trim().length < 10) errors.push("Please provide a bit more detail in your message.");
  if (phone && String(phone).length > 30) errors.push("Phone number looks invalid.");

  if (errors.length) {
    return res.status(400).json({ success: false, message: errors[0], errors });
  }

  req.body.name = String(name).trim().slice(0, 200);
  req.body.company = String(company).trim().slice(0, 200);
  req.body.email = String(email).trim().slice(0, 200);
  req.body.phone = phone ? String(phone).trim().slice(0, 30) : "";
  req.body.sector = String(sector).trim();
  req.body.message = String(message).trim().slice(0, 5000);

  next();
}

module.exports = { validateContact, VALID_SECTORS };
