// Treść case study: woshwosh.
// Źródło treści (tekst + lista obrazków). Układ/CSS robi szablon
// src/pages/case-study/[slug].astro. Opis pól: patrz ania-kruk.js.
//
// Ten case: obrazki leżą na kolorowej apli (panel), 80% desktop / 100% mobile,
// padY:0 = tło widać tylko po bokach (bez marginesu góra/dół).
// Kolory (podział Arka): 01, 07 → #EBEFF0; 03, 04, 05, 06, 08 → #0E4F41.
// Hero (cover) = miniatura z HP (00.webp = kopia cover.webp) na tle #EEF3F1, 85%.
// Bez tła, pełna szerokość: Hero.webp (w Introduction) i obrazek 02 (Process).
// Obrazki 05 + 06 = jeden panel (bez tekstu między nimi).

const LIGHT = '#EBEFF0';
const GREEN = '#0E4F41';

export const woshwosh = {
  slug: 'woshwosh',
  title: 'woshwosh',
  description: 'A mobile app for ordering professional, eco-friendly shoe cleaning and repair. UX and UI design by Arek Sobczyk.',

  hero: {
    title: [
      { text: 'woshwosh' },
      { text: 'shoe care', mute: true },
      { text: 'app', mute: true },
    ],
    intro: 'An app for ordering professional, eco‑friendly shoe cleaning and repair',   // eco‑friendly: dywiz niełamliwy (U+2011)
    introWidth: '760px',   // 2 linie na desktop: „...and repair" kończy linię 2
    role: 'UX design, UI design',
    year: '2022',
    cover: '00.webp',          // miniatura z HP (kopia cover.webp)
    coverBg: '#EEF3F1',
    coverWidth: '85%',
    coverMaxWidth: '1100px',
  },

  sections: [
    {
      label: 'Introduction',
      figLg: true,            // 200px odstęp od tekstu do obrazka poniżej
      text: [
        'woshwosh is the first company in Poland to offer professional shoe cleaning and repair in the spirit of zero waste. Serving both individual and business clients, the brand is built around sustainability and extending the life of things people already own. To make ordering simple, woshwosh needed an intuitive mobile app.',
      ],
      facts: [
        ['My role', 'UX Design, UI Design'],
        ['Client', 'woshwosh'],
        ['Agency', 'Move Closer'],
        ['Date', '2022'],
      ],
      figures: ['Hero.webp'],   // obecny hero zszedł o jedno niżej (pełna szerokość, bez tła)
    },
    {
      label: 'Key Challenges',
      figures: [{ panel: LIGHT, width: '80%', widthMobile: '100%', padY: 0, padYMobile: 'var(--space-32)', images: ['01.webp'] }],   // 01 zeszło o jedno niżej → obrazek między Key Challenges a Process
      // leads: akapit ciągły „Tytuł (czarny). Opis (szary)". Kropkę po tytule dokłada szablon.
      leads: [
        {
          lead: 'Logistics that run both ways',
          text: 'The customer sends the shoes in (by courier or in person) and gets them back once the service is done. The checkout has to handle both directions.',
        },
        {
          lead: 'A complex process behind a simple screen',
          text: 'Different shoe types, additional services, and order statuses, all kept behind an easy interface.',
        },
        {
          lead: 'Constant clarity',
          text: 'The customer needs to know exactly what is happening with their shoes at every stage.',
        },
      ],
    },
    {
      label: 'Process',
      text: [
        'I designed a mobile app that reduces ordering to two clear steps: pick the shoe type, then choose additional services.',
        'In the checkout, I added a dedicated shipping step tailored to woshwosh\'s ship-in, ship-back model. On the company\'s side, I designed a shoe verification step and a notification system that keeps users informed from the moment shoes are sent to the moment they come back.',
      ],
      figures: ['02.webp'],   // bez tła, pełna szerokość
    },
    {
      label: 'Service Selection',
      text: [
        'Choosing the shoe type and additional services: two steps, with the complexity kept out of sight.',
      ],
      figures: [{ panel: GREEN, width: '80%', widthMobile: '100%', padY: 0, padYMobile: 'var(--space-32)', images: ['04.webp'] }],
    },
    {
      label: 'Cart & Checkout',
      text: [
        'A payment flow that folds in the extra shipping step, so it feels like part of the order, not an extra hurdle.',
      ],
      figures: [{ panel: GREEN, width: '80%', widthMobile: '100%', padY: 0, padYMobile: 'var(--space-32)', gap: 0, images: ['05.webp', '06.webp'] }],   // mobile: 40px tylko skrajne (nad 05, pod 06); gap:0 trzyma je złączone
    },
    {
      label: 'Messages',
      text: [
        'Status screens that do the talking: order confirmed with packing instructions one tap away, service in progress, payment failed with a clear way to retry. Every state tells the customer what happened and what to do next.',
      ],
      figures: [{ panel: LIGHT, width: '80%', widthMobile: '100%', padY: 0, padYMobile: 'var(--space-32)', images: ['07.webp'] }],
    },
    {
      label: 'Registration & Login',
      text: [
        'Simple sign-up that gets users to their first order quickly.',
      ],
      figures: [{ panel: GREEN, width: '80%', widthMobile: '100%', padY: 0, padYMobile: 'var(--space-32)', images: ['03.webp'] }],
    },
    {
      label: 'Completed orders',
      last: true,
      text: [
        'A clear history of every finished service.',
      ],
      figures: [{ panel: GREEN, width: '80%', widthMobile: '100%', padY: 0, padYMobile: 'var(--space-32)', images: ['08.webp'] }],
    },
  ],
};
