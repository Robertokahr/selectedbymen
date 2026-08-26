import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;
export type Product = Post['data']['products'][number];

export async function getProductById(id: string): Promise<Product> {
  const posts = await getPublishedPosts();
  const matches = posts.flatMap((post) => post.data.products).filter((product) => product.id === id);

  const product = matches[0];

  if (!product) {
    throw new Error(`Unknown product id: ${id}`);
  }

  if (matches.length > 1) {
    throw new Error(`Duplicate product id: ${id}`);
  }

  return product;
}

export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts.filter((post) => post.data.featured);
}

export async function getPostsByCategory(slug: string): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts.filter((post) => post.data.category === slug);
}

export function readingTime(body: string): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
