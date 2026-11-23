# Deploying BDCA to Cloudflare Pages

Connect the repository to a Cloudflare Pages project and select the production branch. Use the Astro build preset with these settings:

| Setting | Value |
| --- | --- |
| Root directory | Repository root |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js | `24.22.1` (pinned in `.node-version`; minimum `>=22.23.4`) |

If the primary domain changes, update `site` in `astro.config.mjs` and the `Sitemap` URL in `public/robots.txt` together so canonical links, `hreflang` tags, and the sitemap stay aligned.

Cloudflare Pages reads the copied `dist/_headers` file to enforce Content Security Policy, clickjacking protection (`X-Frame-Options: DENY`), HSTS, referrer policy, permissions policy, and immutable caching for `/assets/*` and `/_astro/*`.

After deployment:

1. Verify all 6 static routes over HTTPS: `/`, `/ecosystem/`, `/activities/`, `/id/`, `/id/ecosystem/`, and `/id/activities/`.
2. Confirm response headers match `public/_headers` (Astro's local `npm run preview` does not apply `_headers`).
3. Confirm `/sitemap-index.xml` and `/robots.txt` point to the expected canonical origin.
