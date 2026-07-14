// Treść case study: Ania Kruk.
// To jest ŹRÓDŁO TREŚCI — sam tekst i lista obrazków. Układ/CSS robi szablon
// src/pages/case-study/[slug].astro. Nowy case study = nowy taki plik + wpis w index.js.
//
// Pola:
//   slug         — część URL: /case-study/<slug>. Musi pasować do nazwy folderu w /assets/work/<slug>/
//   title        — nazwa projektu (tytuł zakładki + alt obrazków)
//   description  — opis do <meta description>
//   hero.title   — nagłówek hero jako lista linii; każda { text, mute? }. mute:true = szary fragment.
//                  Linie łamane <br> (jak w oryginale). Animacja maski (main.js) obsługuje hl-mute + br.
//   hero.intro   — duży opis (40px) na dole hero
//   hero.role    — rola (np. "UX design, UI design")
//   hero.year    — rok (sam, nawias dokłada szablon)
//   hero.cover   — plik hero (leży w /assets/work/<slug>/case/)
//
//   sections[]   — sekcje treści, renderowane komponentem Section (line=false, reveal=false):
//     label      — śródtytuł sekcji (eyebrow)
//     text[]     — akapity (szare); pomiń gdy sekcja ma blocks
//     blocks[]   — podbloki z czarnym śródtytułem: { head, text } (np. Project overview)
//     facts[]    — blok faktów [etykieta, wartość] (tylko Introduction)
//     team[]     — blok "Team:" (etykieta w osobnej linii, nazwiska pod spodem). Introduction.
//     video      — ID filmu YouTube (np. "kPh6M4VOw6g"). Embed 16:9 pełnej szerokości w slocie fig.
//     figLg      — duży odstęp tekst→figura (200/96) zamiast 48 (Introduction)
//     band       — figura = pełnoszerokościowy składak (tło cover.webp + apla + obiekt ui.webp)
//     last       — ostatnia sekcja (bez dolnego odstępu 200)
//     figures[]  — obrazki pod tekstem (pełna szerokość). Plik z /assets/work/<slug>/case/.
//                  Wpis = "nazwa.webp" (16px odstęp) lub { src:"nazwa.webp", join:true } (sklejony 0px).
//                  { src:"nazwa.webp", width:"80%", widthMobile:"95%" } = węższy obrazek, wyśrodkowany
//                  (widthMobile opcjonalne — inna szerokość na telefonie).
//                  { src:"nazwa.webp", bleed:true } = full-bleed: cała szerokość okna (poza marginesy, bez rogów).
//                  { panel:"#EFF0ED", width:"80%", images:[...] } = grupa obrazków na kolorowym tle
//                  (200px góra/dół, 80px między, wyśrodkowane). Tło styka się z figurą nad nim na 0px.

export const aniaKruk = {
  slug: 'ania-kruk',
  title: 'Ania Kruk',
  description: 'E-commerce platform redesign for a fast-growing jewelry brand. UX/UI design by Arek Sobczyk.',

  hero: {
    title: [
      { text: 'Ania Kruk' },
      { text: 'e‑commerce', mute: true },
      { text: 'redesign', mute: true },
    ],
    intro: 'E-commerce platform redesign for a fast-growing jewelry brand',
    role: 'UX design, UI design',
    year: '2023',
    cover: 'Hero.webp',
  },

  sections: [
    {
      label: 'Introduction',
      figLg: true,
      band: true,
      text: [
        'Ania Kruk, a well-known Polish jewelry brand enjoying rapid sales growth, faced significant technological and usability challenges. Its outdated e-commerce platform hindered further growth, generated high maintenance costs, and struggled to meet rising customer expectations.',
        'The project\'s goal was a complete redesign of the online store: a better shopping experience, easier content management, and a look that matches the brand.',
      ],
      facts: [
        ['My role', 'UX Design, UI Design'],
        ['Client', 'Ania Kruk'],
        ['Agency', 'Move Closer'],
        ['Team', 'Wojtek Wawrzyniak, UX Design'],
        ['Date', '2023'],
      ],
    },
    {
      label: 'Project overview',
      blocks: [
        {
          head: 'Key Challenges',
          text: 'Ania Kruk was selling well, but the platform was holding the brand back. The outdated technology made content management and updates difficult. The user experience didn\'t support the sales potential. And the design no longer matched the image of a modern, trend-aware jewelry brand.',
        },
        {
          head: 'Discovery',
          text: 'We started with a UX audit of the existing site, which revealed the key usability problems. In-depth interviews with the Ania Kruk team during discovery workshops helped define business priorities and expectations for the new platform. In parallel, we analyzed competitors in e-commerce, particularly jewelry and fashion. All of this became a set of detailed user stories: the foundation for solutions that address real user needs.',
        },
        {
          head: 'Design',
          text: 'We began with low-fidelity wireframes, mapping the site structure, key content, and core functionalities. Then I created high-fidelity wireframes for the main views: homepage, product listing, product page, and search. After their approval, I designed the complete user interface for the entire site, presenting progress at weekly online consultations with the client.',
        },
      ],
      figures: ['03_c.webp'],
    },
    {
      label: 'Wireframes',
      text: [
        'High-fidelity wireframes let us discuss layout, key functionalities, and sales mechanisms in detail. Intentionally, they didn\'t include full branding yet. This kept the conversation focused on function and structure, avoiding the subjective opinions and strong emotions that early visual designs tend to trigger.',
      ],
      figures: ['02_Wireframes.webp'],
    },
    {
      label: 'Home Page',
      text: [
        'The homepage defined the visual style for the entire site. Working on this view, I established the foundations of the design system: typography, color palette, and grids.',
        'I based its structure on a flexible modular system, designed so the client can build and modify layouts for current marketing needs on their own.',
      ],
      figures: ['03_a.webp', '03_b.webp'],
    },
    {
      label: 'Shop the look',
      text: [
        'Clicking hotspots on a photo identifies the products and adds them to the cart. A dedicated "Add entire look to cart" CTA supports cross-selling. I designed the module in three versions, including a slider, so it fits different page contexts.',
      ],
      figures: [
        '04_a_1.webp',
        { src: '04_a_2.webp', join: true },
        { src: '04_a_3.webp', join: true },
        '04_b.webp',
      ],
    },
    {
      label: 'Product Listing Page',
      text: [
        'Category navigation and advanced filtering are the foundation of any product listing. My focus was mobile, the primary sales channel.',
        'I designed a view switcher: a grid with two products per row for quick scanning, or a single-product view. The single view lets users browse additional photos and add items to the cart or wishlist directly from the list, without opening the product page. Fewer steps, faster decisions.',
      ],
      figures: ['05_a.webp', '05_b.webp'],
    },
    {
      label: 'Product Detail Page',
      text: [
        'The product page looks simple but carries a lot: size selection with a guide, back-in-stock alerts, an in-store product locator with a map, club member pricing, and current promotions.',
        'All crucial information sits on a single page. Expandable accordions and slide-out drawers keep the layout clean and the user in the product context.',
      ],
      figures: ['06_a.webp', '06_b.webp', '06_c.webp'],
    },
    {
      label: 'Cart & Checkout',
      text: [
        'I redesigned the checkout from scratch. This is the part of the store where UX work translates most directly into conversion.',
        'I also designed extended gifting features: shipping to a different address with an e-receipt for the buyer, hiding the price on the gift tag, and a personalized note. Other improvements include editing product sizes directly in the cart, prompts for account creation and club membership, and simple handling of discount codes and gift cards.',
        'Returning customers get saved addresses, preferred delivery methods, and payment details, with easy data management in the account panel. Every next purchase is faster.',
      ],
      figures: ['08_a.webp', '08_b.webp', '08_c.webp'],
    },
    {
      label: 'Search',
      text: [
        'The search got a full redesign: popular products, popular searches, intuitive suggestions, and results divided by content type.',
      ],
      figures: ['09.webp'],
    },
    {
      label: 'Landing Pages',
      text: [
        'Landing pages need flexibility, so I extended the modular approach with a dedicated set of additional modules built specifically for them.',
        'Combined with the homepage modules, this gives the client a system to build any type of landing page (sales, brand, informational) by assembling modules, without developer involvement.',
      ],
      figures: ['07_a.webp', '07_b.webp', '07_c.webp', '07_d.webp', '07_e.webp', '07_f.webp'],
    },
    {
      label: 'Handoff',
      last: true,
      text: [
        'My work ended with a complete design handoff: hundreds of screens covering the entire store, a design system, and a modular library for building landing pages without a developer.',
        'Ania Kruk was designed the classic way: wireframes, Figma, handoff. Today I work differently, designing directly in code with AI. Same craft, but the deliverable is a working, clickable prototype instead of static mockups.',
      ],
    },
  ],
};
