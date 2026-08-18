const express = require("express");
const rateLimit = require("express-rate-limit");
const { validateContact } = require("../middleware/validateContact");
const { sendContactEnquiry } = require("../utils/mailer");

const router = express.Router();

// Limit form submissions per IP to curb spam/abuse
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many enquiries submitted. Please try again later." },
});

router.post("/", contactLimiter, validateContact, async (req, res) => {
  try {
    await sendContactEnquiry(req.body);
    return res.status(200).json({ success: true, message: "Enquiry received." });
  } catch (err) {
    console.error("Failed to process contact enquiry:", err);
    return res.status(500).json({
      success: false,
      message: "We couldn't process your enquiry right now. Please email us directly.",
    });
  }
});

module.exports = router;
