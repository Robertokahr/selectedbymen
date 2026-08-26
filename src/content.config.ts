import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categoryIds } from './data/categories';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.string(),
      heroAlt: z.string(),
      category: z.enum(categoryIds),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      author: z.string().default('Selected by Men'),
      products: z
        .array(
          z.object({
            id: z.string().min(1),
            name: z.string(),
            description: z.string(),
            image: z.string(),
            url: z.string().url(),
            price: z.string().optional(),
            rating: z.number().min(0).max(5).optional(),
            badge: z.string().optional(),
          }),
        )
        .default([]),
    }),
});

export const collections = { posts };
