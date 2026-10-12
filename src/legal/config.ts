/**
 * Single source of truth for the facts used by the legal pages.
 *
 * Any value written in [SQUARE BRACKETS] is treated as a placeholder: it is highlighted in
 * development builds (see `Var` in components/legal/Prose.tsx) so it cannot be overlooked.
 * Keep prices in sync with `src/components/OfferSection.tsx`.
 */
export const legal = {
  productName: 'Resumint',
  effectiveDate: 'October 12, 2026',

  // Operator of the Service (the "data controller" under the GDPR).
  companyName: 'Resumint',
  contactEmail: 'resumint@gmail.com',
  privacyEmail: 'resumint@gmail.com',
  websiteUrl: 'https://resumint.net',
  websiteHost: 'resumint.net',

  // Art. 27 GDPR / UK GDPR representatives.
  euRepresentative: 'not applicable',
  ukRepresentative: 'not applicable',

  pricing: {
    introPrice: '$2.49',
    introDays: 7,
    monthlyPrice: '$24.49',
    quarterlyPrice: '$49.49',
    annualPrice: '$99.49',
    currency: 'USD',
  },

  // Refund rules used by both the Refund Policy and the Terms.
  moneyBackDays: 14,
  withdrawalDays: 14,
  refundProcessingTime: '5–10 business days',

  // Data retention figures quoted in the Privacy Policy.
  retention: {
    accountAfterDeletion: '30 days',
    backups: '90 days',
    serverLogs: '12 months',
    billingRecords: 'up to 10 years (as required by tax and accounting law)',
    analytics: '14 months (Google Analytics default)',
  },

  // Third parties that process personal data on our behalf (the "processors" / "service providers").
  // Service is operated for customers in the EU and the US; providers are located in those regions.
  processors: [
    { name: 'Cloud hosting provider', purpose: 'Hosting of the application, database and generated PDF files', location: 'EU / US' },
    { name: 'Payment service provider', purpose: 'Payment processing, subscription billing, invoices and fraud prevention', location: 'EU / US' },
    { name: 'AI model provider', purpose: 'Generating AI suggestions (professional summary, bullet points, keyword hints) from text you submit', location: 'EU / US' },
    { name: 'Transactional email provider', purpose: 'Sending transactional emails (account, billing, password reset)', location: 'EU / US' },
    { name: 'Google LLC / Google Ireland Ltd (Google Analytics 4)', purpose: 'Aggregated website usage statistics on the marketing website', location: 'USA / Ireland' },
  ],
} as const;

export const isPlaceholder = (value: string) => value.startsWith('[') && value.endsWith(']');
