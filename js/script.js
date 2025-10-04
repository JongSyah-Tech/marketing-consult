// scripts.js — minimal interactivity: nav toggle, form validation, year
document.addEventListener('DOMContentLoaded', () => {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // NAV TOGGLE
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    if (navLinks.style.display === 'block') {
      navLinks.style.display = '';
      navLinks.setAttribute('aria-hidden', 'true');
    } else {
      navLinks.style.display = 'block';
      navLinks.setAttribute('aria-hidden', 'false');
    }
  });

  // SIMPLE FORM VALIDATION + fake submit behavior (no backend)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name');
      const contact = form.querySelector('#contactInput');
      const message = form.querySelector('#message');

      if (!name.value.trim() || !contact.value.trim() || !message.value.trim()) {
        alert('Harap lengkapi semua field terlebih dahulu.');
        return;
      }

      // Simulate success — in real use, hook to Formspree/Netlify functions or send to WA/email
      alert('Terima kasih! Pesan Anda telah diterima. Kami akan menghubungi Anda segera.');
      form.reset();
    });
  }

  // Close nav when clicking outside (mobile)
  document.addEventListener('click', (e) => {
    const target = e.target;
    const nav = document.getElementById('navLinks');
    const toggle = document.getElementById('navToggle');
    if (!nav || !toggle) return;
    if (nav.style.display === 'block' && !nav.contains(target) && target !== toggle) {
      nav.style.display = '';
      nav.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});
