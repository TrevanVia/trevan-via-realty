import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, path = '', image }) {
  const siteUrl = 'https://trevanviarealty.com'
  const fullUrl = `${siteUrl}${path}`
  const fullTitle = title ? `${title} | Trevan Via Realty` : 'Trevan Via Realty | SW Virginia Real Estate'
  const ogImage = image ? `${siteUrl}${image}` : `${siteUrl}/family.jpg`

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Trevan Via',
    image: `${siteUrl}/family.jpg`,
    url: siteUrl,
    telephone: '+15402394636',
    email: 'trevan@gravitygroup.us',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'VA',
      addressLocality: 'Floyd',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Blacksburg, VA' },
      { '@type': 'City', name: 'Christiansburg, VA' },
      { '@type': 'City', name: 'Floyd, VA' },
      { '@type': 'City', name: 'Radford, VA' },
      { '@type': 'City', name: 'Pulaski, VA' },
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Gravity Real Estate Group',
    },
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Trevan Via Realty" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Trevan Via Realty" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}
