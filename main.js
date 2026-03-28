/* ============================================
   SmartSight — Main JavaScript
   Handles nav, scroll interactions, animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------
     NAV — Frosted glass on scroll
     ------------------------------------------ */
  const nav = document.querySelector('.nav');

  const handleNavScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  /* ------------------------------------------
     HAMBURGER MENU (mobile)
     ------------------------------------------ */
  const hamburger = document.querySelector('.nav__hamburger');
  const navLinks = document.querySelector('.nav__links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ------------------------------------------
     HERO — Revolut-style scroll fade/parallax
     Uses IntersectionObserver for the threshold
     and scroll listener for smooth transform
     ------------------------------------------ */
  const hero = document.querySelector('.hero');

  if (hero) {
    const heroContent = hero.querySelector('.hero__content');
    const heroGlasses = hero.querySelector('.hero__glasses');

    // Apply parallax transforms based on scroll position
    const handleHeroParallax = () => {
      const scrollY = window.scrollY;
      const heroHeight = hero.offsetHeight;
      const progress = Math.min(scrollY / (heroHeight * 0.6), 1);

      if (heroContent) {
        // Fade out and scale down hero text as user scrolls
        heroContent.style.opacity = 1 - progress;
        heroContent.style.transform = `translateY(${-progress * 60}px) scale(${1 - progress * 0.05})`;
      }

      if (heroGlasses) {
        // Glasses dissolve and scale up
        heroGlasses.style.opacity = 1 - progress * 1.2;
        heroGlasses.style.transform = `translateY(${-progress * 40}px) scale(${1 + progress * 0.15})`;
      }
    };

    window.addEventListener('scroll', handleHeroParallax, { passive: true });
  }

  /* ------------------------------------------
     FEATURE CARDS — Staggered fade-up on scroll
     Uses IntersectionObserver
     ------------------------------------------ */
  const featureCards = document.querySelectorAll('.feature-card');

  if (featureCards.length > 0) {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger each card by 100ms based on its index
            const index = Array.from(featureCards).indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 100);
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    featureCards.forEach(card => cardObserver.observe(card));
  }

  /* ------------------------------------------
     PHONE MOCKUP — Slide in from below on scroll
     ------------------------------------------ */
  const phoneWrapper = document.querySelector('.app-showcase__phone-wrapper');

  if (phoneWrapper) {
    const phoneObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            phoneObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    phoneObserver.observe(phoneWrapper);
  }

  /* ------------------------------------------
     FLOATING CHIPS — Staggered appear on scroll
     ------------------------------------------ */
  const chips = document.querySelectorAll('.chip');

  if (chips.length > 0) {
    const chipObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(chips).indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, 300 + index * 150);
            chipObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    chips.forEach(chip => chipObserver.observe(chip));
  }

});
