import { Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'

const zillowSearches = [
  { name: 'Blacksburg', slug: 'blacksburg', url: 'https://www.zillow.com/blacksburg-va/' },
  { name: 'Christiansburg', slug: 'christiansburg', url: 'https://www.zillow.com/christiansburg-va/' },
  { name: 'Floyd County', slug: 'floyd-county', url: 'https://www.zillow.com/floyd-county-va/' },
  { name: 'Radford', slug: 'radford', url: 'https://www.zillow.com/radford-va/' },
  { name: 'Pulaski County', slug: 'pulaski-county', url: 'https://www.zillow.com/pulaski-county-va/' },
]

export default function Properties() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <SEO
        title="Properties for Sale in the New River Valley"
        description="Homes, land, and commercial properties for sale in Blacksburg, Christiansburg, Floyd County, Radford, and Pulaski County VA."
        path="/properties"
        image="/copperhill-hero.jpg"
      />

      {/* PAGE HEADER */}
      <section className="mobile-center" style={{ padding: '130px 40px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-tag">Properties</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--charcoal)', marginBottom: 20 }}>
          Homes, land, and everything in between.
        </h1>
        <p style={{ fontSize: 'clamp(16px, 1.4vw, 19px)', color: 'var(--warm-gray)', fontWeight: 300, lineHeight: 1.6, maxWidth: 680 }}>
          Active listings from me, plus fast links to every property on the market across the New River Valley. If you don't see what you want, I can find it.
        </p>
      </section>

      {/* ACTIVE LISTING - COPPER HILL */}
      <section style={{ padding: '40px 40px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-tag" style={{ marginBottom: 20 }}>Now listed by Trevan</div>

          <div style={{ background: 'var(--warm-cream-dark)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.06)' }}>
            <div onClick={() => setLightbox('/copperhill-hero.jpg')} style={{ aspectRatio: '16/9', backgroundImage: 'url(/copperhill-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', cursor: 'zoom-in' }} />

            <div style={{ padding: 'clamp(32px, 5vw, 56px)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20, marginBottom: 28 }}>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 38px)', color: 'var(--charcoal)', marginBottom: 8, letterSpacing: '-0.02em' }}>
                    7423 Floyd Hwy N
                  </h2>
                  <p style={{ fontSize: 16, color: 'var(--warm-gray)', fontWeight: 300 }}>Copper Hill, VA 24079</p>
                </div>
                <div style={{ fontFamily: 'var(--font-numbers)', fontSize: 'clamp(32px, 3.5vw, 44px)', color: 'var(--olive-dark)', letterSpacing: '-0.01em', fontWeight: 500 }}>
                  $750,000
                </div>
              </div>

              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid var(--light-border)' }}>
                {[
                  ['4', 'bed'],
                  ['4', 'bath'],
                  ['3,352', 'sqft'],
                  ['6.04', 'acres'],
                ].map(([num, label]) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'var(--font-numbers)', fontSize: 24, color: 'var(--charcoal)', fontWeight: 500 }}>{num}</div>
                    <div style={{ fontSize: 13, color: 'var(--warm-gray)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 500 }}>{label}</div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: 16, color: 'var(--warm-gray)', lineHeight: 1.7, fontWeight: 300, marginBottom: 24, maxWidth: 780 }}>
                Location, charm, and space on Rt. 221. 30 minutes from Roanoke, 20 from the Town of Floyd. The 1987 home was expanded in 2013 with a 624 sqft great room that works as the main entertainment space, complete with a projector and screen that convey.
              </p>
              <p style={{ fontSize: 16, color: 'var(--warm-gray)', lineHeight: 1.7, fontWeight: 300, marginBottom: 32, maxWidth: 780 }}>
                Custom solid wood cabinets, hardwood floors, and updated mechanicals (oil furnace 2012, heat pump 2016). New well. There's also a 1,526 sqft two-level wood shop on the property. Flat, spacious backyard. No HOA.
              </p>

              <div className="mobile-center-buttons" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="https://www.zillow.com/homedetails/7423-Floyd-Hwy-N-Copper-Hill-VA-24079/107869052_zpid/" target="_blank" rel="noreferrer" className="btn-primary">View full listing</a>
                <a href="sms:15402394636?body=Interested%20in%207423%20Floyd%20Hwy%20N" className="btn-secondary">Text about this home</a>
                <a href="tel:5402394636" className="btn-secondary">Call (540) 239-4636</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH BY AREA */}
      <section style={{ padding: '80px 40px', background: 'var(--warm-cream-dark)' }}>
        <div className="mobile-center" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-tag">Browse by area</div>
          <h2 className="section-title">Search every listing across the NRV.</h2>
          <p className="section-sub">Jump straight into current listings for each market I cover.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {zillowSearches.map(area => (
              <a key={area.slug} href={area.url} target="_blank" rel="noreferrer" style={{ background: 'white', borderRadius: 14, padding: 24, boxShadow: '0 2px 16px rgba(0,0,0,0.04)', transition: 'all 0.25s', textDecoration: 'none', color: 'inherit', border: '1px solid transparent' }}>
                <div style={{ fontSize: 12, color: 'var(--terracotta)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Zillow</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--charcoal)', marginBottom: 8, letterSpacing: '-0.01em' }}>{area.name}</h3>
                <div style={{ fontSize: 14, color: 'var(--warm-gray)', fontWeight: 400 }}>Current listings →</div>
              </a>
            ))}
          </div>

          <p style={{ fontSize: 13, color: 'var(--warm-gray)', fontWeight: 300, marginTop: 24, maxWidth: 780 }}>
            Full MLS search coming soon to the site. For now, Zillow's public feed is the quickest way to browse. When you find something you want to see, text me and I'll get you in the door.
          </p>
        </div>
      </section>

      {/* LET ME FIND IT */}
      <section style={{ padding: '100px 40px', background: 'var(--olive-dark)', color: 'var(--warm-cream)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terracotta-light)', marginBottom: 16 }}>Can't find it?</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 20 }}>
            Tell me what you're looking for. I'll go find it.
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(250, 246, 240, 0.75)', lineHeight: 1.6, fontWeight: 300, marginBottom: 36, maxWidth: 600, margin: '0 auto 36px' }}>
            A lot of the best properties in the NRV don't hit Zillow, or move before they do. If you've got specific criteria or a neighborhood in mind, send me a text and I'll start digging.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="sms:15402394636" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 32px', background: 'var(--terracotta)', color: 'white', borderRadius: 10, fontSize: 16, fontWeight: 500, textDecoration: 'none', transition: 'all 0.25s' }}>Text me what you want</a>
            <a href="tel:5402394636" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 32px', background: 'transparent', color: 'var(--warm-cream)', border: '1.5px solid rgba(250,246,240,0.3)', borderRadius: 10, fontSize: 16, fontWeight: 500, textDecoration: 'none' }}>Call (540) 239-4636</a>
          </div>
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
