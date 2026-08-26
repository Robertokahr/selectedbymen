import type { CategoryId } from './categories';

export function categoryImageSrc(slug: CategoryId | string): string {
  return `/categories/${slug}.jpg`;
}
