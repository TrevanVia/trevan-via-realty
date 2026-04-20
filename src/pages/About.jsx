import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About Trevan Via"
        description="Floyd County native, licensed Realtor with Gravity Real Estate Group. Buying, selling, and land deals across the New River Valley. (540) 239-4636."
        path="/about"
      />
      <section className="section-pad" style={{ padding: '130px 40px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 80, alignItems: 'center' }}>
        <div className="about-photo" style={{ width: '100%', aspectRatio: '3/4', backgroundImage: 'url(/family.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top', borderRadius: 20 }} />
          <div>
            <div className="section-tag">About</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 48px)', color: 'var(--charcoal)', marginBottom: 20, letterSpacing: '-0.02em' }}>Grew up here. Work here.</h1>
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
            <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--light-border)' }}>
              <p style={{ fontSize: 15, color: 'var(--warm-gray)', marginBottom: 8, fontWeight: 300 }}>Licensed Realtor at <strong style={{ color: 'var(--charcoal)' }}>Gravity Real Estate Group</strong></p>
              <p style={{ fontSize: 15, marginBottom: 4 }}><a href="tel:5402394636" style={{ color: 'var(--olive)', fontWeight: 500 }}>(540) 239-4636</a></p>
              <p style={{ fontSize: 15 }}><a href="mailto:trevan@gravitygroup.us" style={{ color: 'var(--olive)', fontWeight: 500 }}>trevan@gravitygroup.us</a></p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ padding: '80px 40px', background: 'var(--warm-cream-dark)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-tag">What I do</div>
          <h2 className="section-title">How I can help</h2>
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 32 }}>
            {[
              { title: 'Buyers', desc: "Tell me what you're looking for and I'll find it. I handle the negotiation, the paperwork, and the back and forth so you don't have to." },
              { title: 'Sellers', desc: "I'll price it right, market it properly, and actually answer my phone. That's not a given with every agent." },
              { title: 'Land & acreage', desc: "I grew up on these roads. I know the parcels, I know the land, and I know what it's worth. Floyd, Montgomery, Pulaski counties." },
            ].map(c => (
              <div key={c.title} style={{ background: 'white', borderRadius: 14, padding: 28, boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 10 }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--warm-gray)', lineHeight: 1.7, fontWeight: 300 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ padding: '80px 40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 44px)', color: 'var(--charcoal)', marginBottom: 16 }}>Let's talk</h2>
        <p style={{ fontSize: 18, color: 'var(--warm-gray)', fontWeight: 300, marginBottom: 36 }}>Call, text, or email. I'll get back to you.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:5402394636" className="btn-primary">Call (540) 239-4636</a>
          <a href="mailto:trevan@gravitygroup.us" className="btn-secondary">Email me</a>
        </div>
      </section>
    </>
  )
}
