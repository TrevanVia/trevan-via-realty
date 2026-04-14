import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({ address: '', beds: '3', baths: '2', email: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: POST to Zapier webhook URL
    // await fetch('https://hooks.zapier.com/hooks/catch/YOUR_ID/', {
    //   method: 'POST', body: JSON.stringify({ ...formData, source: 'home-value' }),
    // })
    alert('Thanks! We\'ll send your home value estimate shortly.')
  }

  return (
    <>
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 40px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 80, alignItems: 'center', width: '100%' }}>
          <div>
            <span style={{ display: 'inline-block', fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: 20 }}>Southwest Virginia Real Estate</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(42px, 5vw, 62px)', lineHeight: 1.1, color: 'var(--charcoal)', marginBottom: 24, letterSpacing: '-0.02em' }}>
              Find your place in the <em style={{ color: 'var(--olive)', fontStyle: 'italic' }}>New River Valley</em>
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: 'var(--warm-gray)', maxWidth: 480, marginBottom: 36, fontWeight: 300 }}>
              Whether you're buying your first home in Blacksburg, selling land in Floyd, or looking at investment properties, I can help. I work the whole New River Valley.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              <Link to="/areas" className="btn-primary">Explore areas →</Link>
              <Link to="/about" className="btn-secondary">About me</Link>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: 20, padding: 40, boxShadow: '0 4px 40px rgba(0,0,0,0.06)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, marginBottom: 6 }}>What's your home worth?</h3>
            <p style={{ color: 'var(--warm-gray)', fontSize: 15, marginBottom: 28, fontWeight: 300 }}>Free estimate, no strings attached.</p>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--warm-gray)', marginBottom: 6 }}>Property address</label>
              <input type="text" placeholder="123 Main St, Blacksburg, VA" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})}
                style={{ width: '100%', padding: '14px 16px', border: '1.5px solid var(--light-border)', borderRadius: 10, fontFamily: 'var(--font-body)', fontSize: 15, background: 'var(--warm-cream)', outline: 'none' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--warm-gray)', marginBottom: 6 }}>Bedrooms</label>
                <select value={formData.beds} onChange={e => setFormData({...formData, beds: e.target.value})}
                  style={{ width: '100%', padding: '14px 16px', border: '1.5px solid var(--light-border)', borderRadius: 10, fontFamily: 'var(--font-body)', fontSize: 15, background: 'var(--warm-cream)' }}>
                  <option>2</option><option>3</option><option>4</option><option>5+</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--warm-gray)', marginBottom: 6 }}>Bathrooms</label>
                <select value={formData.baths} onChange={e => setFormData({...formData, baths: e.target.value})}
                  style={{ width: '100%', padding: '14px 16px', border: '1.5px solid var(--light-border)', borderRadius: 10, fontFamily: 'var(--font-body)', fontSize: 15, background: 'var(--warm-cream)' }}>
                  <option>1</option><option>2</option><option>3</option><option>4+</option>
                </select>
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--warm-gray)', marginBottom: 6 }}>Email</label>
              <input type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                style={{ width: '100%', padding: '14px 16px', border: '1.5px solid var(--light-border)', borderRadius: 10, fontFamily: 'var(--font-body)', fontSize: 15, background: 'var(--warm-cream)', outline: 'none' }} />
            </div>
            <button onClick={handleSubmit} style={{ width: '100%', padding: 16, background: 'var(--terracotta)', color: 'white', border: 'none', borderRadius: 10, fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, cursor: 'pointer', marginTop: 8 }}>
              Get my home's value →
            </button>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background: 'var(--olive-dark)', padding: '40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, textAlign: 'center' }}>
          {[['150+', 'Homes sold'], ['$42M', 'Total volume'], ['12', 'Years in SW Virginia'], ['4.9', 'Average rating']].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: 'var(--font-numbers)', fontSize: 36, color: 'var(--warm-cream)', marginBottom: 4, fontWeight: 500 }}>{num}</div>
              <div style={{ fontSize: 14, color: 'rgba(250, 246, 240, 0.6)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Areas preview */}
      <section style={{ padding: '100px 40px', maxWidth: 1200, margin: '0 auto' }} id="areas">
        <div className="section-tag">Explore the region</div>
        <h2 className="section-title">Know your neighborhood</h2>
        <p className="section-sub">I cover five areas across the NRV. Here's a look at each one.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { name: 'Blacksburg', slug: 'blacksburg', desc: 'Home to Virginia Tech, a thriving downtown, and one of the best food scenes in the region.', stat: 'Median: $366K' },
            { name: 'Floyd County', slug: 'floyd-county', desc: 'Rolling farmland, artist communities, and the famous Friday Night Jamboree.', stat: 'Acreage available' },
            { name: 'Christiansburg', slug: 'christiansburg', desc: 'The commercial hub of Montgomery County with easy interstate access and new developments.', stat: 'Median: $271K' },
          ].map(area => (
            <Link to={`/areas/${area.slug}`} key={area.slug} style={{ borderRadius: 16, overflow: 'hidden', background: 'white', boxShadow: '0 2px 20px rgba(0,0,0,0.04)', transition: 'all 0.3s', textDecoration: 'none', color: 'inherit' }}>
              <div style={{ height: 200, background: `linear-gradient(135deg, var(--olive-light) 0%, var(--olive-dark) 100%)` }} />
              <div style={{ padding: 24 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 8 }}>{area.name}</h3>
                <p style={{ fontSize: 14, color: 'var(--warm-gray)', lineHeight: 1.6, fontWeight: 300 }}>{area.desc}</p>
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--light-border)', fontSize: 13, color: 'var(--olive)', fontWeight: 500 }}>{area.stat}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About section */}
      <section style={{ padding: '100px 40px', background: 'var(--warm-cream-dark)' }} id="about">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 80, alignItems: 'center' }}>
          <div style={{ width: '100%', aspectRatio: '3/4', backgroundImage: 'url(/trevan-ransom.webp)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 20 }} />
          <div>
            <div className="section-tag">About</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 44px)', color: 'var(--charcoal)', marginBottom: 20, letterSpacing: '-0.02em' }}>Grew up here. Work here.</h2>
            <p style={{ fontSize: 17, color: 'var(--warm-gray)', lineHeight: 1.8, fontWeight: 300, marginBottom: 16 }}>
              I'm Trevan Via. Grew up in Floyd County, graduated in 2019, never left. <strong style={{ color: 'var(--charcoal)', fontWeight: 500 }}>I know the New River Valley because I've lived it, not because I studied a market report.</strong>
            </p>
            <p style={{ fontSize: 17, color: 'var(--warm-gray)', lineHeight: 1.8, fontWeight: 300, marginBottom: 16 }}>
              I'm not going to overcomplicate this for you. You tell me what you're looking for, I'll tell you what I think, and we'll go from there. If it's not the right fit I'll say so.
            </p>
            <p style={{ fontSize: 17, color: 'var(--warm-gray)', lineHeight: 1.8, fontWeight: 300, marginBottom: 16 }}>
              My wife and I just had our first daughter, Gemma. We've got a dog named Ransom. We're not going anywhere.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 32 }}>
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

      {/* CTA */}
      <section style={{ padding: '100px 40px', textAlign: 'center' }} id="contact">
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 52px)', color: 'var(--charcoal)', marginBottom: 16, letterSpacing: '-0.02em' }}>Ready to make a move?</h2>
        <p style={{ fontSize: 18, color: 'var(--warm-gray)', fontWeight: 300, marginBottom: 36 }}>Buying, selling, or just have questions. Reach out whenever.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:5402394636" className="btn-primary">Call (540) 239-4636</a>
          <a href="mailto:trevan@gravitygroup.us" className="btn-secondary">Email me</a>
        </div>
      </section>
    </>
  )
}
