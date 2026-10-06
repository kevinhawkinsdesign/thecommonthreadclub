# The Common Thread

Website for [The Common Thread](https://www.thecommonthreadclub.com), a supper club in Barcelona.
Built with [Astro](https://astro.build) and hosted on GitHub Pages. Tickets are sold on Luma.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Editing content

- **Next event to promote:** `nextEvent` in `src/config.ts`. It shows in the top banner, header button, home hero and events page, and drops off automatically after its date (the site rebuilds daily).
- **Links, Luma calendar, email, Instagram:** `src/config.ts`. Empty values are hidden on the site.
- **Pages:** `src/pages/` (`index`, `events`, `about`, `private-events`, `404`).
- **Colours and type:** CSS variables at the top of `src/styles/global.css`.

Upcoming events come straight from the Luma calendar embed (`src/components/LumaEvents.astro`),
so there's nothing to update here when a new event goes live. Set `luma.calendarId`
(Luma → your calendar → Settings → Embed, looks like `cal-…`) to show the embed.

## Deploy

Every push to `main` builds and deploys through `.github/workflows/deploy.yml`.

One-time setup:
1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. For the custom domain, enter `www.thecommonthreadclub.com` under **Settings → Pages → Custom domain**
   and point DNS at GitHub Pages (a `CNAME` record for `www` → `kevinhawkinsdesign.github.io`).
