import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'

// ── Logo with Greek subtitle ──
function Logo({ className, showSub = false }) {
  return (
    <span className={className}>
      <span className="logo-main">CreteΚos</span>
      {showSub && <span className="logo-greek-sub">Κρητικός</span>}
    </span>
  )
}

// ── Greek Key / Meander Pattern SVG ──
function GreekKeyDivider() {
  const [ref, visible] = useReveal(0.3)
  return (
    <div ref={ref} className={`greek-key-divider ${visible ? 'visible' : ''}`}>
      <svg viewBox="0 0 600 16" preserveAspectRatio="xMidYMid meet" className="greek-key-svg">
        {/* Repeating Greek key/meander motif */}
        {[...Array(15)].map((_, i) => (
          <g key={i} transform={`translate(${i * 40}, 0)`}>
            <path d="M0 8 L0 0 L8 0 L8 8 L16 8 L16 0 L24 0 L24 16 L16 16 L16 8 L8 8 L8 16 L0 16 L0 8 M24 8 L32 8 L32 0 L40 0"
              fill="none" stroke="rgba(184,151,59,0.35)" strokeWidth="1"/>
          </g>
        ))}
      </svg>
    </div>
  )
}

// ── Olive Wreath SVG (for hero badge) ──
function OliveWreath({ className }) {
  return (
    <svg className={className} viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left branch */}
      <path d="M30 40 Q40 25 55 20 Q65 17 75 16" stroke="rgba(184,151,59,0.5)" strokeWidth="1" fill="none"/>
      <ellipse cx="38" cy="32" rx="8" ry="4" transform="rotate(-40 38 32)" fill="rgba(184,151,59,0.2)" stroke="rgba(184,151,59,0.35)" strokeWidth="0.5"/>
      <ellipse cx="48" cy="25" rx="7" ry="3.5" transform="rotate(-30 48 25)" fill="rgba(184,151,59,0.15)" stroke="rgba(184,151,59,0.3)" strokeWidth="0.5"/>
      <ellipse cx="58" cy="20" rx="7" ry="3.5" transform="rotate(-15 58 20)" fill="rgba(184,151,59,0.15)" stroke="rgba(184,151,59,0.3)" strokeWidth="0.5"/>
      {/* Right branch */}
      <path d="M130 40 Q120 25 105 20 Q95 17 85 16" stroke="rgba(184,151,59,0.5)" strokeWidth="1" fill="none"/>
      <ellipse cx="122" cy="32" rx="8" ry="4" transform="rotate(40 122 32)" fill="rgba(184,151,59,0.2)" stroke="rgba(184,151,59,0.35)" strokeWidth="0.5"/>
      <ellipse cx="112" cy="25" rx="7" ry="3.5" transform="rotate(30 112 25)" fill="rgba(184,151,59,0.15)" stroke="rgba(184,151,59,0.3)" strokeWidth="0.5"/>
      <ellipse cx="102" cy="20" rx="7" ry="3.5" transform="rotate(15 102 20)" fill="rgba(184,151,59,0.15)" stroke="rgba(184,151,59,0.3)" strokeWidth="0.5"/>
    </svg>
  )
}

// ── Olive Branch SVG ──
function OliveBranch({ className }) {
  return (
    <svg className={className} viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 0 C60 60, 40 80, 20 100 C0 120, 10 140, 30 150 C50 160, 60 180, 60 200 C60 220, 40 240, 30 260 C20 280, 40 300, 60 300"
        stroke="rgba(184,151,59,0.6)" strokeWidth="1.5" fill="none"/>
      <ellipse cx="18" cy="85" rx="12" ry="6" transform="rotate(-30 18 85)" fill="rgba(184,151,59,0.4)"/>
      <ellipse cx="8" cy="110" rx="12" ry="6" transform="rotate(-45 8 110)" fill="rgba(184,151,59,0.3)"/>
      <ellipse cx="30" cy="145" rx="10" ry="5" transform="rotate(15 30 145)" fill="rgba(184,151,59,0.35)"/>
      <ellipse cx="80" cy="60" rx="11" ry="5" transform="rotate(20 80 60)" fill="rgba(184,151,59,0.3)"/>
      <ellipse cx="42" cy="235" rx="11" ry="5.5" transform="rotate(-25 42 235)" fill="rgba(184,151,59,0.3)"/>
      <ellipse cx="25" cy="270" rx="10" ry="5" transform="rotate(-40 25 270)" fill="rgba(184,151,59,0.25)"/>
    </svg>
  )
}

// ── Mandala SVG (Indian motif) ──
function Mandala({ className, size = 300 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="95" stroke="rgba(212,132,42,0.3)" strokeWidth="0.5"/>
      <circle cx="100" cy="100" r="75" stroke="rgba(184,151,59,0.3)" strokeWidth="0.5"/>
      <circle cx="100" cy="100" r="55" stroke="rgba(212,132,42,0.25)" strokeWidth="0.5"/>
      <circle cx="100" cy="100" r="35" stroke="rgba(184,151,59,0.25)" strokeWidth="0.5"/>
      {[...Array(12)].map((_, i) => (
        <g key={i} transform={`rotate(${i * 30} 100 100)`}>
          <ellipse cx="100" cy="30" rx="4" ry="12" fill="rgba(184,151,59,0.15)"
            transform="rotate(0 100 30)"/>
          <line x1="100" y1="5" x2="100" y2="40" stroke="rgba(212,132,42,0.15)" strokeWidth="0.5"/>
        </g>
      ))}
      {[...Array(8)].map((_, i) => (
        <g key={`p-${i}`} transform={`rotate(${i * 45} 100 100)`}>
          <path d="M100 50 Q108 65 100 80 Q92 65 100 50Z" fill="rgba(184,151,59,0.08)"
            stroke="rgba(184,151,59,0.15)" strokeWidth="0.5"/>
        </g>
      ))}
    </svg>
  )
}

// ── Rangoli Divider ──
function RangoliDivider() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.unobserve(el) }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`rangoli-divider ${visible ? 'visible' : ''}`}>
      <div className="line" />
      <div className="rangoli-diamond" />
      <div className="rangoli-diamond" />
      <div className="rangoli-diamond" />
      <div className="line" />
    </div>
  )
}

// ── Scroll Reveal Hook ──
function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.unobserve(el) }
    }, { threshold, rootMargin: '0px 0px -40px 0px' })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, visible]
}

// ── Reveal wrapper ──
function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal()
  const delayClass = delay ? `reveal-d${delay}` : ''
  return (
    <div ref={ref} className={`reveal ${delayClass} ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

// ── Divider with scroll animation ──
function Divider() {
  const [ref, visible] = useReveal(0.5)
  return <div ref={ref} className={`divider ${visible ? 'visible' : ''}`} />
}

// ══════════════════════════════
// MAIN APP
// ══════════════════════════════
function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const emailRef = useRef(null)
  const heroRef = useRef(null)
  const heroContentRef = useRef(null)
  const scrollIndicatorRef = useRef(null)

  // Nav scroll state
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Hero parallax
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sy = window.scrollY
          const hh = heroRef.current?.offsetHeight || 1
          if (sy < hh && heroContentRef.current) {
            heroContentRef.current.style.transform = `translateY(${sy * 0.3}px)`
            heroContentRef.current.style.opacity = 1 - (sy / hh) * 1.2
          }
          if (scrollIndicatorRef.current) {
            scrollIndicatorRef.current.style.opacity = Math.max(0, 1 - sy / 200)
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = useCallback((id) => {
    setMenuOpen(false)
    document.body.style.overflow = ''
    const el = document.getElementById(id)
    if (el) {
      const navH = 80
      const top = el.getBoundingClientRect().top + window.scrollY - navH
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const handleSubmit = () => {
    const email = emailRef.current?.value?.trim()
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitted(true)
      console.log('Waitlist signup:', email)
    } else {
      setEmailError(true)
      emailRef.current?.focus()
      setTimeout(() => setEmailError(false), 2000)
    }
  }

  return (
    <>
      {/* ── NAV ── */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo showSub />
        </div>
        <div className="nav-links">
          <a href="#story" onClick={(e) => { e.preventDefault(); scrollTo('story') }}>Our Story</a>
          <a href="#collection" onClick={(e) => { e.preventDefault(); scrollTo('collection') }}>Collection</a>
          <a href="#waitlist" onClick={(e) => { e.preventDefault(); scrollTo('waitlist') }}>Join Waitlist</a>
        </div>
        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#story" onClick={(e) => { e.preventDefault(); scrollTo('story') }}>Our Story</a>
        <a href="#collection" onClick={(e) => { e.preventDefault(); scrollTo('collection') }}>Collection</a>
        <a href="#waitlist" onClick={(e) => { e.preventDefault(); scrollTo('waitlist') }}>Join Waitlist</a>
      </div>

      {/* ── HERO ── */}
      <section className="hero" ref={heroRef}>
        <OliveBranch className="hero-branch hero-branch-left" />
        <OliveBranch className="hero-branch hero-branch-right" />

        <div className="hero-content" ref={heroContentRef}>
          <div className="hero-badge-wrap">
            <OliveWreath className="hero-wreath" />
            <div className="hero-badge">From the Groves of Crete</div>
          </div>
          <h1>4,000 Years<br/>in Every <em>Drop</em></h1>
          <p className="hero-sub">
            Single-origin extra virgin olive oil from the sun-drenched hills of Crete, Greece.
            Cold-pressed within hours of harvest. Now arriving in India.
          </p>
          <a href="#waitlist" className="hero-cta" onClick={(e) => { e.preventDefault(); scrollTo('waitlist') }}>
            Join the Waitlist
          </a>
        </div>
        <div className="scroll-indicator" ref={scrollIndicatorRef}>
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      <GreekKeyDivider />

      {/* ── STORY ── */}
      <section className="story" id="story">
        <Reveal><div className="section-label">Our Story</div></Reveal>
        <Reveal delay={1}>
          <h2>Born on the hills of Crete, where olive trees have stood for millennia</h2>
        </Reveal>
        <Reveal delay={2}>
          <p>
            CreteΚos is not mass-produced. Our Koroneiki olives are handpicked from family groves
            that have been cultivated for generations on the rocky, sun-drenched hillsides of western Crete.
            Each bottle is cold-pressed within four hours of harvest to preserve the oil's extraordinary
            polyphenol content, peppery finish, and deep golden color.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <p>
            We believe India's finest kitchens deserve olive oil that hasn't been blended, diluted, or
            stripped of character. CreteΚos is single-origin, traceable to specific groves, and made
            with an uncompromising commitment to quality that has defined Cretan olive oil since antiquity.
          </p>
        </Reveal>
      </section>

      <RangoliDivider />

      {/* ── HERITAGE: Greek × India ── */}
      <section className="heritage" id="heritage">
        <Mandala className="mandala-bg" size={400} style={{ top: '-60px', right: '-120px', position: 'absolute' }} />
        <Mandala className="mandala-bg" size={300} style={{ bottom: '-40px', left: '-100px', position: 'absolute' }} />
        <div className="heritage-inner">
          <Reveal><div className="section-label">Two Ancient Civilizations, One Table</div></Reveal>
          <Reveal delay={1}>
            <h2>
              <span className="greek">Greek</span> heritage, crafted for the <span className="indian">Indian</span> kitchen
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="heritage-sub">
              Crete and India share a reverence for food as culture, for ingredients as heritage.
              CreteΚos bridges 4,000 years of Mediterranean tradition with the richness of Indian cuisine.
            </p>
          </Reveal>
          <div className="heritage-pillars">
            <Reveal delay={2}>
              <div className="heritage-pillar greek-side">
                <div className="icon">&#127860;</div>
                <h3>Cretan Tradition</h3>
                <p>The Mediterranean diet's purest expression — Koroneiki olives from ancient groves where the first oil was pressed.</p>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="heritage-pillar indian-side">
                <div className="icon">&#127798;</div>
                <h3>Indian Flavour</h3>
                <p>Perfected for tadka, tempering, and finishing. From dal to dosa, olive oil that understands Indian cooking.</p>
              </div>
            </Reveal>
            <Reveal delay={4}>
              <div className="heritage-pillar greek-side">
                <div className="icon">&#129309;</div>
                <h3>Shared Values</h3>
                <p>Both cultures honour hospitality, purity of ingredients, and food prepared with intention and care.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* ── FEATURES ── */}
      <section className="features">
        <div className="features-grid">
          {[
            { icon: '🌿', title: 'Single Origin', desc: '100% Koroneiki olives from certified groves in Chania, western Crete. Never blended with oils from other regions or countries.' },
            { icon: '⏱', title: '4-Hour Press', desc: "Cold-pressed within four hours of handpicking. This rapid processing preserves peak polyphenol levels and the oil's signature peppery bite." },
            { icon: '📍', title: 'Fully Traceable', desc: 'Every bottle carries a harvest date and grove location. Scan the QR code to see exactly where your oil comes from.' },
            { icon: '🏆', title: 'Award-Winning', desc: 'Recognized at international olive oil competitions for exceptional aroma, flavour complexity, and low acidity under 0.3%.' },
            { icon: '🍜', title: 'Made for Indian Cooking', desc: 'With a smoke point of 190°C, CreteΚos is perfect for tadka, sautéing, drizzling over dal, and finishing your favourite dishes.' },
            { icon: '💚', title: 'Health-First', desc: 'Rich in oleic acid and polyphenols — natural compounds linked to heart health, reduced inflammation, and healthy aging.' },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i % 3}>
              <div className="feature">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <GreekKeyDivider />

      {/* ── PRODUCT (single 500ml) ── */}
      <section className="product-section" id="collection">
        <div className="product-header">
          <Reveal><div className="section-label">The Bottle</div></Reveal>
          <Reveal delay={1}><h2>500ml of Pure Cretan Heritage</h2></Reveal>
        </div>
        <div className="product-single">
          <Reveal>
            <div className="product-card product-card-hero">
              <div className="product-size">500</div>
              <div className="product-unit">ml</div>
              <div className="product-name">Extra Virgin Olive Oil</div>
              <div className="product-desc">
                Cold-pressed Koroneiki olives from the groves of Chania, Crete.
                Rich in polyphenols and oleic acid — nature's most potent antioxidants.
                One bottle for your healthiest kitchen.
              </div>
              <div className="product-details">
                <div className="product-detail">
                  <span className="detail-label">Acidity</span>
                  <span className="detail-value">&lt; 0.3%</span>
                </div>
                <div className="product-detail">
                  <span className="detail-label">Polyphenols</span>
                  <span className="detail-value">High</span>
                </div>
                <div className="product-detail">
                  <span className="detail-label">Origin</span>
                  <span className="detail-value">Chania, Crete</span>
                </div>
              </div>
              <div className="product-tag">Premium Single Origin</div>
            </div>
          </Reveal>
        </div>
      </section>

      <RangoliDivider />

      {/* ── WAITLIST ── */}
      <section className="waitlist" id="waitlist">
        <div className="waitlist-inner">
          <Reveal><div className="section-label">Coming Soon to India</div></Reveal>
          <Reveal delay={1}><h2>Be the First to Taste It</h2></Reveal>
          <Reveal delay={2}>
            <p className="sub">
              Join the waitlist for exclusive early access, founding member pricing, and a complimentary tasting guide.
            </p>
          </Reveal>

          {!submitted ? (
            <>
              <Reveal delay={3}>
                <div className="waitlist-form">
                  <input
                    ref={emailRef}
                    type="email"
                    placeholder="Enter your email address"
                    className={emailError ? 'error' : ''}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    autoComplete="email"
                  />
                  <button type="button" onClick={handleSubmit}>Join</button>
                </div>
              </Reveal>
              <Reveal delay={4}>
                <div className="waitlist-note">No spam. Just olive oil updates and early access.</div>
              </Reveal>
            </>
          ) : (
            <div className="success-msg">
              Welcome to CreteΚos. We'll be in touch soon.
            </div>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-logo"><Logo showSub /></div>
        <div className="footer-links">
          <a href="#story" onClick={(e) => { e.preventDefault(); scrollTo('story') }}>Story</a>
          <a href="#collection" onClick={(e) => { e.preventDefault(); scrollTo('collection') }}>Collection</a>
          <a href="https://instagram.com/nourishwithnia" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:hello@cretekos.com">Contact</a>
        </div>
        <div className="footer-copy">&copy; 2026 CreteΚos. Product of Crete, Greece.</div>
      </footer>
    </>
  )
}

export default App
