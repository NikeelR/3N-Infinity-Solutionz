/* 3N Infinity Solutionz — shared front-end behaviour */

(function () {
  // Determine base path depth so partials + links work from /root and /pages/*
  var depth = document.documentElement.getAttribute('data-depth') || '';

  function loadPartial(id, file, callback) {
    var el = document.getElementById(id);
    if (!el) return;
    fetch(depth + 'partials/' + file)
      .then(function (r) { return r.text(); })
      .then(function (html) {
        html = html.replace(/__BASE__/g, depth);
        el.innerHTML = html;
        if (callback) callback();
      })
      .catch(function () { /* fails silently on file:// protocol */ });
  }

  function setActiveNav() {
    var current = document.body.getAttribute('data-page');
    document.querySelectorAll('[data-nav]').forEach(function (a) {
      if (a.getAttribute('data-nav') === current) a.classList.add('active');
    });
  }

  function initMobileNav() {
    var toggle = document.getElementById('navToggle');
    var mobile = document.getElementById('navMobile');
    if (!toggle || !mobile) return;
    toggle.addEventListener('click', function () {
      mobile.classList.toggle('open');
      toggle.setAttribute('aria-expanded', mobile.classList.contains('open'));
    });
    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobile.classList.remove('open'); });
    });
  }

  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !items.length) {
      items.forEach(function (i) { i.classList.add('in'); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(function (i) { obs.observe(i); });
  }

  function initYear() {
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', function () {
    loadPartial('site-header', 'header.html', function () {
      setActiveNav();
      initMobileNav();
    });
    loadPartial('site-footer', 'footer.html', initYear);
    initReveal();
  });
})();
