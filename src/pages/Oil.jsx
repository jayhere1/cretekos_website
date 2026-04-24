import { useState } from 'react'
import DuSeal from '../components/DuSeal'
import './Oil.css'

export default function Oil() {
  const [qty, setQty] = useState(1)

  return (
    <>
      <section className="o-hero">
        <div className="o-hero-inner">
          <div className="o-bottle-wrap">
            <div className="o-bottle"></div>
            <div className="o-bottle-seal"><DuSeal>2025</DuSeal></div>
          </div>
          <div className="o-copy">
            <div className="breadcrumb">The Oil · Founding Bottle · No. 01</div>
            <h1>500 ml.<br/>One <em>harvest</em>.</h1>
            <div className="deva" style={{ fontFamily: 'Tiro Devanagari Sanskrit, serif', color: 'var(--greek-blue)', fontSize: 22, marginBottom: 28 }}>एक फसल · दो संसार</div>
            <p className="lede">Hand-picked Koroneiki from a single grove in Chania, cold-pressed within four hours, rested for 30 days, and bottled by hand for the kitchens of India. Hand-numbered; harvest-dated; wax-sealed.</p>
            <div className="o-spec">
              <div><div className="lbl">Variety</div><div className="val">Koroneiki <em>(w/ Tsounati)</em></div></div>
              <div><div className="lbl">Acidity</div><div className="val">0.24%</div></div>
              <div><div className="lbl">Polyphenols</div><div className="val">412 mg/kg</div></div>
              <div><div className="lbl">Smoke point</div><div className="val">~190°C</div></div>
              <div><div className="lbl">Harvest</div><div className="val">November 2025</div></div>
              <div><div className="lbl">Volume</div><div className="val">500 ml</div></div>
            </div>
            <div className="o-buy">
              <div className="qty">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span className="n">{qty}</span>
                <button onClick={() => setQty(Math.min(12, qty + 1))}>+</button>
              </div>
              <div className="price">
                <span className="lbl">Founder's price</span>
                <span className="val">₹ {(2400 * qty).toLocaleString('en-IN')}</span>
              </div>
              <button className="du-btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Reserve {qty} bottle{qty > 1 ? 's' : ''} →</button>
            </div>
            <div className="o-assure">
              <span>Free India shipping over ₹3,500</span>
              <span>Reefer-shipped, 15–18°C</span>
              <span>Refund if the seal is broken</span>
            </div>
          </div>
        </div>
      </section>

      <section className="o-details">
        <div className="col">
          <div className="du-eyebrow-plain" style={{ marginBottom: 14 }}>Tasting</div>
          <h3>What it <em>tastes like</em>.</h3>
          <p>Fresh-cut grass on the nose. Green almond and raw artichoke mid-palate. A throat-catching pepper finish that marks young, polyphenol-rich Cretan oil. Silken body, bright, assertive.</p>
          <p className="deva" style={{ fontFamily: 'Tiro Devanagari Sanskrit, serif', color: 'var(--saffron-deep)', fontSize: 15 }}>ताज़ी घास · हरा बादाम · तीखा अंत</p>
          <ul>
            <li><span className="k">Best in</span><span className="v"><em>Cold-finishing</em> — dal, hummus, dakos, kachumber</span></li>
            <li><span className="k">Good in</span><span className="v">Light sautés, tadkas, pan-roasted vegetables</span></li>
            <li><span className="k">Fine in</span><span className="v">Shallow fry up to 190°C</span></li>
            <li><span className="k">Skip for</span><span className="v">Deep-frying. Use a neutral oil; finish with this.</span></li>
          </ul>
        </div>
        <div className="col">
          <div className="du-eyebrow-plain" style={{ marginBottom: 14 }}>Provenance</div>
          <h3>Every number, <em>traced</em>.</h3>
          <p>Every bottle is tied by its hand-written number to a specific pressing day, a specific batch tank, and a specific 40-tree section of the grove. Scan the seal on the box and you'll see photographs from the morning your oil was picked.</p>
          <ul>
            <li><span className="k">Estate</span><span className="v">Papadakis grove, Vamos · <em>Apokoronas, Chania</em></span></li>
            <li><span className="k">Pick date</span><span className="v">Nov 10 – Nov 19, 2025 (by hand)</span></li>
            <li><span className="k">Press</span><span className="v">Stone-crushed, malaxed ≤27°C, centrifuged</span></li>
            <li><span className="k">Bottled</span><span className="v">Dec 18, 2025 · wax-sealed, UV-blocking glass</span></li>
            <li><span className="k">Shipped</span><span className="v">Reefer, Piraeus → Nhava Sheva</span></li>
          </ul>
        </div>
      </section>

      <section className="o-included">
        <div className="o-included-inner">
          <div className="du-eyebrow-plain" style={{ textAlign: 'center', display: 'block' }}>What's in the Box</div>
          <h2 className="du-h2" style={{ marginTop: 14, textAlign: 'center' }}>Not just <em style={{ color: 'var(--saffron-deep)', fontStyle: 'italic', fontWeight: 400 }}>a bottle</em>.</h2>
          <div className="sub">A small, considered kit — designed for two kitchens, not one.</div>
          <div className="o-included-grid">
            {[
              { n: '१', title: '500ml, wax-sealed', desc: 'In dark UV-blocking glass, hand-numbered on the neck.' },
              { n: '२', title: 'Bilingual card', desc: 'Three recipes — one Cretan, one Indian, one bridge — in English & हिंदी.' },
              { n: '३', title: 'Tasting notes', desc: 'A fold-out single sheet with the full lab analysis for this harvest.' },
              { n: '४', title: 'Traceability seal', desc: 'Scan the box to see your batch\'s pressing day, grove section, and miller.' },
            ].map((item, i) => (
              <div key={i} className="o-incl-card">
                <div className="ic deva">{item.n}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
