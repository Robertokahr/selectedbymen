export const site = {
  name: 'Selected by Men',
  shortName: 'SBM',
  url: 'https://selectedbymen.com',
  description:
    'Practical product recommendations for men who value quality, style, and smart buying decisions. Honest comparisons and Amazon picks for grooming, style, tech, fitness, home, and everyday life.',
  tagline: 'Buy fewer things. Own better ones.',
  email: 'contact@selectedbymen.com',
  locale: 'en_US',
  author: 'Selected by Men',
  amazonTag: 'selectedbymen-20',
  socials: {
    instagram: 'https://www.instagram.com/selectedbymen',
    x: 'https://x.com/selectedbymen',
    pinterest: 'https://www.pinterest.com/selectedbymen',
  },
} as const;

export const nav = [
  { href: '/blog/', label: 'Recommendations' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
] as const;
