import { Link } from 'react-router-dom'
import DuBand from '../components/DuBand'
import DuSeal from '../components/DuSeal'
import DishTile from '../components/DishTile'
import TasteWheel from '../components/TasteWheel'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="h-hero">
        <div className="du-zigzag-top" style={{ position: 'absolute', top: 0, left: 0, right: 0, opacity: 0.7 }}></div>
        <div className="h-hero-grid">
          <div>
            <div className="du-eyebrow" style={{ marginBottom: 28 }}>
              From Chania, Crete · <span className="deva" style={{ fontFamily: 'Tiro Devanagari Sanskrit, serif' }}>भारत के लिए</span>
            </div>
            <h1 className="du-h1">
              A <span className="du-greek">Greek</span><br/>
              grove <span className="amp">&amp;</span><br/>
              an <span className="du-indian">Indian</span><br/>
              kitchen.
            </h1>
            <p className="hero-sub">Single-estate extra virgin olive oil, cold-pressed in Chania and delivered to your kitchen in India — where two of the world's oldest food cultures finally share a shelf.</p>
            <p className="hero-sub-deva deva">क्रेते की पहाड़ियों से, भारत की रसोई तक।</p>
            <div className="h-hero-ctas">
              <Link to="/oil"><button className="du-btn-primary">Reserve a bottle →</button></Link>
              <Link to="/grove"><button className="du-btn-ghost">Read our story</button></Link>
            </div>
          </div>
          <div className="h-hero-visual">
            <div className="h-hero-img-main"></div>
            <div className="h-hero-badge">
              <strong>Harvest 2025</strong>
              2,400 numbered bottles, first shipment to India
            </div>
          </div>
        </div>
      </section>

      <DuBand />

      {/* THREADS */}
      <section className="du-section">
        <div className="h-threads-intro">
          <div className="du-eyebrow">Two Threads, One Table</div>
          <h2 className="du-h2" style={{ margin: '18px 0 14px' }}>Olive oil was the <em style={{ color: 'var(--greek-blue)', fontStyle: 'italic', fontWeight: 400 }}>shared language</em> of the ancient Mediterranean — and it speaks beautifully in Indian kitchens, too.</h2>
          <p className="du-lede" style={{ margin: '0 auto' }}>We don't ask India to cook Greek food. We ask olive oil to do what it has always done — bring out the best in whatever sits beside it on the stove.</p>
        </div>

        <div className="h-threads">
          <div className="h-thread h-thread-g">
            <div className="h-thread-flag">The Greek Thread</div>
            <h3>From <em>Crete</em>, with care.</h3>
            <div className="local">Από την Κρήτη, με αγάπη</div>
            <p>On the western hills of Crete, the Koroneiki olive has been cold-pressed the same way for forty centuries — bitter, peppery, and unmistakably alive. We source from a single family grove in Chania. One place. One harvest. No blending.</p>
            <div className="h-thread-ways">
              <div className="lbl">Cretan ways of eating it</div>
              <ul>
                <li>Poured generously over fresh bread, salt, oregano</li>
                <li>Over feta, tomato, a single anchovy, raw onion</li>
                <li>Slow-cooked into gigantes beans with dill</li>
                <li>Drizzled — never sparingly — on a horta salad</li>
              </ul>
            </div>
          </div>
          <div className="h-thread h-thread-i">
            <div className="h-thread-flag">The Indian Thread</div>
            <h3>For the <em>Indian</em> kitchen.</h3>
            <div className="local deva">भारतीय रसोई के लिए</div>
            <p>Indian cooking is built around fat as flavour — ghee, mustard, coconut, til. Olive oil enters this tradition not as a replacement, but as a fresh voice in a long conversation. Its grassy pepper pairs naturally with Indian spices.</p>
            <div className="h-thread-ways">
              <div className="lbl">Indian ways of using it</div>
              <ul>
                <li>A cold-finishing drizzle over dal, just before serving</li>
                <li>In the tadka — curry leaf, mustard seed, dried chilli</li>
                <li>As the dressing fat for a kachumber or chopped salad</li>
                <li>Warmed into a kasundi or a herb-forward chutney</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BRIDGE */}
      <section className="h-bridge">
        <div className="h-bridge-inner">
          <div className="mark deva">✦</div>
          <h2>"Two ancient food cultures, separated by four thousand miles, share the same instinct — <span className="hl">that a good oil, generously poured, is half the meal.</span>"</h2>
          <div className="cite">— Maria Papadakis, Chania · November 2025</div>
        </div>
      </section>

      {/* TASTE */}
      <section className="h-taste">
        <div className="h-taste-copy">
          <div className="du-eyebrow" style={{ marginBottom: 22 }}>The Flavour Profile</div>
          <h2 className="du-h2">Deep green.<br/><em style={{ color: 'var(--greek-blue)', fontStyle: 'italic', fontWeight: 400 }}>Peppery</em>. Alive.</h2>
          <div className="deva" style={{ marginBottom: 20, fontSize: 19 }}>गहरा हरा · तीखा · जीवंत</div>
          <p style={{ color: 'var(--ink-soft)', fontSize: 16, lineHeight: 1.75, marginBottom: 14, maxWidth: '50ch' }}>The signature of polyphenol-rich Cretan oil at its youngest: fresh-cut grass on the nose, green almond and artichoke mid-palate, and a throat-catching pepper on the finish.</p>
          <p style={{ color: 'var(--ink-soft)', fontSize: 16, lineHeight: 1.75, marginBottom: 14, maxWidth: '50ch' }}>412 mg/kg of polyphenols — three times the threshold the EU calls "robust." Drink it within 12 months for the brightest expression of this harvest.</p>
          <div className="h-taste-notes">
            <div className="h-taste-note"><div className="lbl">Nose</div><div className="val">Fresh-cut grass</div></div>
            <div className="h-taste-note"><div className="lbl">Mid-palate</div><div className="val">Green almond</div></div>
            <div className="h-taste-note"><div className="lbl">Finish</div><div className="val">Throat-pepper</div></div>
            <div className="h-taste-note"><div className="lbl">Body</div><div className="val">Silken, bright</div></div>
          </div>
        </div>
        <div className="h-taste-wheel"><TasteWheel /></div>
      </section>

      {/* PAIRINGS TEASER */}
      <section className="h-pair">
        <div className="h-pair-inner">
          <div className="h-pair-head">
            <div>
              <div className="du-eyebrow-plain" style={{ marginBottom: 16 }}>Six Dishes, Six Ways</div>
              <h2 className="du-h2">Pairings <em style={{ color: 'var(--saffron-deep)', fontStyle: 'italic' }}>from both</em><br/>sides of the table.</h2>
            </div>
            <p>Three dishes from Crete, three from India — each one chosen to reveal a different face of this year's oil. Developed with chefs in Chania, Mumbai, and Bengaluru.</p>
          </div>
          <div className="h-pair-grid">
            <Link to="/pairings" className="h-pair-card">
              <div className="img" style={{ position: 'relative', aspectRatio: '4/3' }}>
                <DishTile id="dakos" tone="g" label="ντάκος" />
                <span className="chip">The Greek Thread</span>
              </div>
              <div className="body">
                <div className="cuisine">Chania · Cretan table</div>
                <h3><em>Dakos</em>, summer tomato</h3>
                <div className="gr" style={{ color: 'var(--greek-blue)', fontStyle: 'italic', fontSize: 15, marginBottom: 12 }}>ντάκος</div>
                <p>Barley rusk, grated tomato, crumbled xinomizithra, a flurry of oregano, and more oil than you think reasonable.</p>
              </div>
            </Link>
            <Link to="/pairings" className="h-pair-card i">
              <div className="img" style={{ position: 'relative', aspectRatio: '4/3' }}>
                <DishTile id="dal" tone="i" label="हरी तड़का" />
                <span className="chip">The Indian Thread</span>
              </div>
              <div className="body">
                <div className="cuisine">South India · Chef Floyd Cardoz Collective</div>
                <h3>Green <em>tadka</em>, heirloom dal</h3>
                <div className="deva" style={{ fontSize: 15, marginBottom: 12 }}>हरी तड़का · दाल</div>
                <p>A cold-finishing drizzle over slow-cooked urad with mustard seed and curry leaf. The oil's pepper meets the dal's earth.</p>
              </div>
            </Link>
            <Link to="/pairings" className="h-pair-card">
              <div className="img" style={{ position: 'relative', aspectRatio: '4/3' }}>
                <DishTile id="millet" tone="b" label="bridge" />
                <span className="chip" style={{ color: 'var(--leaf)' }}>The Bridge</span>
              </div>
              <div className="body">
                <div className="cuisine">Farmlore · Bengaluru</div>
                <h3>Foxtail millet <em>risotto</em></h3>
                <div className="gr" style={{ color: 'var(--leaf)', fontSize: 15, marginBottom: 12 }}>Greek-Indian bridge</div>
                <p>Foxtail millet cooked slow in vegetable stock, finished with this year's oil, preserved lemon, and shaved xinomizithra.</p>
              </div>
            </Link>
          </div>
          <div className="h-pair-all">
            <Link to="/pairings"><button className="du-btn-ghost">See all six pairings →</button></Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="h-proc">
        <div className="h-proc-head">
          <div className="du-eyebrow">From Tree to Table</div>
          <h2 className="du-h2" style={{ marginTop: 18 }}>A <em style={{ color: 'var(--leaf)', fontStyle: 'italic', fontWeight: 400 }}>short journey</em>, taken carefully.</h2>
          <p className="du-lede" style={{ margin: '16px auto 0' }}>Four hours from branch to bottle. Twenty-one days from Chania to Mumbai. One harvest, one hand on the press.</p>
        </div>
        <div className="h-proc-timeline">
          {[
            { n: '॥१॥', title: 'Harvest', desc: 'Hand-picked from November 10, at dawn, at 420 m elevation.', active: true },
            { n: '॥२॥', title: 'Cold-Press', desc: 'Within 4 hours, at ≤27°C. No heat, no water, no additives.', active: true },
            { n: '॥३॥', title: 'Rest & Settle', desc: '30 days in stainless tanks. Gravity does the filtering.', active: true },
            { n: '॥४॥', title: 'Bottle & Seal', desc: 'Dark UV glass. Wax seal. Numbered by hand; dated by day.', active: false },
            { n: '॥५॥', title: 'Passage', desc: '21 days at 15–18°C, from Piraeus to Nhava Sheva to you.', active: false },
          ].map((step, i) => (
            <div key={i} className={`h-proc-step ${step.active ? 'active' : ''}`}>
              <div className="n deva">{step.n}</div>
              <div className="dot"></div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT TEASER */}
      <section className="h-prod">
        <div className="h-prod-inner">
          <div className="h-prod-visual">
            <div className="h-prod-card"></div>
            <DuSeal style={{ position: 'absolute', top: 20, right: -20, zIndex: 4 }}>2025</DuSeal>
          </div>
          <div className="h-prod-copy">
            <div className="du-eyebrow">The Founding Bottle · No. 01</div>
            <h2 className="du-h2" style={{ marginTop: 16 }}>One bottle.<br/>Two <em style={{ color: 'var(--saffron-deep)', fontStyle: 'italic', fontWeight: 400 }}>worlds</em>.</h2>
            <div className="sub deva" style={{ fontSize: 22, color: 'var(--greek-blue)', marginBottom: 24 }}>एक बोतल · दो संसार</div>
            <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: 14, maxWidth: '52ch' }}>2,400 hand-numbered bottles from the 2025 harvest — cold-pressed in Chania, rested for 30 days, sealed with wax, and shipped to India in temperature-controlled crates.</p>
            <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: 14, maxWidth: '52ch' }}>Each bottle arrives with a card of three recipes: a Cretan <em>dakos</em>, a South Indian <em>thoran</em>, and a dressing that bridges both.</p>
            <div className="h-prod-meta">
              <div><div className="lbl">Variety</div><div className="val">Koroneiki</div></div>
              <div><div className="lbl">Acidity</div><div className="val">0.24%</div></div>
              <div><div className="lbl">Origin</div><div className="val">Chania</div></div>
              <div><div className="lbl">Edition</div><div className="val">/ 2400</div></div>
            </div>
            <div className="h-prod-cta">
              <div className="price">
                <span className="lbl">Founder's price</span>
                <span className="val">₹ 2,400</span>
              </div>
              <Link to="/oil" style={{ flex: 1 }}><button className="du-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Reserve your bottle →</button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="h-testi">
        <div className="h-testi-head">
          <div className="du-eyebrow">From the Founding Table</div>
          <h2 className="du-h2" style={{ marginTop: 18 }}>Words from <em style={{ color: 'var(--greek-blue)', fontStyle: 'italic', fontWeight: 400 }}>early</em> bottles.</h2>
        </div>
        <div className="h-testi-grid">
          {[
            { init: 'A', quote: '"Green, peppery, and so alive it almost buzzes. I\'ve started finishing my dal with it instead of ghee once a week, and no one complains."', name: 'Aditi K.', loc: 'Mumbai · home cook' },
            { init: 'F', quote: '"Finally an olive oil that\'s good enough to drink. The pepper at the back of the throat — that\'s how you know it\'s the real thing, and I\'d almost forgotten."', name: 'Chef Fatima R.', loc: 'Delhi · O Pedro alum' },
            { init: 'R', quote: '"The bilingual recipe card is a small thing that tells you a lot about the people behind it. They\'ve thought about how we actually cook, not what we should cook."', name: 'Rohan M.', loc: 'Bengaluru · food writer' },
          ].map((t, i) => (
            <div key={i} className="h-testi-card">
              <div className="stars">★★★★★</div>
              <blockquote>{t.quote}</blockquote>
              <div className="who">
                <div className="avatar">{t.init}</div>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="loc">{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEARN / BLOG TEASER */}
      <section className="h-learn">
        <div className="h-learn-inner">
          <div className="h-learn-head">
            <div>
              <div className="du-eyebrow-plain" style={{ marginBottom: 16 }}>From the Kitchen & the Grove</div>
              <h2 className="du-h2">Read, cook,<br/><em style={{ color: 'var(--greek-blue)', fontStyle: 'italic', fontWeight: 400 }}>understand</em>.</h2>
            </div>
            <p>Recipes, health science, heritage stories, and practical kitchen tips — everything you need to make this oil part of your daily table.</p>
          </div>
          <div className="h-learn-grid">
            <Link to="/learn/perfect-tadka-extra-virgin-olive-oil" className="h-learn-card">
              <span className="h-learn-cat">Indian Recipes</span>
              <h3>The Perfect Tadka with EVOO</h3>
              <p>Using extra virgin olive oil for tempering spices — mustard seeds, curry leaves, cumin — in a way that's healthier and more flavourful.</p>
              <span className="h-learn-link">Read →</span>
            </Link>
            <Link to="/learn/polyphenols-greek-olive-oil-indian-diets" className="h-learn-card">
              <span className="h-learn-cat">Health & Wellness</span>
              <h3>Why Polyphenols Are a Superfood for Indian Diets</h3>
              <p>The science behind the pepper in your throat — and why it synergises beautifully with turmeric, black pepper, and garlic.</p>
              <span className="h-learn-link">Read →</span>
            </Link>
            <Link to="/learn/4000-years-cretan-olive-oil-history" className="h-learn-card">
              <span className="h-learn-cat">Greek Heritage</span>
              <h3>4,000 Years of Cretan Olive Oil</h3>
              <p>From Minoan palace inventories to your Mumbai kitchen — a history of the world's oldest cultivated tree.</p>
              <span className="h-learn-link">Read →</span>
            </Link>
          </div>
          <div className="h-learn-all">
            <Link to="/learn"><button className="du-btn-ghost">Read all articles →</button></Link>
          </div>
        </div>
      </section>
    </>
  )
}
