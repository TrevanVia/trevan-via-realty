import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const { pathname } = useLocation()

  const linkStyle = (path) => ({
    color: pathname === path ? 'var(--olive)' : 'var(--warm-gray)',
    fontSize: '15px',
    fontWeight: 500,
    letterSpacing: '0.02em',
    transition: 'color 0.2s',
  })

  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 40px', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(250, 246, 240, 0.92)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--light-border)',
    }}>
      <Link to="/" style={{
        fontFamily: 'var(--font-logo)', fontSize: '26px', fontWeight: 400,
        letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--olive-dark)',
      }}>
        Trevan Via Realty
      </Link>
      <ul style={{ display: 'flex', gap: '32px', listStyle: 'none' }} className="nav-links">
        <li><Link to="/home-value" style={linkStyle('/home-value')}>Home value</Link></li>
        <li><Link to="/properties" style={linkStyle('/properties')}>Properties</Link></li>
        <li><Link to="/areas" style={linkStyle('/areas')}>Areas</Link></li>
        <li><Link to="/about" style={linkStyle('/about')}>About</Link></li>
        <li>
          <a href="tel:5402394636" style={{
            background: 'var(--olive)', color: 'var(--warm-cream)',
            padding: '10px 22px', borderRadius: '8px', fontSize: '15px', fontWeight: 500,
          }}>
            Get in touch
          </a>
        </li>
      </ul>
      <a href="tel:5402394636" className="mobile-cta" style={{
        display: 'none', background: 'var(--olive)', color: 'var(--warm-cream)',
        padding: '10px 18px', borderRadius: '8px', fontSize: '14px', fontWeight: 500,
      }}>
        Call me
      </a>
    </nav>
  )
}
