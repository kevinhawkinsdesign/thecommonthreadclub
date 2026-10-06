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

export const contact = {
  email: '', // TODO: e.g. hello@thecommonthreadclub.com
  instagram: '', // TODO: full Instagram URL
};

export const nav = [
  { href: 'events/', label: 'Events' },
  { href: 'about/', label: 'About' },
  { href: 'private-events/', label: 'Private events' },
];
