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

      {/* HERO */}
      <section style={{ padding: '140px 40px 90px', background: 'var(--warm-cream)', position: 'relative', overflow: 'hidden' }}>
        <div className="mobile-center" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-tag">New River Valley · Floyd County Native</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 6vw, 76px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--charcoal)', marginBottom: 28, maxWidth: 960 }}>
            Let's make your move in the New River Valley.
          </h1>
          <p style={{ fontSize: 'clamp(17px, 1.5vw, 20px)', color: 'var(--warm-gray)', lineHeight: 1.6, fontWeight: 300, maxWidth: 680, marginBottom: 40 }}>
            Floyd County native working Blacksburg, Christiansburg, Floyd, Radford, and Pulaski County. No pressure, no BS, straight answers.
          </p>
          <div className="mobile-center-buttons" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Link to="/properties" className="btn-primary">See properties</Link>
            <Link to="/home-value" className="btn-secondary">What's my home worth?</Link>
            <a href="sms:15402394636" className="btn-secondary">Text me</a>
          </div>
          <p style={{ fontSize: 14, color: 'var(--warm-gray)', fontWeight: 300 }}>
            Licensed Realtor at <strong style={{ color: 'var(--charcoal)', fontWeight: 500 }}>Gravity Real Estate Group</strong> · (540) 239-4636
          </p>
        </div>
      </section>

      {/* FEATURED LISTING */}
      <section style={{ padding: '80px 40px', background: 'var(--warm-cream-dark)' }}>
        <div className="mobile-center" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-tag">Now listed</div>
          <h2 className="section-title">7423 Floyd Hwy N · Copper Hill</h2>
          <p className="section-sub">4 bed · 4 bath · 3,352 sqft on 6.04 acres. 30 minutes from Roanoke, 20 from Floyd.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 48, alignItems: 'center' }}>
            <div style={{ aspectRatio: '16/10', backgroundImage: 'url(/copperhill-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 16, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }} />
            <div>
              <div style={{ fontFamily: 'var(--font-numbers)', fontSize: 'clamp(36px, 4vw, 48px)', color: 'var(--charcoal)', marginBottom: 20, letterSpacing: '-0.01em', fontWeight: 500 }}>$750,000</div>
              <ul style={{ listStyle: 'none', marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  '624 sqft great room addition with projector and screen',
                  'Custom solid wood cabinets, hardwood throughout',
                  '1,526 sqft two-level wood shop on the property',
                  'Updated mechanicals, new well, no HOA',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, color: 'var(--warm-gray)', lineHeight: 1.5, fontWeight: 300 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--terracotta)', marginTop: 8, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mobile-center-buttons" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="https://www.zillow.com/homedetails/7423-Floyd-Hwy-N-Copper-Hill-VA-24079/107869052_zpid/" target="_blank" rel="noreferrer" className="btn-primary">View on Zillow</a>
                <a href="sms:15402394636?body=Interested%20in%207423%20Floyd%20Hwy%20N" className="btn-secondary">Text about this home</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-pad" style={{ padding: '100px 40px', background: 'var(--warm-cream)' }} id="about">
        <div className="about-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 80, alignItems: 'center' }}>
          <div style={{ position: 'relative', minHeight: 420 }}>
            <div onClick={() => setLightbox('/trevan-ransom.webp')} style={{ position: 'absolute', top: 0, left: 0, width: '58%', aspectRatio: '4/5', backgroundImage: 'url(/trevan-ransom.webp)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 16, cursor: 'pointer', zIndex: 2, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }} />
            <div onClick={() => setLightbox('/family.jpg')} style={{ position: 'absolute', bottom: -10, right: -10, width: '52%', aspectRatio: '3/4', backgroundImage: 'url(/family.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top', borderRadius: 16, cursor: 'pointer', zIndex: 1, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }} />
          </div>
          <div>
            <div className="section-tag">About</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 52px)', color: 'var(--charcoal)', marginBottom: 20, letterSpacing: '-0.02em' }}>Grew up here. Work here.</h2>
            <p style={{ fontSize: 17, color: 'var(--warm-gray)', lineHeight: 1.8, fontWeight: 300, marginBottom: 16 }}>
              I'm Trevan Via, born and raised in Floyd County. Graduated in 2019 and never left, which means <strong style={{ color: 'var(--charcoal)', fontWeight: 500 }}>I know the New River Valley because I've lived it, not because I studied a market report.</strong>
            </p>
            <p style={{ fontSize: 17, color: 'var(--warm-gray)', lineHeight: 1.8, fontWeight: 300, marginBottom: 16 }}>
              The way I work is simple: you tell me what you're looking for, I'll give you my honest take, and we go from there. No pressure, no overcomplicating. If it's not the right fit, I'll tell you.
            </p>
            <p style={{ fontSize: 17, color: 'var(--warm-gray)', lineHeight: 1.8, fontWeight: 300, marginBottom: 16 }}>
              My wife and I just had our first daughter, Gemma, and she joined a house that already had four dogs and a cat running around. Ransom and Whiskey are my boys, and we're not going anywhere.
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

      {/* CTA STRIP */}
      <div style={{ background: 'var(--olive-dark)', padding: '24px 40px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          <p style={{ fontSize: 17, color: 'var(--warm-cream)', fontFamily: 'var(--font-display)', margin: 0 }}>Ready to make a move?</p>
          <a href="tel:5402394636" style={{ color: 'var(--warm-cream)', fontSize: 15, fontWeight: 500, padding: '10px 24px', border: '1.5px solid rgba(250,246,240,0.3)', borderRadius: 8 }}>Call (540) 239-4636</a>
          <a href="mailto:trevan@gravitygroup.us" style={{ color: 'rgba(250,246,240,0.6)', fontSize: 15, fontWeight: 400 }}>trevan@gravitygroup.us</a>
        </div>
      </div>

      {/* STATS BAR */}
      <div style={{ background: 'var(--olive-dark)', padding: '0 40px 40px' }}>
        <div className="stats-bar-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, textAlign: 'center', paddingTop: 24, borderTop: '1px solid rgba(250,246,240,0.1)' }}>
          {[
            ['Day 1', 'Floyd native'],
            ['5', 'NRV markets'],
            ['7 days', 'Availability'],
            ['< 1 hr', 'Response time'],
          ].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: 'var(--font-numbers)', fontSize: 32, color: 'var(--warm-cream)', marginBottom: 4, fontWeight: 500 }}>{num}</div>
              <div style={{ fontSize: 13, color: 'rgba(250, 246, 240, 0.5)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* AREAS */}
      <section className="section-pad mobile-center" style={{ padding: '80px 40px', maxWidth: 1200, margin: '0 auto' }} id="areas">
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
