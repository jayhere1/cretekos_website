export default function DishTile({ id, tone = 'g', label }) {
  const palettes = {
    g: { bg: '#0E2F4F', ink: '#FBF3E2', accent: '#E8C24A', rule: '#2A4F72', sub: '#A8C4DB' },
    i: { bg: '#7A1E1A', ink: '#FBF3E2', accent: '#F4B74B', rule: '#9E3A32', sub: '#E4BDA3' },
    b: { bg: '#2E4A1F', ink: '#FBF3E2', accent: '#E8C24A', rule: '#4A6B2D', sub: '#B8C89A' },
  }
  const p = palettes[tone] || palettes.g

  const content = {
    dakos:     { num: '01', kicker: 'Cretan rusk',       title: 'Dakos',               script: 'ντάκος',          fam: 'GFS Neohellenic' },
    gigantes:  { num: '02', kicker: 'Baked beans',       title: 'Gigantes',            script: 'γίγαντες',        fam: 'GFS Neohellenic' },
    horta:     { num: '03', kicker: 'Wild greens',       title: 'Horta',               script: 'χόρτα',           fam: 'GFS Neohellenic' },
    dal:       { num: '04', kicker: 'Heirloom lentils',  title: 'Dal · Tadka',         script: 'दाल · तड़का',      fam: 'Tiro Devanagari Sanskrit' },
    kachumber: { num: '05', kicker: 'Raw, bright salad', title: 'Kachumber',           script: 'कचुम्बर',          fam: 'Tiro Devanagari Sanskrit' },
    millet:    { num: '06', kicker: 'Greek × Indian',    title: 'Millet Risotto',      script: 'सेतु · γέφυρα',     fam: 'Tiro Devanagari Sanskrit' },
    harvest:   { num: 'XI',  kicker: 'From the grove',    title: 'Late Harvest',        script: 'Νοέμβριος',       fam: 'GFS Neohellenic' },
    tasting:   { num: 'IX',  kicker: 'On the palate',     title: 'Peppery, defined',    script: 'δριμύς',          fam: 'GFS Neohellenic' },
    passage:   { num: 'VIII',kicker: 'Shipping notes',    title: '21 days at 18°C',     script: 'a sea passage',   fam: 'Spectral' },
    dressing:  { num: 'VII', kicker: 'Kitchen',           title: 'A bridge dressing',   script: 'सेतु · γέφυρα',    fam: 'Tiro Devanagari Sanskrit' },
    tsounati:  { num: 'VI',  kicker: 'Heritage tree',     title: 'The Tsounati',        script: 'Τσουνάτη',        fam: 'GFS Neohellenic' },
    wind:      { num: '—',   kicker: 'Chania',            title: 'The Meltemi',         script: 'μελτέμι',         fam: 'GFS Neohellenic' },
  }
  const c = content[id] || content.dakos
  const scriptFam = c.fam

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      background: p.bg,
      color: p.ink,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Spectral, serif',
    }}>
      {/* inner frame */}
      <div style={{ position: 'absolute', inset: '14px', border: `1px solid ${p.rule}`, pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', inset: '18px', border: `1px solid ${p.rule}`, pointerEvents: 'none', opacity: 0.5 }}/>

      {/* corner flourishes */}
      {[
        { pos: { top: 14, left: 14 }, transform: undefined },
        { pos: { top: 14, right: 14 }, transform: 'scaleX(-1)' },
        { pos: { bottom: 14, left: 14 }, transform: 'scaleY(-1)' },
        { pos: { bottom: 14, right: 14 }, transform: 'scale(-1, -1)' },
      ].map((corner, idx) => (
        <svg key={idx} viewBox="0 0 100 100" style={{ position: 'absolute', ...corner.pos, width: 34, height: 34, transform: corner.transform, pointerEvents: 'none' }}>
          <path d="M 0 25 L 25 25 L 25 0" stroke={p.accent} strokeWidth="1.5" fill="none"/>
          <circle cx="25" cy="25" r="2" fill={p.accent}/>
        </svg>
      ))}

      {/* top kicker */}
      <div style={{
        position: 'relative', padding: '38px 38px 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: p.sub,
      }}>
        <span>№ {c.num}</span>
        <span style={{ fontStyle: 'italic', textTransform: 'none', letterSpacing: '0.5px', fontSize: 11 }}>{c.kicker}</span>
      </div>

      {/* central wordmark */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', padding: '0 28px', textAlign: 'center', position: 'relative',
      }}>
        <svg viewBox="0 0 120 14" style={{ width: 120, height: 14, marginBottom: 14, opacity: 0.9 }}>
          <line x1="0" y1="7" x2="46" y2="7" stroke={p.accent} strokeWidth="0.8"/>
          <line x1="74" y1="7" x2="120" y2="7" stroke={p.accent} strokeWidth="0.8"/>
          <circle cx="60" cy="7" r="3" fill="none" stroke={p.accent} strokeWidth="0.8"/>
          <circle cx="60" cy="7" r="1" fill={p.accent}/>
        </svg>

        <div style={{
          fontFamily: scriptFam + ', serif',
          fontSize: 'clamp(36px, 8vw, 64px)', lineHeight: 1,
          fontStyle: scriptFam === 'Spectral' ? 'italic' : 'normal',
          fontWeight: 400, color: p.ink, marginBottom: 8,
          letterSpacing: scriptFam === 'Tiro Devanagari Sanskrit' ? '-1px' : '-0.5px',
        }}>
          {c.script}
        </div>

        <div style={{
          fontFamily: 'Spectral, serif', fontStyle: 'italic', fontWeight: 300,
          fontSize: 'clamp(22px, 4.4vw, 34px)', lineHeight: 1.1,
          color: p.accent, letterSpacing: '-0.3px',
        }}>
          {c.title}
        </div>

        <svg viewBox="0 0 120 14" style={{ width: 120, height: 14, marginTop: 14, opacity: 0.9 }}>
          <line x1="0" y1="7" x2="52" y2="7" stroke={p.accent} strokeWidth="0.8"/>
          <line x1="68" y1="7" x2="120" y2="7" stroke={p.accent} strokeWidth="0.8"/>
          <path d="M 55 4 L 60 10 L 65 4" stroke={p.accent} strokeWidth="0.8" fill="none"/>
        </svg>
      </div>

      {/* bottom kicker */}
      <div style={{
        position: 'relative', padding: '0 38px 38px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: p.sub,
      }}>
        <span>Crete · Kos</span>
        <span>{tone === 'g' ? 'Ἑλλάς' : tone === 'i' ? 'भारत' : '∞'}</span>
      </div>

      {/* dot texture */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.08 }}>
        <defs>
          <pattern id={`dots-${id}-${tone}`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.6" fill={p.ink}/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dots-${id}-${tone})`}/>
      </svg>
    </div>
  )
}
