// All visible copy in English and Spanish. Pages read from here so the two
// languages stay in step. Story copy follows the club's own About page.

export const languages = ['en', 'es'] as const;
export type Lang = (typeof languages)[number];

// Page keys map to a slug per language.
export const routes = {
  home: { en: '', es: 'es/' },
  events: { en: 'calendar/', es: 'es/calendario/' },
  about: { en: 'about/', es: 'es/nosotros/' },
  private: { en: 'memories/', es: 'es/recuerdos/' },
} as const;
export type RouteKey = keyof typeof routes;

export const t = {
  en: {
    locale: 'en-GB',
    nav: { events: 'Calendar', about: 'Our story', private: 'Memories', book: 'Take a seat', follow: 'Join the table' },
    langSwitch: 'Español',
    skip: 'Skip to content',
    tagline: 'Half dinner party, half speakeasy, 100% fun.',
    description:
      'A Barcelona supper club hosted by Kevin Hawkins. Dinners, wine tastings and pop-ups built around food, wine and connection.',
    card: {
      next: 'Next table',
      book: 'Take a seat',
      via: 'Booking on Luma · limited seats',
      noneTitle: 'The next table is being laid',
      noneBody: 'Follow us on Luma and you’ll hear about the next date first.',
      noneCta: 'Follow on Luma',
      instagram: 'Instagram',
      untitled: 'Supper club',
    },
    banner: { next: 'Next table', cta: 'Take a seat' },
    home: {
      intro:
        'One-night-only dinners, wine tastings and pop-ups for curious locals, newcomers, creatives and food lovers. Making friends as an adult has never been easier.',
      courses: [
        {
          name: 'Aperitivo',
          body: 'Arrive, get a drink in your hand, meet the people you’ll be sitting with. Nobody stays a stranger for long.',
          alt: 'Trays of canapés with asparagus and cherry tomatoes',
        },
        {
          name: 'La mesa',
          body: 'One long table, food cooked with care and wine chosen to go with it. Some nights it’s a seasonal tasting menu, others a relaxed backyard dinner with homemade cocktails.',
          alt: 'Guests around a long dinner table under the projected Common Thread logo',
        },
        {
          name: 'Sobretaula',
          body: 'The Catalan word for staying at the table after the plates are cleared. It’s our favourite part of the night.',
          alt: 'Guests deep in conversation by candlelight',
        },
      ],
      reelTitle: 'The first thread',
      reelBody: 'Where it all started: the very first Common Thread dinner, at Kevin’s table.',
      reelPlay: 'Play video',
      reelPause: 'Pause video',
      quote: 'It’s not about being fancy. It’s about feeling at ease.',
      quoteBody:
        'That’s what our guests tell us too: these nights help them breathe a little easier, laugh a little louder, and remember what it feels like to belong.',
      hostTitle: 'Your host',
      hostBody: [
        'After moving to Barcelona from Amsterdam, Kevin Hawkins started hosting dinners to rebuild a sense of home and community.',
        'What began around his own dinner table has grown into a social circle with pop-ups, wine tastings and more. Kevin is still the one hosting.',
      ],
      hostLink: 'Read the story',
      hostAlt: 'Kevin Hawkins smiling by a pool in a Barcelona courtyard',
      pastTitle: 'Past tables',
      pastBody: 'A few of the nights so far.',
      pastCta: 'See every past event',
      tripsCta: 'See the trips',
      momentsCta: 'See all memories',
      pressTitle: 'As featured in',
      faqTitle: 'Before you come',
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
          a: 'Tell us when you book. Details for each event are on its Luma page.',
        },
        {
          q: 'Can I book the whole table?',
          a: 'Yes. We host private dinners, team nights and collaborations.',
        },
      ],
      moments: {
        title: 'Moments',
        body: 'A few frames from around the table.',
        toast: 'A toast',
      },
      joinTitle: 'Join the table',
      joinBody: 'New dates go up on Luma first, and the nights themselves live on Instagram.',
      joinLuma: 'Follow on Luma',
      joinInstagram: 'Instagram',
      privateTitle: 'Your own table',
      privateBody: 'Birthdays, team nights, a brand dinner: the same evening, just for your people.',
      privateCta: 'Private dinners',
    },
    events: {
      title: 'Calendar',
      intro: 'Every event is one night only and seats are limited. Subscribe on Luma to hear about new dates first.',
      upcomingTitle: 'Coming up',
      pastTitle: 'Past tables',
      pastIntro: 'Supper clubs, tastings, collaborations and celebrations from the last few years.',
      moreMomentsTitle: 'More moments',
      everyTitle: 'Every table',
      everyIntro: 'The full list, from our Luma calendar.',
      tripsTitle: 'Culinary trips',
      tripsIntro: 'Every so often, the table goes on the road.',
      with: 'With',
      onLuma: 'Event page',
      formatsTitle: 'What we host',
      formats: [
        { icon: 'dinners', name: 'Supper clubs', body: 'Long-table dinners where the guest list is half the fun.' },
        { icon: 'workshops', name: 'Tastings & workshops', body: 'Relaxed, guided wine tastings and hands-on nights with pours worth talking about.' },
        { icon: 'community', name: 'Pop-ups & collaborations', body: 'One-night-only nights with chefs, sommeliers, venues and friends of the club.' },
        { icon: 'travel', name: 'Culinary trips', body: 'Every so often, the table goes on the road: Bordeaux, Greece, out to sea.' },
      ],
    },
    about: {
      title: 'Our story',
      lede: 'It started around one dinner table in Barcelona.',
      chapters: [
        {
          title: 'Welcome to TCT',
          body: [
            'After moving to Barcelona following a breakup in Amsterdam, Kevin started hosting dinners as a way to rebuild his sense of home and community.',
            'What began as intimate gatherings around his own dinner table has since grown into a social circle with pop-up events, wine tastings and more.',
          ],
        },
        {
          title: 'More than a supper club',
          body: [
            'The Common Thread is a carefully crafted community of locals, expats, creatives, solo travellers and food lovers who come together for intimate, high-quality events built around food, wine and connection.',
            'We host dinners, wine tastings, curated pop-ups and the occasional culinary trip. The thread that ties it all together is intention: who we gather, how we design the experience, and what it feels like to be part of it.',
          ],
        },
        {
          title: 'Why it matters',
          body: [
            'We talk a lot about connection, but it’s hard to find in practice, especially in Barcelona, where the city is equal parts stunning and transient. There’s something sacred about sitting down with others with no agenda except to enjoy, be present and share.',
            'So we design every event with care. That means more than beautiful plates and natural wines: it means a space that feels inclusive, relaxed, warm and safe, whether you show up alone or bring a friend.',
          ],
        },
        {
          title: 'Intimate, not exclusive',
          body: [
            'Beyond the dinners there’s a deeper aim: inclusion and equity. A solo traveller should feel instantly welcome. A queer couple should feel not just safe but celebrated. Locals and newcomers should sit across from each other as equals.',
            'We don’t believe in velvet ropes or VIP-only nights. We believe in warmth, openness, and what happens when the right people meet over a great meal.',
          ],
        },
        {
          title: 'Why Barcelona',
          body: [
            'This is a city of light and late dinners, of creativity and contradiction: old-school vermuterías steps away from vegan tasting menus, and artists, founders, designers and bakers at the same table.',
            'But as magnetic as Barcelona is, it can also be lonely, especially if you’re new. That’s why we exist: not to divide the city, but to complement it.',
          ],
        },
      ],
      alts: [
        'A candlelit dinner in a high-ceilinged Barcelona apartment',
        'Guests eating and talking along a long lamplit table',
        'People dining at a lamplit terrace on a stone street in Barcelona at dusk',
      ],
      cta: 'Join the table',
    },
    memories: {
      title: 'Memories',
      lede: 'Nights we’ve shared around the table, and a few away from it.',
    },
    private: {
      title: 'Private dinners',
      lede: 'The same long table, just for your people.',
      offers: [
        { icon: 'home', name: 'Celebrations', body: 'Birthdays, anniversaries, or a table of friends who deserve a proper night.' },
        { icon: 'workshops', name: 'Team nights', body: 'An evening that gets colleagues talking, for offsites and teams visiting Barcelona.' },
        { icon: 'community', name: 'Collaborations', body: 'Co-hosted nights with chefs, sommeliers, venues and brands.' },
      ],
      galleryTitle: 'From past private events',
      askTitle: 'Tell us what you have in mind',
      askBody: 'A rough date, how many guests and what you’re celebrating is all we need to start.',
      email: 'Email us',
      dm: 'Message us on Instagram',
      soon: 'Contact details coming soon.',
    },
    notFound: { title: 'This seat is empty', body: 'The page you’re looking for isn’t here, but dinner is still on.', cta: 'Back to the table' },
    footer: { calendar: 'Luma', instagram: 'Instagram', signoff: 'One string at a time' },
  },
  es: {
    locale: 'es-ES',
    nav: { events: 'Calendario', about: 'Nuestra historia', private: 'Recuerdos', book: 'Reserva tu sitio', follow: 'Únete a la mesa' },
    langSwitch: 'English',
    skip: 'Ir al contenido',
    tagline: 'Mitad cena entre amigos, mitad speakeasy, 100% diversión.',
    description:
      'Un supper club en Barcelona con Kevin Hawkins como anfitrión. Cenas, catas de vino y pop-ups en torno a la comida, el vino y la gente.',
    card: {
      next: 'Próxima mesa',
      book: 'Reserva tu sitio',
      via: 'Reservas en Luma · plazas limitadas',
      noneTitle: 'Estamos preparando la próxima mesa',
      noneBody: 'Síguenos en Luma y serás de los primeros en saber la próxima fecha.',
      noneCta: 'Seguir en Luma',
      instagram: 'Instagram',
      untitled: 'Supper club',
    },
    banner: { next: 'Próxima mesa', cta: 'Reserva tu sitio' },
    home: {
      intro:
        'Cenas, catas de vino y pop-ups de una sola noche para gente curiosa: de aquí y recién llegados, creativos y amantes de la buena mesa. Hacer amigos de adulto nunca fue tan fácil.',
      courses: [
        {
          name: 'Aperitivo',
          body: 'Llegas, tomas algo y conoces a la gente con la que vas a compartir mesa. Nadie sigue siendo un desconocido mucho tiempo.',
          alt: 'Bandejas de canapés con espárragos y tomates cherry',
        },
        {
          name: 'La mesa',
          body: 'Una mesa larga, comida hecha con cariño y vinos elegidos para acompañarla. Unas noches es un menú degustación de temporada; otras, una cena relajada en el patio con cócteles caseros.',
          alt: 'Invitados alrededor de una mesa larga bajo el logo proyectado de The Common Thread',
        },
        {
          name: 'Sobretaula',
          body: 'Así se llama en catalán quedarse en la mesa cuando ya se han retirado los platos. Es nuestra parte favorita de la noche.',
          alt: 'Invitados conversando a la luz de las velas',
        },
      ],
      reelTitle: 'El primer hilo',
      reelBody: 'Donde empezó todo: la primerísima cena de The Common Thread, en la mesa de Kevin.',
      reelPlay: 'Reproducir vídeo',
      reelPause: 'Pausar vídeo',
      quote: 'No se trata de ser elegante. Se trata de sentirse a gusto.',
      quoteBody:
        'Es lo que nos dicen nuestros invitados: estas noches les ayudan a respirar un poco mejor, reír un poco más alto y recordar lo que se siente al pertenecer a algo.',
      hostTitle: 'Tu anfitrión',
      hostBody: [
        'Al mudarse de Ámsterdam a Barcelona, Kevin Hawkins empezó a organizar cenas para reconstruir su sentido de hogar y de comunidad.',
        'Lo que empezó alrededor de su propia mesa se ha convertido en un círculo social con pop-ups, catas de vino y mucho más. Kevin sigue siendo el anfitrión.',
      ],
      hostLink: 'Lee la historia',
      hostAlt: 'Kevin Hawkins sonriendo junto a una piscina en un patio de Barcelona',
      pastTitle: 'Mesas pasadas',
      pastBody: 'Algunas de las noches que hemos vivido.',
      pastCta: 'Ver todos los eventos pasados',
      tripsCta: 'Ver los viajes',
      momentsCta: 'Ver todos los recuerdos',
      pressTitle: 'Han hablado de nosotros',
      faqTitle: 'Antes de venir',
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
          a: 'Avísanos al reservar. Los detalles de cada evento están en su página de Luma.',
        },
        {
          q: '¿Puedo reservar la mesa entera?',
          a: 'Sí. Organizamos cenas privadas, noches de equipo y colaboraciones.',
        },
      ],
      moments: {
        title: 'Momentos',
        body: 'Algunas imágenes alrededor de la mesa.',
        toast: 'Un brindis',
      },
      joinTitle: 'Únete a la mesa',
      joinBody: 'Las nuevas fechas salen primero en Luma, y las noches en sí se viven en Instagram.',
      joinLuma: 'Seguir en Luma',
      joinInstagram: 'Instagram',
      privateTitle: 'Tu propia mesa',
      privateBody: 'Cumpleaños, cenas de equipo, una cena de marca: la misma noche, solo para tu gente.',
      privateCta: 'Cenas privadas',
    },
    events: {
      title: 'Calendario',
      intro: 'Cada evento es una sola noche y las plazas son limitadas. Suscríbete en Luma para enterarte antes que nadie de las nuevas fechas.',
      upcomingTitle: 'Próximamente',
      pastTitle: 'Mesas pasadas',
      pastIntro: 'Supper clubs, catas, colaboraciones y celebraciones de los últimos años.',
      moreMomentsTitle: 'Más momentos',
      everyTitle: 'Todas las mesas',
      everyIntro: 'La lista completa, desde nuestro calendario de Luma.',
      tripsTitle: 'Viajes gastronómicos',
      tripsIntro: 'De vez en cuando, la mesa se va de viaje.',
      with: 'Con',
      onLuma: 'Página del evento',
      formatsTitle: 'Lo que organizamos',
      formats: [
        { icon: 'dinners', name: 'Supper clubs', body: 'Cenas en mesa larga donde la lista de invitados es la mitad de la gracia.' },
        { icon: 'workshops', name: 'Catas y talleres', body: 'Catas de vino guiadas y relajadas, y noches prácticas con vinos que dan de qué hablar.' },
        { icon: 'community', name: 'Pop-ups y colaboraciones', body: 'Noches únicas con chefs, sumilleres, locales y amigos del club.' },
        { icon: 'travel', name: 'Viajes gastronómicos', body: 'De vez en cuando, la mesa se va de viaje: Burdeos, Grecia, mar adentro.' },
      ],
    },
    about: {
      title: 'Nuestra historia',
      lede: 'Todo empezó alrededor de una mesa en Barcelona.',
      chapters: [
        {
          title: 'Bienvenido a TCT',
          body: [
            'Después de mudarse a Barcelona tras una ruptura en Ámsterdam, Kevin empezó a organizar cenas como forma de reconstruir su sentido de hogar y de comunidad.',
            'Lo que empezó como encuentros íntimos alrededor de su propia mesa se ha convertido en un círculo social con pop-ups, catas de vino y mucho más.',
          ],
        },
        {
          title: 'Más que un supper club',
          body: [
            'The Common Thread es una comunidad cuidada al detalle: gente de aquí, expats, creativos, viajeros que van por libre y amantes de la buena mesa que se reúnen en eventos íntimos y de calidad en torno a la comida, el vino y la conexión.',
            'Organizamos cenas, catas de vino, pop-ups y, de vez en cuando, algún viaje gastronómico. El hilo que lo une todo es la intención: a quién reunimos, cómo diseñamos la experiencia y cómo se siente formar parte de ella.',
          ],
        },
        {
          title: 'Por qué importa',
          body: [
            'Hablamos mucho de conexión, pero en la práctica cuesta encontrarla, sobre todo en Barcelona, una ciudad tan espectacular como pasajera. Hay algo sagrado en sentarse con otras personas sin más plan que disfrutar, estar presente y compartir.',
            'Por eso diseñamos cada evento con cuidado. Eso significa más que platos bonitos y vinos naturales: significa un espacio inclusivo, relajado, cálido y seguro, tanto si vienes sin acompañante como si traes a alguien.',
          ],
        },
        {
          title: 'Íntimo, no exclusivo',
          body: [
            'Más allá de las cenas hay un propósito más profundo: la inclusión y la equidad. Quien viaja por libre debe sentirse bienvenido desde el primer momento. Una pareja queer debe sentirse no solo segura, sino celebrada. Gente de aquí y recién llegados deben sentarse frente a frente como iguales.',
            'No creemos en cordones de terciopelo ni en noches solo para VIPs. Creemos en la calidez, la apertura y en lo que pasa cuando la gente adecuada se encuentra alrededor de una buena comida.',
          ],
        },
        {
          title: 'Por qué Barcelona',
          body: [
            'Es una ciudad de luz y cenas tardías, de creatividad y contradicción: vermuterías de toda la vida a dos pasos de menús degustación veganos, y artistas, fundadores, diseñadores y panaderos en la misma mesa.',
            'Pero por magnética que sea, Barcelona también puede ser solitaria, sobre todo si acabas de llegar. Por eso existimos: no para dividir la ciudad, sino para complementarla.',
          ],
        },
      ],
      alts: [
        'Una cena a la luz de las velas en un piso de techos altos de Barcelona',
        'Invitados comiendo y charlando a lo largo de una mesa larga iluminada con lamparitas',
        'Gente cenando en una terraza iluminada en una calle empedrada de Barcelona al anochecer',
      ],
      cta: 'Únete a la mesa',
    },
    memories: {
      title: 'Recuerdos',
      lede: 'Noches compartidas alrededor de la mesa, y alguna lejos de ella.',
    },
    private: {
      title: 'Cenas privadas',
      lede: 'La misma mesa larga, solo para tu gente.',
      offers: [
        { icon: 'home', name: 'Celebraciones', body: 'Cumpleaños, aniversarios o una mesa de amigos que se merece una buena noche.' },
        { icon: 'workshops', name: 'Noches de equipo', body: 'Una velada que hace hablar a los compañeros, para offsites y equipos de visita en Barcelona.' },
        { icon: 'community', name: 'Colaboraciones', body: 'Noches compartidas con chefs, sumilleres, locales y marcas.' },
      ],
      galleryTitle: 'De eventos privados anteriores',
      askTitle: 'Cuéntanos qué tienes en mente',
      askBody: 'Una fecha aproximada, cuántas personas y qué celebráis: con eso nos basta para empezar.',
      email: 'Escríbenos',
      dm: 'Escríbenos por Instagram',
      soon: 'Datos de contacto próximamente.',
    },
    notFound: { title: 'Este sitio está vacío', body: 'La página que buscas no existe, pero la cena sigue en pie.', cta: 'Volver a la mesa' },
    footer: { calendar: 'Luma', instagram: 'Instagram', signoff: 'One string at a time' },
  },
} as const;

export type Copy = (typeof t)[Lang];
