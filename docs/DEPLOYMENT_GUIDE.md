# Deploying BDCA to Cloudflare Pages

Connect the repository to a Cloudflare Pages project and select the production branch. Use the Astro build preset with these settings.

| Setting | Value |
| --- | --- |
| Root directory | Repository root |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js | 22.23.4 or later, subject to the installed Astro and Vite requirements |

If the primary domain changes, update the `site` setting in `astro.config.mjs` and the sitemap URL in `public/robots.txt` together.

Cloudflare Pages reads the copied `dist/_headers` file to set Content Security Policy, clickjacking protections, HSTS, referrer policy, and asset caching. After deployment, verify those response headers over HTTPS and confirm that the sitemap lists the expected canonical URLs. Astro's built-in preview does not apply these host rules.
