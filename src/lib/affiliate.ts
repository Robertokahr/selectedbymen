import { site } from '../data/site';

const ASIN = /\/(?:dp|gp\/product)\/([A-Z0-9]{10})/i;

export function productUrl(url: string): string {
  try {
    const parsed = new URL(url);
    const match = parsed.pathname.match(ASIN);
    const href = match
      ? new URL(`https://www.amazon.com/dp/${match[1]}`)
      : parsed;
    if (site.amazonTag && href.hostname.includes('amazon.')) {
      href.searchParams.set('tag', site.amazonTag);
    }
    return href.toString();
  } catch {
    return url;
  }
}
