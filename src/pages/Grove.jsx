import './Grove.css'

function GroveMapSVG() {
  // If map-route.jpg exists in /assets, it shows as the .g-map background.
  // This SVG renders as a transparent overlay with just route + markers.
  return (
    <svg viewBox="0 0 800 480" style={{ width: '100%', height: '100%', position: 'relative', zIndex: 2 }}>
      <defs>
        <style>{`
          .route-line { animation: dash 40s linear infinite; }
          @keyframes dash { to { stroke-dashoffset: -600; } }
        `}</style>
        <filter id="label-bg" x="-4" y="-4" width="108%" height="120%">
          <feFlood floodColor="#FBF3E2" floodOpacity="0.92" result="bg"/>
          <feMerge><feMergeNode in="bg"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Semi-transparent cream wash so route/labels pop over any background */}
      <rect width="800" height="480" fill="#EDE5D0" opacity="0.35" rx="16"/>

      {/* ── SHIPPING ROUTE ── */}
      <path className="route-line"
        d="M120,155 Q145,180 175,200 Q210,220 260,235 Q310,248 340,260 Q355,275 358,300 Q362,325 380,340 Q420,355 470,345 Q520,330 560,305 L585,275 Q600,255 610,240 L635,215"
        fill="none" stroke="#E07A2C" strokeWidth="2.5" strokeDasharray="8 5" strokeLinecap="round" opacity="0.7"/>

      {/* Route glow */}
      <path d="M120,155 Q145,180 175,200 Q210,220 260,235 Q310,248 340,260 Q355,275 358,300 Q362,325 380,340 Q420,355 470,345 Q520,330 560,305 L585,275 Q600,255 610,240 L635,215"
        fill="none" stroke="#E07A2C" strokeWidth="8" strokeLinecap="round" opacity="0.06"/>

      {/* Waypoints */}
      <circle cx="120" cy="155" r="3" fill="#E07A2C" opacity="0.5"/>
      <text x="113" y="148" textAnchor="end" fontFamily="Spectral, serif" fontSize="9" fill="#5A4532" fontStyle="italic">Piraeus</text>

      <circle cx="340" cy="260" r="3.5" fill="#E07A2C" opacity="0.6"/>
      <text x="333" y="255" textAnchor="end" fontFamily="Spectral, serif" fontSize="9" fill="#5A4532" fontStyle="italic">Suez</text>

      <circle cx="380" cy="340" r="3" fill="#E07A2C" opacity="0.5"/>
      <text x="373" y="355" textAnchor="end" fontFamily="Spectral, serif" fontSize="9" fill="#5A4532" fontStyle="italic">Aden</text>

      {/* ── CHANIA MARKER ── */}
      <g transform="translate(175, 200)">
        <circle r="20" fill="#E07A2C" opacity="0.08">
          <animate attributeName="r" values="20;26;20" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle r="12" fill="#E07A2C" opacity="0.18"/>
        <circle r="6" fill="#E07A2C"/>
        <circle r="2.5" fill="#FBF3E2"/>

        <line x1="0" y1="-22" x2="-30" y2="-45" stroke="#E07A2C" strokeWidth="0.8" opacity="0.5"/>
        <g transform="translate(-85, -62)">
          <rect x="-6" y="-16" width="108" height="38" rx="8" fill="#FBF3E2" stroke="#E07A2C" strokeWidth="0.8" opacity="0.95"
            style={{ filter: 'drop-shadow(0 2px 6px rgba(43,27,15,0.1))' }}/>
          <text x="48" y="0" textAnchor="middle" fontFamily="Spectral, serif" fontStyle="italic" fontSize="17" fill="#2B1B0F" fontWeight="400">Chania</text>
          <text x="48" y="14" textAnchor="middle" fontFamily="GFS Neohellenic, serif" fontSize="10" fill="#1F5A8A">Χανιά · Κρήτη</text>
        </g>
      </g>

      {/* ── MUMBAI MARKER ── */}
      <g transform="translate(635, 215)">
        <circle r="20" fill="#1F5A8A" opacity="0.08">
          <animate attributeName="r" values="20;26;20" dur="3s" repeatCount="indefinite" begin="1.5s"/>
        </circle>
        <circle r="12" fill="#1F5A8A" opacity="0.18"/>
        <circle r="6" fill="#1F5A8A"/>
        <circle r="2.5" fill="#FBF3E2"/>

        <line x1="0" y1="-22" x2="25" y2="-45" stroke="#1F5A8A" strokeWidth="0.8" opacity="0.5"/>
        <g transform="translate(-10, -62)">
          <rect x="-6" y="-16" width="116" height="38" rx="8" fill="#FBF3E2" stroke="#1F5A8A" strokeWidth="0.8" opacity="0.95"
            style={{ filter: 'drop-shadow(0 2px 6px rgba(43,27,15,0.1))' }}/>
          <text x="52" y="0" textAnchor="middle" fontFamily="Spectral, serif" fontStyle="italic" fontSize="17" fill="#2B1B0F" fontWeight="400">Mumbai</text>
          <text x="52" y="14" textAnchor="middle" fontFamily="Tiro Devanagari Sanskrit, serif" fontSize="10" fill="#B85819">मुंबई · भारत</text>
        </g>
      </g>

      {/* ── DISTANCE PILL ── */}
      <g transform="translate(490, 350)">
        <rect x="-68" y="-18" width="136" height="40" rx="20" fill="#FBF3E2" stroke="#2B1B0F" strokeWidth="0.6" strokeOpacity="0.18"
          style={{ filter: 'drop-shadow(0 2px 8px rgba(43,27,15,0.1))' }}/>
        <text x="0" y="-2" textAnchor="middle" fontFamily="Spectral, serif" fontSize="15" fill="#2B1B0F" fontStyle="italic" fontWeight="500">4,100 miles</text>
        <text x="0" y="14" textAnchor="middle" fontFamily="Spectral, serif" fontSize="8" letterSpacing="2.5" fill="#7A6B54">21 DAYS BY SEA</text>
      </g>

      {/* ── COMPASS ROSE ── */}
      <g transform="translate(740, 420)">
        <circle r="24" fill="#FBF3E2" opacity="0.8"/>
        <circle r="24" fill="none" stroke="#2B1B0F" strokeWidth="0.4" strokeOpacity="0.15"/>
        <circle r="19" fill="none" stroke="#2B1B0F" strokeWidth="0.3" strokeOpacity="0.1"/>
        <line x1="0" y1="-24" x2="0" y2="24" stroke="#2B1B0F" strokeWidth="0.5" strokeOpacity="0.2"/>
        <line x1="-24" y1="0" x2="24" y2="0" stroke="#2B1B0F" strokeWidth="0.5" strokeOpacity="0.2"/>
        <line x1="-17" y1="-17" x2="17" y2="17" stroke="#2B1B0F" strokeWidth="0.3" strokeOpacity="0.1"/>
        <line x1="17" y1="-17" x2="-17" y2="17" stroke="#2B1B0F" strokeWidth="0.3" strokeOpacity="0.1"/>
        <polygon points="0,-22 -3.5,-13 0,-15 3.5,-13" fill="#E07A2C" opacity="0.7"/>
        <polygon points="0,22 -3.5,13 0,15 3.5,13" fill="#2B1B0F" opacity="0.15"/>
        <text x="0" y="-28" textAnchor="middle" fontFamily="Spectral, serif" fontSize="9" fill="#E07A2C" fontWeight="600" opacity="0.7">N</text>
        <circle r="3" fill="#FBF3E2" stroke="#2B1B0F" strokeWidth="0.4" strokeOpacity="0.2"/>
      </g>

      {/* ── FRAME ── */}
      <rect x="6" y="6" width="788" height="468" rx="14" fill="none" stroke="#2B1B0F" strokeWidth="0.5" strokeOpacity="0.1"/>

      {/* ── CORNER LABELS ── */}
      <g>
        <rect x="16" y="16" width="130" height="20" rx="4" fill="#FBF3E2" opacity="0.85"/>
        <text x="24" y="30" fontFamily="Spectral, serif" fontSize="9" letterSpacing="2.5" fill="#7A6B54" opacity="0.7">THE PASSAGE</text>
      </g>
      <g>
        <rect x="654" y="16" width="124" height="20" rx="4" fill="#FBF3E2" opacity="0.85"/>
        <text x="772" y="30" textAnchor="end" fontFamily="Spectral, serif" fontSize="9" letterSpacing="2.5" fill="#7A6B54" opacity="0.7">CRETE → INDIA</text>
      </g>
      <g>
        <rect x="16" y="448" width="310" height="18" rx="4" fill="#FBF3E2" opacity="0.85"/>
        <text x="24" y="460" fontFamily="Spectral, serif" fontSize="8" fill="#7A6B54" opacity="0.6" fontStyle="italic">Reefer container · 15 – 18 °C · temperature-controlled</text>
      </g>
      <g>
        <rect x="478" y="448" width="300" height="18" rx="4" fill="#FBF3E2" opacity="0.85"/>
        <text x="772" y="460" textAnchor="end" fontFamily="Spectral, serif" fontSize="8" fill="#7A6B54" opacity="0.6" fontStyle="italic">Piraeus → Suez → Aden → Nhava Sheva</text>
      </g>
    </svg>
  )
}

export default function Grove() {
  return (
    <>
      <section className="du-page-head du-paper">
        <div className="eyebrow">Χανιά · Chania · <span className="deva">क्रेते</span></div>
        <h1>The <em>grove</em> on the<br/>hill at Apokoronas.</h1>
        <div className="deva">अपोकोरोनास की पहाड़ी</div>
        <p className="lede">420 meters above the Aegean, 1,200 trees older than the country that surrounds them, and one family who has been folding the harvest into October mornings for four generations.</p>
      </section>

      <section className="g-story">
        <div className="g-split">
          <div>
            <div className="du-eyebrow" style={{ marginBottom: 20 }}>The Land</div>
            <h2 className="du-h2">A hillside that <em>hasn't changed</em> in six hundred years.</h2>
            <div className="deva" style={{ color: 'var(--saffron-deep)', fontFamily: 'Tiro Devanagari Sanskrit, serif', fontSize: 19, marginBottom: 22 }}>छह सौ वर्षों से अचल</div>
            <p>The Papadakis grove sits on a terraced slope above the village of Vamos — limestone bedrock, red clay pockets, afternoon sun off the sea. The oldest trees on the plot were already old when the Venetians left.</p>
            <p>We don't irrigate. We don't fertilize beyond the trees' own pruned wood, returned to the soil as mulch. The yield is lower than the modern groves in the plains — but the oil is denser, the polyphenols higher, the character unmistakable.</p>
          </div>
          <div className="g-vis" style={{ backgroundImage: "url('/assets/olive-grove-hero.jpg')" }}>
            <div className="cap">Vamos, Apokoronas · October 2025</div>
          </div>
        </div>

        <div className="g-split rev">
          <div>
            <div className="du-eyebrow" style={{ marginBottom: 20 }}>The Trees</div>
            <h2 className="du-h2">1,200 <em>Koroneiki</em> trees. A few stubborn Tsounati.</h2>
            <div className="deva" style={{ color: 'var(--saffron-deep)', fontFamily: 'Tiro Devanagari Sanskrit, serif', fontSize: 19, marginBottom: 22 }}>१२०० कोरोनेइकी वृक्ष</div>
            <p>Koroneiki is Crete's defining variety — small fruit, high yield-per-polyphenol, the backbone of the island's oil for three millennia. Ours are kept short and open-centered, a Venetian-era pruning style that lets the sun touch every branch.</p>
            <p>Among them we've kept forty Tsounati trees — a rarer, more fragrant local variety that we blend back in tiny proportion for aroma. The rest of the grove is single-variety Koroneiki.</p>
          </div>
          <div className="g-vis" style={{ backgroundImage: "url('/assets/olive-tree.jpg')" }}>
            <div className="cap">Koroneiki, third pressing day</div>
          </div>
        </div>
      </section>

      <section className="g-mapstrip">
        <div className="g-mapstrip-inner">
          <div>
            <div className="du-eyebrow" style={{ marginBottom: 18 }}>The Journey</div>
            <h2 className="du-h2" style={{ marginBottom: 16 }}>Chania to<br/><em style={{ color: 'var(--saffron-deep)' }}>Mumbai</em>, carefully.</h2>
            <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0 }}>Twenty-one days, sea-freight in a reefer container held at 15–18°C. We don't air-ship: the oil travels better at sea, and it keeps our footprint small enough to print on the label.</p>
            <div className="g-stats">
              <div className="g-stat"><div className="val">420<em>m</em></div><div className="lbl">Elevation</div></div>
              <div className="g-stat"><div className="val">1,200</div><div className="lbl">Trees</div></div>
              <div className="g-stat"><div className="val">21<em> d</em></div><div className="lbl">Passage</div></div>
              <div className="g-stat"><div className="val">0.24<em>%</em></div><div className="lbl">Acidity</div></div>
            </div>
          </div>
          <div className="g-map"><GroveMapSVG /></div>
        </div>
      </section>

      <section className="g-family">
        <div className="du-eyebrow">The Team</div>
        <h2 className="du-h2" style={{ marginTop: 18 }}>Six names, <em style={{ color: 'var(--saffron-deep)', fontStyle: 'italic', fontWeight: 400 }}>one</em> grove.</h2>
        <p className="du-lede" style={{ margin: '14px auto 0' }}>From the groves of Chania to the kitchens of India — the people behind every bottle.</p>
        <div className="g-family-grid">
          {[
            { name: 'Jay Singh', role: 'The Table · Mumbai' },
            { name: 'Aman Juneja', role: 'The Route · Logistics' },
            { name: 'Antonis Alexakis', role: 'The Grove · Chania' },
            { name: 'Mano Kavvos', role: 'The Press · Chania' },
            { name: 'Prateek Rangra', role: 'The Kitchen · India' },
            { name: 'Stelios Kalaitzakis', role: 'The Harvest · Crete' },
          ].map((person, i) => (
            <div key={i} className="g-person">
              <div className="port"></div>
              <div className="name">{person.name}</div>
              <div className="role">{person.role}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
