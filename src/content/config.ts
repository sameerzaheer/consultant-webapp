import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    clientUrl: z.string().url().optional(),
    role: z.string(),
    problem: z.string(),
    approach: z.string(),
    outcome: z.string(),
    techStack: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number(),
    heroMetric: z.string(),
    category: z.enum(['consulting', 'foundry']),
    platform: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { caseStudies, blog };
