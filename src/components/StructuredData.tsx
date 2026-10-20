import { legal } from '../legal/config';
import { absoluteUrl, SITE_NAME, SITE_URL } from '../lib/site';

const toNumber = (price: string) => Number(price.replace(/[^0-9.]/g, ''));

/**
 * JSON-LD for search engines: organization, website and the product with its plans.
 * Prices come from `legal.pricing` so they stay in sync with the legal pages.
 */
export function StructuredData() {
  const { pricing } = legal;
  const description =
    'Build a professional, ATS-friendly resume in minutes with a guided wizard, clean templates and instant PDF download.';

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: absoluteUrl('icon.svg'),
        email: legal.contactEmail,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        description,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en',
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}/#app`,
        name: SITE_NAME,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: `${SITE_URL}/`,
        description,
        image: absoluteUrl('og-image.jpg'),
        offers: [
          {
            '@type': 'Offer',
            name: 'Monthly plan',
            price: toNumber(pricing.monthlyPrice),
            priceCurrency: pricing.currency,
            description: `${pricing.introPrice} for the first month, then ${pricing.monthlyPrice} per month`,
            url: `${SITE_URL}/#pricing`,
          },
          {
            '@type': 'Offer',
            name: 'Quarterly plan',
            price: toNumber(pricing.quarterlyPrice),
            priceCurrency: pricing.currency,
            description: `${pricing.quarterlyPrice} every 90 days`,
            url: `${SITE_URL}/#pricing`,
          },
          {
            '@type': 'Offer',
            name: 'Annual plan',
            price: toNumber(pricing.annualPrice),
            priceCurrency: pricing.currency,
            description: `${pricing.annualPrice} every 12 months`,
            url: `${SITE_URL}/#pricing`,
          },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
