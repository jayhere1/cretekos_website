import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Logo({ showSub = false }) {
  return (
    <span className="logo-text">
      <span className="logo-main">CreteΚos</span>
      {showSub && <span className="logo-greek-sub">Κρητικός</span>}
    </span>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location])

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const scrollToSection = useCallback((id) => {
    setMenuOpen(false)
    document.body.style.overflow = ''
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`
      return
    }
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="nav-logo">
          <Logo showSub />
        </Link>
        <div className="nav-links">
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
          <Link to="/learn" className={isActive('/learn') ? 'active' : ''}>Learn</Link>
          <Link to="/recipes" className={isActive('/recipes') ? 'active' : ''}>Recipes</Link>
          <a href="#waitlist" onClick={(e) => { e.preventDefault(); scrollToSection('waitlist') }}>Join Waitlist</a>
        </div>
        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/recipes">Recipes</Link>
        <a href="#waitlist" onClick={(e) => { e.preventDefault(); scrollToSection('waitlist') }}>Join Waitlist</a>
      </div>
    </>
  )
}
