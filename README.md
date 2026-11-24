# AERO CLEAN — Website

Production website for **AERO CLEAN**, a vent and air duct cleaning service.
Built with Next.js (App Router), React, TypeScript and Tailwind CSS, and exported as a **fully static site** (plain HTML/CSS/JS) that can be hosted anywhere.

| Page | Route |
| --- | --- |
| Home | `/` |
| Services | `/services/` |
| Packages & Pricing | `/packages/` |
| FAQs | `/faqs/` |
| Terms & Conditions | `/terms/` |
| Privacy Policy | `/privacy/` |

Plus `sitemap.xml`, `robots.txt`, a 404 page, favicon/app icons and an Open Graph share image.

---

## 1. Requirements

- Node.js **20.9 or newer** (22 LTS recommended)
- npm 10+

## 2. Install & run

```bash
npm install          # installs the latest stable Next.js 16.x, React 19.x, Tailwind 4.x
npm run dev          # http://localhost:3000
```

The first `npm install` creates `package-lock.json`. Commit it so every future install uses exactly the same versions.

## 3. Checks before deploying

```bash
npm run typecheck    # TypeScript
npm run lint         # ESLint (eslint-config-next, flat config)
npm run build        # production build + static export to /out
npm run check:publish   # lists business details that are still missing
```

`npm run verify` runs typecheck, lint and build in one go.

> `next build` downloads the two web fonts (Archivo and IBM Plex Mono) from Google Fonts **at build time** and self-hosts them in `/out`. The build machine needs internet access; visitors' browsers never contact Google.

## 4. Configure the business details

Everything business-specific lives in **one file**: `src/config/site.ts`.

- Phone, email, service area, hours, address, social links
- Legal entity name, governing law, dispute venue, hosting provider, payment methods, cancellation notice/fee
- `showReviewNotes` — the amber "review before publishing" notes on the legal and pricing pages. Set to `false` **only after** the content has been reviewed.

The production domain is set with an environment variable:

```bash
cp .env.example .env.production.local
# then edit:
NEXT_PUBLIC_SITE_URL=https://www.your-domain.com
```

While this is not set, the site uses `https://www.example.com` for canonical URLs **and tells search engines not to index it** (`noindex` + `Disallow: /` in robots.txt), so an unfinished preview can't end up in Google.

While a value is `null`, the site shows a clearly marked amber `[placeholder]` (never a fake number or a broken link). Contact buttons appear automatically once a phone number and/or email is set; package "Request" buttons open a pre-filled email (or a phone call if there's no email).

Package names/prices/scope: `src/data/packages.ts` · Services: `src/data/services.ts` · FAQs: `src/data/faqs.ts`.

See **BUSINESS-DETAILS-CHECKLIST.md** for everything that must be supplied, and **COMPLIANCE-RESEARCH.md** for the legal research summary.

## 5. Deploy (static hosting)

`npm run build` writes the complete site to **`/out`**. Upload the *contents* of `/out` to any static host.

| Host | How |
| --- | --- |
| **Netlify** | Build command `npm run build`, publish directory `out`, env var `NEXT_PUBLIC_SITE_URL`. |
| **Cloudflare Pages** | Framework preset "None", build `npm run build`, output `out`. |
| **Vercel** | Import the repo; it detects Next.js. Add `NEXT_PUBLIC_SITE_URL`. |
| **Hostinger / cPanel / any web host** | Run `npm run build` locally, then upload the contents of `out/` to `public_html/`. |
| **GitHub Pages / S3** | Upload `out/`. (For a project sub-path, add `basePath` in `next.config.ts`.) |

`trailingSlash: true` is enabled, so every page is a folder with an `index.html` (`/services/index.html`) and works without server rewrite rules. To preview the export locally: `npm run build && npm start`.

## 6. Project structure

```
src/
  app/                      Routes (App Router) — one folder per page
    layout.tsx              Shared <html>, fonts, header, contact band, footer
    page.tsx                Home
    services/ packages/ faqs/ terms/ privacy/
    sitemap.ts  robots.ts   Generated at build time (force-static)
    not-found.tsx  icon.png  apple-icon.png  globals.css
  config/
    site.ts                 ★ Single source of truth for business details
    seo.ts                  Metadata helpers, Open Graph, sitemap routes
    navigation.ts           Header/footer links
  data/
    packages.ts             ★ Package names, starting prices, scope, comparison
    services.ts             Services, optional services, out-of-scope list
    faqs.ts  process.ts
  components/
    layout/                 Header, NavLinks, MobileNav (client), Footer, Logo
    home/                   Hero, VentVisual (SVG), Intro, ServicesOverview, …
    pricing/                PackageCard, PricingDisclaimer
    services/               ServiceDetail, ScopeOverview
    faq/                    FaqAccordion (native <details>, no JS)
    legal/                  LegalDocument (numbered sections + TOC), contact block
    contact/                ContactBand, request-link helper
    ui/                     Button, Container, SectionHeading, PageHero, icons,
                            Placeholder, ReviewNote, JsonLd, Breadcrumbs
public/
  brand/                    Supplied logo (cropped to its bounds only)
  og-image.png              1200×630 social share image
scripts/check-publish-readiness.mjs
```

### Notes on implementation

- **Server Components by default.** Only `NavLinks` and `MobileNav` are Client Components (active-link state, menu toggle). The FAQ accordion uses native `<details>`, so it works with no JavaScript.
- **Hero visual** is a hand-built inline SVG of a 4-way ceiling diffuser lit with an amber glow — no stock photo, no extra request, no layout shift, no licensing questions. Animation is disabled for visitors who prefer reduced motion.
- **Logo** is the supplied file, only cropped to its own edges; it is always shown on white so its colours are unchanged. The favicon is the logo's own fan mark.
- **Icons**: lucide-react, imported in one place (`components/ui/icons.ts`).
- **No forms, no database, no analytics, no cookies, no third-party scripts.** The Privacy Policy describes exactly this; update it before adding any of them.
- **Structured data**: WebSite, BreadcrumbList and FAQPage are always output. `HVACBusiness` (LocalBusiness) data is output **only** once a real domain, phone, service area and legal name are configured.
- **Accessibility**: skip link, landmarks, one `h1` per page, visible focus rings, 44px+ touch targets, labelled navs, `aria-current`, `aria-expanded`, Escape to close the menu, reduced-motion support, AA contrast on text.

## 7. Live deployment (GitHub → Hostinger)

1. Push to `main`.
2. GitHub Actions (`.github/workflows/deploy.yml`) installs, type-checks, lints, builds the static export, runs `npm audit` and publishes `/out` to the **`deploy`** branch.
3. Hostinger is connected to the `deploy` branch of this repo (static site) and auto-deploys it to **aeroclean.sbs**.

`public/.htaccess` (copied into the build) forces HTTPS, redirects `www` to the bare domain, serves the custom 404 page, disables directory listing and sets security headers (CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy) plus long-term caching for build assets.
