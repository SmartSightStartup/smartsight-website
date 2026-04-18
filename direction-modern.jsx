// Direction 2 — Modern Tech
// Geometric sans, off-white + cool violet, crisp grid

function ModernDirection() {
  const rootRef = React.useRef(null);
  useFadeUp(rootRef);
  useParallax(rootRef, '.mo-parallax');
  useSmoothScroll(rootRef);

  const ink = '#0e1014';
  const bg = '#f6f6f3';
  const violet = '#6a5cff';
  const muted = '#5a5e66';
  const line = '#0e101412';

  return (
    <div ref={rootRef} style={{
      width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',
      background: bg, color: ink,
      fontFamily: '"Inter", "Helvetica Neue", -apple-system, system-ui, sans-serif',
      fontSize: 15, lineHeight: 1.55, scrollbarWidth: 'thin',
      fontFeatureSettings: '"ss01", "cv11"',
    }}>
      <style>{`
        .mo-shim { position: relative; overflow: hidden; }
        .mo-shim::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,.35) 50%, transparent 70%);
          transform: translateX(-120%);
          animation: moShim 3s ease-in-out infinite;
        }
        @keyframes moShim { 0%,30% { transform: translateX(-120%); } 60%,100% { transform: translateX(120%); } }
        .mo-card { transition: transform .3s cubic-bezier(.2,.7,.2,1), border-color .3s; border: 1px solid ${line}; }
        .mo-card:hover { transform: translateY(-3px); border-color: ${violet}66; }
        .mo-a { color: inherit; text-decoration: none; transition: color .2s; }
        .mo-a:hover { color: ${violet}; }
        .mo-grid-bg {
          background-image: linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px);
          background-size: 56px 56px;
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '18px 56px', background: `${bg}ee`, backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${line}`,
      }}>
        <a href="#hero" className="mo-a" style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600, fontSize: 18, letterSpacing: -0.4 }}>
          <span style={{ width: 22, height: 22, borderRadius: 6, background: violet, display: 'inline-block' }}/>
          Lumen
        </a>
        <div style={{ display: 'flex', gap: 28, fontSize: 14, alignItems: 'center' }}>
          <a href="#features" className="mo-a">Features</a>
          <a href="#app" className="mo-a">App</a>
          <a href="#about" className="mo-a">About</a>
          <a href="#waitlist" className="mo-a" style={{
            padding: '9px 16px', background: ink, color: bg, borderRadius: 8, fontWeight: 500,
          }}>Join waitlist →</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="mo-grid-bg" style={{
        position: 'relative', padding: '120px 56px 140px', overflow: 'hidden',
      }}>
        <div className="mo-parallax" data-parallax="0.3" style={{
          position: 'absolute', top: '50%', left: '70%',
          width: 520, height: 520, borderRadius: '50%',
          background: `radial-gradient(circle, ${violet}40 0%, ${violet}15 35%, transparent 65%)`,
          filter: 'blur(30px)', transform: 'translate(-50%,-50%)', pointerEvents: 'none',
        }}/>
        <div style={{ maxWidth: 1120, margin: '0 auto', position: 'relative' }}>
          <div data-fade style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 12px', border: `1px solid ${line}`, borderRadius: 999,
            fontSize: 12, color: muted, marginBottom: 32, background: bg,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: violet }}/>
            Now in closed beta
          </div>
          <h1 data-fade data-delay="80" style={{
            fontSize: 96, lineHeight: 0.96, fontWeight: 600, letterSpacing: -3.5,
            margin: '0 0 32px', maxWidth: 900,
          }}>
            Study smarter.<br/>
            <span style={{ color: muted, fontWeight: 500 }}>No screen required.</span>
          </h1>
          <p data-fade data-delay="160" style={{
            fontSize: 19, color: muted, maxWidth: 560, margin: '0 0 40px', lineHeight: 1.5,
          }}>
            Lumen is an AI study coach that runs through your smart glasses. It sees what you're working on, tells you what's next, and keeps you in flow.
          </p>
          <div data-fade data-delay="240" style={{ display: 'flex', gap: 12, marginBottom: 64 }}>
            <a href="#waitlist" className="mo-shim" style={{
              padding: '14px 22px', background: ink, color: bg,
              borderRadius: 10, textDecoration: 'none',
              fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ position: 'relative', display: 'inline-flex', gap: 8, alignItems: 'center' }}>
                ✦ Join the waitlist
              </span>
            </a>
            <a href="#features" className="mo-a" style={{
              padding: '14px 22px', border: `1px solid ${line}`,
              borderRadius: 10, fontSize: 14, fontWeight: 500, background: bg,
            }}>
              See how it works ↓
            </a>
          </div>

          {/* Mini stats row */}
          <div data-fade data-delay="320" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
            borderTop: `1px solid ${line}`, paddingTop: 24,
          }}>
            {[
              { k: '4.2×', v: 'faster recall' },
              { k: '28 min', v: 'daily focus gained' },
              { k: '92%', v: 'quiz retention' },
              { k: '0', v: 'screen time added' },
            ].map(s => (
              <div key={s.v}>
                <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -1, color: ink }}>{s.k}</div>
                <div style={{ fontSize: 13, color: muted }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO / pullquote */}
      <section style={{ padding: '100px 56px', borderTop: `1px solid ${line}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p data-fade style={{ fontSize: 13, color: muted, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 24, fontWeight: 500 }}>— Manifesto</p>
          <p data-fade data-delay="100" style={{ fontSize: 40, lineHeight: 1.25, fontWeight: 500, letterSpacing: -1, margin: '0 0 20px' }}>
            Every study app demands your attention before it gives anything back.
          </p>
          <p data-fade data-delay="200" style={{ fontSize: 28, lineHeight: 1.35, color: muted, fontWeight: 400, letterSpacing: -0.5, margin: 0 }}>
            Lumen flips that. Your coach comes to <span style={{ color: violet }}>you</span> — no logging, no dashboards, no friction.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: '100px 56px', background: '#efefec', borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}` }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <p data-fade style={{ fontSize: 13, color: muted, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12, fontWeight: 500 }}>— Features</p>
              <h2 data-fade data-delay="80" style={{ fontSize: 48, fontWeight: 600, letterSpacing: -1.6, margin: 0, maxWidth: 640, lineHeight: 1.05 }}>
                Built around how you actually study.
              </h2>
            </div>
            <p data-fade data-delay="160" style={{ fontSize: 15, color: muted, maxWidth: 320, margin: 0 }}>
              Four systems working quietly in the background so you can keep your head down.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: line, border: `1px solid ${line}` }}>
            {[
              { t: 'Passive Capture', d: 'Glasses quietly photograph your notes while you study.', icon: (<><circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.4"/><circle cx="16" cy="16" r="3" fill="currentColor"/></>) },
              { t: 'AI Coaching', d: 'Get told exactly what to do next, personalized to your gaps.', icon: (<><path d="M10 20 L16 8 L22 20" stroke="currentColor" strokeWidth="1.4" fill="none"/><path d="M12 16 H20" stroke="currentColor" strokeWidth="1.4"/></>) },
              { t: 'Flashcards + Quizzes', d: 'Auto-generated from the material your eyes passed over.', icon: (<><rect x="7" y="9" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none"/><rect x="11" y="5" width="14" height="14" rx="2" stroke={violet} strokeWidth="1.4" fill="none" opacity="0.6"/></>) },
              { t: 'Screen-free flow', d: 'Audio coaching so you never break focus.', icon: (<><path d="M8 16a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.4" fill="none"/><rect x="6" y="15" width="4" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none"/><rect x="22" y="15" width="4" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none"/></>) },
            ].map((f, i) => (
              <div key={f.t} className="mo-card" data-fade data-delay={i * 80} style={{
                background: bg, padding: '32px 28px', minHeight: 220, border: 'none',
              }}>
                <svg viewBox="0 0 32 32" width="32" height="32" style={{ color: ink, marginBottom: 24 }}>{f.icon}</svg>
                <h3 style={{ fontSize: 18, fontWeight: 600, margin: '0 0 8px', letterSpacing: -0.3 }}>{f.t}</h3>
                <p style={{ fontSize: 14, color: muted, margin: 0, lineHeight: 1.5 }}>{f.d}</p>
                <div style={{ marginTop: 20, fontSize: 12, color: violet, fontWeight: 500 }}>0{i + 1} →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP SHOWCASE */}
      <section id="app" style={{ padding: '120px 56px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div data-fade style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: 300, height: 600, borderRadius: 46,
              background: ink, padding: 10,
              boxShadow: `0 30px 80px ${violet}22, 0 10px 30px rgba(0,0,0,.12)`,
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)', width: 100, height: 24, borderRadius: 999, background: ink, zIndex: 2 }}/>
              <div style={{
                width: '100%', height: '100%', borderRadius: 38,
                background: '#f0efec', padding: '52px 18px 18px',
                display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: 11, color: muted, letterSpacing: 0.3 }}>Aria</div>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: violet }}/>
                </div>
                <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.5, lineHeight: 1.2 }}>Strong session today.</div>
                <div style={{ background: bg, padding: 14, borderRadius: 14, border: `1px solid ${line}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <div style={{ fontSize: 11, color: muted, textTransform: 'uppercase', letterSpacing: 0.5 }}>Next up</div>
                    <div style={{ fontSize: 11, color: violet }}>14 min</div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>Quiz: Krebs cycle intermediates</div>
                </div>
                <div style={{ background: bg, padding: 14, borderRadius: 14, flex: 1, border: `1px solid ${line}` }}>
                  <div style={{ fontSize: 11, color: muted, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 }}>Focus this week</div>
                  <div style={{ display: 'flex', gap: 5, alignItems: 'flex-end', height: 90 }}>
                    {[35, 60, 45, 72, 55, 88, 40].map((h, i) => (
                      <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 5 ? violet : ink, borderRadius: 3, opacity: i === 5 ? 1 : 0.12 }}/>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 10, color: muted }}>
                    <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span style={{ color: violet, fontWeight: 600 }}>S</span><span>S</span>
                  </div>
                </div>
                <button style={{ padding: '12px', background: ink, color: bg, border: 'none', borderRadius: 12, fontSize: 13, fontWeight: 500 }}>Start session</button>
              </div>
            </div>
          </div>
          <div>
            <p data-fade style={{ fontSize: 13, color: muted, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 14, fontWeight: 500 }}>— Companion app</p>
            <h2 data-fade data-delay="80" style={{ fontSize: 52, fontWeight: 600, letterSpacing: -1.6, margin: '0 0 20px', lineHeight: 1.05 }}>
              Meet <span style={{ color: violet }}>Aria</span>.
            </h2>
            <p data-fade data-delay="160" style={{ fontSize: 18, color: muted, marginBottom: 28, maxWidth: 440 }}>
              Aria turns every session into a tidy summary, a next-step prompt, and a quiz queue.
            </p>
            <div data-fade data-delay="240" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { k: 'Session summaries', v: 'Auto-written recap of everything you covered.' },
                { k: 'Streak tracking', v: 'Gentle nudges, no guilt trips.' },
                { k: 'Behavior insights', v: 'Where your attention actually went.' },
              ].map(r => (
                <div key={r.k} style={{ display: 'flex', gap: 14, padding: '14px 0', borderTop: `1px solid ${line}` }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: violet, marginTop: 6, flexShrink: 0 }}/>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: 15, marginBottom: 2 }}>{r.k}</div>
                    <div style={{ fontSize: 14, color: muted }}>{r.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '100px 56px', borderTop: `1px solid ${line}`, background: '#efefec' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <p data-fade style={{ fontSize: 13, color: muted, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 40, fontWeight: 500 }}>— What students say</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { q: "Lumen completely changed how I study for the MCAT. I don't have to think about what to review next.", a: 'Priya K.', r: 'MCAT Candidate' },
              { q: "I was skeptical but within a week my quiz scores went up. It actually knows what I need.", a: 'James T.', r: 'Pre-Med' },
              { q: "The glasses make it feel like the future. No phone between blocks.", a: 'Mia L.', r: 'High School Senior' },
            ].map((t, i) => (
              <article key={i} className="mo-card" data-fade data-delay={i * 100} style={{
                background: bg, padding: '28px 26px', borderRadius: 12,
              }}>
                <div style={{ fontSize: 15, lineHeight: 1.5, marginBottom: 24, letterSpacing: -0.2 }}>"{t.q}"</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: `linear-gradient(135deg, ${violet}, ${ink})` }}/>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{t.a}</div>
                    <div style={{ fontSize: 12, color: muted }}>{t.r}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '120px 56px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <p data-fade style={{ fontSize: 13, color: muted, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 24, fontWeight: 500 }}>— About us</p>
          <h2 data-fade data-delay="80" style={{ fontSize: 48, fontWeight: 600, letterSpacing: -1.6, margin: '0 0 48px', lineHeight: 1.05, maxWidth: 720 }}>
            A small interdisciplinary team building wearable learning tools.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'flex-start' }}>
            <div data-fade data-delay="160" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} style={{ aspectRatio: '1/1', borderRadius: 12, overflow: 'hidden' }}>
                  <StripePlaceholder label={`team ${i + 1}`} bg={i % 2 ? '#e8e8e3' : '#e2e2dd'} stripe="rgba(14,16,20,.06)" ink={muted}/>
                </div>
              ))}
            </div>
            <div>
              <p data-fade data-delay="240" style={{ fontSize: 16, color: muted, lineHeight: 1.65, marginBottom: 16 }}>
                Lumen came together at a wearable-AI hackathon in spring 2026, where our prototype won the wearables track.
              </p>
              <p data-fade data-delay="320" style={{ fontSize: 16, color: muted, lineHeight: 1.65, marginBottom: 16 }}>
                The team spans AI systems, learning science, immersive tech, and product design — with alumni from top CS and learning programs.
              </p>
              <p data-fade data-delay="400" style={{ fontSize: 16, color: muted, lineHeight: 1.65 }}>
                We built Lumen because we wanted the kind of personalized tutoring we never had access to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" style={{ padding: '100px 56px', borderTop: `1px solid ${line}` }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', background: ink, color: bg, borderRadius: 24, padding: '72px 56px', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', right: -80, top: -80, width: 360, height: 360, borderRadius: '50%',
            background: `radial-gradient(circle, ${violet}80 0%, transparent 70%)`,
          }}/>
          <div style={{ position: 'relative', maxWidth: 460 }}>
            <p data-fade style={{ fontSize: 13, color: violet, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16, fontWeight: 500 }}>— Join the waitlist</p>
            <h2 data-fade data-delay="80" style={{ fontSize: 48, fontWeight: 600, letterSpacing: -1.4, margin: '0 0 24px', lineHeight: 1.05 }}>
              Be first in line.
            </h2>
            <p data-fade data-delay="160" style={{ fontSize: 15, color: `${bg}aa`, marginBottom: 28 }}>
              We're onboarding our first 500 students this summer. Drop your email below.
            </p>
            <form data-fade data-delay="240" onSubmit={(e) => { e.preventDefault(); alert("You're on the list."); }} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <input placeholder="Name" style={inpMo} required/>
                <input placeholder="Title (optional)" style={inpMo}/>
              </div>
              <input placeholder="you@example.com" type="email" style={inpMo} required/>
              <button className="mo-shim" type="submit" style={{
                marginTop: 6, padding: '14px', background: violet, color: '#fff',
                border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600,
                cursor: 'pointer', position: 'relative', overflow: 'hidden',
              }}>
                <span style={{ position: 'relative' }}>Submit →</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px 56px', borderTop: `1px solid ${line}` }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontSize: 13, color: muted }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600, color: ink }}>
            <span style={{ width: 18, height: 18, borderRadius: 5, background: violet }}/>
            Lumen
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#features" className="mo-a">Features</a>
            <a href="#about" className="mo-a">About</a>
            <a href="mailto:hello@lumen.study" className="mo-a">hello@lumen.study</a>
          </div>
          <div>© 2026 Lumen</div>
        </div>
      </footer>
    </div>
  );
}

const inpMo = {
  padding: '12px 14px', background: 'rgba(246,246,243,.06)',
  border: '1px solid rgba(246,246,243,.15)', borderRadius: 8,
  color: '#f6f6f3', fontSize: 14, outline: 'none',
  fontFamily: 'inherit',
};

Object.assign(window, { ModernDirection });
