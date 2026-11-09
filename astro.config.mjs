import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bdca.pages.dev',
  integrations: [sitemap()],
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
