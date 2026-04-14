import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--charcoal)', padding: '48px 40px' }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px',
      }}>
        <div style={{
          fontFamily: 'var(--font-logo)', fontSize: '24px', fontWeight: 400,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--warm-cream)',
        }}>
          Trevan Via Realty
        </div>
        <ul style={{ display: 'flex', gap: '28px', listStyle: 'none' }}>
          {[
            ['Home value', '/home-value'],
            ['Properties', '/properties'],
            ['Areas', '/areas'],
            ['About', '/about'],
          ].map(([label, path]) => (
            <li key={path}>
              <Link to={path} style={{
                color: 'rgba(250, 246, 240, 0.5)', fontSize: '14px', transition: 'color 0.2s',
              }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ color: 'rgba(250, 246, 240, 0.35)', fontSize: '13px' }}>
          Gravity Real Estate Group &middot; Southwest Virginia
        </div>
      </div>
    </footer>
  )
}
