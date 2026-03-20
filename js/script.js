'use strict';

/* =========================
   SKILL SLIDER
========================= */
const sliders = document.querySelectorAll('.clients-list');

sliders.forEach((slider) => {
  setInterval(() => {
    slider.scrollLeft += slider.offsetWidth / 2;

    if (slider.scrollLeft >= slider.scrollWidth - slider.offsetWidth) {
      slider.scrollLeft = 0;
    }
  }, 2000);
});

/* =========================
   SIDEBAR TOGGLE
========================= */
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
}

/* =========================
   PAGE NAVIGATION
========================= */
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navigationLinks.forEach((link) => {
  link.addEventListener('click', function () {
    const targetPage = this.textContent.trim().toLowerCase();

    navigationLinks.forEach((btn) => btn.classList.remove('active'));
    pages.forEach((page) => page.classList.remove('active'));

    this.classList.add('active');

    const activePage = document.querySelector(`[data-page="${targetPage}"]`);
    if (activePage) {
      activePage.classList.add('active');
      window.scrollTo(0, 0);
    }
  });
});