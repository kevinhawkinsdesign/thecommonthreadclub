// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE and BASE_PATH are injected by the GitHub Pages workflow.
// With a custom domain BASE_PATH is "/"; on <user>.github.io/<repo> it's "/<repo>".
export default defineConfig({
  site: process.env.SITE || 'https://www.thecommonthreadclub.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  // Old URLs: events became the calendar, private dinners became memories.
  // Destinations include the base path; Astro doesn't add it to redirects.
  redirects: Object.fromEntries(
    [
      ['/events', 'calendar'],
      ['/es/eventos', 'es/calendario'],
      ['/private-events', 'memories'],
      ['/es/eventos-privados', 'es/recuerdos'],
    ].map(([from, to]) => [from, `${(process.env.BASE_PATH || '/').replace(/\/$/, '')}/${to}/`]),
  ),
  integrations: [sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en-GB', es: 'es-ES', ca: 'ca-ES' } } })],
});
