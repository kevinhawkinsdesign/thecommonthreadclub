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

The Common Thread is a Barcelona supper club and events company: supper clubs, wine tastings and pop-ups built around food, wine and connection. The website exists to get people to book the next event (on Luma) and to make the club feel like something worth belonging to. Success is seats filled for the next event and past guests returning.

## Positioning

- **Personally hosted.** Founder Kevin Hawkins hosts. It started as dinners at his own table after he moved to Barcelona from Amsterdam, and it still carries a host's personal hospitality rather than a platform's matching algorithm (contrast Timeleft, Eatwith).
- **Serious about food and wine.** The cooking and the pours are a reason to come in their own right, not a pretext for a mixer.

## Operating Context

- Each event is one night only with limited seats; tickets go through Luma (`https://luma.com/thecommon-6hjp` is the next event, Thursday 26 November 2026).
- There is always a "next event" to promote; it is configured in `src/config.ts` (`nextEvent`) and drops off the site after its date.
- Private dinners, team socials and brand/venue collaborations are a secondary enquiry path.

## Capabilities and Constraints

- Static site only; no backend, accounts or payments on the site.
- **Languages: English and Spanish.** The full site must be bilingual. Not yet implemented.
- Open / undecided: Luma calendar URL and calendar ID, contact email, Instagram URL, and the next event's title, time, location, price and description.

## Brand Commitments

- Name: **The Common Thread** (domain thecommonthreadclub.com).
- Established line: "Half dinner party, half speakeasy, 100% fun."
- The club has an existing **logo, brand colours and fonts** that are binding. **Not yet in the repository**; to be supplied by the owner. Until then, the current site palette and typography are placeholders, not brand.

## Evidence on Hand

- **Event photography** from past dinners exists and will be supplied by the owner. Not yet in the repository.
- Press: Breakfast Included travel blog feature, "Finding Belonging at Dinner Parties: The Common Thread Club in Barcelona".
- No testimonials, guest numbers, ratings or partner logos are on hand. Do not invent them.

## Product Principles

1. **The next event comes first.** Every page should make it obvious what's next and how to book it.
2. **It should feel like Kevin's table, not a platform.** Personal, warm, hosted; never generic marketplace or app UI.
3. **Show the food, the wine and the people.** Real photography and real details carry the persuasion; no stock imagery or invented proof.
4. **Make the regulars feel at home.** Returning guests should recognise the club and find what's new fast.
