import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://jotadev.com.ar',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !['/components', '/olala', '/highlight'].some((path) => page.includes(path)),
      entryLimit: 45000,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-AR', en: 'en-US' }
      }
    })
  ],
  trailingSlash: 'never',
  compressHTML: true,
  vite: {
    build: {
      minify: 'terser'
    }
  }
});