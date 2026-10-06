// @ts-check
import { defineConfig } from 'astro/config';

// SITE and BASE_PATH are injected by the GitHub Pages workflow.
// With a custom domain BASE_PATH is "/"; on <user>.github.io/<repo> it's "/<repo>".
export default defineConfig({
  site: process.env.SITE || 'https://www.thecommonthreadclub.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
