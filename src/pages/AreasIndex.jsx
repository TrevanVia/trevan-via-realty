import { Link } from 'react-router-dom'
import { areas } from '../data/areas'

export default function AreasIndex() {
  return (
    <section className="section-pad" style={{ padding: '130px 40px 80px', maxWidth: 1200, margin: '0 auto' }}>
      <div className="section-tag">Explore the region</div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 48px)', marginBottom: 12, letterSpacing: '-0.02em' }}>Area guides</h1>
      <p className="section-sub">Get to know the communities of the New River Valley before you buy.</p>
      <div className="area-preview-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {Object.values(areas).map(area => (
          <Link to={`/areas/${area.slug}`} key={area.slug} style={{ borderRadius: 16, overflow: 'hidden', background: 'white', boxShadow: '0 2px 20px rgba(0,0,0,0.04)', transition: 'all 0.3s' }}>
            <div style={{ height: 180, background: 'linear-gradient(135deg, var(--olive-light), var(--olive-dark))' }} />
            <div style={{ padding: 24 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 6 }}>{area.name}</h3>
              <p style={{ fontSize: 14, color: 'var(--warm-gray)', lineHeight: 1.6, fontWeight: 300, marginBottom: 12 }}>{area.heroSub.slice(0, 120)}...</p>
              <div style={{ display: 'flex', gap: 16, fontSize: 13, color: 'var(--olive)', fontWeight: 500 }}>
                <span>Pop: {area.pop}</span>
                <span>Median: {area.median}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
