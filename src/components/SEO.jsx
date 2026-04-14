import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, path = '' }) {
  const siteUrl = 'https://trevanviarealty.com'
  const fullUrl = `${siteUrl}${path}`
  const fullTitle = title ? `${title} | Trevan Via Realty` : 'Trevan Via Realty | SW Virginia Real Estate'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Trevan Via Realty" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
