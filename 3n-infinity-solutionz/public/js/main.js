(function () {
  "use strict";

  // ---------- Mobile nav toggle ----------
  const navToggle = document.getElementById("nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = mobileNav.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close mobile nav on link click
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // ---------- Mega menu: click-to-toggle on touch/small screens ----------
  const megaTrigger = document.getElementById("mega-trigger");
  const megaParent = megaTrigger ? megaTrigger.closest(".has-mega") : null;

  if (megaTrigger && megaParent) {
    megaTrigger.addEventListener("click", function (e) {
      // Only intercept on smaller screens where hover isn't reliable
      if (window.innerWidth <= 900) return;
      e.preventDefault();
      const isOpen = megaParent.classList.toggle("open");
      megaTrigger.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", function (e) {
      if (!megaParent.contains(e.target)) {
        megaParent.classList.remove("open");
        megaTrigger.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ---------- Sticky header shadow on scroll ----------
  const header = document.getElementById("site-header");
  if (header) {
    let lastScroll = 0;
    window.addEventListener(
      "scroll",
      function () {
        const y = window.scrollY;
        header.style.boxShadow = y > 8 ? "0 8px 24px rgba(0,0,0,0.28)" : "none";
        lastScroll = y;
      },
      { passive: true }
    );
  }

  // ---------- Contact form: progressive enhancement (AJAX submit) ----------
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalLabel = submitBtn.textContent;
      submitBtn.textContent = "Sending…";
      submitBtn.disabled = true;

      try {
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());

        const res = await fetch("/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(payload)
        });

        const data = await res.json();

        if (data.ok) {
          form.innerHTML =
            '<div class="form-success"><h2>Thanks — we\'ve got it.</h2><p>Your enquiry has been received. A member of the relevant division will respond within one business day.</p><a href="/" class="btn btn-ghost">Back to home</a></div>';
        } else {
          throw new Error(data.error || "Something went wrong.");
        }
      } catch (err) {
        // Fall back to a normal form submit if JS/AJAX path fails
        submitBtn.textContent = originalLabel;
        submitBtn.disabled = false;
        form.submit();
      }
    });
  }
})();
