// Single place for links, contact details and photos used across the site.
// Anything left as an empty string is hidden rather than rendered broken.
// Visible copy (both languages) lives in src/i18n.ts.

export const site = {
  name: 'The Common Thread',
  city: 'Barcelona',
};

export const luma = {
  // Public calendar page, e.g. https://luma.com/thecommonthread
  calendarUrl: '', // TODO: add Luma calendar URL
  // Calendar ID from Luma → Calendar → Settings → Embed (looks like "cal-XXXXXXXX")
  calendarId: '', // TODO: add Luma calendar ID to embed upcoming events
};

// The event to promote across the site (place card, banner, header button).
// It disappears automatically once the date has passed (the site rebuilds daily).
export const nextEvent = {
  url: 'https://luma.com/thecommon-6hjp',
  date: '2026-11-26', // YYYY-MM-DD, Barcelona time
  title: '', // TODO: event name as it appears on Luma
  time: '', // e.g. '20:30'
  location: '', // e.g. 'Gràcia' (keep vague if the venue is revealed later)
  price: '', // e.g. '€65'
};

export const contact = {
  email: '', // TODO: e.g. hello@thecommonthreadclub.com
  instagram: '', // TODO: full Instagram URL
};

// Photos shown on the "plates". Put files in public/photos/ and set the file
// name here (e.g. 'aperitivo.jpg'). Empty slots show an empty plate.
export const photos = {
  aperitivo: '',
  mesa: '',
  sobretaula: '',
  host: '',
  story: '',
};
