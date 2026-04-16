import { useState } from 'react'
import SEO from '../components/SEO'

export default function HomeValue() {
  const [formData, setFormData] = useState({ address: '', beds: '3', baths: '2', email: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    alert('Thanks! We\'ll send your home value estimate shortly.')
  }

  return (
    <>
      <SEO
        title="What's Your Home Worth?"
        description="Get a free home value estimate for your property in the New River Valley. Blacksburg, Christiansburg, Floyd, Radford, Pulaski County."
        path="/home-value"
      />
      <section className="section-pad" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 40px 80px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', width: '100%' }}>
          <div className="section-tag">Free estimate</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 48px)', color: 'var(--charcoal)', marginBottom: 12, letterSpacing: '-0.02em' }}>What's your home worth?</h1>
          <p style={{ fontSize: 17, color: 'var(--warm-gray)', fontWeight: 300, marginBottom: 36, lineHeight: 1.7 }}>
            Whether you're buying your first home in Blacksburg, selling land in Floyd, or looking at investment properties, I can help. I work the entire NRV.
          </p>
          <div style={{ background: 'white', borderRadius: 20, padding: 40, boxShadow: '0 4px 40px rgba(0,0,0,0.06)' }}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--warm-gray)', marginBottom: 6 }}>Property address</label>
              <input type="text" placeholder="123 Main St, Blacksburg, VA" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} style={{ width: '100%', padding: '14px 16px', border: '1.5px solid var(--light-border)', borderRadius: 10, fontFamily: 'var(--font-body)', fontSize: 15, background: 'var(--warm-cream)', outline: 'none' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--warm-gray)', marginBottom: 6 }}>Bedrooms</label>
                <select value={formData.beds} onChange={e => setFormData({...formData, beds: e.target.value})} style={{ width: '100%', padding: '14px 16px', border: '1.5px solid var(--light-border)', borderRadius: 10, fontFamily: 'var(--font-body)', fontSize: 15, background: 'var(--warm-cream)' }}>
                  <option>2</option><option>3</option><option>4</option><option>5+</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--warm-gray)', marginBottom: 6 }}>Bathrooms</label>
                <select value={formData.baths} onChange={e => setFormData({...formData, baths: e.target.value})} style={{ width: '100%', padding: '14px 16px', border: '1.5px solid var(--light-border)', borderRadius: 10, fontFamily: 'var(--font-body)', fontSize: 15, background: 'var(--warm-cream)' }}>
                  <option>1</option><option>2</option><option>3</option><option>4+</option>
                </select>
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--warm-gray)', marginBottom: 6 }}>Email</label>
              <input type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '14px 16px', border: '1.5px solid var(--light-border)', borderRadius: 10, fontFamily: 'var(--font-body)', fontSize: 15, background: 'var(--warm-cream)', outline: 'none' }} />
            </div>
            <button onClick={handleSubmit} style={{ width: '100%', padding: 16, background: 'var(--terracotta)', color: 'white', border: 'none', borderRadius: 10, fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, cursor: 'pointer', marginTop: 8 }}>
              Get my home's value →
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
