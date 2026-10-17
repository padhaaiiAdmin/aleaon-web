/**
 * Single source of truth for company and product details.
 * Change names, URLs and contact details here only.
 */
export const SITE = {
  company: 'Aleaon Technologies',
  companyShort: 'Aleaon',
  product: 'Padhaaii',
  domain: 'https://aleaon.com',
  productAppUrl: 'https://app.padhaaii.com',

  /** Leave empty until set up. Empty values are hidden on the site. */
  contactEmail: '',
  contactPhone: '',

  /**
   * POST endpoint for the "Book a demo" form (e.g. a Lambda function URL or a form service).
   * While empty, the form validates but tells visitors bookings open soon.
   */
  demoFormEndpoint: '',

  foundedYear: 2026,
} as const;
