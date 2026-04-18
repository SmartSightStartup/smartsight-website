// Shared hooks + utilities for all three directions

// Scroll fade-up observer
function useFadeUp(rootRef) {
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll('[data-fade]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          io.unobserve(e.target);
        }
      });
    }, { root, threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => {
      const delay = parseInt(el.dataset.delay || '0', 10);
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = `opacity 700ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 700ms cubic-bezier(.2,.7,.2,1) ${delay}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, [rootRef]);
}

// Parallax halo — reads scroll position from the artboard's inner scroller
function useParallax(rootRef, selector) {
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = root.scrollTop;
        root.querySelectorAll(selector).forEach((el) => {
          const speed = parseFloat(el.dataset.parallax || '0.3');
          el.style.transform = `translate3d(-50%, calc(-50% + ${y * speed}px), 0)`;
        });
      });
    };
    root.addEventListener('scroll', onScroll, { passive: true });
    return () => root.removeEventListener('scroll', onScroll);
  }, [rootRef, selector]);
}

// Smooth scroll within the artboard
function useSmoothScroll(rootRef) {
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const target = root.querySelector(`#${CSS.escape(id)}`);
      if (!target) return;
      e.preventDefault();
      const top = target.offsetTop - 20;
      root.scrollTo({ top, behavior: 'smooth' });
    };
    root.addEventListener('click', handler);
    return () => root.removeEventListener('click', handler);
  }, [rootRef]);
}

// Striped placeholder — subtly-toned, labeled
function StripePlaceholder({ label, bg = '#efece6', stripe = 'rgba(0,0,0,.05)', ink = 'rgba(0,0,0,.45)', style = {} }) {
  return (
    <div style={{
      width: '100%', height: '100%', position: 'relative',
      background: `repeating-linear-gradient(135deg, ${bg} 0 14px, ${stripe} 14px 15px)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      ...style,
    }}>
      <span style={{
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontSize: 11, letterSpacing: 0.5, textTransform: 'uppercase',
        color: ink, background: bg, padding: '4px 10px',
      }}>{label}</span>
    </div>
  );
}

// Abstract glasses SVG — simple geometric, not photorealistic
function GlassesMark({ stroke = 'currentColor', size = 260, opacity = 0.9 }) {
  return (
    <svg viewBox="0 0 260 80" width={size} height={size * 80 / 260} style={{ opacity }}>
      <g fill="none" stroke={stroke} strokeWidth="1.2">
        <circle cx="60" cy="40" r="32" />
        <circle cx="200" cy="40" r="32" />
        <path d="M92 40 Q130 28 168 40" />
        <path d="M28 32 L6 28" />
        <path d="M232 32 L254 28" />
      </g>
    </svg>
  );
}

Object.assign(window, { useFadeUp, useParallax, useSmoothScroll, StripePlaceholder, GlassesMark });
