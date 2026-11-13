// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Основний домен: потрібен для canonical, hreflang та OG-тегів. Без site сторінки закриваються від індексації (noindex)
  site: 'https://rubanweb.com',

  // Мови сайту: українська без префікса (/), російська (/ru/), англійська (/en/)
  i18n: {
    locales: ['uk', 'ru', 'en'],
    defaultLocale: 'uk',
    routing: { prefixDefaultLocale: false },
  },
});
