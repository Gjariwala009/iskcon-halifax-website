/* ============================================
   ISKCON Halifax - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initScrollToTop();
  initMantraTicker();
  initCounters();
});

/* ---------- Sticky Navbar ---------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const logoImg = navbar.querySelector('.navbar__logo-img');
  let defaultSrc = '';
  let scrolledSrc = '';

  if (logoImg) {
    defaultSrc = logoImg.getAttribute('data-default-src') || logoImg.getAttribute('src');
    scrolledSrc = logoImg.getAttribute('data-scrolled-src') || defaultSrc.replace(/Iskcon(%20|\s)Halifax(%20|\s)Logo\.png/i, 'Iskcon%20Halifax%20Logo%20-%20saffron.png');

    // Preload scrolled image to prevent flicker on first scroll
    const preloadImg = new Image();
    preloadImg.src = scrolledSrc;
  }

  const handleScroll = () => {
    if (window.scrollY > 80) {
      navbar.classList.add('navbar--solid');
      navbar.classList.remove('navbar--transparent');
      if (logoImg && logoImg.getAttribute('src') !== scrolledSrc) {
        logoImg.setAttribute('src', scrolledSrc);
      }
    } else {
      navbar.classList.remove('navbar--solid');
      navbar.classList.add('navbar--transparent');
      if (logoImg && logoImg.getAttribute('src') !== defaultSrc) {
        logoImg.setAttribute('src', defaultSrc);
      }
    }
  };

  // For inner pages with page-banner (shorter hero), start solid earlier
  const isInnerPage = document.querySelector('.page-banner');
  if (isInnerPage) {
    navbar.classList.add('navbar--transparent');
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
}

/* ---------- Mobile Menu ---------- */
function initMobileMenu() {
  const toggle = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');
  if (!toggle || !menu) return;

  const overlay = document.createElement('div');
  overlay.classList.add('mobile-overlay');
  overlay.style.cssText = `
    position: fixed; inset: 0; background: rgba(0,0,0,0.4);
    z-index: 999; opacity: 0; visibility: hidden;
    transition: all 0.3s ease;
  `;
  document.body.appendChild(overlay);

  function openMenu() {
    menu.classList.add('navbar__menu--open');
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    menu.classList.remove('navbar__menu--open');
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('navbar__menu--open');
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  // Close menu when a link is clicked
  menu.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ---------- Scroll Animations ---------- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the animations slightly
        setTimeout(() => {
          entry.target.classList.add(
            entry.target.classList.contains('fade-in') ? 'fade-in--visible' :
            entry.target.classList.contains('fade-in-left') ? 'fade-in-left--visible' :
            'fade-in-right--visible'
          );
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ---------- Scroll to Top ---------- */
function initScrollToTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('scroll-top--visible');
    } else {
      btn.classList.remove('scroll-top--visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- Mantra Ticker ---------- */
function initMantraTicker() {
  const ticker = document.querySelector('.mantra-ticker__inner');
  if (!ticker) return;

  // Duplicate content for seamless loop
  const content = ticker.innerHTML;
  ticker.innerHTML = content + content;
}

/* ---------- Animated Counters ---------- */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'), 10);
  const suffix = element.getAttribute('data-suffix') || '';
  const duration = 2000;
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * easeOut);

    element.textContent = current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* ---------- Smooth scroll for anchor links ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  });
});
