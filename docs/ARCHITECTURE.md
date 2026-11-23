# BDCA Site Architecture

Astro renders all three pages in both English and Indonesian at build time via a single static catch-all route. English uses the root URLs, and Indonesian uses the `/id/` prefix. All content is typed and stored in `src/data/` — no database or application server is required to serve the build.

## Static routes

| Route (EN) | Route (ID) | Component | Content |
| --- | --- | --- | --- |
| `/` | `/id/` | `Home.astro` | Hero, About, Programs, BDCAHOOT, BDCA Certification, Organizational Structure, and Community |
| `/ecosystem/` | `/id/ecosystem/` | `ResourcePage.astro` + `SubWebHub.astro` | Member showcase, certification portal, knowledge base, CTFtime, internal VulnLab, and Discord |
| `/activities/` | `/id/activities/` | `ResourcePage.astro` + `Achievements.astro` | National and international CTF competition record |

## Source map

| Source | Responsibility |
| --- | --- |
| `src/pages/[...path].astro` | Generates all 6 static routes (`en` and `id`) and resolves localized metadata |
| `src/layouts/Layout.astro` | `<html lang>`, canonical URLs, `hreflang` alternates, Open Graph, Twitter cards, JSON-LD, and skip link |
| `src/data/locales.ts` | Locale definitions (`en`, `id`), page registry, and `pagePath()` URL builder |
| `src/data/copy.ts` | Shared interface and localized copy for navigation, hero, sections, showcases, and resource pages |
| `src/data/site.ts` | Organization metadata, official links, social preview image, and contact email |
| `src/data/team.ts` | 2026–2027 roster (5 groups, 13 members), Indonesian role mapping, and portrait imports |
| `src/data/subwebs.ts` | Ecosystem portals, localized categories, and `online` / `internal` / `maintenance` statuses |
| `src/data/achievements.ts` | Localized competition record entries |
| `src/components/` | `Navbar`, `Home`, `Hero`, `About`, `Programs`, `Bdcahoot`, `Certificates`, `Structure`, `MemberCard`, `Community`, `ResourcePage`, `SubWebHub`, `Achievements`, `Footer` |
| `src/assets/team/` | 4:5 WebP portrait sources processed by Astro `<Image>` into responsive widths |
| `src/styles/global.css` | Shared design tokens, layout utilities, focus states, and base typography |
| `src/scripts/globe.ts` | Lazy-loaded WebGL globe renderer (Natural Earth 1:110m land texture) |
| `public/` | Static hero/brand WebP assets, fallback silhouette, `robots.txt`, and Cloudflare Pages `_headers` |

## Client-side behavior

The site ships static HTML with inlined CSS (`build.inlineStylesheets: 'always'`) and minimal browser modules:

- **Mobile navigation (`Navbar.astro`):** native `<details>` drawer with click-to-close on link selection and `Escape` key focus restoration.
- **Interactive globe (`Hero.astro` + `src/scripts/globe.ts`):** renders a responsive WebP poster on first paint; loads WebGL and the land texture only when the visitor clicks **Rotate globe**, caps rendering at 24 fps, pauses when offscreen or hidden, and falls back to the static poster on `webglcontextlost`.

Production assets, optimized images, `_headers`, and sitemap files are emitted to `dist/`.
