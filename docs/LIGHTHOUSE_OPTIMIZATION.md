# Lighthouse verification

Build the site with `npm run build` and serve `dist/` through a preview that applies the response headers in `public/_headers`. Run Lighthouse with both the mobile and desktop profiles on `/`, `/ecosystem/`, and `/activities/`. Record the Lighthouse version and scores for Performance, Accessibility, Best Practices, and SEO.

- **Performance** uses inline styles, system fonts, responsive WebP images, and deferred loading of the optional WebGL module. Check LCP, total blocking time, and layout shifts when scores change.
- **Accessibility** covers a single primary heading per route, keyboard navigation, accessible control names, contrast, and image alternatives. Also test the mobile menu and skip link with a keyboard.
- **Best Practices** checks browser errors and other automated signals. Verify dependency advisories with `npm audit` and test the response security policy separately.
- **SEO** checks per-page titles and descriptions, canonical URLs, and crawlability. Verify that the sitemap and robots file agree with the site origin and that structured data parses as JSON.

Lighthouse scores depend on the browser, hardware, and hosting environment. Compare results under the same conditions.
