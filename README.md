# BDCA Landing Page and Ecosystem Gateway

The public website for Bina Darma Cyber Army, a student technology community at Universitas Bina Darma in Palembang. The site is built with Astro and TypeScript and published as static files.

| Route | Content |
| --- | --- |
| `/` | Programs, the team, and ways to join BDCA |
| `/ecosystem/` | Member, credential, training, and community resources |
| `/activities/` | BDCA's competition record |

## Local development

Use Node.js 22.23.4 or later, subject to the requirements of the installed Astro and Vite versions.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

The preview serves the production build in `dist/`. Astro preview does not apply the Cloudflare Pages rules in `public/_headers`.

## Project guides

- [Architecture](docs/ARCHITECTURE.md)
- [Content and roster updates](docs/DATA_MANAGEMENT.md)
- [Design and implementation decisions](docs/DECISIONS.md)
- [Cloudflare Pages deployment](docs/DEPLOYMENT_GUIDE.md)
- [Lighthouse verification](docs/LIGHTHOUSE_OPTIMIZATION.md)

Maintained by Bina Darma Cyber Army.
