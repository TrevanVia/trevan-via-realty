import { useParams, Link } from 'react-router-dom'
import { areas } from '../data/areas'

export default function AreaGuide() {
  const { slug } = useParams()
  const area = areas[slug]
  if (!area) return <div style={{ padding: '160px 40px', textAlign: 'center' }}><h1>Area not found</h1></div>

  const s = { section: { padding: '80px 40px', maxWidth: 1200, margin: '0 auto' } }

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '130px 40px 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--olive-dark), var(--olive), var(--olive-light))', opacity: 0.95 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 13, color: 'rgba(250,246,240,0.5)', marginBottom: 16 }}>
            <Link to="/" style={{ color: 'rgba(250,246,240,0.5)' }}>Home</Link> &nbsp;/&nbsp; <Link to="/areas" style={{ color: 'rgba(250,246,240,0.5)' }}>Areas</Link> &nbsp;/&nbsp; {area.name}
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 60px)', color: 'var(--warm-cream)', marginBottom: 12 }}>{area.name}</h1>
          <p style={{ fontSize: 18, color: 'rgba(250,246,240,0.7)', fontWeight: 300, maxWidth: 600, lineHeight: 1.6, marginBottom: 32 }}>{area.heroSub}</p>
          <div style={{ display: 'flex', gap: 40 }}>
            {[[area.pop, 'Population'], [area.median, 'Median home value'], [area.schoolRating, 'School rating'], [area.badge.split(' ')[0], area.badge.split(' ').slice(1).join(' ')]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: 'var(--font-numbers)', fontSize: 28, fontWeight: 500, color: 'var(--warm-cream)' }}>{num}</div>
                <div style={{ fontSize: 13, color: 'rgba(250,246,240,0.5)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <div style={s.section}>
        <div className="section-tag">Why {area.name}</div>
        <h2 className="section-title">{area.whyTitle}</h2>
        <p className="section-sub">{area.whySub}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {area.whyCards.map(c => (
            <div key={c.title} style={{ background: 'white', borderRadius: 14, padding: 28, boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: 20, marginBottom: 16 }}>{c.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, marginBottom: 8 }}>{c.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--warm-gray)', lineHeight: 1.6, fontWeight: 300 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: 'var(--warm-cream-dark)' }}>
        <div style={s.section}>
          <div className="section-tag">Market snapshot</div>
          <h2 className="section-title">{area.name} by the numbers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 32 }}>
            {area.stats.map(st => (
              <div key={st.label} style={{ background: 'white', borderRadius: 14, padding: 24, textAlign: 'center', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
                <div style={{ fontFamily: 'var(--font-numbers)', fontSize: 32, fontWeight: 500, color: 'var(--olive-dark)', marginBottom: 4 }}>{st.num}</div>
                <div style={{ fontSize: 13, color: 'var(--warm-gray)' }}>{st.label}</div>
                <div style={{ fontSize: 12, fontWeight: 600, marginTop: 6, display: 'inline-block', padding: '2px 8px', borderRadius: 4, background: st.type === 'up' ? 'rgba(92,107,79,0.1)' : 'rgba(107,102,94,0.1)', color: st.type === 'up' ? 'var(--olive)' : 'var(--warm-gray)' }}>{st.change}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schools */}
      <div style={s.section}>
        <div className="section-tag">Education</div>
        <h2 className="section-title">Schools</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
          {area.schools.map(sc => (
            <div key={sc.name} style={{ background: 'white', borderRadius: 14, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 20, boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-numbers)', fontSize: 22, fontWeight: 500, color: 'white', background: 'var(--olive)', flexShrink: 0 }}>{sc.rating}</div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 2 }}>{sc.name}</h4>
                <p style={{ fontSize: 13, color: 'var(--warm-gray)' }}>{sc.district}</p>
              </div>
              <span style={{ fontSize: 12, color: 'var(--olive)', fontWeight: 500, background: 'rgba(92,107,79,0.08)', padding: '4px 10px', borderRadius: 6, whiteSpace: 'nowrap' }}>{sc.grades}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lifestyle */}
      <div style={{ background: 'var(--warm-cream-dark)' }}>
        <div style={s.section}>
          <div className="section-tag">Lifestyle</div>
          <h2 className="section-title">Things to do in {area.name}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginTop: 32 }}>
            {area.lifestyle.map(l => (
              <div key={l.title} style={{ background: 'white', borderRadius: 14, padding: 24, boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 18, marginBottom: 6 }}>{l.title}</h4>
                <p style={{ fontSize: 13, color: 'var(--warm-gray)', lineHeight: 1.6, fontWeight: 300 }}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commutes */}
      <div style={s.section}>
        <div className="section-tag">Getting around</div>
        <h2 className="section-title">Commute times from {area.name}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 32 }}>
          {area.commutes.map(c => (
            <div key={c.dest} style={{ background: 'white', borderRadius: 14, padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
              <div>
                <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 2 }}>{c.dest}</h4>
                <p style={{ fontSize: 13, color: 'var(--warm-gray)', fontWeight: 300 }}>{c.sub}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontFamily: 'var(--font-numbers)', fontSize: 24, fontWeight: 500, color: 'var(--olive-dark)' }}>{c.mins}</span>
                <span style={{ fontSize: 12, color: 'var(--warm-gray)' }}> {c.mins.includes('hr') ? '' : 'min'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'var(--olive-dark)', padding: '60px 40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 40px)', color: 'var(--warm-cream)', marginBottom: 12 }}>{area.ctaQ}</h2>
        <p style={{ fontSize: 17, color: 'rgba(250,246,240,0.6)', fontWeight: 300, marginBottom: 28 }}>{area.ctaP}</p>
        <a href="tel:5402394636" style={{ display: 'inline-flex', padding: '16px 32px', background: 'var(--terracotta)', color: 'white', border: 'none', borderRadius: 10, fontSize: 16, fontWeight: 500, textDecoration: 'none' }}>Get in touch →</a>
      </div>

      {/* Other areas */}
      <div style={{ padding: '60px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, marginBottom: 24 }}>Explore other areas</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {area.otherAreas.map(oa => (
            <Link to={`/areas/${oa.slug}`} key={oa.slug} style={{ background: 'white', borderRadius: 12, padding: 20, boxShadow: '0 1px 8px rgba(0,0,0,0.04)', transition: 'all 0.2s', border: '1.5px solid transparent' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 18, marginBottom: 4 }}>{oa.name}</h4>
              <p style={{ fontSize: 13, color: 'var(--warm-gray)', fontWeight: 300 }}>{oa.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
