export const site = {
  name: 'Selected by Men',
  shortName: 'SBM',
  url: 'https://selectedbymen.com',
  description:
    'Honest product recommendations for men: grooming routines, capsule wardrobes, everyday carry tech, and Amazon picks for style, fitness, home, and daily life.',
  homeTitle: 'Product recommendations for men',
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
  { href: '/standards/', label: 'Standards' },
  { href: '/contact/', label: 'Contact' },
] as const;

export const footerExplore = [
  { href: '/blog/', label: 'All recommendations' },
  { href: '/about/', label: 'About' },
  { href: '/standards/', label: 'Standards' },
  { href: '/contact/', label: 'Contact' },
  { href: '/rss.xml', label: 'RSS' },
] as const;

export const footerLegal = [
  { href: '/how-we-make-money/', label: 'How we make money' },
  { href: '/privacy/', label: 'Privacy' },
  { href: '/terms/', label: 'Terms' },
] as const;
