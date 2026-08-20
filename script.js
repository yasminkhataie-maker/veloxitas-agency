// Logo marquee — clone the track once so the CSS animation (which
// shifts exactly one copy-width via translateX(-50%)) loops seamlessly,
// instead of hand-duplicating ~30 <li> logos in the HTML.
const logoTrack = document.getElementById('logo-track');
if (logoTrack) {
  const clone = logoTrack.cloneNode(true);
  clone.removeAttribute('id');
  clone.setAttribute('aria-hidden', 'true');
  logoTrack.parentElement.appendChild(clone);
}

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll reveal — progressive enhancement only.
// Content is visible by default; we only pre-hide elements that start
// below the fold, so a slow/failed observer never leaves content stuck invisible.
const revealTargets = document.querySelectorAll('.service-card, .stage-card');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const startsBelowFold = rect.top > window.innerHeight * 0.9;
    if (startsBelowFold) {
      el.classList.add('reveal-pending');
      observer.observe(el);
    } else {
      el.classList.add('is-visible');
    }
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
