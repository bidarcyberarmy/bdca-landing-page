# BDCA site architecture

Astro renders all three routes to HTML at build time. Content comes from TypeScript modules in `src/data/`. No database or application server is needed to serve the build.

| Source | Responsibility |
| --- | --- |
| `src/pages/index.astro` | Homepage and community sections |
| `src/pages/[resource].astro` | Static ecosystem and competition record routes |
| `src/layouts/Layout.astro` | Language, metadata, structured data, and keyboard skip link |
| `src/components/` | Navigation, page sections, team cards, and footer |
| `src/styles/global.css` | Shared styles and design tokens |
| `src/scripts/globe.ts` | Optional WebGL globe renderer |
| `public/` | Images, robots directives, and host response header rules |

The site uses small browser modules for navigation and the globe control. A static poster is available before the globe renderer loads and on devices without WebGL. Production assets and sitemap files are written to `dist/`.
