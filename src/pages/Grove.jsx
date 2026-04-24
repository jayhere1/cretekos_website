import './Grove.css'

function GroveMapSVG() {
  return (
    <svg viewBox="0 0 700 440" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--greek-blue)" stopOpacity="0.06"/>
          <stop offset="100%" stopColor="var(--greek-blue)" stopOpacity="0.02"/>
        </linearGradient>
        <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--saffron)" stopOpacity="0.06"/>
          <stop offset="100%" stopColor="var(--cream-dark)" stopOpacity="0.3"/>
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="700" height="440" fill="var(--cream)" rx="16"/>

      {/* Sea area */}
      <path d="M0,0 L700,0 L700,220 Q550,250 350,210 Q150,180 0,230 Z" fill="url(#sea)"/>

      {/* Subtle latitude lines */}
      {[140, 180, 220, 260, 300, 340].map((y, i) => (
        <line key={i} x1="30" y1={y} x2="670" y2={y} stroke="var(--hairline)" strokeWidth="0.5" strokeDasharray="2 6"/>
      ))}
      {/* Subtle longitude lines */}
      {[100, 200, 300, 400, 500, 600].map((x, i) => (
        <line key={i} x1={x} y1="60" x2={x} y2="400" stroke="var(--hairline)" strokeWidth="0.5" strokeDasharray="2 6"/>
      ))}

      {/* Simplified landmasses */}
      {/* Greece/Crete */}
      <path d="M100,160 Q120,140 150,145 Q170,135 185,150 Q195,155 180,170 Q170,180 150,175 Q130,178 110,172 Z" fill="url(#land)" stroke="var(--hairline-strong)" strokeWidth="0.5"/>
      {/* Crete island */}
      <path d="M120,200 Q140,192 170,194 Q200,190 220,195 Q235,198 230,205 Q215,212 190,210 Q160,212 130,208 Z" fill="url(#land)" stroke="var(--hairline-strong)" strokeWidth="0.5"/>
      {/* Turkey */}
      <path d="M220,130 Q260,120 300,125 Q320,135 310,155 Q290,170 260,165 Q240,155 230,145 Z" fill="url(#land)" stroke="var(--hairline)" strokeWidth="0.5" opacity="0.5"/>
      {/* India */}
      <path d="M520,240 Q540,230 570,235 Q600,250 610,290 Q605,330 580,360 Q560,375 545,370 Q530,350 525,320 Q515,280 520,240 Z" fill="url(#land)" stroke="var(--hairline-strong)" strokeWidth="0.5"/>

      {/* Sea label */}
      <text x="350" y="170" textAnchor="middle" fontFamily="Spectral, serif" fontSize="10" letterSpacing="4" fill="var(--greek-blue)" opacity="0.35" fontStyle="italic">MEDITERRANEAN SEA</text>
      <text x="480" y="290" textAnchor="middle" fontFamily="Spectral, serif" fontSize="9" letterSpacing="3" fill="var(--greek-blue)" opacity="0.3" fontStyle="italic">ARABIAN SEA</text>

      {/* Shipping route — curved through Suez */}
      <path d="M175,200 Q260,210 310,220 Q380,240 430,270 Q480,290 540,310"
        fill="none" stroke="var(--saffron)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.7"/>

      {/* Route waypoints */}
      <circle cx="310" cy="220" r="2.5" fill="var(--saffron)" opacity="0.4"/>
      <text x="310" y="238" textAnchor="middle" fontFamily="Spectral, serif" fontSize="8" fill="var(--muted)" fontStyle="italic">Suez</text>

      {/* Chania marker */}
      <g transform="translate(175, 200)">
        <circle r="16" fill="var(--saffron)" opacity="0.12"/>
        <circle r="10" fill="var(--saffron)" opacity="0.2"/>
        <circle r="5" fill="var(--saffron)"/>
        <text x="-50" y="-18" fontFamily="Spectral, serif" fontStyle="italic" fontSize="18" fill="var(--ink)" fontWeight="400">Chania</text>
        <text x="-50" y="-2" fontFamily="GFS Neohellenic, serif" fontSize="11" fill="var(--greek-blue)">Χανιά, Κρήτη</text>
      </g>

      {/* Mumbai marker */}
      <g transform="translate(545, 315)">
        <circle r="16" fill="var(--greek-blue)" opacity="0.12"/>
        <circle r="10" fill="var(--greek-blue)" opacity="0.2"/>
        <circle r="5" fill="var(--greek-blue)"/>
        <text x="16" y="-10" fontFamily="Spectral, serif" fontStyle="italic" fontSize="18" fill="var(--ink)" fontWeight="400">Mumbai</text>
        <text x="16" y="6" fontFamily="Tiro Devanagari Sanskrit, serif" fontSize="11" fill="var(--saffron-deep)">मुंबई, भारत</text>
      </g>

      {/* Distance label on route */}
      <g transform="translate(400, 248)">
        <rect x="-52" y="-12" width="104" height="28" rx="14" fill="var(--cream)" stroke="var(--hairline-strong)" strokeWidth="0.5"/>
        <text x="0" y="0" textAnchor="middle" fontFamily="Spectral, serif" fontSize="11" fill="var(--ink)" fontStyle="italic">~ 4,100 miles</text>
        <text x="0" y="12" textAnchor="middle" fontFamily="Spectral, serif" fontSize="8" letterSpacing="2" fill="var(--muted)">21 DAYS BY SEA</text>
      </g>

      {/* Double-rule frame */}
      <rect x="8" y="8" width="684" height="424" rx="12" fill="none" stroke="var(--hairline-strong)" strokeWidth="0.5"/>
      <rect x="14" y="14" width="672" height="412" rx="10" fill="none" stroke="var(--hairline)" strokeWidth="0.5"/>

      {/* Corner labels */}
      <text x="30" y="34" fontFamily="Spectral, serif" fontSize="9" letterSpacing="2" fill="var(--muted)">THE PASSAGE</text>
      <text x="670" y="34" textAnchor="end" fontFamily="Spectral, serif" fontSize="9" letterSpacing="2" fill="var(--muted)">CRETE → INDIA</text>
      <text x="30" y="426" fontFamily="Spectral, serif" fontSize="8" fill="var(--muted)" fontStyle="italic">Reefer container · 15–18°C</text>
      <text x="670" y="426" textAnchor="end" fontFamily="Spectral, serif" fontSize="8" fill="var(--muted)" fontStyle="italic">Piraeus → Suez → Nhava Sheva</text>
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
            { name: 'Jay Singh', role: 'Founder' },
            { name: 'Aman Juneja', role: 'Operations' },
            { name: 'Antonis Alexakis', role: 'Grove · Chania' },
            { name: 'Mano Kavvos', role: 'Estate · Crete' },
            { name: 'Prateek Rangra', role: 'India Operations' },
            { name: 'Stelios Kalaitzakis', role: 'Mill · Chania' },
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
