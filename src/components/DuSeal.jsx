export default function DuSeal({ children, style }) {
  return (
    <div style={{
      width: 90, height: 90,
      background: 'var(--saffron)',
      color: 'var(--cream)',
      borderRadius: '50%',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      fontSize: 10, letterSpacing: 2, textTransform: 'uppercase',
      fontWeight: 700,
      transform: 'rotate(8deg)',
      boxShadow: '0 6px 20px rgba(224,122,44,0.4)',
      ...style
    }}>
      <span style={{ fontFamily: 'Spectral, serif', fontSize: 18, fontWeight: 400, fontStyle: 'italic', letterSpacing: 0, textTransform: 'none', color: 'var(--cream)' }}>N°01</span>
      {children}
    </div>
  )
}
