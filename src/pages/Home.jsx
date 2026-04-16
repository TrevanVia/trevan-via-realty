import { Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'

export default function Home() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <SEO
        title="SW Virginia Real Estate"
        description="Trevan Via Realty. Homes, land, and commercial properties for sale in Blacksburg, Christiansburg, Floyd, Radford, and Pulaski County. New River Valley real estate."
        path="/"
      />

      <section className="section-pad" style={{ padding: '120px 40px 80px', background: 'var(--warm-cream-dark)' }} id="about">
        <div className="about-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 80, alignItems: 'center' }}>
          <div style={{ position: 'relative', minHeight: 420 }}>
            <div onClick={() => setLightbox('/trevan-ransom.webp')} style={{ position: 'absolute', top: 0, left: 0, width: '58%', aspectRatio: '4/5', backgroundImage: 'url(/trevan-ransom.webp)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 16, cursor: 'pointer', zIndex: 2, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }} />
            <div onClick={() => setLightbox('/family.jpg')} style={{ position: 'absolute', bottom: -10, right: -10, width: '52%', aspectRatio: '3/4', backgroundImage: 'url(/family.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top', borderRadius: 16, cursor: 'pointer', zIndex: 1, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }} />
          </div>
          <div>
            <div className="section-tag">About</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 52px)', color: 'var(--charcoal)', marginBottom: 20, letterSpacing: '-0.02em' }}>Grew up here. Work here.</h1>
            <p style={{ fontSize: 17, color: 'var(--warm-gray)', lineHeight: 1.8, fontWeight: 300, marginBottom: 16 }}>
              I'm Trevan Via. Grew up in Floyd County, graduated in 2019, never left. <strong style={{ color: 'var(--charcoal)', fontWeight: 500 }}>I know the New River Valley because I've lived it, not because I studied a market report.</strong>
            </p>
            <p style={{ fontSize: 17, color: 'var(--warm-gray)', lineHeight: 1.8, fontWeight: 300, marginBottom: 16 }}>
              I'm not going to overcomplicate this for you. You tell me what you're looking for, I'll tell you what I think, and we'll go from there. If it's not the right fit I'll say so.
            </p>
            <p style={{ fontSize: 17, color: 'var(--warm-gray)', lineHeight: 1.8, fontWeight: 300, marginBottom: 16 }}>
              My wife and I just had our first daughter, Gemma. We've got a dog named Ransom. We're not going anywhere.
            </p>
            <div className="qualities-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 32 }}>
              {['Floyd County native', 'NRV specialist', 'No pressure, no BS', 'Available nights & weekends'].map(q => (
                <div key={q} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, fontWeight: 500 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--terracotta)', flexShrink: 0 }} />
                  {q}
                </div>
              ))}
            </div>
            <p style={{ fontSize: 14, color: 'var(--warm-gray)', marginTop: 24, fontWeight: 300 }}>Licensed Realtor at <strong style={{ color: 'var(--charcoal)' }}>Gravity Real Estate Group</strong></p>
          </div>
        </div>
      </section>

      <div style={{ background: 'var(--olive-dark)', padding: '24px 40px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          <p style={{ fontSize: 17, color: 'var(--warm-cream)', fontFamily: 'var(--font-display)', margin: 0 }}>Ready to make a move?</p>
          <a href="tel:5402394636" style={{ color: 'var(--warm-cream)', fontSize: 15, fontWeight: 500, padding: '10px 24px', border: '1.5px solid rgba(250,246,240,0.3)', borderRadius: 8 }}>Call (540) 239-4636</a>
          <a href="mailto:trevan@gravitygroup.us" style={{ color: 'rgba(250,246,240,0.6)', fontSize: 15, fontWeight: 400 }}>trevan@gravitygroup.us</a>
        </div>
      </div>

      <div style={{ background: 'var(--olive-dark)', padding: '0 40px 40px' }}>
        <div className="stats-bar-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, textAlign: 'center', paddingTop: 24, borderTop: '1px solid rgba(250,246,240,0.1)' }}>
          {[['25', 'Years in SW Virginia'], ['5', 'Areas served'], ['5.0', 'Google rating'], ['< 1 hr', 'Avg response time']].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: 'var(--font-numbers)', fontSize: 32, color: 'var(--warm-cream)', marginBottom: 4, fontWeight: 500 }}>{num}</div>
              <div style={{ fontSize: 13, color: 'rgba(250, 246, 240, 0.5)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="section-pad" style={{ padding: '80px 40px', maxWidth: 1200, margin: '0 auto' }} id="areas">
        <div className="section-tag">Explore the region</div>
        <h2 className="section-title">Know your neighborhood</h2>
        <p className="section-sub">I cover five areas across the NRV. Here's a look at each one.</p>
        <div className="area-preview-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
          {[
            { name: 'Blacksburg', slug: 'blacksburg', stat: 'Median: $366K' },
            { name: 'Christiansburg', slug: 'christiansburg', stat: 'Median: $271K' },
            { name: 'Floyd County', slug: 'floyd-county', stat: 'Acreage available' },
            { name: 'Radford', slug: 'radford', stat: 'Median: $221K' },
            { name: 'Pulaski County', slug: 'pulaski-county', stat: 'Median: $192K' },
          ].map(area => (
            <Link to={`/areas/${area.slug}`} key={area.slug} style={{ borderRadius: 14, overflow: 'hidden', background: 'white', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', transition: 'all 0.3s', textDecoration: 'none', color: 'inherit' }}>
              <div style={{ height: 120, background: 'linear-gradient(135deg, var(--olive-light) 0%, var(--olive-dark) 100%)' }} />
              <div style={{ padding: 16 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, marginBottom: 6 }}>{area.name}</h3>
                <div style={{ fontSize: 12, color: 'var(--olive)', fontWeight: 500 }}>{area.stat}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out', padding: 40 }}>
          <img src={lightbox} alt="" style={{ maxWidth: '90%', maxHeight: '90vh', borderRadius: 12, objectFit: 'contain' }} />
        </div>
      )}
    </>
  )
}
