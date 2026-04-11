import { useEffect, useRef, useState } from 'react'
import './About.css'

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

// ── Reveal Wrapper ──
function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal()
  const delayClass = delay ? `reveal-d${delay}` : ''
  return (
    <div ref={ref} className={`about-reveal ${delayClass} ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

// ── Greek Key Divider ──
function GreekKeyDivider() {
  const [ref, visible] = useReveal(0.3)
  return (
    <div ref={ref} className={`about-greek-key ${visible ? 'visible' : ''}`}>
      <svg viewBox="0 0 600 16" preserveAspectRatio="xMidYMid meet" className="about-greek-key-svg">
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

// ── Rangoli Divider ──
function RangoliDivider() {
  const [ref, visible] = useReveal(0.3)
  return (
    <div ref={ref} className={`about-rangoli ${visible ? 'visible' : ''}`}>
      <div className="about-rangoli-line" />
      <div className="about-rangoli-diamond" />
      <div className="about-rangoli-diamond" />
      <div className="about-rangoli-diamond" />
      <div className="about-rangoli-line" />
    </div>
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

// ── Mandala SVG ──
function Mandala({ className, size = 300, style }) {
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="95" stroke="rgba(212,132,42,0.3)" strokeWidth="0.5"/>
      <circle cx="100" cy="100" r="75" stroke="rgba(184,151,59,0.3)" strokeWidth="0.5"/>
      <circle cx="100" cy="100" r="55" stroke="rgba(212,132,42,0.25)" strokeWidth="0.5"/>
      <circle cx="100" cy="100" r="35" stroke="rgba(184,151,59,0.25)" strokeWidth="0.5"/>
      {[...Array(12)].map((_, i) => (
        <g key={i} transform={`rotate(${i * 30} 100 100)`}>
          <ellipse cx="100" cy="30" rx="4" ry="12" fill="rgba(184,151,59,0.15)" />
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

// ══════════════════════════════
// ABOUT PAGE
// ══════════════════════════════
const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Harvest',
    desc: 'Koroneiki olives handpicked at peak ripeness from family groves in western Crete, following centuries-old traditions.',
    icon: '🫒',
  },
  {
    num: '02',
    title: 'Press',
    desc: 'Cold-pressed within four hours of harvest. No heat, no chemicals. Just pure mechanical extraction at under 27\u00B0C.',
    icon: '⚙',
  },
  {
    num: '03',
    title: 'Test',
    desc: 'Every batch tested by certified labs. Acidity, polyphenol count, peroxide levels, and organoleptic profile verified.',
    icon: '🔬',
  },
  {
    num: '04',
    title: 'Ship',
    desc: 'Sealed in dark glass, shipped temperature-controlled to India. From grove to your kitchen in pristine condition.',
    icon: '✈',
  },
]

const QUALITY_BADGES = [
  { label: 'Acidity', value: '< 0.3%', note: 'EU threshold is 0.8%' },
  { label: 'Polyphenols', value: 'High', note: 'Rich in oleocanthal & oleacein' },
  { label: 'Origin', value: 'Single', note: 'Chania, Crete — never blended' },
  { label: 'Traceable', value: '100%', note: 'QR code on every bottle' },
]

export default function About() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about-page">

      {/* ── HERO ── */}
      <section className="about-hero">
        <OliveBranch className="about-hero-branch about-hero-branch-left" />
        <OliveBranch className="about-hero-branch about-hero-branch-right" />
        <div className="about-hero-content">
          <div className="about-hero-badge">Our Story</div>
          <h1>
            From the Groves of <em>Crete</em><br />
            to the Kitchens of <em>India</em>
          </h1>
          <p className="about-hero-sub">
            Two ancient civilizations connected by a reverence for food, family,
            and the honest ingredients that bring people together at the table.
          </p>
        </div>
      </section>

      <GreekKeyDivider />

      {/* ── THE ORIGIN ── */}
      <section className="about-origin">
        <Reveal><div className="about-section-label">The Origin</div></Reveal>
        <Reveal delay={1}>
          <h2>
            Rooted in the hills of Chania, where olive oil began
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p>
            Crete is where olive oil was born. For over 4,000 years, the Koroneiki olive
            has thrived on the rocky, sun-drenched slopes of western Crete — producing
            an oil of extraordinary intensity, low acidity, and unmatched polyphenol richness.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <p>
            CreteKos began with a simple conviction: the finest groves in Chania
            were producing oil that the world beyond Greece had never truly tasted.
            Our founding family has tended these groves for generations — not as an
            industrial operation, but as a heritage. Every tree is known by name.
            Every harvest is an occasion.
          </p>
        </Reveal>
        <Reveal delay={4}>
          <p>
            We bottle that heritage. Nothing added, nothing stripped. Just the pure,
            peppery, golden oil that Cretans have poured over their tables since antiquity.
          </p>
        </Reveal>
      </section>

      <RangoliDivider />

      {/* ── OUR MISSION ── */}
      <section className="about-mission">
        <Mandala className="about-mandala-bg" size={400} style={{ top: '-80px', right: '-140px', position: 'absolute' }} />
        <Mandala className="about-mandala-bg" size={300} style={{ bottom: '-60px', left: '-100px', position: 'absolute' }} />
        <div className="about-mission-inner">
          <Reveal><div className="about-section-label">Our Mission</div></Reveal>
          <Reveal delay={1}>
            <h2>Bringing authentic Greek EVOO to Indian kitchens</h2>
          </Reveal>
          <Reveal delay={2}>
            <p>
              India's relationship with cooking oil is deeply personal. Every kitchen has its
              preferred oil — passed down through generations, integral to regional identity.
              We believe there is a place at that table for something exceptional.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p>
              CreteKos exists to bring India's most discerning home cooks and chefs
              a single-origin extra virgin olive oil that is genuinely world-class — not
              the diluted, mass-blended oils that dominate supermarket shelves, but
              a traceable product from a specific place, a specific harvest, a specific family.
            </p>
          </Reveal>
          <Reveal delay={4}>
            <p>
              From drizzling over dal to finishing a biryani, from a simple salad dressing
              to the tadka that opens a meal — CreteKos is made for the way India cooks.
            </p>
          </Reveal>
        </div>
      </section>

      <GreekKeyDivider />

      {/* ── THE PROCESS ── */}
      <section className="about-process">
        <Reveal><div className="about-section-label">The Process</div></Reveal>
        <Reveal delay={1}>
          <h2>Grove to bottle in four steps</h2>
        </Reveal>
        <div className="about-process-grid">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i + 1}>
              <div className="about-process-step">
                <div className="about-step-num">{step.num}</div>
                <div className="about-step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="about-step-connector" aria-hidden="true" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <RangoliDivider />

      {/* ── GREEK x INDIAN ── */}
      <section className="about-fusion">
        <Mandala className="about-mandala-bg" size={350} style={{ top: '20px', left: '-120px', position: 'absolute' }} />
        <div className="about-fusion-inner">
          <Reveal><div className="about-section-label">Greek &times; Indian</div></Reveal>
          <Reveal delay={1}>
            <h2>
              Two civilizations, one <em>table</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="about-fusion-lead">
              The Mediterranean and India share more than geography. Both cultures
              built their identities around food — around the belief that what you
              eat, how you prepare it, and who you share it with defines who you are.
            </p>
          </Reveal>
          <div className="about-fusion-columns">
            <Reveal delay={2}>
              <div className="about-fusion-col about-fusion-greek">
                <div className="about-fusion-col-accent" />
                <h3>The Greek Thread</h3>
                <p>
                  Olive oil is the cornerstone of Cretan cuisine — poured generously,
                  never sparingly. The Cretan diet, one of the healthiest ever documented,
                  revolves around this single ingredient. It is medicine, flavour, and ritual.
                </p>
                <p>
                  Greeks drizzle it over feta, bake it into bread, pour it on beans slow-cooked
                  for hours. The same oil that anointed Olympians fuels a modern island kitchen.
                </p>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="about-fusion-col about-fusion-indian">
                <div className="about-fusion-col-accent" />
                <h3>The Indian Thread</h3>
                <p>
                  Indian cooking is built on fat as flavour — ghee, mustard oil, coconut oil,
                  each carrying the memory of a region. Olive oil enters this tradition not
                  as a replacement, but as a complement.
                </p>
                <p>
                  Its grassy, peppery profile pairs naturally with Indian spices. A finishing
                  drizzle over chaat, a light saute for a South Indian stir-fry, a dressing
                  for a kachumber salad — olive oil speaks the language of Indian food.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={4}>
            <p className="about-fusion-closing">
              CreteKos is where these two ancient threads meet — honouring both traditions
              without diluting either.
            </p>
          </Reveal>
        </div>
      </section>

      <GreekKeyDivider />

      {/* ── QUALITY PROMISE ── */}
      <section className="about-quality">
        <Reveal><div className="about-section-label">Quality Promise</div></Reveal>
        <Reveal delay={1}>
          <h2>Numbers you can trust</h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="about-quality-intro">
            Every bottle of CreteKos meets standards that go far beyond what
            regulations require. This is not a marketing claim — it is a lab-verified promise.
          </p>
        </Reveal>
        <div className="about-quality-grid">
          {QUALITY_BADGES.map((badge, i) => (
            <Reveal key={badge.label} delay={i + 2}>
              <div className="about-quality-card">
                <div className="about-quality-value">{badge.value}</div>
                <div className="about-quality-label">{badge.label}</div>
                <div className="about-quality-note">{badge.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <RangoliDivider />

      {/* ── CTA ── */}
      <section className="about-cta">
        <Reveal>
          <h2>Taste the difference</h2>
        </Reveal>
        <Reveal delay={1}>
          <p>
            CreteKos is coming to India. Join the waitlist for early access,
            founding member pricing, and a complimentary tasting guide.
          </p>
        </Reveal>
        <Reveal delay={2}>
          <a href="/#waitlist" className="about-cta-btn">
            Join the Waitlist
          </a>
        </Reveal>
      </section>
    </div>
  )
}
