import { useState } from 'react'
import SEO from '../components/SEO'

const WEB3FORMS_KEY = '62a14e47-0946-42e0-9611-c67e9d5b56a7'

export default function HomeValue() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    beds: '3',
    baths: '2',
    notes: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New home value request: ${formData.address || 'no address'}`,
          from_name: 'trevanviarealty.com',
          replyto: formData.email,
          ...formData,
        }),
      })
      const result = await response.json()
      if (result.success) setStatus('success')
      else setStatus('error')
    } catch (err) {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', padding: '14px 16px', border: '1.5px solid var(--light-border)',
    borderRadius: 10, fontFamily: 'var(--font-body)', fontSize: 15,
    background: 'var(--warm-cream)', outline: 'none', color: 'var(--charcoal)',
  }

  const labelStyle = {
    display: 'block', fontSize: 13, fontWeight: 600,
    color: 'var(--warm-gray)', marginBottom: 6,
  }

  return (
    <>
      <SEO
        title="What's Your Home Worth?"
        description="Free home value estimate for your property in the New River Valley. Real comps, not a Zestimate guess. Blacksburg, Christiansburg, Floyd, Radford, Pulaski County."
        path="/home-value"
      />

      {/* HEADER */}
      <section style={{ padding: '130px 40px 50px' }}>
        <div className="mobile-center" style={{ maxWidth: 640, margin: '0 auto' }}>
          <div className="section-tag">Free home value</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4.5vw, 54px)', color: 'var(--charcoal)', marginBottom: 20, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            What's your home worth?
          </h1>
          <p style={{ fontSize: 17, color: 'var(--warm-gray)', fontWeight: 300, lineHeight: 1.7, marginBottom: 12 }}>
            I'll pull real NRV comps, walk the numbers, and send you an estimate based on your specific property. Not a Zestimate guess.
          </p>
          <p style={{ fontSize: 15, color: 'var(--warm-gray)', fontWeight: 300, lineHeight: 1.7 }}>
            Takes 30 seconds. I'll have your answer within 24 hours.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section style={{ padding: '0 40px 80px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          {status === 'success' ? (
            <div style={{ background: 'white', borderRadius: 20, padding: 48, boxShadow: '0 4px 40px rgba(0,0,0,0.06)', textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 36px)', color: 'var(--charcoal)', marginBottom: 16, letterSpacing: '-0.02em' }}>
                Got it. Talk soon.
              </h2>
              <p style={{ fontSize: 16, color: 'var(--warm-gray)', lineHeight: 1.7, fontWeight: 300, marginBottom: 28 }}>
                Your request is in. I'll pull NRV comps for your property and email you an estimate within 24 hours. If you want to talk through selling strategy, reply to that email or text me anytime.
              </p>
              <a href="tel:5402394636" className="btn-secondary">Call (540) 239-4636</a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: 'white', borderRadius: 20, padding: 'clamp(28px, 5vw, 48px)', boxShadow: '0 4px 40px rgba(0,0,0,0.06)' }}>
              <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Your name</label>
                <input type="text" required value={formData.name} onChange={handleChange('name')} style={inputStyle} placeholder="First & last" />
              </div>

              <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" required value={formData.email} onChange={handleChange('email')} style={inputStyle} placeholder="you@email.com" />
                </div>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input type="tel" required value={formData.phone} onChange={handleChange('phone')} style={inputStyle} placeholder="(540) 555-1234" />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Property address</label>
                <input type="text" required value={formData.address} onChange={handleChange('address')} style={inputStyle} placeholder="123 Main St, Blacksburg, VA" />
              </div>

              <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Bedrooms</label>
                  <select value={formData.beds} onChange={handleChange('beds')} style={inputStyle}>
                    <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6+</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Bathrooms</label>
                  <select value={formData.baths} onChange={handleChange('baths')} style={inputStyle}>
                    <option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Anything else I should know? <span style={{ fontWeight: 400 }}>(optional)</span></label>
                <textarea value={formData.notes} onChange={handleChange('notes')} rows={3} style={{...inputStyle, fontFamily: 'var(--font-body)', resize: 'vertical'}} placeholder="Recent updates, timeline, questions, etc." />
              </div>

              <button type="submit" disabled={status === 'submitting'} style={{ width: '100%', padding: 16, background: status === 'submitting' ? 'var(--warm-gray)' : 'var(--terracotta)', color: 'white', border: 'none', borderRadius: 10, fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, cursor: status === 'submitting' ? 'wait' : 'pointer', transition: 'all 0.2s' }}>
                {status === 'submitting' ? 'Sending...' : "Get my home's value →"}
              </button>

              {status === 'error' && (
                <p style={{ fontSize: 14, color: 'var(--terracotta-dark)', marginTop: 16, textAlign: 'center' }}>
                  Something glitched. Try again, or text me at (540) 239-4636 with your address.
                </p>
              )}
            </form>
          )}

          <p style={{ fontSize: 14, color: 'var(--warm-gray)', fontWeight: 300, textAlign: 'center', marginTop: 24, lineHeight: 1.7 }}>
            No pressure, no sales calls unless you ask. Just an honest number.<br />
            Prefer to text? <a href="sms:15402394636" style={{ color: 'var(--olive)', fontWeight: 500 }}>(540) 239-4636</a>.
          </p>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section style={{ padding: '80px 40px', background: 'var(--warm-cream-dark)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="mobile-center">
            <div className="section-tag">What happens next</div>
            <h2 className="section-title">Three steps, no pressure.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32, marginTop: 40 }}>
            {[
              { n: '01', title: 'You submit', body: 'Takes about 30 seconds. The more detail you give me, the better the estimate.' },
              { n: '02', title: 'I pull real comps', body: 'Recent NRV sales, current listings, neighborhood trends. Specific to your property.' },
              { n: '03', title: 'You get an answer', body: "Within 24 hours, an emailed range based on your home's actual specifics. That's it." },
            ].map(step => (
              <div key={step.n}>
                <div style={{ fontFamily: 'var(--font-numbers)', fontSize: 32, color: 'var(--terracotta)', fontWeight: 500, marginBottom: 8 }}>{step.n}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--charcoal)', marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 15, color: 'var(--warm-gray)', lineHeight: 1.6, fontWeight: 300 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
