import Head from 'next/head';
import { SITE_URL, firm, partners, practiceAreas } from '@/lib/firm';

// Structured data so search engines can show the firm as a local legal
// business: address, phone numbers, practice areas and the partners.
function firmJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${SITE_URL}/#firm`,
    name: firm.name,
    alternateName: ['TelimissionHills', 'Telimission Hills & Co', 'Telimissionhills and Co'],
    description: firm.summary,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-192.png`,
    image: `${SITE_URL}/og.jpg`,
    email: firm.email,
    telephone: firm.phones.map((p) => p.tel),
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${firm.address.street}, ${firm.address.area}`,
      addressLocality: firm.address.city,
      addressRegion: firm.address.state,
      addressCountry: firm.address.countryCode,
    },
    areaServed: [
      { '@type': 'City', name: 'Port Harcourt' },
      { '@type': 'State', name: 'Rivers State' },
      { '@type': 'Country', name: 'Nigeria' },
    ],
    knowsAbout: practiceAreas.map((a) => a.title),
    employee: partners.map((p) => ({
      '@type': 'Person',
      name: p.name.replace(/, Esq\.?$/, ''),
      jobTitle: p.role,
      image: `${SITE_URL}${p.image}`,
      url: `${SITE_URL}/team#${p.slug}`,
    })),
  };
}

export default function Seo({ title, description, path = '/', image = '/og.jpg', jsonLd }) {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const fullTitle = path === '/' ? title : `${title} | ${firm.name}`;
  const blocks = [firmJsonLd(), ...(jsonLd ? [].concat(jsonLd) : [])];
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={firm.name} />
      <meta property="og:locale" content="en_NG" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="The partners of TelimissionHills & Co." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />
      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }} />
      ))}
    </Head>
  );
}
