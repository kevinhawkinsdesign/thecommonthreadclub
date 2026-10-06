import { nextEvent } from './config';

// Prefix internal paths with the configured base so links work on
// both a custom domain and <user>.github.io/<repo>.
export const url = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

// The promoted event, or null once its date has passed. Evaluated at build
// time; the deploy workflow rebuilds daily so it drops off on its own.
export function upcomingEvent() {
  if (!nextEvent.url || !nextEvent.date) return null;
  const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Madrid' });
  if (nextEvent.date < today) return null;

  const d = new Date(`${nextEvent.date}T12:00:00Z`);
  const fmt = (o: Intl.DateTimeFormatOptions) => d.toLocaleDateString('en-GB', { timeZone: 'UTC', ...o });
  return {
    ...nextEvent,
    title: nextEvent.title || 'Our next supper club',
    weekday: fmt({ weekday: 'long' }),
    weekdayShort: fmt({ weekday: 'short' }),
    day: fmt({ day: 'numeric' }),
    month: fmt({ month: 'long' }),
    monthShort: fmt({ month: 'short' }),
    longDate: fmt({ weekday: 'long', day: 'numeric', month: 'long' }),
  };
}
