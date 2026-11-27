// Past events, newest first. Facts come from each event's Luma page.
// An event only shows in the archive once its date has passed.
import type { ImageMetadata } from 'astro';
import summer from '../assets/past/summer-2024.jpg';
import casino from '../assets/past/casino-2024.jpg';
import datemapper from '../assets/past/datemapper-2025.jpg';
import juneteenth from '../assets/past/juneteenth-2026.jpg';
import thanksgiving from '../assets/past/thanksgiving-2026.jpg';
import glamCabaret from '../assets/past/nye-glam-cabaret-2025.jpg';

type Text = { en: string; es: string };

export interface PastEvent {
  date: string; // YYYY-MM-DD
  title: Text;
  kind: Text;
  place: Text;
  with?: string; // partners and guest hosts
  summary: Text;
  image: ImageMetadata;
  imageAlt: Text;
  url: string; // the event's Luma page, or coverage when it had none
}

export const pastEvents: PastEvent[] = [
  {
    date: '2026-11-27',
    title: { en: 'Thanksgiving Dinner Party', es: 'Cena de Acción de Gracias' },
    kind: { en: 'Supper club', es: 'Supper club' },
    place: { en: 'Barcelona', es: 'Barcelona' },
    summary: {
      en: 'Five courses of U.S. and Canadian comfort food: roast turkey, glazed ham, mac and cheese, plenty of cranberries and homemade pumpkin pie, with cocktails all night and a few performances between bites.',
      es: 'Cinco platos de comida casera de Estados Unidos y Canadá: pavo asado, jamón glaseado, macarrones con queso, arándanos y tarta de calabaza casera, con cócteles toda la noche y alguna actuación entre plato y plato.',
    },
    image: thanksgiving,
    imageAlt: { en: 'Candles in wine bottles on a long table in an old industrial space', es: 'Velas en botellas de vino sobre una mesa larga en un antiguo espacio industrial' },
    url: 'https://luma.com/thecommon-6hjp',
  },
  {
    date: '2026-06-20',
    title: { en: 'Juneteenth Barcelona', es: 'Juneteenth Barcelona' },
    kind: { en: 'Community celebration', es: 'Celebración comunitaria' },
    place: { en: 'Poblenou, Sant Martí', es: 'Poblenou, Sant Martí' },
    with: 'Juneteenth.es',
    summary: {
      en: 'A sold-out day and night of culture, community and connection: an international food fair, local makers, live music, comedy and DJs until two in the morning.',
      es: 'Un día y una noche con las entradas agotadas para celebrar la cultura, la comunidad y los encuentros: feria gastronómica internacional, artesanos locales, música en directo, comedia y DJs hasta las dos de la madrugada.',
    },
    image: juneteenth,
    imageAlt: { en: 'Juneteenth Barcelona poster', es: 'Cartel de Juneteenth Barcelona' },
    url: 'https://luma.com/juneteenthbcn',
  },
  {
    date: '2025-12-31',
    title: { en: 'NYE Glam Cabaret', es: 'Nochevieja Glam Cabaret' },
    kind: { en: 'Collaboration', es: 'Colaboración' },
    place: { en: 'Borneta, El Born', es: 'Borneta, El Born' },
    with: 'Borneta',
    summary: {
      en: 'New Year’s Eve from 8pm to late: contemporary Italian food, craft cocktails and live performances from Barry Brandon, Tina Masawi and Bellini Boy, then the twelve grapes and fireworks on the rooftop terrace at midnight.',
      es: 'Nochevieja desde las 20h hasta tarde: cocina italiana contemporánea, cócteles de autor y actuaciones en directo de Barry Brandon, Tina Masawi y Bellini Boy, y a medianoche las doce uvas y fuegos artificiales en la azotea.',
    },
    image: glamCabaret,
    imageAlt: { en: 'Glam Cabaret title card from the night', es: 'Cartel de Glam Cabaret de la noche' },
    url: 'https://bulevard.es/nye-glam-cabaret-en-borneta-arte-musica-y-performance-para-dar-la-bienvenida-a-2026/',
  },
  {
    date: '2025-01-08',
    title: { en: 'Speed Dating & Small Bites', es: 'Speed dating y bocados' },
    kind: { en: 'Collaboration', es: 'Colaboración' },
    place: { en: 'Micelio by Sasha, Eixample', es: 'Micelio by Sasha, Eixample' },
    with: 'DateMapper · Fenix Events',
    summary: {
      en: 'New year, new connections: a singles night with gluten-free bites from chef Veronique T. Charlotte, a welcome glass of cava, and a lounge after-party.',
      es: 'Año nuevo, gente nueva: una noche para solteros con bocados sin gluten de la chef Veronique T. Charlotte, una copa de cava de bienvenida y after-party.',
    },
    image: datemapper,
    imageAlt: { en: 'Speed dating event poster', es: 'Cartel del speed dating' },
    url: 'https://lu.ma/mwj5z700',
  },
  {
    date: '2024-08-30',
    title: { en: 'Wine Casino Night', es: 'Noche de casino y vino' },
    kind: { en: 'Wine tasting', es: 'Cata de vino' },
    place: { en: 'Kevin’s home, El Born', es: 'Casa de Kevin, El Born' },
    with: 'Sommelier Nastia Ryabokul',
    summary: {
      en: 'Around eight wines from all over the world, poured blind at a casino table: guess the bottle, place your bets, and learn something about wine along the way.',
      es: 'Unos ocho vinos de todo el mundo servidos a ciegas en una mesa de casino: adivina la botella, haz tu apuesta y aprende algo de vino por el camino.',
    },
    image: casino,
    imageAlt: {
      en: 'Guests around the casino tasting table as the sommelier reads the results',
      es: 'Invitados alrededor de la mesa de casino mientras la sumiller lee los resultados',
    },
    url: 'https://luma.com/fattkbmt',
  },
  {
    date: '2024-07-12',
    title: { en: 'Welcome to Summer Dinner', es: 'Cena de bienvenida al verano' },
    kind: { en: 'Supper club', es: 'Supper club' },
    place: { en: 'Kevin’s home, El Born', es: 'Casa de Kevin, El Born' },
    with: 'Marta Bocos · FoodxForms',
    summary: {
      en: 'A sold-out dinner by food designer Marta Bocos and Anita Cristiani, with a Priorat aged on the sea floor near Valencia. Dress code: whatever you’d like a photo in, plus cute socks.',
      es: 'Una cena con las entradas agotadas de la food designer Marta Bocos y Anita Cristiani, con un Priorat envejecido en el fondo del mar cerca de Valencia. Código de vestimenta: lo que te apetezca para la foto, y calcetines bonitos.',
    },
    image: summer,
    imageAlt: { en: 'The printed menu for the summer dinner', es: 'La carta impresa de la cena de verano' },
    url: 'https://luma.com/i6v41tyc',
  },
];

// Events whose date has passed, as of the build (Barcelona time).
export function archive() {
  const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Madrid' });
  return pastEvents.filter((e) => e.date < today);
}
