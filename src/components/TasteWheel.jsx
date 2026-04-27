export default function TasteWheel() {
  const notes = [
    { lbl: 'Grassy',  desc: 'Fresh-cut, green',     intensity: 5, color: 'var(--leaf)' },
    { lbl: 'Peppery', desc: 'Catches the throat',   intensity: 5, color: 'var(--saffron-deep)' },
    { lbl: 'Almond',  desc: 'Green, mid-palate',    intensity: 4, color: 'var(--leaf)' },
    { lbl: 'Bitter',  desc: 'Clean, balanced',      intensity: 3, color: 'var(--saffron-deep)' },
    { lbl: 'Smooth',  desc: 'Silken texture',       intensity: 4, color: 'var(--greek-blue)' },
  ]

  return (
    <div className="taste-card">
      <div className="taste-card-head">
        <span className="taste-card-eyebrow">Flavour · Harvest 2025</span>
        <span className="taste-card-meta">412 mg/kg polyphenols</span>
      </div>

      <ul className="taste-list">
        {notes.map((n) => (
          <li key={n.lbl} className="taste-row">
            <div className="taste-row-text">
              <span className="taste-lbl">{n.lbl}</span>
              <span className="taste-desc">{n.desc}</span>
            </div>
            <div className="taste-dots" aria-label={`${n.intensity} of 5`}>
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className={`taste-dot ${i <= n.intensity ? 'on' : ''}`}
                  style={i <= n.intensity ? { background: n.color } : {}}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>

      <div className="taste-card-foot">
        <em>Best within 12 months of bottling.</em>
      </div>
    </div>
  )
}
