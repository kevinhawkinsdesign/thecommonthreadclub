// Culinary trips: the table on the road. Add dates or details as they're confirmed.
import type { ImageMetadata } from 'astro';
import bordeaux from '../assets/trips/bordeaux.jpg';
import oliveOil from '../assets/trips/olive-oil.jpg';
import yacht from '../assets/trips/yacht.jpg';

type Text = { en: string; es: string };

export interface Trip {
  title: Text;
  place: Text;
  summary: Text;
  image: ImageMetadata;
  imageAlt: Text;
}

export const trips: Trip[] = [
  {
    title: { en: 'Dinner at a Bordeaux château', es: 'Cena en un château de Burdeos' },
    place: { en: 'Bordeaux, France', es: 'Burdeos, Francia' },
    summary: {
      en: 'Eighteen of us around one long table in the grounds of a château, dinner served outdoors as the sun went down.',
      es: 'Dieciocho personas alrededor de una mesa larga en los jardines de un château, cenando al aire libre mientras se ponía el sol.',
    },
    image: bordeaux,
    imageAlt: {
      en: 'Guests eating at a long table with a magenta cloth under the trees at sunset',
      es: 'Invitados cenando en una mesa larga con mantel magenta bajo los árboles al atardecer',
    },
  },
  {
    title: { en: 'Olive oil tasting', es: 'Cata de aceite de oliva' },
    place: { en: 'Logothetis Farm, Greece', es: 'Logothetis Farm, Grecia' },
    summary: {
      en: 'Stone-milled, cold-pressed olive oils tasted side by side on a terrace looking out to the sea.',
      es: 'Aceites molidos en piedra y prensados en frío, catados uno al lado del otro en una terraza frente al mar.',
    },
    image: oliveOil,
    imageAlt: {
      en: 'Kevin laughing at an olive oil tasting with the sea behind',
      es: 'Kevin riendo en una cata de aceite con el mar de fondo',
    },
  },
  {
    title: { en: 'A day on the water', es: 'Un día en el mar' },
    place: { en: 'At sea', es: 'En el mar' },
    summary: {
      en: 'The table moved on board for a day at sea.',
      es: 'La mesa se subió a bordo para pasar un día en el mar.',
    },
    image: yacht,
    imageAlt: {
      en: 'An expedition yacht anchored beneath limestone cliffs',
      es: 'Un yate de expedición fondeado bajo acantilados de piedra caliza',
    },
  },
];
