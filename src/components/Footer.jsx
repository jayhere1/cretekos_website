import { Link, useLocation } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const location = useLocation()

  const handleWaitlist = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      window.location.href = '/#waitlist'
      return
    }
    const el = document.getElementById('waitlist')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-logo">
        <span className="logo-main">CreteΚos</span>
        <span className="logo-greek-sub">Κρητικός</span>
      </div>
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/recipes">Recipes</Link>
        <a href="#waitlist" onClick={handleWaitlist}>Waitlist</a>
        <a href="https://instagram.com/nourishwithnia" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="mailto:hello@cretekos.com">Contact</a>
      </div>
      <div className="footer-copy">&copy; 2026 CreteΚos. Product of Crete, Greece.</div>
    </footer>
  )
}
