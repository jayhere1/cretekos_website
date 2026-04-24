import { useState } from 'react'
import DishTile from '../components/DishTile'
import './Pairings.css'

const PAIRINGS = [
  { kind: 'g', cuisine: 'Chania · Cretan table', title: 'Dakos, summer tomato', local: 'ντάκος', localCls: 'gr', dish: 'dakos', body: "Barley rusk, grated tomato, crumbled xinomizithra, oregano, and more oil than you think reasonable. A plate of sunlight.", tags: ['Raw finish', 'Bitter-sweet', 'August'] },
  { kind: 'g', cuisine: 'Chania · Cretan table', title: 'Gigantes in tomato', local: 'γίγαντες', localCls: 'gr', dish: 'gigantes', body: "Giant white beans baked slowly with tomato, dill, and half the oil in the bottle. Serve warm; drink the remaining oil with bread.", tags: ['Slow-cook', 'Sweet', 'Winter'] },
  { kind: 'g', cuisine: 'Western Crete · Maria Papadakis', title: 'Horta with lemon', local: 'χόρτα', localCls: 'gr', dish: 'horta', body: "Wild greens — dandelion, chard, wild fennel — blanched, squeezed, then drowned in lemon and oil. The original salad.", tags: ['Bitter', 'Greens', 'Raw finish'] },
  { kind: 'i', cuisine: 'South India · Floyd Cardoz Collective', title: 'Green tadka, heirloom dal', local: 'हरी तड़का', localCls: 'dv', dish: 'dal', body: "Slow-cooked urad finished with a cold drizzle over a hot tadka of mustard seed and curry leaf. The oil's pepper meets the dal's earth.", tags: ['Cold finish', 'Peppery', 'Weeknight'] },
  { kind: 'i', cuisine: 'Maharashtra · Priya Menon', title: 'Kachumber, salted lime', local: 'कचुम्बर', localCls: 'dv', dish: 'kachumber', body: "Cucumber, tomato, red onion, mint, lime — dressed not in neutral oil but in this, with a pinch of black salt. Eat beside dal-bhaat.", tags: ['Raw', 'Bright', 'All year'] },
  { kind: 'b', cuisine: 'Farmlore · Bengaluru', title: 'Foxtail millet risotto', local: 'A Greek-Indian bridge', localCls: 'br', dish: 'millet', body: "Foxtail millet cooked slow in vegetable stock, finished with this year's oil, preserved lemon, and shaved xinomizithra. Grain, salt, fat, acid.", tags: ['Bridge', 'Comfort', 'Weekend'] },
]

export default function Pairings() {
  const [filter, setFilter] = useState('all')
  const items = PAIRINGS.filter(p => filter === 'all' || p.kind === filter)

  return (
    <>
      <section className="du-page-head du-paper">
        <div className="eyebrow">Pairings · <span className="deva">व्यंजन</span> · Συνταγές</div>
        <h1>Six dishes, <em>from both</em><br/>sides of the table.</h1>
        <div className="deva">छह व्यंजन · दो संसार</div>
        <p className="lede">Three recipes from Crete, three from India, and one from the space between — each designed to reveal a different face of the 2025 harvest.</p>
      </section>

      <div className="p-filter">
        {[
          { value: 'all', label: 'All six' },
          { value: 'g', label: 'The Greek thread' },
          { value: 'i', label: 'The Indian thread' },
          { value: 'b', label: 'The bridge' },
        ].map(f => (
          <button key={f.value} className={filter === f.value ? 'active' : ''} onClick={() => setFilter(f.value)}>{f.label}</button>
        ))}
      </div>

      <section className="p-grid">
        {items.map((p, i) => (
          <div key={i} className={`p-card ${p.kind}`}>
            <div className="media" style={{ position: 'relative' }}>
              <DishTile id={p.dish} tone={p.kind} label={p.local} />
              <span className="chip">{p.kind === 'g' ? 'Greek thread' : p.kind === 'i' ? 'Indian thread' : 'The bridge'}</span>
            </div>
            <div className="body">
              <div className="cuisine">{p.cuisine}</div>
              <h3><em>{p.title.split(',')[0]}</em>{p.title.includes(',') ? ',' + p.title.split(',').slice(1).join(',') : ''}</h3>
              <div className={`local ${p.localCls} ${p.localCls === 'dv' ? 'deva' : ''}`}>{p.local}</div>
              <p>{p.body}</p>
              <div className="notes">
                <div className="lbl">Why this oil works here</div>
                <div className="tags">{p.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}</div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
