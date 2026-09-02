/* =========================================================
   Youssef Tarek — Portfolio Script
   1. Loader
   2. Theme toggle (dark/light + localStorage)
   3. Mobile menu
   4. Navbar scroll effect + scroll progress bar
   5. Active navigation highlight
   6. Back to top
   7. Typing effect (role + code snippet)
   8. Scroll reveal (IntersectionObserver)
   9. Animated skill bars
   10. Contact form (front-end only)
   11. Footer year
   ========================================================= */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initThemeToggle();
    initMobileMenu();
    initNavbarScroll();
    initScrollProgress();
    initActiveNav();
    initBackToTop();
    initTypingEffects();
    initScrollReveal();
    initSkillBars();
    initContactForm();
    initFooterYear();
  });

  /* ---------- 1. LOADER ---------- */
  function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    const hide = () => loader.classList.add('is-hidden');
    window.addEventListener('load', () => setTimeout(hide, 350));
    // Safety fallback in case 'load' fires late
    setTimeout(hide, 3000);
  }

  /* ---------- 2. THEME TOGGLE ---------- */
  function initThemeToggle() {
    const root = document.documentElement;
    const toggle = document.getElementById('themeToggle');
    const STORAGE_KEY = 'yt-portfolio-theme';

    const stored = localStorage.getItem(STORAGE_KEY);
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initial = stored || (systemPrefersLight ? 'light' : 'dark');

    applyTheme(initial);

    toggle?.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
    });

    function applyTheme(theme) {
      root.setAttribute('data-theme', theme);
      toggle?.setAttribute('aria-pressed', String(theme === 'light'));
    }
  }

  /* ---------- 3. MOBILE MENU ---------- */
  function initMobileMenu() {
    const burger = document.getElementById('navBurger');
    const links = document.getElementById('navLinks');
    if (!burger || !links) return;

    burger.addEventListener('click', () => {
      const isOpen = links.classList.toggle('is-open');
      burger.classList.toggle('is-open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        links.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- 4. NAVBAR SCROLL + PROGRESS BAR ---------- */
  function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    const onScroll = () => navbar.classList.toggle('is-scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initScrollProgress() {
    const fill = document.getElementById('progressFill');
    if (!fill) return;
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      fill.style.width = pct + '%';
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  /* ---------- 5. ACTIVE NAV HIGHLIGHT ---------- */
  function initActiveNav() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('[data-nav]');
    if (!sections.length || !navLinks.length) return;

    const map = new Map();
    navLinks.forEach((link) => map.set(link.getAttribute('href').slice(1), link));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = map.get(entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove('active-link'));
            link.classList.add('active-link');
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  /* ---------- 6. BACK TO TOP ---------- */
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    const toggleVisibility = () => btn.classList.toggle('is-visible', window.scrollY > 480);
    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---------- 7. TYPING EFFECTS ---------- */
  function initTypingEffects() {
    typeRoleLoop();
    typeCodeOnce();
  }

  function typeRoleLoop() {
    const el = document.getElementById('typedRole');
    if (!el) return;

    if (prefersReducedMotion) {
      el.textContent = 'Flutter Developer';
      return;
    }

    const roles = ['Flutter Developer', 'Mobile App Builder', 'CS Student', 'Clean Architecture Advocate'];
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const current = roles[roleIndex];

      if (!deleting) {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          return setTimeout(tick, 1500);
        }
      } else {
        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(tick, deleting ? 35 : 65);
    }

    tick();
  }

  function typeCodeOnce() {
    const el = document.getElementById('typedCode');
    const caret = document.querySelector('.code-card .caret');
    if (!el) return;

    const snippet =
`class Developer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return YoussefTarek(
      role: 'Flutter Developer',
      focus: 'Clean Architecture',
      status: 'Open to opportunities',
    );
  }
}`;

    if (prefersReducedMotion) {
      el.textContent = snippet;
      if (caret) caret.style.display = 'none';
      return;
    }

    let i = 0;
    function tick() {
      el.textContent = snippet.slice(0, i);
      i++;
      if (i <= snippet.length) {
        setTimeout(tick, 14);
      } else if (caret) {
        caret.style.display = 'none';
      }
    }
    setTimeout(tick, 900);
  }

  /* ---------- 8. SCROLL REVEAL ---------- */
  function initScrollReveal() {
    const items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    if (prefersReducedMotion) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    items.forEach((el) => {
      const delay = el.getAttribute('data-reveal-delay');
      if (delay) el.style.transitionDelay = delay + 'ms';
    });

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

    items.forEach((el) => observer.observe(el));
  }

  /* ---------- 9. ANIMATED SKILL BARS ---------- */
  function initSkillBars() {
    const bars = document.querySelectorAll('.skill-bar');
    if (!bars.length) return;

    bars.forEach((bar) => {
      const fill = document.createElement('span');
      fill.className = 'skill-bar__fill';
      bar.appendChild(fill);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const bar = entry.target;
          const level = bar.getAttribute('data-level') || '0';
          const fill = bar.querySelector('.skill-bar__fill');
          requestAnimationFrame(() => {
            if (fill) fill.style.width = level + '%';
          });
          observer.unobserve(bar);
        });
      },
      { threshold: 0.4 }
    );

    bars.forEach((bar) => observer.observe(bar));
  }

  /* ---------- 10. CONTACT FORM (front-end only) ---------- */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    const note = document.getElementById('formNote');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        if (note) note.textContent = 'Please fill in all fields before sending.';
        return;
      }

      const name = form.querySelector('#name').value.trim();
      if (note) note.textContent = `Thanks, ${name}! This form isn't wired to a backend yet — reach out via email or LinkedIn for now.`;
      form.reset();
    });
  }

  /* ---------- 11. FOOTER YEAR ---------- */
  function initFooterYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }
})();
