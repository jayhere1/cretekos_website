import DishTile from '../components/DishTile'
import './Journal.css'

const JOURNAL_POSTS = [
  { cat: 'From the grove', dish: 'harvest', tone: 'g', title: 'Notes from a late harvest', meta: '6 min · Nov 2025 · Maria' },
  { cat: 'Kitchen', dish: 'dal', tone: 'i', title: 'On finishing a dal with olive oil', meta: '4 min · Oct 2025 · Priya' },
  { cat: 'Tasting', dish: 'tasting', tone: 'g', title: 'What "peppery" actually means', meta: '5 min · Sep 2025 · Nikos' },
  { cat: 'The passage', dish: 'passage', tone: 'b', title: '21 days at 18°C by sea', meta: '3 min · Aug 2025 · Karthik' },
  { cat: 'Kitchen', dish: 'dressing', tone: 'b', title: 'A bridge dressing for both tables', meta: '3 min · Jul 2025 · Priya' },
  { cat: 'From the grove', dish: 'tsounati', tone: 'g', title: 'Why we keep the Tsounati trees', meta: '7 min · Jun 2025 · Maria' },
]

export default function Journal() {
  return (
    <>
      <section className="du-page-head du-paper">
        <div className="eyebrow">Journal · <span className="deva">पत्रिका</span> · Ημερολόγιο</div>
        <h1>Dispatches from a<br/><em>slow</em> kitchen.</h1>
        <div className="deva">धीमी रसोई से</div>
        <p className="lede">Harvest notes, kitchen experiments, and letters between two tables — written monthly, in two languages, by the four people behind the bottle.</p>
      </section>

      <section className="j-feat">
        <div className="j-feat-card">
          <div className="media"><DishTile id="wind" tone="g" label="Chania · meltemi" /></div>
          <div className="body">
            <div className="meta">Featured · From the Grove · 8 min read</div>
            <h2>When the wind came down <em>from the</em> White Mountains.</h2>
            <div className="deva" style={{ fontFamily: 'Tiro Devanagari Sanskrit, serif', color: 'var(--saffron-deep)', fontSize: 17, marginBottom: 18 }}>श्वेत पर्वतों से आई हवा</div>
            <p>Two days into this November's harvest, a sudden northerly — the <em>meltemi</em> arriving a month late — shook half the fruit to the nets before we were ready. This is what we did, and what the oil tastes like because of it.</p>
            <div className="author">
              <div className="avatar"></div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--ink)' }}>Maria Papadakis</div>
                <div>Grove keeper · Chania · Nov 24, 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="j-grid">
        <div className="j-grid-head">
          <h3>Recent dispatches</h3>
          <div className="j-grid-filter">
            <span className="active">All</span>
            <span>From the grove</span>
            <span>Kitchen</span>
            <span>Tasting</span>
            <span>The passage</span>
          </div>
        </div>
        <div className="j-list">
          {JOURNAL_POSTS.map((p, i) => (
            <article key={i} className="j-item">
              <div className="media"><DishTile id={p.dish} tone={p.tone} /></div>
              <div className="cat">{p.cat}</div>
              <h4>{p.title.split(' ').slice(0, 3).join(' ')} <em>{p.title.split(' ').slice(3).join(' ')}</em></h4>
              <div className="item-meta">
                <span>{p.meta.split(' · ')[0]}</span>
                <span className="dot"></span>
                <span>{p.meta.split(' · ').slice(1).join(' · ')}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
