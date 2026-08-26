export const categoryIds = [
  'grooming',
  'style',
  'tech',
  'fitness',
  'home',
  'everyday',
] as const;

export type CategoryId = (typeof categoryIds)[number];

export interface Category {
  slug: CategoryId;
  title: string;
  short: string;
  description: string;
  number: string;
}

export const categories: Category[] = [
  {
    slug: 'grooming',
    title: 'Grooming',
    short: 'Skin, shave, scent',
    description:
      'Routines and tools that keep you looking sharp without a 12-step ritual.',
    number: '01',
  },
  {
    slug: 'style',
    title: 'Style',
    short: 'Clothes that last',
    description:
      'Wardrobe building blocks: fit, fabric, and pieces worth buying twice.',
    number: '02',
  },
  {
    slug: 'tech',
    title: 'Tech',
    short: 'Tools, not toys',
    description:
      'Gadgets that earn a place on your desk or in your bag — and stay there.',
    number: '03',
  },
  {
    slug: 'fitness',
    title: 'Fitness',
    short: 'Train at home',
    description:
      'Gear you will actually use: simple, durable, no unused subscription required.',
    number: '04',
  },
  {
    slug: 'home',
    title: 'Home',
    short: 'A better room',
    description:
      'Furniture, lighting, and objects that make a space feel finished.',
    number: '05',
  },
  {
    slug: 'everyday',
    title: 'Everyday',
    short: 'Daily carry',
    description:
      'Wallets, bags, kitchen tools, and the small things you reach for daily.',
    number: '06',
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
