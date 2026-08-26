import { readFileSync, existsSync, readdirSync } from 'fs';

const html = readFileSync(
  'dist/blog/the-only-grooming-routine-you-need/index.html',
  'utf8',
);
const imgs = [...html.matchAll(/<img[^>]+>/g)].map((m) => m[0].slice(0, 280));
const hrefs = [...html.matchAll(/href="(https:\/\/www\.amazon\.com[^"]*)"/g)].map(
  (m) => m[1],
);
console.log('IMG COUNT', imgs.length);
imgs.forEach((t, i) => console.log(i, t));
console.log('AMAZON', hrefs);
const astroImgs = [...html.matchAll(/src="(\/_astro\/[^"]+)"/g)].map((m) => m[1]);
for (const u of [...new Set(astroImgs)]) {
  console.log(u, existsSync('dist' + u) ? 'OK' : 'MISSING');
}
