import { Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'

const testimonials = [
  {
    name: 'Brendan M.',
    text: "Trevan is as reliable as it gets! Communication was great from start to finish and honestly the process couldn't have gone any smoother. Thank you, Trevan!",
  },
  {
    name: 'Drew R.',
    text: "Listen to trev, good person and will take care of you.",
  },
]

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--terracotta)" style={{ flexShrink: 0 }}>
    <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.18 21 12 16.5 5.82 21l2.37-7.14L2 9.36h7.61z" />
  </svg>
)

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
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 6vw, 76px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--charcoal)', marginBottom: 28, maxWidth: 960 }}>
            Let's make your move in the New River Valley.
          </h1>
          <p style={{ fontSize: 'clamp(17px, 1.5vw, 20px)', color: 'var(--warm-gray)', lineHeight: 1.6, fontWeight: 300, maxWidth: 680, marginBottom: 40 }}>
            Floyd County native working Blacksburg, Christiansburg, Floyd, Radford, and Pulaski County. No pressure, no BS, straight answers.
          </p>
          <div className="mobile-center-buttons" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Link to="/properties" className="btn-primary">See properties</Link>
            <Link to="/home-value" className="btn-secondary">What's my home worth?</Link>
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <div style={{ borderTop: '1px solid var(--light-border)', borderBottom: '1px solid var(--light-border)', background: 'var(--warm-cream-dark)', padding: '24px 40px' }}>
        <div className="creds-strip-inner" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 24, fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--warm-gray)' }}>
          <span>Floyd County native</span>
          <span style={{ color: 'var(--olive-light)', fontSize: 11 }}>◆</span>
          <span>Available nights &amp; weekends</span>
          <span style={{ color: 'var(--olive-light)', fontSize: 11 }}>◆</span>
          <span>Licensed Realtor at Gravity Real Estate Group</span>
        </div>
      </div>

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
            <p style={{ fontSize: 14, color: 'var(--warm-gray)', marginTop: 32, fontWeight: 300 }}>Licensed Realtor at <strong style={{ color: 'var(--charcoal)' }}>Gravity Real Estate Group</strong></p>
          </div>
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

      {/* TESTIMONIALS */}
      <section style={{ padding: '100px 40px', background: 'var(--warm-cream)' }}>
        <div className="mobile-center" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-tag">What clients say</div>
          <h2 className="section-title">Real reviews, real people.</h2>
          <p className="section-sub">Every review below is pulled directly from my Google Business profile.</p>

          <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 40 }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ background: 'white', borderRadius: 14, padding: 32, boxShadow: '0 2px 16px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'left' }}>
                <div style={{ display: 'flex', gap: 3 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} />)}
                </div>
                <p style={{ fontSize: 16, color: 'var(--charcoal)', lineHeight: 1.6, fontWeight: 400, fontStyle: 'normal' }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: 12, borderTop: '1px solid var(--light-border)' }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--charcoal)' }}>{t.name}</span>
                  <span style={{ fontSize: 12, color: 'var(--warm-gray)', fontWeight: 500, letterSpacing: '0.04em' }}>via Google</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <a href="https://www.google.com/search?q=trevan+via+realty" target="_blank" rel="noreferrer" style={{ fontSize: 14, color: 'var(--olive)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: 4 }}>
              Read all reviews on Google →
            </a>
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
