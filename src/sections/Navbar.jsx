import { useState, useEffect } from 'react'
import logo from '../assets/alera-logo.jpeg'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Branches', href: '#branches' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Franchise', href: '#franchise' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo" aria-label="Alera Hair Nail Studio – Home">
          <img src={logo} alt="Alera Hair Nail Studio" className="navbar__logo-img" />
        </a>

        <nav className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary navbar__cta" onClick={() => setMenuOpen(false)}>
            Book Now
          </a>
        </nav>

        <button
          className="navbar__burger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span className={`burger-line${menuOpen ? ' open' : ''}`} />
          <span className={`burger-line${menuOpen ? ' open' : ''}`} />
          <span className={`burger-line${menuOpen ? ' open' : ''}`} />
        </button>
      </div>
    </header>
  )
}
