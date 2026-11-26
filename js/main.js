/**
 * AquaPure — Core Interactive Controller (Vanilla ES6+)
 * Handles Theme (Dark/Light), Direction (LTR/RTL), Navigation, Scroll Reveal,
 * FAQ Accordions, Tabs, Lightbox, Toast Feedback, and Smooth Interactions.
 */

(() => {
  'use strict';

  const STORAGE_THEME = 'aquapure-theme';
  const STORAGE_DIR = 'aquapure-dir';

  function initTheme() {
    const saved = localStorage.getItem(STORAGE_THEME) || 'light';
    document.documentElement.setAttribute('data-theme', saved);

    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    const updateAria = (mode) => {
      toggle.setAttribute('aria-pressed', String(mode === 'dark'));
      toggle.setAttribute('title', mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    };
    updateAria(saved);

    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem(STORAGE_THEME, next);
      updateAria(next);
      window.showToast?.(`Switched to ${next} mode.`, 'info', 2200);
    });
  }

  function initDirection() {
    const saved = localStorage.getItem(STORAGE_DIR) || 'ltr';
    document.documentElement.setAttribute('dir', saved);

    const toggle = document.getElementById('rtlToggle');
    if (!toggle) return;

    const updateButton = (dir) => {
      toggle.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
      toggle.setAttribute('aria-pressed', String(dir === 'rtl'));
      toggle.setAttribute('title', dir === 'rtl' ? 'Switch to LTR layout' : 'Switch to RTL layout');
    };
    updateButton(saved);

    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('dir') || 'ltr';
      const next = current === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', next);
      localStorage.setItem(STORAGE_DIR, next);
      updateButton(next);
      window.showToast?.(`Layout direction set to ${next.toUpperCase()}.`, 'info', 2200);
    });
  }

  function initStickyHeader() {
    const header = document.getElementById('siteHeader');
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 36);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.primary-nav .nav-link, .mobile-nav-list .mobile-nav-link').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const targetPage = href.split('#')[0];
      if (targetPage === path) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  function initDropdowns() {
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    dropdownItems.forEach((item) => {
      const trigger = item.querySelector('.nav-link');
      let closeTimer;

      item.addEventListener('mouseenter', () => {
        clearTimeout(closeTimer);
        item.classList.add('open');
        trigger?.setAttribute('aria-expanded', 'true');
      });

      item.addEventListener('mouseleave', () => {
        closeTimer = setTimeout(() => {
          item.classList.remove('open');
          trigger?.setAttribute('aria-expanded', 'false');
        }, 160);
      });

      trigger?.addEventListener('click', (e) => {
        if (window.matchMedia('(hover: none)').matches) {
          e.preventDefault();
          const isOpen = item.classList.toggle('open');
          trigger.setAttribute('aria-expanded', String(isOpen));
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.has-dropdown')) {
        dropdownItems.forEach((item) => {
          item.classList.remove('open');
          item.querySelector('.nav-link')?.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }

  function initMobileDrawer() {
    const toggle = document.getElementById('mobileMenuToggle');
    const overlay = document.getElementById('mobileNavOverlay');
    const closeBtn = document.getElementById('mobileNavClose');
    if (!toggle || !overlay) return;

    const openMenu = () => {
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      toggle.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    toggle.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeMenu();
    });
    overlay.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeMenu();
    });

    document.querySelectorAll('.mobile-sub-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        const list = btn.nextElementSibling;
        if (list) list.hidden = expanded;
      });
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const id = anchor.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function initScrollReveal(scope = document) {
    const els = scope.querySelectorAll('.reveal:not(.visible)');
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    els.forEach((el) => observer.observe(el));
  }
  window.observeRevealElements = initScrollReveal;

  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    const toggleVisibility = () => {
      btn.classList.toggle('show', window.scrollY > 420);
    };
    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function initAccordions() {
    document.querySelectorAll('.faq-question').forEach((button) => {
      button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        if (!item) return;
        const wasOpen = item.classList.contains('open');

        item.closest('.faq-list')?.querySelectorAll('.faq-item.open').forEach((sibling) => {
          sibling.classList.remove('open');
          sibling.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
        });

        if (!wasOpen) {
          item.classList.add('open');
          button.setAttribute('aria-expanded', 'true');
        } else {
          button.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  function initAuthTabs() {
    const tabBtns = document.querySelectorAll('.auth-tab-btn');
    if (!tabBtns.length) return;

    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.tab;
        tabBtns.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        document.querySelectorAll('.auth-panel').forEach((panel) => {
          panel.classList.toggle('active', panel.id === targetId);
        });
      });
    });
  }

  function initForgotPassword() {
    const link = document.getElementById('forgotPasswordLink');
    const cancel = document.getElementById('forgotPasswordCancel');
    const loginBlock = document.getElementById('loginFormPanel');
    const resetBlock = document.getElementById('forgotPasswordPanel');
    if (!link || !loginBlock || !resetBlock) return;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      loginBlock.hidden = true;
      resetBlock.hidden = false;
    });

    cancel?.addEventListener('click', (e) => {
      e.preventDefault();
      resetBlock.hidden = true;
      loginBlock.hidden = false;
    });
  }

  window.showToast = function showToast(message, type = 'info', duration = 4500) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      container.setAttribute('aria-live', 'polite');
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.setAttribute('role', 'status');

    const text = document.createElement('span');
    text.className = 'toast-message';
    text.textContent = message;

    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'toast-close';
    close.setAttribute('aria-label', 'Dismiss notification');
    close.innerHTML = '&times;';
    close.addEventListener('click', () => toast.remove());

    toast.append(text, close);
    container.appendChild(toast);

    window.setTimeout(() => {
      toast.remove();
    }, duration);
  };

  function initLightbox() {
    const targets = document.querySelectorAll('[data-lightbox]');
    if (!targets.length) return;

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Image preview');

    const img = document.createElement('img');
    img.className = 'lightbox-img';

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'lightbox-close';
    closeBtn.setAttribute('aria-label', 'Close image preview');
    closeBtn.innerHTML = '&times;';

    overlay.append(img, closeBtn);
    document.body.appendChild(overlay);

    const close = () => {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    };

    targets.forEach((el) => {
      el.style.cursor = 'zoom-in';
      el.addEventListener('click', () => {
        img.src = el.getAttribute('src') || el.dataset.lightbox || '';
        img.alt = el.getAttribute('alt') || 'AquaPure facility view';
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) close();
    });
  }

  function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const value = input?.value.trim() || '';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        window.showToast('Please enter a valid email address to subscribe.', 'error');
        input?.focus();
        return;
      }
      input.value = '';
      window.showToast('Subscription recorded (front-end demonstration — no emails are transmitted).', 'success', 5000);
    });
  }

  function initServiceDetailSwitcher() {
    const switcher = document.querySelectorAll('[data-service-key]');
    const titleEl = document.getElementById('serviceTitle');
    const summaryEl = document.getElementById('serviceSummary');
    const overviewEl = document.getElementById('serviceOverviewText');
    const heroImgEl = document.getElementById('serviceHeroImage');
    const breadcrumbEl = document.getElementById('serviceBreadcrumbName');
    const enquireLink = document.getElementById('serviceEnquireBtn');

    if (!titleEl || !summaryEl) return;

    const SERVICES_DATA = {
      'ro-installation': {
        title: 'Industrial RO Plant Installation & Commissioning',
        breadcrumb: 'Industrial RO Plant Installation',
        summary: 'End-to-end site planning, mechanical integration, membrane loading, and system commissioning tailored to your feed water and operational throughput.',
        overview: 'Industrial reverse osmosis installation requires careful hydraulic coordination across pre-treatment vessels, high-pressure feed stages, membrane housings, and instrumentation panels. AquaPure approaches every installation from your specific water source profile and operational needs rather than one-size-fits-all templates.',
        img: 'images/hero-facility.jpg',
        enquiryType: 'Industrial RO Plant',
      },
      'domestic-installation': {
        title: 'Domestic Water Purifier & RO Installation',
        breadcrumb: 'Domestic Purifier Installation',
        summary: 'Clean, leak-tested point-of-use installation for household drinking water purifiers, under-sink RO units, and residential filtration stages.',
        overview: 'Proper residential installation ensures safe feed-water connections, secure reject-line routing, pressure verification, and thorough initial flushing before daily use. Our technicians guide household members through routine care and filter check intervals.',
        img: 'images/domestic-purifier.jpg',
        enquiryType: 'Installation',
      },
      'water-testing': {
        title: 'Water Quality Assessment & Source Evaluation',
        breadcrumb: 'Water Quality Testing',
        summary: 'Requirement-based water source evaluation and parameter screening enquiries to inform appropriate purification system selection.',
        overview: 'Selecting effective treatment equipment begins with understanding your incoming water source. Whether drawing from municipal supply, groundwater borewells, or storage tanks, AquaPure assesses your available water details to recommend matching filtration or RO stages without unsupported claims.',
        img: 'images/water-testing.jpg',
        enquiryType: 'Water Quality Testing',
      },
      'maintenance': {
        title: 'Scheduled Maintenance & Filter Replacement',
        breadcrumb: 'Maintenance & Filter Replacement',
        summary: 'Preventive inspections, sediment and carbon cartridge replacement, membrane checks, and technical troubleshooting based on system assessment.',
        overview: 'Consistent performance across residential, commercial, and industrial purification systems relies on timely filter media replacement and hydraulic inspections. Service scope depends on the installed equipment configuration and site assessment.',
        img: 'images/technician-service.jpg',
        enquiryType: 'Maintenance',
      },
    };

    const applyService = (key) => {
      const data = SERVICES_DATA[key];
      if (!data) return;
      titleEl.textContent = data.title;
      summaryEl.textContent = data.summary;
      if (overviewEl) overviewEl.textContent = data.overview;
      if (heroImgEl) heroImgEl.src = data.img;
      if (breadcrumbEl) breadcrumbEl.textContent = data.breadcrumb;
      if (enquireLink) {
        enquireLink.href = `contact.html?enquiry=${encodeURIComponent(data.enquiryType)}`;
      }
      switcher.forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.serviceKey === key);
      });
    };

    const params = new URLSearchParams(window.location.search);
    const initialKey = params.get('service');
    if (initialKey && SERVICES_DATA[initialKey]) {
      applyService(initialKey);
    }

    switcher.forEach((btn) => {
      btn.addEventListener('click', () => {
        applyService(btn.dataset.serviceKey);
      });
    });
  }

  function initBlogFilter() {
    const searchInput = document.getElementById('blogSearch');
    const catButtons = document.querySelectorAll('[data-blog-cat]');
    const cards = document.querySelectorAll('[data-article-card]');
    if (!cards.length) return;

    let activeCat = 'all';
    let query = '';

    const apply = () => {
      let visibleCount = 0;
      cards.forEach((card) => {
        const cat = card.dataset.category || '';
        const text = card.textContent.toLowerCase();
        const matchCat = activeCat === 'all' || cat === activeCat;
        const matchQuery = !query || text.includes(query);
        const show = matchCat && matchQuery;
        card.style.display = show ? '' : 'none';
        if (show) visibleCount += 1;
      });
      const empty = document.getElementById('blogEmptyState');
      if (empty) empty.hidden = visibleCount > 0;
    };

    searchInput?.addEventListener('input', (e) => {
      query = e.target.value.trim().toLowerCase();
      apply();
    });

    catButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        catButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeCat = btn.dataset.blogCat || 'all';
        apply();
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initDirection();
    initStickyHeader();
    initActiveNav();
    initDropdowns();
    initMobileDrawer();
    initSmoothScroll();
    initScrollReveal();
    initBackToTop();
    initAccordions();
    initAuthTabs();
    initForgotPassword();
    initLightbox();
    initNewsletter();
    initServiceDetailSwitcher();
    initBlogFilter();
  });
})();
