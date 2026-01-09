import { defineCollection, z } from 'astro:content';

const worksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

const blogsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  works: worksCollection,
  blogs: blogsCollection,
};
