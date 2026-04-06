import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const commonSchema = z.object({
  title: z.string(),
  year: z.number(),
  summary: z.string(),
  role: z.string().optional(),
  organization: z.string().optional(),
  dateRange: z.string().optional(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  teaser: z.string(),
  reportUrl: z.string().default(''),
  repoUrl: z.string().default(''),
  paperUrl: z.string().default(''),
  demoUrl: z.string().default(''),
  posterUrl: z.string().default(''),
  order: z.number().default(0)
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: commonSchema
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: commonSchema
});

const blogs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blogs' }),
  schema: commonSchema
});

export const collections = {
  research,
  projects,
  blogs
};
