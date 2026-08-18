/*
  OPTIONAL — only needed if your frontend and backend are deployed to DIFFERENT domains
  (e.g. frontend on GitHub Pages/Netlify, backend on Render/Railway).

  1. Copy this file to assets/js/config.js
  2. Set window.API_BASE to your deployed backend URL
  3. Add <script src="assets/js/config.js"></script> BEFORE main.js in every HTML page

  If frontend and backend are served from the SAME domain (e.g. the Express server
  serves the frontend too), you do not need this file — leave it as-is.
*/
window.API_BASE = "https://api.your-domain.com";
