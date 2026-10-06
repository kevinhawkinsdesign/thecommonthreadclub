// Single place for links and contact details used across the site.
// Anything left as an empty string is hidden rather than rendered broken.

export const site = {
  name: 'The Common Thread',
  tagline: 'Half dinner party, half speakeasy, 100% fun.',
  description:
    'A Barcelona supper club and community for curious locals, expats and travellers who crave connection over great food and wine.',
  city: 'Barcelona',
};

export const luma = {
  // Public calendar page, e.g. https://luma.com/thecommonthread
  calendarUrl: '', // TODO: add Luma calendar URL
  // Calendar ID from Luma → Calendar → Settings → Embed (looks like "cal-XXXXXXXX")
  calendarId: '', // TODO: add Luma calendar ID to embed upcoming events
};

// The event to promote across the site (hero, banner, header button).
// It disappears automatically once the date has passed (the site rebuilds daily).
export const nextEvent = {
  url: 'https://luma.com/thecommon-6hjp',
  date: '2026-11-26', // YYYY-MM-DD, Barcelona time
  title: '', // TODO: event name as it appears on Luma
  time: '', // e.g. '20:30'
  location: '', // e.g. 'Gràcia, Barcelona' (keep vague if the venue is revealed later)
  price: '', // e.g. '€65'
  blurb: '', // one or two sentences about the night
};

export const contact = {
  email: '', // TODO: e.g. hello@thecommonthreadclub.com
  instagram: '', // TODO: full Instagram URL
};

export const nav = [
  { href: 'events/', label: 'Events' },
  { href: 'about/', label: 'About' },
  { href: 'private-events/', label: 'Private events' },
];
