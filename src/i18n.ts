// All visible copy in English, Spanish and Catalan. Pages read from here so
// the languages stay in step. Story copy follows the club's own About page.

export const languages = ['en', 'es', 'ca'] as const;

// Each language's name in its own language, for the switcher.
export const languageNames: Record<Lang, string> = { en: 'English', es: 'Español', ca: 'Català' };
export type Lang = (typeof languages)[number];

// Page keys map to a slug per language.
export const routes = {
  home: { en: '', es: 'es/', ca: 'ca/' },
  events: { en: 'calendar/', es: 'es/calendario/', ca: 'ca/calendari/' },
  about: { en: 'about/', es: 'es/nosotros/', ca: 'ca/nosaltres/' },
  private: { en: 'memories/', es: 'es/recuerdos/', ca: 'ca/records/' },
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
      ratingLabel: 'average guest rating',
      ratingDetail: (n: number, e: number) => `from ${n} guest reviews across ${e} events`,
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
          title: 'The science of simple',
          body: [
            '“I wanted to build what I wish existed when I moved here,” Kevin says. “A space for people who aren’t just passing through.” He started The Common Thread as a hobby in July 2024, after a design career leading teams at Booking.com and Glovo and living in four countries.',
            'His mantra is the science of simple: no over-planning, no forced networking, just people, thoughtfully placed. “The simpler the structure, the more space there is for real connection.” Kevin still curates every guest list himself and works with some of the best chefs in the city.',
            '“Everyone comes from somewhere different. But by the end of the night, you always find some kind of common thread.”',
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
    footer: { calendar: 'Luma', instagram: 'Instagram', signoff: 'One thread 💬 at a time' },
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
      ratingLabel: 'valoración media de los invitados',
      ratingDetail: (n: number, e: number) => `de ${n} opiniones de invitados en ${e} eventos`,
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
          title: 'La ciencia de lo simple',
          body: [
            '«Quería crear lo que me habría gustado encontrar al llegar», dice Kevin. «Un espacio para quienes no están solo de paso». Empezó The Common Thread como afición en julio de 2024, después de una carrera en diseño liderando equipos en Booking.com y Glovo y de vivir en cuatro países.',
            'Su lema es la ciencia de lo simple: nada de planificar en exceso ni de networking forzado, solo personas sentadas con intención. «Cuanto más simple es la estructura, más espacio queda para la conexión real». Kevin sigue eligiendo cada lista de invitados y trabaja con algunos de los mejores chefs de la ciudad.',
            '«Cada uno viene de un sitio distinto. Pero al final de la noche, siempre encuentras algún hilo en común».',
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
    footer: { calendar: 'Luma', instagram: 'Instagram', signoff: 'One thread 💬 at a time' },
  },
  ca: {
    locale: 'ca-ES',
    nav: { events: 'Calendari', about: 'La nostra història', private: 'Records', book: 'Reserva el teu lloc', follow: 'Uneix-te a la taula' },
    langSwitch: 'Català',
    skip: 'Vés al contingut',
    tagline: 'Meitat sopar entre amics, meitat speakeasy, 100% diversió.',
    description:
      'Un supper club a Barcelona amb en Kevin Hawkins com a amfitrió. Sopars, tastos de vi i pop-ups al voltant del menjar, el vi i la gent.',
    card: {
      next: 'Propera taula',
      book: 'Reserva el teu lloc',
      via: 'Reserves a Luma · places limitades',
      noneTitle: 'Estem parant la propera taula',
      noneBody: 'Segueix-nos a Luma i seràs dels primers a saber la propera data.',
      noneCta: 'Segueix a Luma',
      instagram: 'Instagram',
      untitled: 'Supper club',
    },
    banner: { next: 'Propera taula', cta: 'Reserva el teu lloc' },
    home: {
      intro:
        'Sopars, tastos de vi i pop-ups d’una sola nit per a gent curiosa: d’aquí i nouvinguts, creatius i amants de la bona taula. Fer amics de gran mai no havia estat tan fàcil.',
      courses: [
        {
          name: 'Aperitiu',
          body: 'Arribes, prens alguna cosa i coneixes la gent amb qui compartiràs taula. Ningú no continua sent un desconegut gaire estona.',
          alt: 'Safates de canapès amb espàrrecs i tomàquets cherry',
        },
        {
          name: 'La taula',
          body: 'Una taula llarga, menjar fet amb cura i vins triats per acompanyar-lo. Algunes nits és un menú degustació de temporada; d’altres, un sopar relaxat al pati amb còctels casolans.',
          alt: 'Convidats al voltant d’una taula llarga sota el logotip projectat de The Common Thread',
        },
        {
          name: 'Sobretaula',
          body: 'Quedar-se a taula quan ja s’han retirat els plats. És la nostra part preferida de la nit.',
          alt: 'Convidats conversant a la llum de les espelmes',
        },
      ],
      reelTitle: 'El primer fil',
      reelBody: 'On va començar tot: el primeríssim sopar de The Common Thread, a la taula d’en Kevin.',
      reelPlay: 'Reprodueix el vídeo',
      reelPause: 'Posa en pausa el vídeo',
      quote: 'No es tracta de ser elegant. Es tracta de sentir-se a gust.',
      quoteBody:
        'És el que ens diuen els nostres convidats: aquestes nits els ajuden a respirar una mica millor, riure una mica més fort i recordar què vol dir sentir que formes part d’alguna cosa.',
      hostTitle: 'El teu amfitrió',
      hostBody: [
        'En mudar-se d’Amsterdam a Barcelona, en Kevin Hawkins va començar a organitzar sopars per reconstruir el seu sentit de llar i de comunitat.',
        'El que va començar al voltant de la seva pròpia taula s’ha convertit en un cercle social amb pop-ups, tastos de vi i molt més. En Kevin continua sent l’amfitrió.',
      ],
      hostLink: 'Llegeix la història',
      hostAlt: 'En Kevin Hawkins somrient al costat d’una piscina en un pati de Barcelona',
      pastTitle: 'Taules passades',
      pastBody: 'Algunes de les nits que hem viscut.',
      pastCta: 'Veure tots els esdeveniments passats',
      tripsCta: 'Veure els viatges',
      momentsCta: 'Veure tots els records',
      ratingLabel: 'valoració mitjana dels convidats',
      ratingDetail: (n: number, e: number) => `de ${n} opinions de convidats en ${e} esdeveniments`,
      pressTitle: 'Han parlat de nosaltres',
      faqTitle: 'Abans de venir',
      faqs: [
        {
          q: 'Puc venir sense acompanyant?',
          a: 'És clar, molta gent ho fa. És una sola taula compartida, així que estaràs xerrant amb algú abans d’acabar la primera copa.',
        },
        {
          q: 'Com faig la reserva?',
          a: 'Tots els esdeveniments es reserven a Luma. Les places són limitades, així que segueix el nostre calendari per assabentar-te’n abans que ningú.',
        },
        {
          q: 'I si tinc al·lèrgies o una dieta especial?',
          a: 'Avisa’ns en reservar. Els detalls de cada esdeveniment són a la seva pàgina de Luma.',
        },
        {
          q: 'Puc reservar la taula sencera?',
          a: 'Sí. Organitzem sopars privats, nits d’equip i col·laboracions.',
        },
      ],
      moments: {
        title: 'Moments',
        body: 'Algunes imatges al voltant de la taula.',
        toast: 'Un brindis',
      },
      joinTitle: 'Uneix-te a la taula',
      joinBody: 'Les noves dates surten primer a Luma, i les nits mateixes es viuen a Instagram.',
      joinLuma: 'Segueix a Luma',
      joinInstagram: 'Instagram',
      privateTitle: 'La teva pròpia taula',
      privateBody: 'Aniversaris, sopars d’equip, un sopar de marca: la mateixa nit, només per a la teva gent.',
      privateCta: 'Sopars privats',
    },
    events: {
      title: 'Calendari',
      intro: 'Cada esdeveniment és d’una sola nit i les places són limitades. Subscriu-te a Luma per assabentar-te abans que ningú de les noves dates.',
      upcomingTitle: 'Properament',
      pastTitle: 'Taules passades',
      pastIntro: 'Supper clubs, tastos, col·laboracions i celebracions dels darrers anys.',
      moreMomentsTitle: 'Més moments',
      everyTitle: 'Totes les taules',
      everyIntro: 'La llista completa, des del nostre calendari de Luma.',
      tripsTitle: 'Viatges gastronòmics',
      tripsIntro: 'De tant en tant, la taula se’n va de viatge.',
      with: 'Amb',
      onLuma: 'Pàgina de l’esdeveniment',
      formatsTitle: 'El que organitzem',
      formats: [
        { icon: 'dinners', name: 'Supper clubs', body: 'Sopars en taula llarga on la llista de convidats és la meitat de la gràcia.' },
        { icon: 'workshops', name: 'Tastos i tallers', body: 'Tastos de vi guiats i relaxats, i nits pràctiques amb vins que donen molt de què parlar.' },
        { icon: 'community', name: 'Pop-ups i col·laboracions', body: 'Nits úniques amb xefs, sommeliers, locals i amics del club.' },
        { icon: 'travel', name: 'Viatges gastronòmics', body: 'De tant en tant, la taula se’n va de viatge: Bordeus, Grècia, mar endins.' },
      ],
    },
    about: {
      title: 'La nostra història',
      lede: 'Tot va començar al voltant d’una taula a Barcelona.',
      chapters: [
        {
          title: 'Benvingut a TCT',
          body: [
            'Després de mudar-se a Barcelona arran d’una ruptura a Amsterdam, en Kevin va començar a organitzar sopars com a manera de reconstruir el seu sentit de llar i de comunitat.',
            'El que va començar com a trobades íntimes al voltant de la seva pròpia taula s’ha convertit en un cercle social amb pop-ups, tastos de vi i molt més.',
          ],
        },
        {
          title: 'La ciència del que és simple',
          body: [
            '«Volia crear el que m’hauria agradat trobar quan vaig arribar», diu en Kevin. «Un espai per a la gent que no hi és només de pas». Va començar The Common Thread com a afició el juliol de 2024, després d’una carrera en disseny liderant equips a Booking.com i Glovo i de viure a quatre països.',
            'El seu lema és la ciència del que és simple: res de planificar en excés ni de networking forçat, només persones assegudes amb intenció. «Com més simple és l’estructura, més espai queda per a la connexió real». En Kevin continua triant cada llista de convidats i treballa amb alguns dels millors xefs de la ciutat.',
            '«Cadascú ve d’un lloc diferent. Però al final de la nit, sempre trobes algun fil en comú».',
          ],
        },
        {
          title: 'Més que un supper club',
          body: [
            'The Common Thread és una comunitat cuidada al detall: gent d’aquí, expats, creatius, viatgers que van per lliure i amants de la bona taula que es troben en esdeveniments íntims i de qualitat al voltant del menjar, el vi i la connexió.',
            'Organitzem sopars, tastos de vi, pop-ups i, de tant en tant, algun viatge gastronòmic. El fil que ho uneix tot és la intenció: a qui reunim, com dissenyem l’experiència i com se sent formar-ne part.',
          ],
        },
        {
          title: 'Per què és important',
          body: [
            'Parlem molt de connexió, però a la pràctica costa de trobar, sobretot a Barcelona, una ciutat tan espectacular com de pas. Hi ha alguna cosa sagrada a seure amb altres persones sense cap altre pla que gaudir, ser-hi i compartir.',
            'Per això dissenyem cada esdeveniment amb cura. Això vol dir més que plats bonics i vins naturals: vol dir un espai inclusiu, relaxat, càlid i segur, tant si vens sol com si portes algú.',
          ],
        },
        {
          title: 'Íntim, no exclusiu',
          body: [
            'Més enllà dels sopars hi ha un propòsit més profund: la inclusió i l’equitat. Qui viatja per lliure s’ha de sentir benvingut des del primer moment. Una parella queer s’ha de sentir no només segura, sinó celebrada. Gent d’aquí i nouvinguts han de seure cara a cara com a iguals.',
            'No creiem en cordons de vellut ni en nits només per a VIPs. Creiem en la calidesa, l’obertura i en el que passa quan la gent adequada es troba al voltant d’un bon àpat.',
          ],
        },
        {
          title: 'Per què Barcelona',
          body: [
            'És una ciutat de llum i sopars tardans, de creativitat i contradicció: vermuteries de tota la vida a dues passes de menús degustació vegans, i artistes, fundadors, dissenyadors i forners a la mateixa taula.',
            'Però per magnètica que sigui, Barcelona també pot ser solitària, sobretot si hi acabes d’arribar. Per això existim: no per dividir la ciutat, sinó per complementar-la.',
          ],
        },
      ],
      alts: [
        'Un sopar a la llum de les espelmes en un pis de sostres alts de Barcelona',
        'Convidats menjant i xerrant al llarg d’una taula llarga il·luminada amb llumetes',
        'Gent sopant en una terrassa il·luminada en un carrer empedrat de Barcelona al capvespre',
      ],
      cta: 'Uneix-te a la taula',
    },
    memories: {
      title: 'Records',
      lede: 'Nits compartides al voltant de la taula, i alguna lluny d’ella.',
    },
    private: {
      title: 'Sopars privats',
      lede: 'La mateixa taula llarga, només per a la teva gent.',
      offers: [
        { icon: 'home', name: 'Celebracions', body: 'Aniversaris o una taula d’amics que es mereix una bona nit.' },
        { icon: 'workshops', name: 'Nits d’equip', body: 'Una vetllada que fa parlar els companys, per a offsites i equips de visita a Barcelona.' },
        { icon: 'community', name: 'Col·laboracions', body: 'Nits compartides amb xefs, sommeliers, locals i marques.' },
      ],
      galleryTitle: 'D’esdeveniments privats anteriors',
      askTitle: 'Explica’ns què tens al cap',
      askBody: 'Una data aproximada, quantes persones i què celebreu: amb això en tenim prou per començar.',
      email: 'Escriu-nos',
      dm: 'Escriu-nos per Instagram',
      soon: 'Dades de contacte properament.',
    },
    notFound: { title: 'Aquest lloc és buit', body: 'La pàgina que busques no existeix, però el sopar continua en peu.', cta: 'Torna a la taula' },
    footer: { calendar: 'Luma', instagram: 'Instagram', signoff: 'One thread 💬 at a time' },
  },
} as const;

export type Copy = (typeof t)[Lang];
