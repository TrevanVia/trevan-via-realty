import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Nav() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    ['/home-value', 'Home value'],
    ['/properties', 'Properties'],
    ['/areas', 'Areas'],
    ['/about', 'About'],
  ]

  const barStyle = {
    display: 'block',
    width: '22px',
    height: '2px',
    background: 'var(--charcoal)',
    margin: '2px 0',
  }

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: 'rgba(250, 246, 240, 0.92)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--light-border)',
  }

  const logoStyle = {
    fontFamily: 'var(--font-logo)',
    fontSize: '26px',
    fontWeight: 400,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--olive-dark)',
  }

  const desktopLink = (path) => ({
    color: pathname === path ? 'var(--olive)' : 'var(--warm-gray)',
    fontSize: '15px',
    fontWeight: 500,
    letterSpacing: '0.02em',
  })

  const ctaButton = {
    background: 'var(--olive)',
    color: 'var(--warm-cream)',
    padding: '10px 22px',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 500,
  }

  const toggleButton = {
    display: 'none',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    width: '44px',
    height: '44px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const mobileMenu = {
    display: 'none',
    position: 'fixed',
    top: '70px',
    left: 0,
    right: 0,
    bottom: 0,
    background: 'var(--warm-cream)',
    zIndex: 99,
    padding: '32px 40px',
    transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
    opacity: menuOpen ? 1 : 0,
    transition: 'transform 0.3s ease, opacity 0.2s ease',
    pointerEvents: menuOpen ? 'auto' : 'none',
  }

  const mobileLink = (path) => ({
    color: pathname === path ? 'var(--olive)' : 'var(--charcoal)',
    fontSize: '22px',
    fontWeight: 500,
    fontFamily: 'var(--font-display)',
    padding: '16px 0',
    display: 'block',
    borderBottom: '1px solid var(--light-border)',
  })

  const callButton = {
    background: 'var(--olive)',
    color: 'var(--warm-cream)',
    padding: '16px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 500,
    textAlign: 'center',
    marginTop: '32px',
    display: 'block',
  }

  const textButton = {
    background: 'transparent',
    color: 'var(--charcoal)',
    border: '1.5px solid var(--light-border)',
    padding: '16px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 500,
    textAlign: 'center',
    marginTop: '12px',
    display: 'block',
  }

  return (
    <>
      <nav style={navStyle}>
        <Link to="/" style={logoStyle}>Trevan Via Realty</Link>

        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }} className="nav-links">
          {links.map(([to, label]) => (
            <li key={to}>
              <Link to={to} style={desktopLink(to)}>{label}</Link>
            </li>
          ))}
          <li>
            <a href="tel:5402394636" style={ctaButton}>Get in touch</a>
          </li>
        </ul>

        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" style={toggleButton}>
          <span style={barStyle} />
          <span style={barStyle} />
          <span style={barStyle} />
        </button>
      </nav>

      <div className="mobile-menu" style={mobileMenu}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {links.map(([to, label]) => (
            <Link key={to} to={to} style={mobileLink(to)}>{label}</Link>
          ))}
          <a href="tel:5402394636" style={callButton}>Call (540) 239-4636</a>
          <a href="sms:15402394636" style={textButton}>Text me</a>
        </div>
      </div>
    </>
  )
}