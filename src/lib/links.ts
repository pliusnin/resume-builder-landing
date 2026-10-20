/**
 * Site links that respect Vite's `base` (GitHub Pages serves the site under `/<repo-name>/`
 * unless a CNAME is configured, and the deploy action sets `base` accordingly).
 */
import { legal } from '../legal/config';

const base = import.meta.env.BASE_URL; // always ends with "/"
const appUrl = (import.meta.env.VITE_APP_URL ?? 'https://app.resumint.net').replace(/\/+$/, '');

export type PlanId = 'monthly' | 'quarterly' | 'annual';

export const links = {
  home: base,
  benefits: `${base}#benefits`,
  features: `${base}#features`,
  pricing: `${base}#pricing`,
  privacy: `${base}privacy/`,
  terms: `${base}terms/`,
  refund: `${base}refund/`,
  contact: `mailto:${legal.contactEmail}`,
  // The builder app (separate origin, see VITE_APP_URL)
  appLogin: `${appUrl}/login`,
  appRegister: `${appUrl}/register`,
} as const;

/** Sign-up link that remembers which plan the visitor clicked on the pricing section. */
export const appRegisterWithPlan = (plan: PlanId) => `${links.appRegister}?plan=${plan}`;
