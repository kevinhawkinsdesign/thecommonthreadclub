// Photos from past nights. The home page shows the first `homeCount`;
// the events page shows the rest. Reorder freely.
import type { ImageMetadata } from 'astro';
import group from '../assets/moments/group.jpg';
import celloRoom from '../assets/moments/cello-room.jpg';
import candlelit from '../assets/moments/candlelit-dinner.jpg';
import chef from '../assets/moments/chef.jpg';
import seastar from '../assets/moments/seastar-priorat.jpg';
import kimono from '../assets/moments/kimono-toast.jpg';
import tacos from '../assets/moments/tacos.jpg';
import hostSpeaking from '../assets/moments/host-speaking.jpg';
import chips from '../assets/moments/chips.jpg';
import longTable from '../assets/moments/long-table.jpg';
import guitar from '../assets/moments/guitar.jpg';
import friends from '../assets/moments/friends.jpg';
import arrivals from '../assets/moments/arrivals.jpg';
import casino from '../assets/moments/casino-table.jpg';
import candleRoom from '../assets/moments/candle-room.jpg';
import papelPicado from '../assets/moments/papel-picado.jpg';
import polaroids from '../assets/moments/polaroids.jpg';
import firstDinner from '../assets/moments/first-dinner.jpg';
import sommelier from '../assets/moments/sommelier.jpg';
import galleryCello from '../assets/moments/gallery-cello.jpg';
import selfie from '../assets/moments/selfie.jpg';
import teamEvent from '../assets/private/team-event.jpg';
import service from '../assets/private/service.jpg';

type Text = { en: string; es: string };
export interface Moment {
  src: ImageMetadata;
  caption: Text;
  alt: Text;
}

const m = (src: ImageMetadata, caption: Text, alt: Text): Moment => ({ src, caption, alt });

export const moments: Moment[] = [
  m(group, { en: 'The table, all together', es: 'La mesa, todos juntos' }, { en: 'Guests and Kevin smiling together in front of the projected logo', es: 'Invitados y Kevin sonriendo juntos delante del logo proyectado' }),
  m(celloRoom, { en: 'Cello under a painted ceiling', es: 'Violonchelo bajo un techo pintado' }, { en: 'A cellist playing for guests in a room with a painted ceiling and a disco ball', es: 'Una violonchelista tocando para los invitados en una sala con techo pintado y bola de discoteca' }),
  m(candlelit, { en: 'Lamplight and a long table', es: 'Lámparas y una mesa larga' }, { en: 'Guests talking along a long table lit by small lamps', es: 'Invitados charlando a lo largo de una mesa larga iluminada con lamparitas' }),
  m(chef, { en: 'Plating in the kitchen', es: 'Emplatando en la cocina' }, { en: 'A chef plating salmon bites on silver trays', es: 'Una chef emplatando bocados de salmón en bandejas de plata' }),
  m(seastar, { en: 'A Priorat aged under the sea', es: 'Un Priorat envejecido bajo el mar' }, { en: 'A glass of red beside a Seastar 2019 Priorat bottle encrusted from the sea floor', es: 'Una copa de tinto junto a una botella de Priorat Seastar 2019 cubierta de restos marinos' }),
  m(kimono, { en: 'Kimonos and a toast', es: 'Kimonos y un brindis' }, { en: 'Guests in kimonos raising glasses by candlelight', es: 'Invitados con kimonos alzando las copas a la luz de las velas' }),
  m(tacos, { en: 'Taco night', es: 'Noche de tacos' }, { en: 'A plate of tacos on a terracotta-tiled counter', es: 'Un plato de tacos sobre una barra de baldosas de barro' }),
  m(hostSpeaking, { en: 'A word from the host', es: 'Unas palabras del anfitrión' }, { en: 'Kevin speaking to guests gathered around a candlelit table', es: 'Kevin hablando a los invitados reunidos alrededor de una mesa con velas' }),
  m(chips, { en: 'Placing bets', es: 'Haciendo apuestas' }, { en: 'Two guests posing with casino chips', es: 'Dos invitados posando con fichas de casino' }),
  m(longTable, { en: 'Set for the evening', es: 'Preparada para la noche' }, { en: 'A long candlelit table set with autumn fruit and flowers', es: 'Una mesa larga con velas, fruta de otoño y flores' }),
  m(guitar, { en: 'A classical guitar recital', es: 'Un recital de guitarra clásica' }, { en: 'A guitarist in a blue jacket playing for a seated audience', es: 'Un guitarrista con chaqueta azul tocando para el público sentado' }),
  m(friends, { en: 'Friends made at the table', es: 'Amigos hechos en la mesa' }, { en: 'Three friends smiling in front of the projected logo', es: 'Tres amigas sonriendo delante del logo proyectado' }),
  m(arrivals, { en: 'Arrivals', es: 'Llegadas' }, { en: 'Guests greeting each other at an open doorway', es: 'Invitados saludándose en una puerta abierta' }),
  m(casino, { en: 'Wine casino night', es: 'Noche de casino y vino' }, { en: 'Wine glasses on a casino-style tasting cloth under the projected logo', es: 'Copas de vino sobre un tapete de casino bajo el logo proyectado' }),
  m(candleRoom, { en: 'By candlelight', es: 'A la luz de las velas' }, { en: 'A candlelit room with a painted ceiling and a disco ball', es: 'Una sala a la luz de las velas con techo pintado y bola de discoteca' }),
  m(papelPicado, { en: 'Papel picado and paper tablecloths', es: 'Papel picado y manteles de papel' }, { en: 'Guests along a candlelit table under colourful papel picado', es: 'Invitados a lo largo de una mesa con velas bajo papel picado de colores' }),
  m(polaroids, { en: 'Polaroids from the casino table', es: 'Polaroids de la mesa de casino' }, { en: 'Polaroids and chips on the casino tasting cloth', es: 'Polaroids y fichas sobre el tapete de cata' }),
  m(firstDinner, { en: 'The very first dinner', es: 'La primerísima cena' }, { en: 'Black and white photo of the first dinner table, with a guest’s note about the evening', es: 'Foto en blanco y negro de la mesa de la primera cena, con una nota de una invitada' }),
  m(sommelier, { en: 'Kevin and our sommelier', es: 'Kevin y nuestra sumiller' }, { en: 'Kevin and the sommelier behind a set casino tasting table', es: 'Kevin y la sumiller junto a una mesa de cata preparada' }),
  m(galleryCello, { en: 'Cello at a gallery opening', es: 'Violonchelo en una inauguración' }, { en: 'A cellist playing to a crowd in a white-walled gallery', es: 'Una violonchelista tocando ante el público en una galería de paredes blancas' }),
  m(selfie, { en: 'Kevin and friends', es: 'Kevin y amigos' }, { en: 'Kevin taking a selfie with smiling guests in a long hallway', es: 'Kevin haciéndose un selfie con invitados sonrientes en un pasillo largo' }),
];

export const homeCount = 12;

// Alt text for one of the photos above, in the given language.
export const altFor = (src: ImageMetadata, lang: 'en' | 'es') =>
  moments.find((m) => m.src === src)?.alt[lang] ?? '';

export const privateMoments: Moment[] = [
  m(teamEvent, { en: 'Catering a company event', es: 'Catering para un evento de empresa' }, { en: 'Kevin in an apron posing with guests and a tray of bites in front of an event backdrop', es: 'Kevin con delantal posando con invitados y una bandeja de bocados delante de un photocall' }),
  m(service, { en: 'Bites, passed by hand', es: 'Bocados servidos a mano' }, { en: 'A server smiling as she offers a tray with a single bite', es: 'Una camarera sonriendo mientras ofrece una bandeja con un bocado' }),
];
