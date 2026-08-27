// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { publishedCategorySlugs } from './src/lib/publishedCategories.ts';

const indexedCategories = publishedCategorySlugs();

export default defineConfig({
  site: 'https://selectedbymen.com',
  trailingSlash: 'always',
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        if (page.includes('/404')) return false;
        const categoryMatch = page.match(/\/category\/([^/]+)\/?$/);
        if (categoryMatch && !indexedCategories.has(categoryMatch[1])) {
          return false;
        }
        return true;
      },
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
    },
  },
});
