// Mobile navigation toggle
(function () {
  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close menu when a nav link (not the Services parent) is tapped
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && !e.target.closest('.has-dropdown > a')) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();

// Scroll-reveal: fade/slide elements in as they enter the viewport
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var selector = '.reveal, .card, .stat, .process__item, .cta-band, .faq details, .badges, .chips, .split > div, .section > .wrap > .center';
  var els = [].slice.call(document.querySelectorAll(selector))
    // never animate the scrolling review cards (they have their own motion)
    .filter(function (el) { return !el.closest('.reviews-marquee'); });

  if (!els.length) return;
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('reveal', 'in'); });
    return;
  }
  els.forEach(function (el) {
    el.classList.add('reveal');
    // light stagger for siblings in a grid/row
    var sibs = el.parentElement ? [].slice.call(el.parentElement.children).indexOf(el) : 0;
    el.style.transitionDelay = Math.min(sibs % 4, 3) * 70 + 'ms';
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (el) { io.observe(el); });
})();

// Animated count-up for stat numbers
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var nums = [].slice.call(document.querySelectorAll('.stat__n'));
  if (!nums.length || reduce || !('IntersectionObserver' in window)) return;

  function animate(el) {
    var raw = el.textContent.trim();
    var m = raw.match(/^(\D*)(\d[\d,\.]*)(.*)$/); // prefix, number, suffix
    if (!m) return;
    var prefix = m[1], suffix = m[3];
    var target = parseFloat(m[2].replace(/,/g, ''));
    var isFloat = /\./.test(m[2]);
    var start = null, dur = 1100;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      el.textContent = prefix + (isFloat ? val.toFixed(1) : Math.round(val).toLocaleString()) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = raw;
    }
    requestAnimationFrame(step);
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { animate(en.target); io.unobserve(en.target); }
    });
  }, { threshold: 0.5 });
  nums.forEach(function (el) { io.observe(el); });
})();
