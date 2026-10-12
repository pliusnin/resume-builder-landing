/**
 * Cookie consent + Google Analytics loader.
 *
 * Rules implemented here (and promised in the Privacy Policy):
 * - Google Analytics is loaded, and its cookies set, only after the visitor explicitly accepts.
 * - A Global Privacy Control signal is treated as "declined" and the banner is not shown.
 * - The decision is stored for 12 months and can be changed at any time via "Cookie settings".
 * - Declining after accepting disables tracking and removes the `_ga*` cookies.
 */
const STORAGE_KEY = 'resumint-consent';
const CONSENT_VERSION = 1;
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID ?? '';

export interface ConsentState {
  analytics: boolean;
  updatedAt: string;
  version: number;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const events = new EventTarget();
const SETTINGS_REQUESTED = 'consent-settings-requested';

export function readConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (
      parsed.version !== CONSENT_VERSION ||
      typeof parsed.analytics !== 'boolean' ||
      typeof parsed.updatedAt !== 'string' ||
      Number.isNaN(Date.parse(parsed.updatedAt)) ||
      Date.now() - Date.parse(parsed.updatedAt) > CONSENT_MAX_AGE_MS
    ) {
      return null;
    }

    return { analytics: parsed.analytics, updatedAt: parsed.updatedAt, version: CONSENT_VERSION };
  } catch {
    return null;
  }
}

export function hasGlobalPrivacyControl(): boolean {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

export function saveConsent(analytics: boolean): ConsentState {
  const state: ConsentState = { analytics, updatedAt: new Date().toISOString(), version: CONSENT_VERSION };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Private mode or blocked storage: the choice still applies for this page view.
  }

  applyConsent(state);

  return state;
}

/** Ask the mounted ConsentBanner to open so the visitor can change their choice. */
export function openConsentSettings(): void {
  events.dispatchEvent(new Event(SETTINGS_REQUESTED));
}

export function onConsentSettingsRequested(listener: () => void): () => void {
  events.addEventListener(SETTINGS_REQUESTED, listener);

  return () => events.removeEventListener(SETTINGS_REQUESTED, listener);
}

/**
 * Reads the stored decision (or derives one from GPC) and applies it. Returns null when the
 * visitor still has to decide, i.e. when the banner must be shown.
 */
export function initAnalytics(): ConsentState | null {
  const stored = readConsent();
  if (stored) {
    applyConsent(stored);

    return stored;
  }

  if (hasGlobalPrivacyControl()) {
    return saveConsent(false);
  }

  return null;
}

let gaLoaded = false;

export function applyConsent(state: ConsentState | null): void {
  if (state?.analytics) {
    loadGoogleAnalytics();
  } else if (gaLoaded) {
    disableGoogleAnalytics();
  }
}

function loadGoogleAnalytics(): void {
  if (gaLoaded || !GA_MEASUREMENT_ID || typeof document === 'undefined') {
    return;
  }

  gaLoaded = true;
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
  window.dataLayer = window.dataLayer ?? [];
  // gtag.js expects the `arguments` object to be pushed, hence a classic function.
  // eslint-disable-next-line prefer-rest-params
  window.gtag = function gtag() { window.dataLayer?.push(arguments); };

  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted',
  });
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  document.head.appendChild(script);
}

function disableGoogleAnalytics(): void {
  window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
  // Official opt-out flag honoured by gtag.js for this property.
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  clearAnalyticsCookies();
}

function clearAnalyticsCookies(): void {
  const names = document.cookie
    .split(';')
    .map((part) => part.trim().split('=')[0])
    .filter((name) => name === '_ga' || name.startsWith('_ga_') || name === '_gid');

  const hostParts = window.location.hostname.split('.');
  const domains = [''];
  for (let i = 0; i < hostParts.length - 1; i += 1) {
    domains.push(hostParts.slice(i).join('.'));
  }

  for (const name of names) {
    for (const domain of domains) {
      const domainAttr = domain ? `; domain=${domain}` : '';
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainAttr}`;
    }
  }
}
