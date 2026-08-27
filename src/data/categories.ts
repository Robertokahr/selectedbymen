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
  seoTitle: string;
  short: string;
  description: string;
  number: string;
}

export const categories: Category[] = [
  {
    slug: 'grooming',
    title: 'Grooming',
    seoTitle: 'Grooming recommendations for men',
    short: 'Skin, shave, scent',
    description:
      'Safety razor shaves, simple skincare, and grooming tools for men — without a 12-step ritual.',
    number: '01',
  },
  {
    slug: 'style',
    title: 'Style',
    seoTitle: 'Capsule wardrobe and style for men',
    short: 'Clothes that last',
    description:
      'A capsule wardrobe for men: white sneakers, merino sweaters, leather belts, and pieces worth buying twice.',
    number: '02',
  },
  {
    slug: 'tech',
    title: 'Tech',
    seoTitle: 'Everyday carry tech for men',
    short: 'Tools, not toys',
    description:
      'Everyday carry tech for men: noise-canceling headphones, power banks, and a Kindle that earn a place in your bag.',
    number: '03',
  },
  {
    slug: 'fitness',
    title: 'Fitness',
    seoTitle: 'Fitness gear for men',
    short: 'Train at home',
    description:
      'Home gym gear for men you will actually use: simple, durable, no unused subscription required.',
    number: '04',
  },
  {
    slug: 'home',
    title: 'Home',
    seoTitle: 'Home essentials for men',
    short: 'A better room',
    description:
      'Furniture, lighting, and home essentials for men that make a space feel finished.',
    number: '05',
  },
  {
    slug: 'everyday',
    title: 'Everyday',
    seoTitle: 'Everyday carry for men',
    short: 'Daily carry',
    description:
      'Everyday carry for men: wallets, bags, kitchen tools, and the small things you reach for daily.',
    number: '06',
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
