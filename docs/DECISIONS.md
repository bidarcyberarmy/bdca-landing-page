# BDCA implementation decisions

The approved Cloud design uses pale blue surfaces, navy text, and blue-to-teal accents. Shared color, spacing, and typography tokens live in `src/styles/global.css`. The leadership and member card gradients are scoped to the roster components.

- The homepage and resource pages use static HTML, scoped CSS, and system fonts. Small browser scripts handle the responsive menu and the optional globe.
- The hero shows a responsive WebP poster on first paint. Its WebGL renderer and map texture load when the visitor activates the rotate control. The map is based on [Natural Earth 1:110m Land](https://www.naturalearthdata.com/downloads/110m-physical-vectors/110m-land/).
- Every page has a single primary heading, a keyboard skip link, and visible focus styles. The document language is English. Official organization, event, and member names retain their original spelling.
- The 2026–2027 roster is organized into five groups. Its data is maintained in `src/data/team.ts`.
- Astro generates the sitemap using the canonical origin in `astro.config.mjs`. The shared layout builds Open Graph, social preview, and structured data tags.
- Cloudflare Pages serves `dist/`. Response header rules live in `public/_headers`.
