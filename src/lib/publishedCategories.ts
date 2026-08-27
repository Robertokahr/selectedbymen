import fs from 'node:fs';
import path from 'node:path';

/**
 * Category slugs that currently have at least one non-draft post.
 * Used to keep empty category URLs out of the sitemap.
 */
export function publishedCategorySlugs(cwd = process.cwd()): Set<string> {
  const postsDir = path.join(cwd, 'src/content/posts');
  const slugs = new Set<string>();

  if (!fs.existsSync(postsDir)) return slugs;

  for (const file of fs.readdirSync(postsDir)) {
    if (!/\.mdx?$/.test(file)) continue;
    const text = fs.readFileSync(path.join(postsDir, file), 'utf8');
    if (/^draft:\s*true/m.test(text)) continue;
    const match = text.match(/^category:\s*([a-z0-9-]+)/m);
    if (match) slugs.add(match[1]);
  }

  return slugs;
}
