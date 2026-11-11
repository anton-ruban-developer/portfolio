// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: замініть на реальний домен, коли він з'явиться (потрібно для canonical, hreflang, sitemap та OG-тегів)
  site: 'https://example.com',

  // Мови сайту: українська без префікса (/), російська (/ru/), англійська (/en/)
  i18n: {
    locales: ['uk', 'ru', 'en'],
    defaultLocale: 'uk',
    routing: { prefixDefaultLocale: false },
  },
});
