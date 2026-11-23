import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bdca-landing-page.azerorill.workers.dev',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  compressHTML: true,
  build: {
    inlineStylesheets: 'always'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});
