import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <nav className="du-nav">
      <div className="du-nav-left">
        <Link to="/grove" className={isActive('/grove') ? 'active' : ''}>The Grove</Link>
        <Link to="/oil" className={isActive('/oil') ? 'active' : ''}>The Oil</Link>
        <Link to="/pairings" className={isActive('/pairings') ? 'active' : ''}>Pairings</Link>
        <Link to="/journal" className={isActive('/journal') ? 'active' : ''}>Journal</Link>
        <Link to="/learn" className={isActive('/learn') || location.pathname.startsWith('/learn/') ? 'active' : ''}>Learn</Link>
      </div>
      <Link to="/" className="brand">
        Crete<span className="dot"></span>kos <em className="deva">क्रीटेकोस</em>
      </Link>
      <div className="du-nav-right">
        <span className="lang">EN · <span className="deva">हिंदी</span> · ΕΛ</span>
        <Link to="/oil" className="cta">Reserve ₹2,400 →</Link>
      </div>
    </nav>
  )
}
