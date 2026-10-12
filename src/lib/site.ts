/**
 * Production site identity. Everything that must be an absolute URL (canonical links, Open Graph,
 * structured data, sitemap) derives from VITE_SITE_URL so the same build can run on a test host.
 */
const configuredUrl = (import.meta.env.VITE_SITE_URL ?? 'https://resumint.net').replace(/\/+$/, '');

export const SITE_URL = configuredUrl;
export const SITE_HOST = new URL(configuredUrl).host;
export const SITE_NAME = 'Resumint';

export const absoluteUrl = (path: string) => `${SITE_URL}/${path.replace(/^\/+/, '')}`;

/**
 * Test and staging copies of the site (e.g. GitHub Pages) must not compete with production in
 * search results. Canonical tags already point at production; this adds a robots noindex on any
 * other host as a second line of defence.
 */
export function applyNonProductionNoindex(): void {
  if (typeof document === 'undefined') {
    return;
  }

  if (window.location.hostname === SITE_HOST || document.querySelector('meta[name="robots"]')) {
    return;
  }

  const meta = document.createElement('meta');
  meta.name = 'robots';
  meta.content = 'noindex, nofollow';
  document.head.appendChild(meta);
}
