import './Grove.css'

function GroveMapSVG() {
  return (
    <svg viewBox="0 0 800 480" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1F5A8A" stopOpacity="0.07"/>
          <stop offset="100%" stopColor="#13416B" stopOpacity="0.03"/>
        </linearGradient>
        <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8DFC8" stopOpacity="1"/>
          <stop offset="100%" stopColor="#DDD2B4" stopOpacity="1"/>
        </linearGradient>
        <filter id="land-shadow" x="-2%" y="-2%" width="104%" height="104%">
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#2B1B0F" floodOpacity="0.08"/>
        </filter>
        {/* Animated dash for route */}
        <style>{`
          .route-line { animation: dash 40s linear infinite; }
          @keyframes dash { to { stroke-dashoffset: -600; } }
        `}</style>
      </defs>

      {/* Background — sea */}
      <rect width="800" height="480" fill="#EDE5D0" rx="16"/>
      <rect width="800" height="480" fill="url(#sea)" rx="16"/>

      {/* Latitude/longitude grid */}
      {[80,130,180,230,280,330,380].map((y,i) => (
        <line key={`lat${i}`} x1="24" y1={y} x2="776" y2={y} stroke="#2B1B0F" strokeWidth="0.3" strokeOpacity="0.06" strokeDasharray="1 4"/>
      ))}
      {[80,160,240,320,400,480,560,640,720].map((x,i) => (
        <line key={`lng${i}`} x1={x} y1="24" x2={x} y2="456" stroke="#2B1B0F" strokeWidth="0.3" strokeOpacity="0.06" strokeDasharray="1 4"/>
      ))}

      {/* ── LANDMASSES ── */}
      <g filter="url(#land-shadow)">
        {/* Southern Europe — Italy boot toe, Balkans, Greece */}
        <path d="M40,60 L60,55 Q80,50 100,58 L120,52 Q135,48 140,60 L138,75 Q142,90 135,105 L130,120 Q125,128 118,132 L112,125 Q108,115 100,118 L95,125 Q88,140 82,148 L78,155 Q72,162 68,158 L65,148 Q62,135 58,128 L52,118 Q48,105 45,95 L42,78 Z" fill="url(#land)" stroke="#B8A882" strokeWidth="0.5"/>
        {/* Greece mainland + Peloponnese */}
        <path d="M118,132 Q130,125 142,130 L148,140 Q155,135 162,140 L168,148 Q175,142 180,148 L178,160 Q172,170 165,175 L158,172 Q150,178 145,175 L140,168 Q135,172 130,170 L125,162 Q118,158 115,148 Z" fill="url(#land)" stroke="#B8A882" strokeWidth="0.5"/>
        {/* Crete — larger, more detailed */}
        <path d="M130,208 Q138,200 152,198 Q168,195 185,196 Q200,194 215,198 Q228,200 238,204 Q242,208 238,213 Q228,218 215,216 Q195,218 175,217 Q155,218 140,215 Q132,213 130,208 Z" fill="url(#land)" stroke="#B8A882" strokeWidth="0.6"/>
        {/* Turkey / Anatolia */}
        <path d="M185,100 Q210,88 240,85 Q270,82 300,88 L330,95 Q350,100 365,110 L370,125 Q368,140 355,148 L340,155 Q320,162 300,158 L280,152 Q260,148 245,140 L235,135 Q220,128 210,120 L200,115 Q190,108 185,100 Z" fill="url(#land)" stroke="#B8A882" strokeWidth="0.4" opacity="0.6"/>
        {/* Egypt / North Africa coast */}
        <path d="M20,220 L50,218 Q80,215 110,218 L140,220 Q170,222 200,225 L240,228 Q270,232 300,238 L320,245 Q328,252 325,260 L315,265 Q305,260 290,262 L270,268 Q250,272 230,270 L200,265 Q160,258 120,255 L80,250 Q50,248 30,245 L20,240 Z" fill="url(#land)" stroke="#B8A882" strokeWidth="0.4" opacity="0.5"/>
        {/* Arabian Peninsula */}
        <path d="M340,160 Q355,155 365,165 L375,180 Q385,200 395,225 L400,250 Q405,275 398,295 L390,310 Q380,325 365,330 L350,328 Q340,320 338,305 L340,285 Q345,260 342,240 L338,220 Q335,200 338,180 Z" fill="url(#land)" stroke="#B8A882" strokeWidth="0.4" opacity="0.5"/>
        {/* India — recognizable subcontinent */}
        <path d="M540,120 Q560,115 580,118 L600,125 Q620,130 635,140 L648,155 Q660,170 665,190 L668,210 Q670,230 665,250 L660,265 Q650,280 640,295 L628,310 Q615,325 600,340 L585,355 Q572,368 562,375 L555,372 Q548,365 542,350 L535,330 Q528,310 525,290 L522,268 Q518,245 518,225 L520,205 Q522,185 525,170 L528,155 Q532,140 540,120 Z" fill="url(#land)" stroke="#B8A882" strokeWidth="0.5"/>
        {/* Sri Lanka */}
        <path d="M590,378 Q596,372 602,375 L605,382 Q604,390 598,394 L592,392 Q588,386 590,378 Z" fill="url(#land)" stroke="#B8A882" strokeWidth="0.4" opacity="0.6"/>
      </g>

      {/* ── SEA LABELS ── */}
      <text x="200" y="185" textAnchor="middle" fontFamily="Spectral, serif" fontSize="9" letterSpacing="5" fill="#1F5A8A" opacity="0.25" fontStyle="italic">MEDITERRANEAN</text>
      <text x="370" y="290" textAnchor="middle" fontFamily="Spectral, serif" fontSize="8" letterSpacing="4" fill="#1F5A8A" opacity="0.2" fontStyle="italic">RED SEA</text>
      <text x="490" y="310" textAnchor="middle" fontFamily="Spectral, serif" fontSize="9" letterSpacing="5" fill="#1F5A8A" opacity="0.22" fontStyle="italic">ARABIAN SEA</text>
      <text x="90" y="170" fontFamily="Spectral, serif" fontSize="7" fill="#1F5A8A" opacity="0.2" fontStyle="italic">Italy</text>
      <text x="260" y="105" fontFamily="Spectral, serif" fontSize="7" fill="#1F5A8A" opacity="0.2" fontStyle="italic">Turkey</text>
      <text x="260" y="250" fontFamily="Spectral, serif" fontSize="7" fill="#1F5A8A" opacity="0.2" fontStyle="italic">Egypt</text>

      {/* ── SHIPPING ROUTE ── */}
      {/* Piraeus → south of Crete → Suez → Red Sea → Arabian Sea → Mumbai */}
      <path className="route-line"
        d="M155,170 L175,195 Q200,218 240,228 Q280,238 315,252 Q330,265 335,285 Q340,305 360,325 Q400,340 450,335 Q500,325 540,300 L565,270 Q580,250 590,235 L610,215"
        fill="none" stroke="#E07A2C" strokeWidth="2" strokeDasharray="8 5" strokeLinecap="round" opacity="0.6"/>

      {/* Waypoint dots */}
      <circle cx="155" cy="170" r="2" fill="#E07A2C" opacity="0.4"/>
      <text x="148" y="165" textAnchor="end" fontFamily="Spectral, serif" fontSize="7" fill="#7A6B54" fontStyle="italic">Piraeus</text>

      <circle cx="315" cy="252" r="2.5" fill="#E07A2C" opacity="0.5"/>
      <text x="308" y="248" textAnchor="end" fontFamily="Spectral, serif" fontSize="7" fill="#7A6B54" fontStyle="italic">Suez</text>

      <circle cx="360" cy="325" r="2" fill="#E07A2C" opacity="0.4"/>
      <text x="355" y="340" textAnchor="end" fontFamily="Spectral, serif" fontSize="7" fill="#7A6B54" fontStyle="italic">Aden</text>

      {/* ── CHANIA MARKER ── */}
      <g transform="translate(175, 206)">
        <circle r="18" fill="#E07A2C" opacity="0.08">
          <animate attributeName="r" values="18;22;18" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle r="11" fill="#E07A2C" opacity="0.15"/>
        <circle r="5.5" fill="#E07A2C"/>
        <circle r="2" fill="#FBF3E2"/>
        <line x1="0" y1="-20" x2="-35" y2="-38" stroke="#E07A2C" strokeWidth="0.5" opacity="0.4"/>
        <g transform="translate(-82, -52)">
          <rect x="-4" y="-14" width="92" height="32" rx="6" fill="#FBF3E2" stroke="#E07A2C" strokeWidth="0.5" opacity="0.9"/>
          <text x="42" y="-1" textAnchor="middle" fontFamily="Spectral, serif" fontStyle="italic" fontSize="15" fill="#2B1B0F" fontWeight="400">Chania</text>
          <text x="42" y="12" textAnchor="middle" fontFamily="GFS Neohellenic, serif" fontSize="9" fill="#1F5A8A">Χανιά · Κρήτη</text>
        </g>
      </g>

      {/* ── MUMBAI MARKER ── */}
      <g transform="translate(610, 215)">
        <circle r="18" fill="#1F5A8A" opacity="0.08">
          <animate attributeName="r" values="18;22;18" dur="3s" repeatCount="indefinite" begin="1.5s"/>
        </circle>
        <circle r="11" fill="#1F5A8A" opacity="0.15"/>
        <circle r="5.5" fill="#1F5A8A"/>
        <circle r="2" fill="#FBF3E2"/>
        <line x1="0" y1="-20" x2="25" y2="-38" stroke="#1F5A8A" strokeWidth="0.5" opacity="0.4"/>
        <g transform="translate(-5, -52)">
          <rect x="-4" y="-14" width="102" height="32" rx="6" fill="#FBF3E2" stroke="#1F5A8A" strokeWidth="0.5" opacity="0.9"/>
          <text x="47" y="-1" textAnchor="middle" fontFamily="Spectral, serif" fontStyle="italic" fontSize="15" fill="#2B1B0F" fontWeight="400">Mumbai</text>
          <text x="47" y="12" textAnchor="middle" fontFamily="Tiro Devanagari Sanskrit, serif" fontSize="9" fill="#B85819">मुंबई · भारत</text>
        </g>
      </g>

      {/* ── DISTANCE PILL ── */}
      <g transform="translate(460, 335)">
        <rect x="-62" y="-16" width="124" height="36" rx="18" fill="#FBF3E2" stroke="#2B1B0F" strokeWidth="0.5" strokeOpacity="0.15"/>
        <text x="0" y="-2" textAnchor="middle" fontFamily="Spectral, serif" fontSize="13" fill="#2B1B0F" fontStyle="italic" fontWeight="500">4,100 miles</text>
        <text x="0" y="12" textAnchor="middle" fontFamily="Spectral, serif" fontSize="7" letterSpacing="2.5" fill="#7A6B54">21 DAYS BY SEA</text>
      </g>

      {/* ── COMPASS ROSE ── */}
      <g transform="translate(720, 400)">
        <circle r="22" fill="none" stroke="#2B1B0F" strokeWidth="0.3" strokeOpacity="0.15"/>
        <circle r="18" fill="none" stroke="#2B1B0F" strokeWidth="0.3" strokeOpacity="0.1"/>
        {/* Cardinal lines */}
        <line x1="0" y1="-22" x2="0" y2="22" stroke="#2B1B0F" strokeWidth="0.4" strokeOpacity="0.2"/>
        <line x1="-22" y1="0" x2="22" y2="0" stroke="#2B1B0F" strokeWidth="0.4" strokeOpacity="0.2"/>
        {/* Diagonal lines */}
        <line x1="-15" y1="-15" x2="15" y2="15" stroke="#2B1B0F" strokeWidth="0.3" strokeOpacity="0.1"/>
        <line x1="15" y1="-15" x2="-15" y2="15" stroke="#2B1B0F" strokeWidth="0.3" strokeOpacity="0.1"/>
        {/* North arrow */}
        <polygon points="0,-20 -3,-12 0,-14 3,-12" fill="#E07A2C" opacity="0.6"/>
        <polygon points="0,20 -3,12 0,14 3,12" fill="#2B1B0F" opacity="0.15"/>
        <text x="0" y="-26" textAnchor="middle" fontFamily="Spectral, serif" fontSize="8" fill="#E07A2C" fontWeight="600" opacity="0.6">N</text>
        <circle r="2.5" fill="#FBF3E2" stroke="#2B1B0F" strokeWidth="0.3" strokeOpacity="0.2"/>
      </g>

      {/* ── DOUBLE-RULE FRAME ── */}
      <rect x="6" y="6" width="788" height="468" rx="14" fill="none" stroke="#2B1B0F" strokeWidth="0.4" strokeOpacity="0.12"/>
      <rect x="12" y="12" width="776" height="456" rx="11" fill="none" stroke="#2B1B0F" strokeWidth="0.4" strokeOpacity="0.08"/>

      {/* ── CORNER LABELS ── */}
      <text x="28" y="32" fontFamily="Spectral, serif" fontSize="8" letterSpacing="2.5" fill="#7A6B54" opacity="0.6">THE PASSAGE</text>
      <text x="772" y="32" textAnchor="end" fontFamily="Spectral, serif" fontSize="8" letterSpacing="2.5" fill="#7A6B54" opacity="0.6">CRETE → INDIA</text>
      <text x="28" y="460" fontFamily="Spectral, serif" fontSize="7.5" fill="#7A6B54" opacity="0.5" fontStyle="italic">Reefer container · 15 – 18 °C · temperature-controlled</text>
      <text x="772" y="460" textAnchor="end" fontFamily="Spectral, serif" fontSize="7.5" fill="#7A6B54" opacity="0.5" fontStyle="italic">Piraeus → Suez → Aden → Nhava Sheva</text>
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
