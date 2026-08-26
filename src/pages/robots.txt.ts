import type { APIRoute } from 'astro';

const robots = (sitemapUrl: string) => `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL('sitemap-index.xml', site).href;
  return new Response(robots(sitemapUrl), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
