// Direction 3 — Dark Premium
// Near-black bg, bone type, electric lime accent, product-launch feel

function DarkDirection() {
  const rootRef = React.useRef(null);
  useFadeUp(rootRef);
  useParallax(rootRef, '.dk-parallax');
  useSmoothScroll(rootRef);

  const bg = '#0a0b0d';
  const bg2 = '#121317';
  const bone = '#eae6de';
  const lime = '#d4ff4a';
  const muted = '#8a8b90';
  const line = '#ffffff14';

  return (
    <div ref={rootRef} style={{
      width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',
      background: bg, color: bone,
      fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", -apple-system, sans-serif',
      fontSize: 15, lineHeight: 1.55, scrollbarWidth: 'thin',
    }}>
      <style>{`
        .dk-shim { position: relative; overflow: hidden; }
        .dk-shim::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,.25) 50%, transparent 70%);
          transform: translateX(-120%);
          animation: dkShim 3s ease-in-out infinite;
        }
        @keyframes dkShim { 0%,30% { transform: translateX(-120%); } 60%,100% { transform: translateX(120%); } }
        .dk-card { transition: transform .35s cubic-bezier(.2,.7,.2,1), border-color .35s, background .35s; }
        .dk-card:hover { transform: translateY(-3px); border-color: ${lime}66; background: ${bg2}; }
        .dk-a { color: inherit; text-decoration: none; transition: color .2s; }
        .dk-a:hover { color: ${lime}; }
        .dk-pulse { animation: dkPulse 3s ease-in-out infinite; }
        @keyframes dkPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '18px 56px', background: `${bg}dd`, backdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${line}`,
      }}>
        <a href="#hero" className="dk-a" style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 500, fontSize: 17, letterSpacing: -0.3 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: lime, display: 'inline-block' }} className="dk-pulse"/>
          LUMEN
        </a>
        <div style={{ display: 'flex', gap: 28, fontSize: 13, alignItems: 'center', letterSpacing: 0.2 }}>
          <a href="#features" className="dk-a">Features</a>
          <a href="#app" className="dk-a">App</a>
          <a href="#about" className="dk-a">Team</a>
          <a href="#waitlist" className="dk-a" style={{
            padding: '9px 16px', background: lime, color: bg, borderRadius: 999, fontWeight: 600,
          }}>Request access</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" style={{
        position: 'relative', padding: '140px 56px 160px', overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div className="dk-parallax" data-parallax="0.35" style={{
          position: 'absolute', top: '55%', left: '50%',
          width: 900, height: 900, borderRadius: '50%',
          background: `radial-gradient(circle, ${lime}1f 0%, ${lime}0a 30%, transparent 60%)`,
          filter: 'blur(20px)', transform: 'translate(-50%,-50%)', pointerEvents: 'none',
        }}/>
        <div className="dk-parallax" data-parallax="0.18" style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 520, height: 520, borderRadius: '50%',
          border: `1px solid ${lime}22`, transform: 'translate(-50%,-50%)', pointerEvents: 'none',
        }}/>
        <div className="dk-parallax" data-parallax="0.12" style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 720, height: 720, borderRadius: '50%',
          border: `1px solid ${lime}14`, transform: 'translate(-50%,-50%)', pointerEvents: 'none',
        }}/>

        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
          <div data-fade style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '7px 14px', border: `1px solid ${line}`, borderRadius: 999,
            fontSize: 12, color: muted, marginBottom: 36, background: `${bg2}aa`,
            fontFamily: 'ui-monospace, Menlo, monospace', letterSpacing: 0.5,
          }}>
            <span className="dk-pulse" style={{ width: 6, height: 6, borderRadius: '50%', background: lime }}/>
            v0.3 · closed beta · invite-only
          </div>
          <h1 data-fade data-delay="80" style={{
            fontSize: 108, lineHeight: 0.94, fontWeight: 500, letterSpacing: -4.5,
            margin: '0 0 32px',
          }}>
            Your coach,<br/>
            <span style={{ color: lime }}>on your face.</span>
          </h1>
          <p data-fade data-delay="160" style={{
            fontSize: 19, color: muted, maxWidth: 540, margin: '0 auto 44px', lineHeight: 1.55,
          }}>
            Lumen is an AI study companion that lives in your smart glasses. It sees what you see, tells you what's next — so you never stop studying to plan your study.
          </p>
          <div data-fade data-delay="240" style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <a href="#waitlist" className="dk-shim" style={{
              padding: '16px 28px', background: lime, color: bg,
              borderRadius: 999, textDecoration: 'none',
              fontSize: 14, fontWeight: 600, letterSpacing: 0.2,
            }}>
              <span style={{ position: 'relative' }}>Request early access →</span>
            </a>
            <a href="#features" className="dk-a" style={{
              padding: '16px 24px', border: `1px solid ${line}`,
              borderRadius: 999, fontSize: 14, fontWeight: 500,
            }}>
              Watch demo
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE / social proof */}
      <section style={{ padding: '28px 0', borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}`, overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 64, whiteSpace: 'nowrap', color: muted, fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: 'ui-monospace, Menlo, monospace' }}>
          {['MIT Reality Hack · grand prize', 'Meta wearables track · winner', 'Y Combinator S26 · backed', 'a16z speedrun · selected', 'MIT Reality Hack · grand prize', 'Meta wearables track · winner'].map((s, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 64 }}>
              {s}
              <span style={{ color: lime }}>✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section style={{ padding: '140px 56px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p data-fade style={{ fontSize: 12, color: lime, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 36, fontFamily: 'ui-monospace, Menlo, monospace' }}>[ Manifesto ]</p>
          <p data-fade data-delay="100" style={{ fontSize: 48, lineHeight: 1.15, fontWeight: 400, letterSpacing: -1.5, margin: '0 0 32px' }}>
            Every study tool demands attention before giving any back. Dashboards. Streaks. Logins.
          </p>
          <p data-fade data-delay="200" style={{ fontSize: 32, lineHeight: 1.3, color: muted, fontWeight: 400, letterSpacing: -0.8, margin: 0 }}>
            Lumen is the opposite. It watches. It learns. It tells you what to do. You just keep studying.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: '100px 56px', background: bg2 }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <p data-fade style={{ fontSize: 12, color: lime, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16, fontFamily: 'ui-monospace, Menlo, monospace' }}>[ System ]</p>
              <h2 data-fade data-delay="80" style={{ fontSize: 60, fontWeight: 500, letterSpacing: -2, margin: 0, maxWidth: 680, lineHeight: 1.02 }}>
                Four components. One continuous loop.
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {[
              { n: '01', t: 'Passive capture', d: 'Your glasses quietly photograph pages, whiteboards, and screens as you study. No tap required.' },
              { n: '02', t: 'AI coaching loop', d: 'A model tracks which concepts you\'ve encountered, which you\'ve struggled with, and what to hit next.' },
              { n: '03', t: 'Auto flashcards', d: 'Every session becomes a ready-made review deck — generated from your own material.' },
              { n: '04', t: 'Audio-only flow', d: 'Coaching delivered through bone-conduction audio. You never break eye contact with your notes.' },
            ].map((f, i) => (
              <div key={f.n} className="dk-card" data-fade data-delay={i * 80} style={{
                padding: '40px 36px', border: `1px solid ${line}`, borderRadius: 16,
                minHeight: 200, background: bg,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
                  <span style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12, color: lime, letterSpacing: 1 }}>{f.n}</span>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: `${lime}18`, border: `1px solid ${lime}40` }}/>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 500, margin: '0 0 12px', letterSpacing: -0.5 }}>{f.t}</h3>
                <p style={{ fontSize: 15, color: muted, margin: 0, lineHeight: 1.55 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP SHOWCASE */}
      <section id="app" style={{ padding: '140px 56px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p data-fade style={{ fontSize: 12, color: lime, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16, fontFamily: 'ui-monospace, Menlo, monospace' }}>[ Companion ]</p>
            <h2 data-fade data-delay="80" style={{ fontSize: 60, fontWeight: 500, letterSpacing: -2, margin: '0 0 24px', lineHeight: 1.02 }}>
              Meet Aria.
            </h2>
            <p data-fade data-delay="160" style={{ fontSize: 18, color: muted, marginBottom: 40, maxWidth: 480, lineHeight: 1.5 }}>
              The pocket-side of Lumen. Session recaps, quiz queues, progress graphs — everything Lumen sees, organized for you.
            </p>
            <div data-fade data-delay="240" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { k: 'Session summary', v: 'Auto-transcribed recap in under 30 seconds.' },
                { k: 'Streak tracking', v: 'Honest metrics, not dopamine traps.' },
                { k: 'Behavior insights', v: 'Where your attention actually goes.' },
              ].map((r, i) => (
                <div key={r.k} style={{
                  display: 'flex', gap: 20, padding: '20px 0',
                  borderTop: i === 0 ? `1px solid ${line}` : 'none',
                  borderBottom: `1px solid ${line}`,
                }}>
                  <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', color: lime, fontSize: 12, width: 28, paddingTop: 4 }}>0{i + 1}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 4, letterSpacing: -0.3 }}>{r.k}</div>
                    <div style={{ fontSize: 14, color: muted }}>{r.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div data-fade data-delay="200" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: 300, height: 610, borderRadius: 46,
              background: '#000', padding: 9,
              boxShadow: `0 40px 100px ${lime}18, 0 10px 30px rgba(0,0,0,.5), inset 0 0 0 1px ${line}`,
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)', width: 100, height: 24, borderRadius: 999, background: '#000', zIndex: 2 }}/>
              <div style={{
                width: '100%', height: '100%', borderRadius: 38,
                background: bg, padding: '52px 18px 18px',
                display: 'flex', flexDirection: 'column', gap: 12,
                border: `1px solid ${line}`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: 11, color: muted, letterSpacing: 0.5, fontFamily: 'ui-monospace, Menlo, monospace' }}>ARIA · 18:42</div>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: lime }} className="dk-pulse"/>
                </div>
                <div style={{ fontSize: 20, fontWeight: 500, letterSpacing: -0.5, lineHeight: 1.2, color: bone }}>Nice 54-min block.</div>
                <div style={{ background: bg2, padding: 14, borderRadius: 14, border: `1px solid ${line}` }}>
                  <div style={{ fontSize: 10, color: lime, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6, fontFamily: 'ui-monospace, Menlo, monospace' }}>↳ Next</div>
                  <div style={{ fontSize: 13, color: bone, marginBottom: 4 }}>Flashcard review — 8 cards</div>
                  <div style={{ fontSize: 11, color: muted }}>Glycolysis intermediates</div>
                </div>
                <div style={{ background: bg2, padding: 14, borderRadius: 14, flex: 1, border: `1px solid ${line}` }}>
                  <div style={{ fontSize: 10, color: muted, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10, fontFamily: 'ui-monospace, Menlo, monospace' }}>focus · 7d</div>
                  <div style={{ display: 'flex', gap: 5, alignItems: 'flex-end', height: 90 }}>
                    {[35, 60, 45, 72, 55, 88, 40].map((h, i) => (
                      <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 5 ? lime : bone, borderRadius: 2, opacity: i === 5 ? 1 : 0.15 }}/>
                    ))}
                  </div>
                </div>
                <button style={{ padding: '12px', background: lime, color: bg, border: 'none', borderRadius: 12, fontSize: 13, fontWeight: 600, letterSpacing: 0.3 }}>▶  Start next session</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '100px 56px', background: bg2 }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <p data-fade style={{ fontSize: 12, color: lime, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 44, fontFamily: 'ui-monospace, Menlo, monospace' }}>[ Early users ]</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { q: "Lumen completely changed how I study for the MCAT. I don't have to think about what to review next.", a: 'Priya K.', r: 'MCAT Candidate' },
              { q: "Within a week my quiz scores went up. It actually knows what I need.", a: 'James T.', r: 'Pre-Med Student' },
              { q: "The glasses make it feel like the future. No phone between blocks.", a: 'Mia L.', r: 'HS Senior' },
            ].map((t, i) => (
              <article key={i} className="dk-card" data-fade data-delay={i * 100} style={{
                padding: '32px 28px', border: `1px solid ${line}`, borderRadius: 16, background: bg,
              }}>
                <div style={{ fontSize: 32, color: lime, lineHeight: 0.5, marginBottom: 20, fontFamily: 'Georgia, serif' }}>"</div>
                <div style={{ fontSize: 15, lineHeight: 1.55, marginBottom: 28, letterSpacing: -0.1 }}>{t.q}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: `1px solid ${line}` }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: `linear-gradient(135deg, ${lime}, ${bone})` }}/>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{t.a}</div>
                    <div style={{ fontSize: 12, color: muted }}>{t.r}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '140px 56px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <p data-fade style={{ fontSize: 12, color: lime, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 28, fontFamily: 'ui-monospace, Menlo, monospace' }}>[ Team ]</p>
          <h2 data-fade data-delay="80" style={{ fontSize: 52, fontWeight: 500, letterSpacing: -1.8, margin: '0 0 56px', lineHeight: 1.05, maxWidth: 820 }}>
            Five builders. One shared frustration with how we were taught.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'flex-start' }}>
            <div data-fade data-delay="160" style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3', border: `1px solid ${line}` }}>
              <StripePlaceholder label="team · spring 2026" bg={bg2} stripe="rgba(255,255,255,.04)" ink={muted}/>
            </div>
            <div>
              <p data-fade data-delay="240" style={{ fontSize: 16, color: muted, lineHeight: 1.7, marginBottom: 20 }}>
                We first built this at a wearable-AI hackathon in spring 2026. The prototype won the wearables track; we kept going.
              </p>
              <p data-fade data-delay="320" style={{ fontSize: 16, color: muted, lineHeight: 1.7, marginBottom: 20 }}>
                The team crosses AI systems, learning science, immersive tech, and product design — with alumni from top CS and education programs, and prior work at cloud, finance, and XR labs.
              </p>
              <p data-fade data-delay="400" style={{ fontSize: 16, color: muted, lineHeight: 1.7 }}>
                We all studied alone, with too little feedback. Lumen is the tool we wish we'd had.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" style={{ padding: '120px 56px', borderTop: `1px solid ${line}` }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%', width: 600, height: 600,
            borderRadius: '50%', background: `radial-gradient(circle, ${lime}15 0%, transparent 60%)`,
            filter: 'blur(40px)', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0,
          }}/>
          <div style={{ position: 'relative' }}>
            <p data-fade style={{ fontSize: 12, color: lime, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20, fontFamily: 'ui-monospace, Menlo, monospace' }}>[ Request access ]</p>
            <h2 data-fade data-delay="80" style={{ fontSize: 64, fontWeight: 500, letterSpacing: -2.4, margin: '0 0 20px', lineHeight: 1 }}>
              Get on the list.
            </h2>
            <p data-fade data-delay="160" style={{ fontSize: 15, color: muted, marginBottom: 36 }}>
              First 500 users go live this summer. Invites roll out weekly.
            </p>
            <form data-fade data-delay="240" onSubmit={(e) => { e.preventDefault(); alert("You're on the list."); }} style={{ display: 'flex', flexDirection: 'column', gap: 10, textAlign: 'left' }}>
              <input placeholder="Name" style={inpDk} required/>
              <input placeholder="you@example.com" type="email" style={inpDk} required/>
              <button className="dk-shim" type="submit" style={{
                marginTop: 8, padding: '16px', background: lime, color: bg,
                border: 'none', borderRadius: 999, fontSize: 14, fontWeight: 600,
                letterSpacing: 0.3, cursor: 'pointer', position: 'relative', overflow: 'hidden',
              }}>
                <span style={{ position: 'relative' }}>Request access →</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px 56px', borderTop: `1px solid ${line}` }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontSize: 13, color: muted }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 500, color: bone, letterSpacing: 0.3 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: lime }}/>
            LUMEN
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#features" className="dk-a">Features</a>
            <a href="#about" className="dk-a">Team</a>
            <a href="mailto:hello@lumen.study" className="dk-a">hello@lumen.study</a>
          </div>
          <div>© 2026 Lumen Labs</div>
        </div>
      </footer>
    </div>
  );
}

const inpDk = {
  padding: '14px 18px', background: 'rgba(255,255,255,.04)',
  border: '1px solid rgba(255,255,255,.12)', borderRadius: 10,
  color: '#eae6de', fontSize: 14, outline: 'none',
  fontFamily: 'inherit',
};

Object.assign(window, { DarkDirection });
