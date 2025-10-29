// Mobile nav toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#' || href.length < 2) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      nav && nav.classList.remove('open');
      toggle && toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


