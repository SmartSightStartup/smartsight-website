// Direction 1 — Editorial Warm
// Serif display (Fraunces-ish via web-safe fallback), ivory + ink, warm amber halo

function EditorialDirection() {
  const rootRef = React.useRef(null);
  useFadeUp(rootRef);
  useParallax(rootRef, '.ed-parallax');
  useSmoothScroll(rootRef);

  const ink = '#1a1714';
  const ivory = '#f4efe7';
  const amber = '#c97a2a';
  const muted = '#6d6458';

  return (
    <div ref={rootRef} style={{
      width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',
      background: ivory, color: ink,
      fontFamily: '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif',
      fontSize: 16, lineHeight: 1.6, scrollbarWidth: 'thin',
    }}>
      <style>{`
        .ed-shimmer { position: relative; overflow: hidden; }
        .ed-shimmer::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,.5) 50%, transparent 70%);
          transform: translateX(-120%);
          animation: edShim 3.2s ease-in-out infinite;
        }
        @keyframes edShim { 0%,30% { transform: translateX(-120%); } 60%,100% { transform: translateX(120%); } }
        .ed-card { transition: transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s; }
        .ed-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(26,23,20,.08); }
        .ed-link { color: inherit; text-decoration: none; }
        .ed-link:hover { color: ${amber}; }
        .ed-halo { filter: blur(40px); }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '22px 64px',
        background: `${ivory}ee`, backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${ink}0d`,
      }}>
        <a href="#hero" className="ed-link" style={{
          fontFamily: '"Iowan Old Style", Georgia, serif',
          fontSize: 22, fontWeight: 700, letterSpacing: -0.5,
        }}>
          Lumen<span style={{ color: amber }}>.</span>
        </a>
        <div style={{ display: 'flex', gap: 32, fontSize: 14, letterSpacing: 0.3 }}>
          <a href="#features" className="ed-link">Features</a>
          <a href="#about" className="ed-link">About</a>
          <a href="#waitlist" className="ed-link" style={{
            padding: '8px 16px', border: `1px solid ${ink}`, borderRadius: 999,
          }}>Join Waitlist</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" style={{
        position: 'relative', padding: '140px 64px 160px',
        textAlign: 'center', overflow: 'hidden',
      }}>
        {/* parallax halo */}
        <div className="ed-parallax ed-halo" data-parallax="0.25" style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 640, height: 640, borderRadius: '50%',
          background: `radial-gradient(circle, ${amber}55 0%, ${amber}22 30%, transparent 60%)`,
          transform: 'translate(-50%,-50%)', pointerEvents: 'none',
        }}/>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.35 }}>
          <GlassesMark stroke={ink} size={340} opacity={0.6}/>
        </div>

        <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
          <p data-fade style={{
            fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11,
            letterSpacing: 2.5, textTransform: 'uppercase', color: muted, marginBottom: 32,
          }}>
            ✦ AI study coach · wearable-first
          </p>
          <h1 data-fade data-delay="100" style={{
            fontSize: 92, lineHeight: 0.98, fontWeight: 400, letterSpacing: -2.5,
            margin: '0 0 28px',
          }}>
            You study.<br/>
            <em style={{ color: amber, fontStyle: 'italic' }}>We coach.</em>
          </h1>
          <p data-fade data-delay="200" style={{
            fontSize: 20, color: muted, maxWidth: 540, margin: '0 auto 40px', lineHeight: 1.5,
          }}>
            Lumen is a hands-free study coach that lives in your smart glasses — quietly watching your notes, surfacing what to review next.
          </p>
          <div data-fade data-delay="300" style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
            <a href="#waitlist" className="ed-shimmer" style={{
              padding: '16px 28px', background: ink, color: ivory,
              borderRadius: 999, textDecoration: 'none',
              fontSize: 14, fontFamily: 'system-ui, sans-serif', fontWeight: 500,
              letterSpacing: 0.3,
            }}>
              <span style={{ position: 'relative' }}>✦ Join the Waiting List</span>
            </a>
            <span style={{
              padding: '16px 24px', border: `1px solid ${ink}33`,
              borderRadius: 999, fontSize: 14,
              fontFamily: 'system-ui, sans-serif', color: muted,
            }}>
              iOS — coming soon
            </span>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section style={{ padding: '120px 64px', textAlign: 'center', borderTop: `1px solid ${ink}14` }}>
        <p data-fade style={{
          fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11,
          letterSpacing: 2.5, textTransform: 'uppercase', color: muted, marginBottom: 40,
        }}>Our Manifesto</p>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p data-fade data-delay="100" style={{ fontSize: 30, lineHeight: 1.4, marginBottom: 36, fontWeight: 400 }}>
            Students are drowning in tracking apps. Every tool built to help you study demands more of your attention.
          </p>
          <p data-fade data-delay="200" style={{ fontSize: 30, lineHeight: 1.4, color: muted, fontStyle: 'italic' }}>
            Lumen was built on one idea — your coach should come to <em style={{ color: amber }}>you</em>.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: '120px 64px', background: '#ebe5da' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <p data-fade style={{
            fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11,
            letterSpacing: 2.5, textTransform: 'uppercase', color: muted, marginBottom: 24,
          }}>Built for how you actually study</p>
          <h2 data-fade data-delay="80" style={{
            fontSize: 48, fontWeight: 400, letterSpacing: -1, margin: '0 0 60px', maxWidth: 600,
          }}>Four quiet systems, working while you focus.</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {[
              { n: '01', t: 'Passive Capture', d: 'Glasses quietly photograph your notes as you study — no app-juggling required.' },
              { n: '02', t: 'AI Coaching', d: 'Get told exactly what to review next, personalized to your weakest concepts.' },
              { n: '03', t: 'Flashcards + Quizzes', d: 'Auto-generated from the material your eyes already passed over.' },
              { n: '04', t: 'Screen-Free Flow', d: 'Audio coaching through the glasses — you never break focus to check a screen.' },
            ].map((f, i) => (
              <div key={f.n} className="ed-card" data-fade data-delay={i * 100} style={{
                background: ivory, padding: '40px 36px', borderRadius: 2,
                border: `1px solid ${ink}12`, minHeight: 220,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28 }}>
                  <span style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12, color: amber, letterSpacing: 1 }}>{f.n}</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3" fill={amber}/><circle cx="10" cy="10" r="8" stroke={ink} strokeWidth="1"/></svg>
                </div>
                <h3 style={{ fontSize: 26, fontWeight: 400, margin: '0 0 12px', letterSpacing: -0.3 }}>{f.t}</h3>
                <p style={{ color: muted, fontSize: 15, lineHeight: 1.55, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP SHOWCASE */}
      <section id="app" style={{ padding: '140px 64px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p data-fade style={{
              fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11,
              letterSpacing: 2.5, textTransform: 'uppercase', color: muted, marginBottom: 20,
            }}>Meet Aria</p>
            <h2 data-fade data-delay="80" style={{
              fontSize: 56, fontWeight: 400, letterSpacing: -1.2, margin: '0 0 24px', lineHeight: 1.05,
            }}>Your AI coach, <em style={{ color: amber, fontStyle: 'italic' }}>always in your pocket.</em></h2>
            <p data-fade data-delay="160" style={{ fontSize: 18, color: muted, marginBottom: 32, maxWidth: 440 }}>
              Aria translates everything Lumen sees into personalized coaching, quizzes, and progress tracking.
            </p>
            <div data-fade data-delay="240" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {['Session Summary', 'Streak Tracking', 'Behavior Insights', 'Gap Detection'].map(c => (
                <span key={c} style={{
                  padding: '8px 16px', border: `1px solid ${ink}26`, borderRadius: 999,
                  fontSize: 13, fontFamily: 'system-ui, sans-serif', background: ivory,
                }}>{c}</span>
              ))}
            </div>
          </div>
          {/* Phone */}
          <div data-fade data-delay="200" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: 280, height: 560, borderRadius: 42,
              background: ink, padding: 10,
              boxShadow: `0 40px 80px ${ink}33, 0 10px 20px ${ink}1f`,
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)', width: 90, height: 22, borderRadius: 999, background: ink, zIndex: 2 }}/>
              <div style={{
                width: '100%', height: '100%', borderRadius: 34,
                background: ivory, padding: '50px 22px 22px',
                display: 'flex', flexDirection: 'column', gap: 14,
                fontFamily: 'system-ui, sans-serif',
              }}>
                <div style={{ fontSize: 10, letterSpacing: 1, color: muted, textTransform: 'uppercase' }}>Today · Thu</div>
                <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: -0.5 }}>Good focus<br/>this morning.</div>
                <div style={{ background: '#ebe5da', padding: 14, borderRadius: 12 }}>
                  <div style={{ fontSize: 10, color: amber, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>Next up</div>
                  <div style={{ fontSize: 13, color: ink }}>Review 8 flashcards from Chapter 12.</div>
                </div>
                <div style={{ background: '#ebe5da', padding: 14, borderRadius: 12, flex: 1 }}>
                  <div style={{ fontSize: 10, color: muted, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>This week</div>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 70 }}>
                    {[40, 65, 30, 80, 55, 90, 45].map((h, i) => (
                      <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 5 ? amber : ink, borderRadius: 2, opacity: i === 5 ? 1 : 0.15 }}/>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ flex: 1, padding: '10px', background: ink, color: ivory, borderRadius: 10, fontSize: 12, textAlign: 'center' }}>Start session</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '120px 64px', background: '#ebe5da' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <p data-fade style={{
            fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11,
            letterSpacing: 2.5, textTransform: 'uppercase', color: muted, marginBottom: 48,
          }}>What students say</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { q: "Lumen completely changed how I study. I don't have to think about what to review next.", a: 'Priya K.', r: 'MCAT Candidate' },
              { q: "I was skeptical about AI coaching but within a week my scores went up. It knows what I need.", a: 'James T.', r: 'Pre-Med Student' },
              { q: "The glasses make it feel like the future. No more staring at my phone between study blocks.", a: 'Mia L.', r: 'High School Senior' },
            ].map((t, i) => (
              <article key={i} className="ed-card" data-fade data-delay={i * 120} style={{
                background: ivory, padding: '40px 32px', borderRadius: 2,
              }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 64, lineHeight: 0.5, color: amber, marginBottom: 16, height: 20 }}>"</div>
                <p style={{ fontSize: 17, lineHeight: 1.5, margin: '0 0 24px' }}>{t.q}</p>
                <div style={{ fontSize: 13, color: muted, fontFamily: 'system-ui, sans-serif' }}>
                  <div style={{ color: ink, fontWeight: 500 }}>{t.a}</div>
                  <div>{t.r}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '140px 64px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64 }}>
          <div data-fade>
            <div style={{ aspectRatio: '4/3', borderRadius: 2, overflow: 'hidden', marginBottom: 16 }}>
              <StripePlaceholder label="team portrait" bg="#ebe5da" stripe="rgba(26,23,20,.06)" ink={muted}/>
            </div>
            <p style={{ fontSize: 13, color: muted, lineHeight: 1.5 }}>
              The Lumen team, formed during a wearable-AI hackathon in spring 2026.
            </p>
          </div>
          <div>
            <p data-fade style={{
              fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11,
              letterSpacing: 2.5, textTransform: 'uppercase', color: muted, marginBottom: 20,
            }}>About us</p>
            <h2 data-fade data-delay="80" style={{ fontSize: 42, fontWeight: 400, letterSpacing: -0.8, margin: '0 0 32px', lineHeight: 1.1 }}>
              Built by a small team of <em style={{ color: amber, fontStyle: 'italic' }}>learners</em>.
            </h2>
            <p data-fade data-delay="160" style={{ fontSize: 17, color: muted, marginBottom: 20, lineHeight: 1.65 }}>
              We came together during a wearable-AI hackathon in spring 2026, where our prototype won the wearables track.
            </p>
            <p data-fade data-delay="240" style={{ fontSize: 17, color: muted, marginBottom: 20, lineHeight: 1.65 }}>
              Our team is interdisciplinary — AI systems, learning science, immersive tech, product design.
            </p>
            <p data-fade data-delay="320" style={{ fontSize: 17, color: muted, lineHeight: 1.65 }}>
              We all studied with too little feedback and support. Lumen grew from that shared experience.
            </p>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" style={{ padding: '120px 64px', background: ink, color: ivory }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <p data-fade style={{
            fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11,
            letterSpacing: 2.5, textTransform: 'uppercase', color: amber, marginBottom: 24,
          }}>Join the waiting list</p>
          <h2 data-fade data-delay="80" style={{ fontSize: 56, fontWeight: 400, letterSpacing: -1.2, margin: '0 0 40px', lineHeight: 1.05 }}>
            Be first to try it.
          </h2>
          <form data-fade data-delay="160" onSubmit={(e) => { e.preventDefault(); alert("You're on the list."); }} style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'left' }}>
            <input placeholder="Your name" style={inpEd} required/>
            <input placeholder="you@example.com" type="email" style={inpEd} required/>
            <textarea placeholder="Anything you'd like us to know… (optional)" rows={3} style={{ ...inpEd, resize: 'vertical', fontFamily: 'inherit' }}/>
            <button className="ed-shimmer" type="submit" style={{
              marginTop: 8, padding: '16px 28px', background: amber, color: ink,
              border: 'none', borderRadius: 999,
              fontSize: 14, fontFamily: 'system-ui, sans-serif', fontWeight: 600,
              letterSpacing: 0.3, cursor: 'pointer', position: 'relative', overflow: 'hidden',
            }}>
              <span style={{ position: 'relative' }}>✦ Submit</span>
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '48px 64px', background: ink, color: `${ivory}99`, borderTop: `1px solid ${ivory}15` }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ fontFamily: '"Iowan Old Style", Georgia, serif', fontSize: 18, color: ivory }}>Lumen<span style={{ color: amber }}>.</span></div>
          <div style={{ fontSize: 13, fontFamily: 'system-ui, sans-serif' }}>hello@lumen.study</div>
          <div style={{ fontSize: 12, fontFamily: 'system-ui, sans-serif' }}>© 2026 Lumen</div>
        </div>
      </footer>
    </div>
  );
}

const inpEd = {
  padding: '14px 18px', background: 'rgba(244,239,231,.08)',
  border: '1px solid rgba(244,239,231,.18)', borderRadius: 4,
  color: '#f4efe7', fontSize: 15, outline: 'none',
  fontFamily: 'system-ui, sans-serif',
};

Object.assign(window, { EditorialDirection });
