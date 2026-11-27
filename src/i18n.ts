// All visible copy in English and Spanish. Pages read from here so the two
// languages stay in step.

export const languages = ['en', 'es'] as const;
export type Lang = (typeof languages)[number];

// Page keys map to a slug per language.
export const routes = {
  home: { en: '', es: 'es/' },
  events: { en: 'events/', es: 'es/eventos/' },
  about: { en: 'about/', es: 'es/nosotros/' },
  private: { en: 'private-events/', es: 'es/eventos-privados/' },
} as const;
export type RouteKey = keyof typeof routes;

export const t = {
  en: {
    locale: 'en-GB',
    nav: { events: 'Events', about: 'Our story', private: 'Private dinners', book: 'Take a seat' },
    langSwitch: 'Español',
    skip: 'Skip to content',
    tagline: 'Half dinner party, half speakeasy, 100% fun.',
    description:
      'A supper club in Barcelona, hosted by Kevin Hawkins. Long tables, good food and wine, and a room full of people worth meeting.',
    card: {
      next: 'Next table',
      book: 'Take a seat',
      via: 'Booking on Luma · limited seats',
      noneTitle: 'The next table is being laid',
      noneBody: 'New dates go up on Luma first.',
      noneCta: 'See upcoming dates',
      untitled: 'Supper club',
    },
    banner: { next: 'Next table', cta: 'Take a seat' },
    home: {
      intro:
        'A Barcelona supper club for people who like their dinners long and their conversations better. Kevin hosts, the kitchen cooks properly, and the wine keeps coming.',
      courses: [
        {
          name: 'Aperitivo',
          body: 'Arrive, get a drink in your hand, meet the people you’ll be sitting with. Nobody stays a stranger for long.',
          plate: 'Aperitivo photo',
        },
        {
          name: 'La mesa',
          body: 'One long table, food cooked with care and wine chosen to go with it.',
          plate: 'Dinner photo',
        },
        {
          name: 'Sobretaula',
          body: 'The Catalan word for staying at the table after the plates are cleared. It’s our favourite part of the night.',
          plate: 'Late-night photo',
        },
      ],
      hostTitle: 'Your host',
      hostBody: [
        'The Common Thread started at Kevin Hawkins’ own dinner table. When he moved to Barcelona from Amsterdam, cooking for people was how he made the city feel like home.',
        'Friends brought friends, and the table kept getting longer. Kevin is still the one hosting.',
      ],
      hostLink: 'Read the story',
      hostPlate: 'Portrait of Kevin',
      regularsTitle: 'Coming back?',
      regularsBody:
        'Regulars hear about new dates first on Luma. Bring someone new next time; that’s how the table grows.',
      regularsCta: 'See upcoming dates',
      faqTitle: 'Before you book',
      faqs: [
        {
          q: 'Can I come on my own?',
          a: 'Yes, and plenty of people do. It’s one shared table, so you’ll be talking to someone before the first glass is finished.',
        },
        {
          q: 'How do I book?',
          a: 'Every event is booked on Luma. Seats are limited, so follow our calendar to hear about new dates first.',
        },
        {
          q: 'What about allergies or dietary needs?',
          a: 'Tell us when you book. Details for each dinner are on its Luma page.',
        },
        {
          q: 'Can I book the whole table?',
          a: 'Yes. We host private dinners, team nights and collaborations.',
        },
      ],
      privateTitle: 'Your own table',
      privateBody: 'Birthdays, team nights, a brand dinner: the same evening, just for your people.',
      privateCta: 'Private dinners',
    },
    events: {
      title: 'Upcoming tables',
      intro: 'Every event is one night only and seats are limited. Tickets are sold on Luma.',
      formatsTitle: 'What we host',
      formats: [
        { name: 'Supper clubs', body: 'Long-table dinners where the guest list is half the fun.' },
        { name: 'Wine tastings', body: 'Relaxed, guided tastings with pours worth talking about.' },
        { name: 'Pop-ups', body: 'One-night-only collaborations with chefs and venues around the city.' },
      ],
      calendar: 'Full calendar on Luma',
    },
    about: {
      title: 'Our story',
      lede: 'It started around one dinner table in Barcelona.',
      body: [
        'When Kevin Hawkins moved to Barcelona from Amsterdam, he did what came naturally: he cooked for people. Dinners at his own table became the way he built a sense of home in a new city.',
        'Word spread. Friends brought friends, and friends of friends brought people they’d met that week. Those dinners grew into The Common Thread: supper clubs, wine tastings and pop-ups across Barcelona.',
        'The idea hasn’t changed. A night that’s been thought about properly, food and wine worth coming for, and a table full of people who are glad they came.',
      ],
      plate: 'Photo from an early dinner',
      cta: 'Join us at the next table',
    },
    private: {
      title: 'Private dinners',
      lede: 'The same long table, just for your people.',
      offers: [
        { name: 'Celebrations', body: 'Birthdays, anniversaries, or a table of friends who deserve a proper night.' },
        { name: 'Team nights', body: 'An evening that gets colleagues talking, for offsites and teams visiting Barcelona.' },
        { name: 'Collaborations', body: 'Co-hosted dinners with restaurants, wineries and brands.' },
      ],
      askTitle: 'Tell us what you have in mind',
      askBody: 'A rough date, how many guests and what you’re celebrating is all we need to start.',
      email: 'Email us',
      soon: 'Contact details coming soon.',
    },
    notFound: { title: 'This seat is empty', body: 'The page you’re looking for isn’t here, but dinner is still on.', cta: 'Back to the table' },
    footer: { calendar: 'Luma calendar', instagram: 'Instagram' },
  },
  es: {
    locale: 'es-ES',
    nav: { events: 'Eventos', about: 'Nuestra historia', private: 'Cenas privadas', book: 'Reserva tu sitio' },
    langSwitch: 'English',
    skip: 'Ir al contenido',
    tagline: 'Mitad cena entre amigos, mitad speakeasy, 100% diversión.',
    description:
      'Un supper club en Barcelona con Kevin Hawkins como anfitrión. Mesas largas, buena comida, buen vino y gente que merece la pena conocer.',
    card: {
      next: 'Próxima mesa',
      book: 'Reserva tu sitio',
      via: 'Reservas en Luma · plazas limitadas',
      noneTitle: 'Estamos preparando la próxima mesa',
      noneBody: 'Las nuevas fechas salen primero en Luma.',
      noneCta: 'Ver próximas fechas',
      untitled: 'Supper club',
    },
    banner: { next: 'Próxima mesa', cta: 'Reserva tu sitio' },
    home: {
      intro:
        'Un supper club en Barcelona para quienes disfrutan de las cenas largas y las conversaciones aún mejores. Kevin hace de anfitrión, la cocina se toma en serio y el vino no falta.',
      courses: [
        {
          name: 'Aperitivo',
          body: 'Llegas, tomas algo y conoces a la gente con la que vas a compartir mesa. Nadie sigue siendo un desconocido mucho tiempo.',
          plate: 'Foto del aperitivo',
        },
        {
          name: 'La mesa',
          body: 'Una mesa larga, comida hecha con cariño y vinos elegidos para acompañarla.',
          plate: 'Foto de la cena',
        },
        {
          name: 'Sobretaula',
          body: 'Así se llama en catalán quedarse en la mesa cuando ya se han retirado los platos. Es nuestra parte favorita de la noche.',
          plate: 'Foto de la sobremesa',
        },
      ],
      hostTitle: 'Tu anfitrión',
      hostBody: [
        'The Common Thread empezó en la mesa de Kevin Hawkins. Cuando se mudó de Ámsterdam a Barcelona, cocinar para otros fue su manera de sentirse en casa.',
        'Los amigos trajeron a más amigos y la mesa no paró de crecer. Kevin sigue siendo el anfitrión.',
      ],
      hostLink: 'Lee la historia',
      hostPlate: 'Retrato de Kevin',
      regularsTitle: '¿Vuelves?',
      regularsBody:
        'Quienes repiten se enteran primero de las nuevas fechas en Luma. La próxima vez, trae a alguien nuevo: así crece la mesa.',
      regularsCta: 'Ver próximas fechas',
      faqTitle: 'Antes de reservar',
      faqs: [
        {
          q: '¿Puedo venir sin acompañante?',
          a: 'Claro, mucha gente lo hace. Es una sola mesa compartida, así que estarás charlando con alguien antes de terminar la primera copa.',
        },
        {
          q: '¿Cómo reservo?',
          a: 'Todos los eventos se reservan en Luma. Las plazas son limitadas, así que sigue nuestro calendario para enterarte antes que nadie.',
        },
        {
          q: '¿Y si tengo alergias o una dieta especial?',
          a: 'Avísanos al reservar. Los detalles de cada cena están en su página de Luma.',
        },
        {
          q: '¿Puedo reservar la mesa entera?',
          a: 'Sí. Organizamos cenas privadas, noches de equipo y colaboraciones.',
        },
      ],
      privateTitle: 'Tu propia mesa',
      privateBody: 'Cumpleaños, cenas de equipo, una cena de marca: la misma noche, solo para tu gente.',
      privateCta: 'Cenas privadas',
    },
    events: {
      title: 'Próximas mesas',
      intro: 'Cada evento es una sola noche y las plazas son limitadas. Las entradas se venden en Luma.',
      formatsTitle: 'Lo que organizamos',
      formats: [
        { name: 'Supper clubs', body: 'Cenas en mesa larga donde la lista de invitados es la mitad de la gracia.' },
        { name: 'Catas de vino', body: 'Catas guiadas y relajadas, con vinos que dan de qué hablar.' },
        { name: 'Pop-ups', body: 'Colaboraciones de una sola noche con chefs y locales de la ciudad.' },
      ],
      calendar: 'Calendario completo en Luma',
    },
    about: {
      title: 'Nuestra historia',
      lede: 'Todo empezó alrededor de una mesa en Barcelona.',
      body: [
        'Cuando Kevin Hawkins se mudó de Ámsterdam a Barcelona, hizo lo que le salía natural: cocinar para otros. Las cenas en su mesa se convirtieron en su forma de hacer hogar en una ciudad nueva.',
        'Se corrió la voz. Los amigos trajeron a más amigos, y estos a gente que habían conocido esa misma semana. Aquellas cenas se convirtieron en The Common Thread: supper clubs, catas de vino y pop-ups por toda Barcelona.',
        'La idea sigue siendo la misma. Una noche pensada con cuidado, comida y vino que merecen la pena, y una mesa llena de gente que se alegra de haber venido.',
      ],
      plate: 'Foto de una de las primeras cenas',
      cta: 'Únete a la próxima mesa',
    },
    private: {
      title: 'Cenas privadas',
      lede: 'La misma mesa larga, solo para tu gente.',
      offers: [
        { name: 'Celebraciones', body: 'Cumpleaños, aniversarios o una mesa de amigos que se merece una buena noche.' },
        { name: 'Noches de equipo', body: 'Una velada que hace hablar a los compañeros, para offsites y equipos de visita en Barcelona.' },
        { name: 'Colaboraciones', body: 'Cenas compartidas con restaurantes, bodegas y marcas.' },
      ],
      askTitle: 'Cuéntanos qué tienes en mente',
      askBody: 'Una fecha aproximada, cuántas personas y qué celebráis: con eso nos basta para empezar.',
      email: 'Escríbenos',
      soon: 'Datos de contacto próximamente.',
    },
    notFound: { title: 'Este sitio está vacío', body: 'La página que buscas no existe, pero la cena sigue en pie.', cta: 'Volver a la mesa' },
    footer: { calendar: 'Calendario en Luma', instagram: 'Instagram' },
  },
} as const;

export type Copy = (typeof t)[Lang];
