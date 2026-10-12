# Resumint Landing (`resumint-landing`)

Marketing landing page for **Resumint**, an ATS-friendly resume builder, plus the public legal pages (Privacy Policy, Terms of Service, Refund Policy). Static site, no backend calls.
The landing page is effectively the **product spec**: every feature and price it advertises is what the builder app and the API are expected to deliver.

## Sibling projects
- `/Users/dmitry/www/resumint-builder` – React SPA (the actual builder app, "Resume Builder Wizard")
- `/Users/dmitry/www/resume-builder-api` – Symfony / API Platform backend
- Cross-project production gap analysis: `/Users/dmitry/www/resume-builder-api/PRODUCTION_READINESS.md`

## Stack
- Vite 7 **multi-page app**, React 19, TypeScript 5.8 (strict, `verbatimModuleSyntax` → use `import type`), Tailwind CSS v4 (`@tailwindcss/vite`, real build, any utility works), shadcn-style primitives in `src/components/ui`, `lucide-react` icons
- Yarn 1 (`yarn.lock`); Node 24 on this machine
- Google Analytics tag `G-LR5F032LLH` inlined in `index.html` (landing page only; legal pages carry no analytics)
- Figma export origin (`src/components/figma/ImageWithFallback.tsx`)

## Commands
```bash
yarn dev       # dev server (also serves /privacy/, /terms/, /refund/)
yarn build     # tsc -b && vite build  -> dist/ (index.html + privacy/ terms/ refund/)
yarn lint      # eslint .
yarn preview   # serve dist/ on :4173
```
`.claude/launch.json` defines `landing-dev` (:5173) and `landing-preview` (:4173) for the in-app browser.

## Deployment
- GitHub Pages via `.github/workflows/jekyll-gh-pages.yml`. The file name is misleading: it uses `skywarth/vite-github-pages-deployer` (yarn), not Jekyll. Runs on push to `main` and manually.
- Remote: `git@github.com:pliusnin/resume-builder-landing.git`
- No custom domain yet (no `public/CNAME`), so the deployer builds with `base=/resume-builder-landing/`. **All internal links must go through `src/lib/links.ts`**, which prefixes `import.meta.env.BASE_URL`; never hardcode `/privacy/`.
- Legal pages are separate HTML entry points (`privacy/index.html` etc., registered in `vite.config.ts` → `build.rollupOptions.input`), so they work on static hosting without SPA fallbacks.

## Structure
- `index.html` / `src/main.tsx` → `src/App.tsx` – landing page, section order: `Header` → `PainPoints` → `BenefitsAndFeatures` → `OfferSection` → `Footer`
- `privacy/index.html`, `terms/index.html`, `refund/index.html` → `src/pages/{privacy,terms,refund}.tsx` → `src/legal/{PrivacyPolicy,TermsOfService,RefundPolicy}.tsx`
- `src/legal/config.ts` – **single source of truth** for the operator name (`Resumint`), contact email (`resumint@gmail.com`), website (`resumint.net`), EU/UK representatives (`not applicable`), prices, refund windows, retention periods and the processor list (generic categories located in EU / US; no registered address or company number by Dmitry's decision). Governing law in the Terms follows the user's own country / US state of residence instead of a company seat. Any value written in `[SQUARE BRACKETS]` is treated as a placeholder (highlighted yellow in `yarn dev`, plain text in production). Keep prices in sync with `OfferSection.tsx`.
- `src/components/legal/LegalLayout.tsx` – header (logo, legal nav, back link), title, effective date, table of contents, content, `Footer`
- `src/components/legal/Prose.tsx` – `Section` (anchored h2), `H3`, `P`, `Ul`/`Ol`/`Li`, `Strong`, `A`, `Callout`, `Table`, `Var` (placeholder-aware), `Email` (mailto once real)
- `src/lib/links.ts` – base-aware URLs (`home`, `benefits`, `features`, `pricing`, `privacy`, `terms`, `refund`) plus `contact` (mailto to the configured email)
- `src/components/Header.tsx` – nav (Benefits / Features / Pricing anchors, **Sign In**, **Get Started**), hero, CTAs **Create My Perfect Resume** and **Upload My Resume**
- `src/components/PainPoints.tsx`, `BenefitsAndFeatures.tsx` (`id="benefits"`, `id="features"`), `OfferSection.tsx` (`id="pricing"`), `Footer.tsx` (links via `links.ts`, dynamic year)
- `src/styles/globals.css` – theme tokens; its base typography only applies where no ancestor has a `text-*` class, so legal components set explicit text classes. `src/index.css` is unused.

## Legal pages: what they commit us to
Written for EU (GDPR, Consumer Rights Directive, Digital Content Directive) and US (CCPA/CPRA + other state laws, auto-renewal laws, COPPA) audiences. Facts asserted that the product must actually implement before launch:
- Analytics cookies set only after consent where required (needs a consent banner; none exists yet).
- Cancellation from the Billing page, confirmation email, renewal reminder emails for quarterly/annual plans, 30-day notice for price/terms changes (needs a mailer and a real billing page).
- 14-day money-back guarantee on every charge (waives the EU proportionate deduction), refunds to the original payment method within 14 days.
- Account deletion with data removal within 30 days, backups purged within 90 days.
- AI features: text is sent to the provider named in `config.ts`; we do not train our own models; provider may retain/use inputs — keep this honest when a free-tier provider is chosen.
Treat these pages as drafts for a lawyer's review, not as reviewed legal advice.

## Product promises (what the app + API must satisfy)
**Features:** 5‑minute guided wizard · "100% ATS optimized" templates ("10+" on pricing, "dozens" on features – the app currently has 3) · instant high-quality PDF download · AI keyword optimization against job descriptions · ATS score checker with real-time feedback · AI content / bullet-point suggestions · easy updates and tailoring per application · "Upload My Resume" (import an existing resume) · mobile-friendly editor · 24/7 customer support · free updates · instant access after login.

**Pricing:** $2.49 for the first 7 days, then $24.49/month · Quarterly $49.49 ($16.50/mo) · Annual $99.49 ($8.29/mo) · "Cancel anytime" · "Secure payment, enterprise-grade encryption".

## Known gaps / TODO
- **No CTA is wired.** `Sign In`, `Get Started`, both hero buttons and all three pricing buttons have no `href`/`onClick`. They must link to the builder app (`/register`, `/login`), ideally with the chosen plan as a query param.
- Marketing numbers (50K+ users, 94% ATS pass rate, 98% ATS score, 3.2x interviews) are placeholders.
- No cookie consent banner although Google Analytics loads unconditionally.
- `README.md` is still the Vite template.

## Conventions
- One section = one component in `src/components`; primitives stay in `src/components/ui`; legal prose uses `src/components/legal/Prose.tsx` helpers.
- Tailwind utilities + tokens from `globals.css`; do not introduce a second styling system.
- Any change to a promised feature or price here must be mirrored in the builder/API (or the promise removed), and prices must also be updated in `src/legal/config.ts`.
- New static pages: add `<dir>/index.html` + `src/pages/<name>.tsx`, register the input in `vite.config.ts`, add the URL to `src/lib/links.ts`.
