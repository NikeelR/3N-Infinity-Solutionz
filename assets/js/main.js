
(() => {
  const body = document.body;
  const menu = document.querySelector("[data-menu]");
  const close = document.querySelector("[data-close]");
  const toggle = document.querySelector("[data-toggle]");

  function setMenu(open) {
    body.classList.toggle("nav-open", open);
    if (toggle) toggle.setAttribute("aria-expanded", String(open));
  }
  toggle?.addEventListener("click", () => setMenu(!body.classList.contains("nav-open")));
  close?.addEventListener("click", () => setMenu(false));
  menu?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: .08});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
})();
