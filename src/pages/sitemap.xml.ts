import type { APIRoute } from 'astro';
import { locales, defaultLocale, localizePath } from '../i18n';

// Сторінки сайту без префікса мови. Додавайте сюди нові, коли вони з'являться:
// кожна автоматично потрапить у sitemap усіма мовами (/, /ru/, /en/).
const pages = ['/', '/privacy/'];

export const GET: APIRoute = ({ site, url }) => {
  const abs = (path: string) => new URL(path, site ?? url).href;

  const urls = pages
    .flatMap((page) => {
      // для кожної мовної версії перелічуємо всі інші: так Google бачить, що це одна сторінка різними мовами
      const alternates = [
        ...locales.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(localizePath(l, page))}"/>`),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(localizePath(defaultLocale, page))}"/>`,
      ].join('\n');
      return locales.map((l) => `  <url>\n    <loc>${abs(localizePath(l, page))}</loc>\n${alternates}\n  </url>`);
    })
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
};
