import { readFileSync, existsSync } from 'fs';

const pages = [
  'dist/blog/the-only-grooming-routine-you-need/index.html',
  'dist/blog/everyday-carry-tech-that-earns-its-place/index.html',
  'dist/blog/a-capsule-wardrobe-that-actually-works/index.html',
];

for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const imgs = [...html.matchAll(/src="(\/(?:posts|products)\/[^"]+)"/g)].map((m) => m[1]);
  const amazon = [...html.matchAll(/href="(https:\/\/www\.amazon\.com\/dp\/[A-Z0-9]{10})"/g)].map(
    (m) => m[1],
  );
  const missing = imgs.filter((u) => !existsSync(`dist${u}`));
  const hashed = [...html.matchAll(/src="(\/_astro\/(?:grooming|style|tech|razor|belt)[^"]*)"/g)];
  console.log('\n', page);
  console.log('  imgs', imgs);
  console.log('  missing', missing);
  console.log('  amazon', [...new Set(amazon)]);
  console.log('  leftover hashed article imgs', hashed.length);
}
