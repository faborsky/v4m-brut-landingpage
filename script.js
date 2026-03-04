/* ========================================
   BRUT. Ginger — Landing Page Scripts
   ======================================== */

(function () {
  'use strict';

  /* --- Nav scroll behavior --- */
  var nav = document.querySelector('.nav');
  var scrolled = false;
  var ticking = false;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        if (window.scrollY > 50 && !scrolled) {
          nav.classList.add('scrolled');
          scrolled = true;
        } else if (window.scrollY <= 50 && scrolled) {
          nav.classList.remove('scrolled');
          scrolled = false;
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* --- Hero stagger animation --- */
  function animateHero() {
    var heroChildren = document.querySelectorAll('.hero .fade-in');
    heroChildren.forEach(function (el, i) {
      setTimeout(function () {
        el.classList.add('visible');
      }, i * 200);
    });
  }

  /* --- Intersection Observer for scroll animations --- */
  function initScrollAnimations() {
    var targets = document.querySelectorAll('.fade-in:not(.hero .fade-in)');

    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --- Init --- */
  document.addEventListener('DOMContentLoaded', function () {
    animateHero();
    initScrollAnimations();
  });
})();
