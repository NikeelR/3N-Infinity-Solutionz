/* 3N Infinity Solutionz — shared front-end behaviour */

// ---- API base: same origin in production, localhost while developing ----
window.API_BASE = window.API_BASE || (
  location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? "http://localhost:4000"
    : ""  // same-origin in production; override in assets/js/config.js if API is on another host
);

document.addEventListener("DOMContentLoaded", () => {
  initMobileDrawer();
  initScrollReveal();
  initFooterYear();
  initContactForm();
});

function initMobileDrawer(){
  const burger = document.querySelector("[data-burger]");
  const drawer = document.querySelector("[data-drawer]");
  const closeBtn = document.querySelector("[data-drawer-close]");
  if(!burger || !drawer) return;
  const open = () => { drawer.classList.add("open"); document.body.style.overflow="hidden"; };
  const close = () => { drawer.classList.remove("open"); document.body.style.overflow=""; };
  burger.addEventListener("click", open);
  closeBtn && closeBtn.addEventListener("click", close);
  drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
}

function initScrollReveal(){
  const items = document.querySelectorAll(".reveal");
  if(!items.length) return;
  if(!("IntersectionObserver" in window)){
    items.forEach(i => i.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach(i => io.observe(i));
}

function initFooterYear(){
  const el = document.querySelector("[data-year]");
  if(el) el.textContent = new Date().getFullYear();
}

function initContactForm(){
  const form = document.querySelector("#contact-form");
  if(!form) return;
  const statusEl = form.querySelector(".form-status");
  const submitBtn = form.querySelector("button[type=submit]");

  // Pre-fill "sector interest" if arriving from a sector page CTA (?sector=solar-cleaning)
  const params = new URLSearchParams(location.search);
  const sectorParam = params.get("sector");
  const sectorSelect = form.querySelector("#sector");
  if(sectorParam && sectorSelect){
    const match = [...sectorSelect.options].find(o => o.value === sectorParam);
    if(match) sectorSelect.value = sectorParam;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    statusEl.classList.remove("show","ok","err");
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot spam check
    if(data.company_website){ return; }

    submitBtn.disabled = true;
    const originalLabel = submitBtn.textContent;
    submitBtn.textContent = "Sending…";

    try{
      const res = await fetch(`${window.API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      if(res.ok && result.success){
        statusEl.textContent = "Thanks — your enquiry has been received. Our team will respond within one business day.";
        statusEl.classList.add("show","ok");
        form.reset();
      } else {
        statusEl.textContent = result.message || "Something went wrong. Please try again or email us directly.";
        statusEl.classList.add("show","err");
      }
    } catch(err){
      statusEl.textContent = "Could not reach the server. Please try again shortly or email us directly.";
      statusEl.classList.add("show","err");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });
}
