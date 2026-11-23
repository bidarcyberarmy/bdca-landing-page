# Lighthouse Verification

Build the site with `npm run build` and serve `dist/` through a server that applies the response headers in `public/_headers`. In a clean Chrome profile, run Lighthouse with both the mobile and desktop presets across all 6 routes (`/`, `/ecosystem/`, `/activities/`, and their `/id/` equivalents).

## Latest verified results

Recorded on **Lighthouse v13.5.0** against the production build in `dist/` with `public/_headers` applied:

| Preset | Route | Performance | Accessibility | Best Practices | SEO |
| --- | --- | :---: | :---: | :---: | :---: |
| Mobile | `/` | 100 | 100 | 100 | 100 |
| Mobile | `/id/` | 100 | 100 | 100 | 100 |
| Mobile | `/ecosystem/` | 100 | 100 | 100 | 100 |
| Mobile | `/id/ecosystem/` | 100 | 100 | 100 | 100 |
| Mobile | `/activities/` | 100 | 100 | 100 | 100 |
| Mobile | `/id/activities/` | 100 | 100 | 100 | 100 |
| Desktop | `/` | 100 | 100 | 100 | 100 |
| Desktop | `/id/` | 100 | 100 | 100 | 100 |
| Desktop | `/ecosystem/` | 100 | 100 | 100 | 100 |
| Desktop | `/id/ecosystem/` | 100 | 100 | 100 | 100 |
| Desktop | `/activities/` | 100 | 100 | 100 | 100 |
| Desktop | `/id/activities/` | 100 | 100 | 100 | 100 |

Homepage Core Web Vitals:

- **Mobile (`/` / `/id/`):** FCP `1.3 s` / `1.2 s` · LCP `1.5 s` / `1.6 s` · TBT `0 ms` · CLS `0`
- **Desktop (`/` / `/id/`):** FCP `0.3 s` · LCP `0.4 s` · TBT `0 ms` · CLS `0`

## Audit pillars

- **Performance:** Inlined CSS, system fonts, responsive WebP images, Astro `<Image>` portrait optimization, and deferred loading of the optional WebGL globe module. Watch LCP, TBT, and CLS after layout or asset edits.
- **Accessibility:** Single `<h1>` per route, keyboard skip link, 44×44 px touch targets, accessible names, contrast ratios, and `alt` attributes. Test the mobile `<details>` menu and `<details>` step disclosures with keyboard navigation.
- **Best Practices:** Zero console errors, `rel="noopener noreferrer"` on external links, strict CSP, and security headers. Check dependency advisories separately with `npm audit`.
- **SEO:** Per-page titles and descriptions, canonical URLs, `hreflang` (`en`, `id`, `x-default`), valid JSON-LD structured data, and matching `robots.txt` + `sitemap-index.xml`.

Scores depend on browser version, hardware, and hosting environment; compare results under matching conditions.
