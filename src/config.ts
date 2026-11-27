// Single place for links, contact details and photos used across the site.
// Anything left as an empty string is hidden rather than rendered broken.
// Visible copy (both languages) lives in src/i18n.ts.

export const site = {
  name: 'The Common Thread',
  city: 'Barcelona',
};

export const luma = {
  // Public calendar page, e.g. https://luma.com/thecommonthread
  calendarUrl: 'https://luma.com/thecommonthread',
  // Calendar ID from Luma → Calendar → Settings → Embed
  calendarId: 'cal-y8ergaqNQm9K33Z',
};

// The event to promote across the site (place card, banner, header button).
// Leave url empty when nothing is scheduled; the site then invites people to
// follow on Luma. It also disappears once the date has passed (daily rebuild).
// After an event, add it to src/data/past.ts for the archive.
export const nextEvent = {
  url: '', // e.g. 'https://luma.com/abc123'
  date: '', // YYYY-MM-DD, Barcelona time
  title: '', // event name as it appears on Luma
  time: '', // e.g. '20:30'
  location: '', // e.g. 'Gràcia' (keep vague if the venue is revealed later)
  price: '', // e.g. '€65'
};

export const contact = {
  email: '', // TODO: e.g. hello@thecommonthreadclub.com
  instagram: 'https://www.instagram.com/thecommonthreadclub/',
};

// Press coverage, newest first. Leave url empty if there's no link yet.
export const press = [
  {
    outlet: 'ELLE',
    title: "Where to celebrate New Year's Eve in Barcelona: 8 hotel restaurants for all tastes and budgets",
    url: '', // TODO: link to the elle.com article
  },
  {
    outlet: 'Bulevard',
    title: 'NYE Glam Cabaret en Borneta: arte, música y performance para dar la bienvenida a 2026',
    url: 'https://bulevard.es/nye-glam-cabaret-en-borneta-arte-musica-y-performance-para-dar-la-bienvenida-a-2026/',
  },
  {
    outlet: 'Breakfast Included',
    title: 'Finding Belonging at Dinner Parties: The Common Thread Club in Barcelona',
    url: 'https://www.breakfastincluded.co/branded/finding-belonging-at-dinner-parties-the-common-thread-club-in-barcelona',
  },
];
