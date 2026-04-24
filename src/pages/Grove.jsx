import './Grove.css'

function GroveMapSVG() {
  return (
    <svg viewBox="0 0 600 430" style={{ width: '100%', height: '100%' }}>
      <rect width="600" height="430" fill="var(--cream)"/>
      <path d="M0,0 L600,0 L600,240 Q450,260 300,220 Q150,200 0,240 Z" fill="rgba(31,90,138,0.08)"/>
      <path d="M0,240 Q150,200 300,220 Q450,260 600,240" fill="none" stroke="var(--greek-blue)" strokeWidth="1" strokeDasharray="3 3"/>
      {[...Array(30)].map((_, i) => (
        <circle key={i} cx={(i % 10) * 60 + 30} cy={Math.floor(i / 10) * 60 + 300} r="1" fill="var(--hairline-strong)"/>
      ))}
      <g transform="translate(180, 130)">
        <circle r="12" fill="var(--saffron)" opacity="0.25"/>
        <circle r="6" fill="var(--saffron)"/>
        <text x="18" y="-4" fontFamily="Spectral, serif" fontStyle="italic" fontSize="18" fill="var(--ink)">Chania</text>
        <text x="18" y="14" fontFamily="GFS Neohellenic, serif" fontSize="13" fill="var(--greek-blue)">Χανιά · Crete</text>
      </g>
      <path d="M180,130 Q340,180 470,300" fill="none" stroke="var(--saffron)" strokeWidth="1.5" strokeDasharray="5 4"/>
      <g transform="translate(470, 300)">
        <circle r="12" fill="var(--greek-blue)" opacity="0.25"/>
        <circle r="6" fill="var(--greek-blue)"/>
        <text x="18" y="-4" fontFamily="Spectral, serif" fontStyle="italic" fontSize="18" fill="var(--ink)">Mumbai</text>
        <text x="18" y="14" fontFamily="Tiro Devanagari Sanskrit, serif" fontSize="13" fill="var(--saffron-deep)">मुंबई · India</text>
      </g>
      <text x="325" y="200" fontFamily="Spectral, serif" fontSize="12" fontStyle="italic" fill="var(--muted)">~ 4,100 miles</text>
      <text x="325" y="218" fontFamily="Spectral, serif" fontSize="10" letterSpacing="2" fill="var(--muted)">21 DAYS BY SEA</text>
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
