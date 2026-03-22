/* Mindframe — Shared JS */

(function () {
  'use strict';

  /* 1. Nav scroll effect */
  const nav = document.querySelector('.site-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('site-nav--scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  /* 2. Hamburger toggle */
  const burger = document.querySelector('.site-nav__burger');
  if (burger) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('site-nav--open');
      burger.setAttribute('aria-expanded', nav.classList.contains('site-nav--open'));
    });
  }

  /* 3. Dropdown toggle */
  const dropdownTrigger = document.querySelector('.site-nav__dropdown-trigger');
  if (dropdownTrigger) {
    dropdownTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      dropdownTrigger.parentElement.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.site-nav__dropdown')) {
        document.querySelectorAll('.site-nav__dropdown.open').forEach(d => d.classList.remove('open'));
      }
    });
  }

  /* 4. Tab switching */
  document.querySelectorAll('[data-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      const group = tab.closest('.tabs-wrap') || tab.closest('.section') || document;
      const panelId = tab.getAttribute('data-tab');
      group.querySelectorAll('[data-tab]').forEach(t => t.classList.remove('tab--active'));
      group.querySelectorAll('[data-panel]').forEach(p => { p.classList.remove('tab-panel--active'); p.hidden = true; });
      tab.classList.add('tab--active');
      const panel = group.querySelector('[data-panel="' + panelId + '"]');
      if (panel) { panel.classList.add('tab-panel--active'); panel.hidden = false; }
    });
  });

  /* 5. Copy to clipboard */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    const text = btn.getAttribute('data-copy');
    const label = btn.querySelector('.copy-btn__text');
    navigator.clipboard.writeText(text).then(() => {
      const orig = label.textContent;
      label.textContent = 'Copied!';
      btn.classList.add('copy-btn--copied');
      setTimeout(() => { label.textContent = orig; btn.classList.remove('copy-btn--copied'); }, 2000);
    });
  });

  /* 6. Scroll reveal */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
})();
