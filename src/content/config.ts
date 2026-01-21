import { defineCollection, z } from 'astro:content';

const worksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    showToc: z.boolean().optional().default(false), // 目次を表示するか
    tocPosition: z.enum(['before-title', 'after-title', 'after-image', 'before-content', 'before-first-h2']).optional().default('after-title'), // 目次の表示位置
  }),
});

const blogsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    showToc: z.boolean().optional().default(false), // 目次を表示するか
    tocPosition: z.enum(['before-title', 'after-title', 'after-image', 'before-content', 'before-first-h2']).optional().default('after-title'), // 目次の表示位置
  }),
});

export const collections = {
  works: worksCollection,
  blogs: blogsCollection,
};
