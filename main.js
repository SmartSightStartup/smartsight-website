// SmartSight launch site: sticky-nav border, privacy diagram reveal, launch-list form.

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // One-time reveals: the session log and the privacy diagram.
  for (const leak of [document.getElementById('leak'), document.getElementById('log')]) {
    if (!leak) continue;
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          leak.classList.add('is-in');
          io.disconnect();
        }
      }, { threshold: 0.4 });
      io.observe(leak);
    } else {
      leak.classList.add('is-in');
    }
  }

  // Ask Luna: each chip swaps in a question, Luna's reply and the card she builds for it.
  const ask = document.getElementById('ask');
  const body = document.getElementById('ask-body');
  if (ask && body) {
    const chips = [...ask.querySelectorAll('.ask__chip')];
    const answers = { today: body.innerHTML };
    for (const t of ask.querySelectorAll('template[data-ask]')) answers[t.dataset.ask] = t.innerHTML;

    // Hold the chat at the height of its longest answer so switching questions doesn't move the page.
    const fit = () => {
      body.style.minHeight = '';
      let tallest = 0;
      for (const html of Object.values(answers)) {
        body.innerHTML = html;
        tallest = Math.max(tallest, body.offsetHeight);
      }
      body.style.minHeight = `${tallest}px`;
    };
    const current = () => chips.find((c) => c.getAttribute('aria-pressed') === 'true')?.dataset.ask || 'today';
    fit();
    body.innerHTML = answers[current()];
    // Lexend loads after the page, and changes line breaks: measure again once it's in.
    document.fonts?.ready.then(() => {
      fit();
      if (ask.classList.contains('is-playing')) play(current());
      else body.innerHTML = answers[current()];
    });
    let lastWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      fit();
      if (ask.classList.contains('is-playing')) play(current());
      else body.innerHTML = answers[current()];
    });

    const play = (key) => {
      body.innerHTML = answers[key];
      const reply = body.querySelector('.chat__luna');
      let words = 0;
      if (reply) {
        const parts = reply.textContent.trim().split(/\s+/);
        words = parts.length;
        reply.innerHTML = parts.map((w, i) => `<span class="w" style="--i:${i}">${w}</span>`).join(' ');
      }
      const step = words > 40 ? 0.026 : 0.038;
      reply?.style.setProperty('--step', `${step}s`);
      const genAt = 0.45 + words * step + 0.25;
      for (const g of body.querySelectorAll('.gen')) g.style.setProperty('--gen-at', `${genAt.toFixed(2)}s`);
      for (const list of body.querySelectorAll('.gen ul, .gen ol, .gen dl')) {
        [...list.children].forEach((el, n) => el.style.setProperty('--n', n));
      }
      ask.classList.remove('is-playing');
      void ask.offsetWidth; // restart the animations
      ask.classList.add('is-playing');
    };

    for (const chip of chips) {
      chip.addEventListener('click', () => {
        for (const c of chips) c.setAttribute('aria-pressed', String(c === chip));
        chip.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        play(chip.dataset.ask);
      });
    }

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          play(current());
          io.disconnect();
        }
      }, { threshold: 0.35 });
      io.observe(ask);
    }
  }

  const form = document.getElementById('launch-form');
  const msg = document.getElementById('form-msg');
  if (form && msg) {
    const button = form.querySelector('button[type="submit"]');
    const say = (text, isError) => {
      msg.textContent = text;
      msg.classList.toggle('is-error', Boolean(isError));
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = form.elements.email;
      if (!email.value.trim() || !email.checkValidity()) {
        say('Enter a valid email address to join the launch list.', true);
        email.focus();
        return;
      }

      button.disabled = true;
      say('Adding you to the launch list…');
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        say("You're on the launch list. We'll email you when SmartSight is on the App Store.");
      } catch {
        say("That didn't go through. Check your connection and try again, or email hello@getsmartsight.com.", true);
      } finally {
        button.disabled = false;
      }
    });
  }
});
