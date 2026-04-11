import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jotadev.com.ar',
  integrations: [tailwind()],
  sitemap: {
    filter: (page) => page !== 'https://jotadev.com.ar/components/',
    entryLimit: 45000,
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date()
  },
  trailingSlash: 'never',
  compressHTML: true,
  vite: {
    build: {
      minify: 'terser'
    }
  }
});