export default function TasteWheel() {
  const notes = [
    { lbl: 'Green almond',  sub: 'mid-palate',  score: 8.5, group: 'flavour' },
    { lbl: 'Artichoke',     sub: 'mid-palate',  score: 7.2, group: 'flavour' },
    { lbl: 'Peppery',       sub: 'finish',      score: 9.3, group: 'finish' },
    { lbl: 'Bitter',        sub: 'finish',      score: 6.8, group: 'finish' },
    { lbl: 'Silken',        sub: 'texture',     score: 7.5, group: 'texture' },
    { lbl: 'Tomato leaf',   sub: 'aroma',       score: 5.9, group: 'aroma' },
    { lbl: 'Fresh cut',     sub: 'aroma',       score: 8.8, group: 'aroma' },
    { lbl: 'Grass',         sub: 'aroma',       score: 7.9, group: 'aroma' },
  ]
  const cx = 300, cy = 300, maxR = 170
  const n = notes.length
  const ringValues = [2, 4, 6, 8, 10]

  const colorFor = (g) => ({
    aroma:   'var(--greek-blue)',
    flavour: 'var(--leaf)',
    texture: 'var(--ink-soft)',
    finish:  'var(--saffron-deep)',
  }[g])

  const angleFor = (i) => (i / n) * Math.PI * 2 - Math.PI / 2
  const pt = (i, score) => {
    const a = angleFor(i)
    const r = (score / 10) * maxR
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r]
  }

  const polygonPts = notes.map((note, i) => pt(i, note.score).join(',')).join(' ')

  return (
    <svg viewBox="0 0 600 600" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <radialGradient id="wheel-fill" cx="50%" cy="50%">
          <stop offset="0%" stopColor="var(--saffron)" stopOpacity="0.25"/>
          <stop offset="100%" stopColor="var(--leaf)" stopOpacity="0.2"/>
        </radialGradient>
      </defs>

      {/* Outer frame */}
      <rect x="20" y="20" width="560" height="560" fill="none" stroke="var(--hairline-strong)" strokeWidth="0.5"/>
      <rect x="30" y="30" width="540" height="540" fill="none" stroke="var(--hairline-strong)" strokeWidth="0.5"/>

      {/* Plate header */}
      <text x={cx} y={60} textAnchor="middle" fontFamily="Spectral, serif" fontSize="11" letterSpacing="3" fill="var(--muted)">FLAVOUR PLOT · HARVEST 2025</text>
      <line x1={100} y1={74} x2={500} y2={74} stroke="var(--hairline-strong)" strokeWidth="0.5"/>

      {/* Concentric rings */}
      {ringValues.map((v, i) => {
        const r = (v / 10) * maxR
        return (
          <g key={v}>
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--hairline-strong)" strokeWidth="0.5" strokeDasharray={i === ringValues.length - 1 ? 'none' : '2 3'}/>
            <text x={cx + 4} y={cy - r + 3} fontFamily="Spectral, serif" fontSize="9" fill="var(--muted)" fontStyle="italic">{v}</text>
          </g>
        )
      })}

      {/* Spokes */}
      {notes.map((note, i) => {
        const a = angleFor(i)
        const x = cx + Math.cos(a) * maxR
        const y = cy + Math.sin(a) * maxR
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="var(--hairline-strong)" strokeWidth="0.5"/>
      })}

      {/* Flavour polygon */}
      <polygon points={polygonPts} fill="url(#wheel-fill)" stroke="var(--saffron-deep)" strokeWidth="1.5" strokeLinejoin="round"/>

      {/* Score dots */}
      {notes.map((note, i) => {
        const [x, y] = pt(i, note.score)
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="5" fill="var(--cream)" stroke={colorFor(note.group)} strokeWidth="2"/>
            <circle cx={x} cy={y} r="2" fill={colorFor(note.group)}/>
          </g>
        )
      })}

      {/* Axis labels */}
      {notes.map((note, i) => {
        const a = angleFor(i)
        const lr = maxR + 34
        const lx = cx + Math.cos(a) * lr
        const ly = cy + Math.sin(a) * lr
        const anchor = Math.cos(a) > 0.3 ? 'start' : Math.cos(a) < -0.3 ? 'end' : 'middle'
        return (
          <g key={i}>
            <text x={lx} y={ly - 4} textAnchor={anchor} fontFamily="Spectral, serif" fontStyle="italic" fontSize="14" fill="var(--ink)">{note.lbl}</text>
            <text x={lx} y={ly + 11} textAnchor={anchor} fontFamily="Spectral, serif" fontSize="10" letterSpacing="1.5" fill={colorFor(note.group)} fontWeight="600">{note.score.toFixed(1)} · {note.sub.toUpperCase()}</text>
          </g>
        )
      })}

      {/* Center block */}
      <circle cx={cx} cy={cy} r="38" fill="var(--cream)"/>
      <circle cx={cx} cy={cy} r="38" fill="none" stroke="var(--saffron)" strokeWidth="1"/>
      <text x={cx} y={cy - 6} textAnchor="middle" fontFamily="Spectral, serif" fontSize="10" letterSpacing="2" fill="var(--muted)">INTENSITY</text>
      <text x={cx} y={cy + 12} textAnchor="middle" fontFamily="Spectral, serif" fontSize="22" fontWeight="500" fill="var(--greek-blue)" fontStyle="italic">7.6</text>
      <text x={cx} y={cy + 24} textAnchor="middle" fontFamily="Spectral, serif" fontSize="9" fill="var(--muted)">/10 AVG</text>

      {/* Legend */}
      <g transform="translate(50, 540)">
        <text fontFamily="Spectral, serif" fontSize="10" letterSpacing="2" fill="var(--muted)">KEY</text>
        <line x1="32" y1="-4" x2="500" y2="-4" stroke="var(--hairline-strong)" strokeWidth="0.5"/>
        {[
          { lbl: 'Aroma', c: 'var(--greek-blue)' },
          { lbl: 'Flavour', c: 'var(--leaf)' },
          { lbl: 'Texture', c: 'var(--ink-soft)' },
          { lbl: 'Finish', c: 'var(--saffron-deep)' },
        ].map((k, i) => (
          <g key={i} transform={`translate(${i * 120}, 18)`}>
            <circle cx="4" cy="-3" r="4" fill="var(--cream)" stroke={k.c} strokeWidth="2"/>
            <circle cx="4" cy="-3" r="1.5" fill={k.c}/>
            <text x="14" y="0" fontFamily="Spectral, serif" fontSize="11" fill="var(--ink)" fontStyle="italic">{k.lbl}</text>
          </g>
        ))}
      </g>

      {/* Corner marks */}
      <text x={40} y={46} fontFamily="Spectral, serif" fontSize="9" letterSpacing="1.5" fill="var(--muted)">N°</text>
      <text x={40} y={58} fontFamily="Spectral, serif" fontSize="14" fill="var(--saffron-deep)" fontStyle="italic">01</text>
      <text x={560} y={46} textAnchor="end" fontFamily="Spectral, serif" fontSize="9" letterSpacing="1.5" fill="var(--muted)">POLYPHENOLS</text>
      <text x={560} y={58} textAnchor="end" fontFamily="Spectral, serif" fontSize="14" fill="var(--saffron-deep)" fontStyle="italic">412 mg/kg</text>
    </svg>
  )
}
