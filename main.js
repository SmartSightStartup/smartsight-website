/* ============================================
   SmartSight — Main JavaScript
   Nav, scroll effects, IntersectionObserver
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------
     PAGE LOAD — trigger hero stagger
     ------------------------------------------ */
  requestAnimationFrame(() => {
    document.body.classList.add('loaded');
  });


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
     SCROLL-TRIGGERED FADE-UPS
     Generic observer for any .fade-up element
     ------------------------------------------ */
  const fadeEls = document.querySelectorAll('.fade-up');

  if (fadeEls.length > 0) {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply stagger delay from data attribute if present
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, Number(delay));
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeEls.forEach(el => fadeObserver.observe(el));
  }


  /* ------------------------------------------
     PHONE MOCKUP — Slide up on scroll
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
      { threshold: 0.15 }
    );

    phoneObserver.observe(phoneWrapper);
  }


  /* ------------------------------------------
     CHIPS — Staggered appear on scroll
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
            }, 200 + index * 150);
            chipObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    chips.forEach(chip => chipObserver.observe(chip));
  }


  /* ------------------------------------------
     WAITLIST FORM — AJAX submit via Formspree
     ------------------------------------------ */
  const waitlistForm = document.querySelector('.waitlist__form');
  const waitlistSuccess = document.getElementById('waitlist-success');

  if (waitlistForm && waitlistSuccess) {
    waitlistForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(waitlistForm);

      try {
        const res = await fetch(waitlistForm.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          waitlistForm.style.display = 'none';
          waitlistSuccess.classList.add('visible');
        } else {
          alert('Something went wrong. Please try again.');
        }
      } catch {
        alert('Network error. Please try again.');
      }
    });
  }

});
