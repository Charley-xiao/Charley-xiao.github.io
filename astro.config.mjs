import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Charley-xiao.github.io',
  base: '/',
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { strict: 'ignore', throwOnError: false }]]
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
