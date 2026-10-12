/**
 * Site links that respect Vite's `base` (GitHub Pages serves the site under `/<repo-name>/`
 * unless a CNAME is configured, and the deploy action sets `base` accordingly).
 */
import { legal } from '../legal/config';

const base = import.meta.env.BASE_URL; // always ends with "/"

export const links = {
  home: base,
  benefits: `${base}#benefits`,
  features: `${base}#features`,
  pricing: `${base}#pricing`,
  privacy: `${base}privacy/`,
  terms: `${base}terms/`,
  refund: `${base}refund/`,
  contact: `mailto:${legal.contactEmail}`,
} as const;
