/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Production origin, e.g. https://resumint.net (see .env). */
  readonly VITE_SITE_URL?: string;
  /** Google Analytics 4 measurement id (see .env). */
  readonly VITE_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
