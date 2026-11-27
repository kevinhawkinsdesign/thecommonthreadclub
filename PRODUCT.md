# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro static site, hosted on GitHub Pages (deployed by GitHub Actions on push to `main`, rebuilt daily). Ticketing and RSVPs live on Luma; the site links out to Luma events and embeds the Luma calendar rather than selling tickets itself.

## Users

- **Barcelona locals** who want a more interesting social life: new people, good food and wine, a night that isn't another bar or restaurant booking. They are deciding whether a given night is worth their evening and money.
- **Regulars and the wider community**: past guests coming back to see what's next and book again. The site keeps them close to the club between events.

Expats, new arrivals and travellers also come, but they are not the primary audience the site is designed around.

## Product Purpose

The Common Thread is a Barcelona supper club and events company: supper clubs, wine tastings and pop-ups built around food, wine and connection. The website is the club's home online: it tells the story, shows the nights that have already happened, and builds a following (Luma calendar subscribers, Instagram) between events. When an event is scheduled it is promoted first; when none is, the site invites people to follow on Luma. Success is a growing following, past guests returning, and seats filled whenever a date goes up.

## Positioning

- **Personally hosted.** Founder Kevin Hawkins hosts. It started as dinners at his own table after he moved to Barcelona from Amsterdam, and it still carries a host's personal hospitality rather than a platform's matching algorithm (contrast Timeleft, Eatwith).
- **Serious about food and wine.** The cooking and the pours are a reason to come in their own right, not a pretext for a mixer.

## Operating Context

- Each event is one night only with limited seats; tickets go through Luma (calendar: `https://luma.com/thecommonthread`).
- Often there is no next event scheduled. The optional next event lives in `src/config.ts` (`nextEvent`); past events live in `src/data/past.ts`.
- Private dinners, team socials and brand/venue collaborations are a secondary enquiry path.

## Capabilities and Constraints

- Static site only; no backend, accounts or payments on the site.
- **Languages: English and Spanish.** The full site must be bilingual. Not yet implemented.
- Open / undecided: contact email; the brand line pattern file (not yet in the repository).

## Brand Commitments

- Name: **The Common Thread** (domain thecommonthreadclub.com).
- Established line: "Half dinner party, half speakeasy, 100% fun."
- Logo (stacked, in `public/brand/`), palette FFFCF5 / 330428 / 53582F / E49806 / D9B899 / B94514, and the organic line pattern are binding. Brand fonts Romans Story and P22 Underground are replaced permanently by Bodoni Moda and Jost.
- Instagram: @thecommonthreadclub (as listed on the club's Luma calendar).
- Founder's own story copy (the previous site's About page) is the source for the story page.

## Evidence on Hand

- Event photography and the first-dinner reel from the previous site, in `src/assets/photos/` and `public/video/`; originals in `brand/photos/`. See `brand/SOURCES.md`.
- Past events with facts from their Luma pages (`src/data/past.ts`).
- Press: Breakfast Included travel blog feature, "Finding Belonging at Dinner Parties: The Common Thread Club in Barcelona".
- No testimonials, guest numbers, ratings or partner logos are on hand. Do not invent them.

## Product Principles

1. **Always show the way in.** The next event when there is one; otherwise, follow on Luma and Instagram.
2. **It should feel like Kevin's table, not a platform.** Personal, warm, hosted; never generic marketplace or app UI.
3. **Show the food, the wine and the people.** Real photography and real details carry the persuasion; no stock imagery or invented proof.
4. **Make the regulars feel at home.** Returning guests should recognise the club and find what's new fast.
