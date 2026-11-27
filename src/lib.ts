import fs from 'node:fs';
import path from 'node:path';
import { luma, nextEvent } from './config';
import { languages, routes, t, type Lang, type RouteKey } from './i18n';

// Prefix internal paths with the configured base so links work on
// both a custom domain and <user>.github.io/<repo>.
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const href = (key: RouteKey, lang: Lang) => url(routes[key][lang]);

// The same page in every language (current one included), falling back to
// each language's home page when the page has no translation.
export function alternates(pathname: string, lang: Lang) {
  const rel = pathname.replace(import.meta.env.BASE_URL.replace(/\/$/, ''), '').replace(/^\//, '');
  const key = (Object.keys(routes) as RouteKey[]).find((k) => routes[k][lang] === rel);
  return languages.map((l) => ({ lang: l, href: href(key ?? 'home', l), current: l === lang }));
}

// Brand files and photos are optional at build time: components fall back
// gracefully until they're added to public/.
const exists = (rel: string) => fs.existsSync(path.join(process.cwd(), 'public', rel));
export const asset = (rel: string) => (exists(rel) ? url(rel) : null);

// The promoted event, or null once its date has passed. Evaluated at build
// time; the deploy workflow rebuilds daily so it drops off on its own.
export function upcomingEvent(lang: Lang) {
  if (!nextEvent.url || !nextEvent.date) return null;
  const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Madrid' });
  if (nextEvent.date < today) return null;

  const d = new Date(`${nextEvent.date}T12:00:00Z`);
  const fmt = (o: Intl.DateTimeFormatOptions) => d.toLocaleDateString(t[lang].locale, { timeZone: 'UTC', ...o });
  return {
    ...nextEvent,
    title: nextEvent.title || t[lang].card.untitled,
    weekday: fmt({ weekday: 'long' }),
    day: fmt({ day: 'numeric' }),
    month: fmt({ month: 'long' }),
    longDate: fmt({ weekday: 'long', day: 'numeric', month: 'long' }),
  };
}

// Where the main call to action goes: the next event, or the Luma calendar.
export const bookingHref = (lang: Lang) => upcomingEvent(lang)?.url || luma.calendarUrl || href('events', lang);

export const formatDate = (iso: string, lang: Lang, o: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(t[lang].locale, { timeZone: 'UTC', ...o });

