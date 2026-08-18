require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

const contactRoute = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 4000;

const allowedOrigins = (process.env.FRONTEND_ORIGIN || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(helmet());
app.use(express.json({ limit: "100kb" }));
app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : true, // reflect request origin in dev if unset
    methods: ["GET", "POST"],
  })
);

// ---- API routes ----
app.get("/api/health", (req, res) => res.json({ status: "ok", time: new Date().toISOString() }));
app.use("/api/contact", contactRoute);

// ---- Optional: serve the static frontend from this same server ----
// Handy for simple single-server deployments (e.g. Render, Railway, a VPS).
// If you deploy the frontend separately (GitHub Pages / Netlify / Vercel), you can remove this block.
const FRONTEND_DIR = path.join(__dirname, "..", "frontend");
app.use(express.static(FRONTEND_DIR));
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api/")) return next();
  res.sendFile(path.join(FRONTEND_DIR, req.path === "/" ? "index.html" : req.path), (err) => {
    if (err) res.status(404).sendFile(path.join(FRONTEND_DIR, "index.html"));
  });
});

// ---- Error handler ----
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, message: "Unexpected server error." });
});

app.listen(PORT, () => {
  console.log(`3N Infinity Solutionz API running on http://localhost:${PORT}`);
});
