import type { APIRoute } from 'astro';

// Сторінки сайту. Додавайте сюди нові, коли вони з'являться.
const pages = ['/'];

export const GET: APIRoute = ({ site, url }) => {
  const urls = pages
    .map((p) => `  <url><loc>${new URL(p, site ?? url).href}</loc></url>`)
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
};
