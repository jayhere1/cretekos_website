import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const NAV = [
  { to: '/grove', label: 'The Grove', sub: 'Chania, Crete' },
  { to: '/oil', label: 'The Oil', sub: 'Single-estate EVOO' },
  { to: '/pairings', label: 'Pairings', sub: 'Greek × Indian' },
  { to: '/journal', label: 'Journal', sub: 'Field notes' },
  { to: '/learn', label: 'Learn', sub: 'Origins & craft' },
]

export default function Navbar() {
  const location = useLocation()
  const isActive = (path) =>
    location.pathname === path ||
    (path === '/learn' && location.pathname.startsWith('/learn/'))

  return (
    <nav className="du-nav">
      <Link to="/" className="brand">
        Crete<span className="dot"></span>kos <em className="deva">क्रीटेकोस</em>
      </Link>
      <div className="du-nav-center">
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`nav-item ${isActive(item.to) ? 'active' : ''}`}
          >
            <span className="nav-label">{item.label}</span>
            <span className="nav-sub">{item.sub}</span>
          </Link>
        ))}
      </div>
      <div className="du-nav-right">
        <span className="lang">EN · <span className="deva">हिंदी</span> · ΕΛ</span>
        <Link to="/oil" className="cta">Reserve ₹2,400 →</Link>
      </div>
    </nav>
  )
}
