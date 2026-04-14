import SEO from '../components/SEO'

export default function Properties() {
  return (
    <>
      <SEO
        title="Properties for Sale in the New River Valley"
        description="Search homes, land, and commercial properties for sale in Blacksburg, Christiansburg, Floyd County, Radford, and Pulaski County VA."
        path="/properties"
      />
      <section style={{ padding: '130px 40px 80px', maxWidth: 1280, margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 44px)', marginBottom: 8 }}>Find your property</h1>
      <p style={{ fontSize: 17, color: 'var(--warm-gray)', fontWeight: 300, marginBottom: 40 }}>Browse homes, land, and commercial properties across the New River Valley.</p>
      <div style={{ background: 'white', borderRadius: 16, padding: 40, textAlign: 'center', boxShadow: '0 2px 24px rgba(0,0,0,0.05)' }}>
        <p style={{ fontSize: 16, color: 'var(--warm-gray)', marginBottom: 16 }}>Property search will be powered by your IDX provider (iHomefinder, Showcase IDX, etc.)</p>
        <p style={{ fontSize: 14, color: 'var(--warm-gray)', fontWeight: 300 }}>The IDX widget or API integration will go here once you choose a provider.</p>
      </div>
    </section>
    </>
  )
}
