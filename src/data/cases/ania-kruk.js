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
//     figLg      — duży odstęp tekst→figura (200/96) zamiast 48 (Introduction)
//     band       — figura = pełnoszerokościowy składak (tło cover.webp + apla + obiekt ui.webp)
//     last       — ostatnia sekcja (bez dolnego odstępu 200)
//     figures[]  — obrazki pod tekstem (pełna szerokość). Plik z /assets/work/<slug>/case/.
//                  Wpis = "nazwa.webp" (16px odstęp) lub { src:"nazwa.webp", join:true } (sklejony 0px).

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
        'Ania Kruk, a well-known Polish jewelry brand enjoying rapid sales growth, faced significant technological and usability challenges. Its outdated e‑commerce platform hindered further growth, generated high maintenance costs, and struggled to meet rising customer expectations.',
        'The project\'s goal was a comprehensive redesign of the online store to create a modern, intuitive, and flexible shopping environment that would support the brand\'s continued expansion.',
      ],
      facts: [
        ['My role', 'UX Design, UI Design'],
        ['Client', 'Ania Kruk'],
        ['Agency', 'Move Closer'],
        ['Date', '2023'],
      ],
    },
    {
      label: 'Project overview',
      blocks: [
        {
          head: 'Key Challenges',
          text: 'Despite its sales success, Ania Kruk\'s existing e-commerce platform faced fundamental challenges that limited its further growth and potential. Key problems included technological limitations of the outdated platform (making content management and updates difficult), a lack of user experience (UX) optimization (failing to support sales and brand image potential), and an outdated design that didn\'t reflect Ania Kruk\'s image as a modern, trend-aware brand.',
        },
        {
          head: 'Discovery',
          text: 'In the discovery phase, the key was to understand the project\'s foundations. I started with a UX audit of the existing site, which revealed key usability problems. Next, in-depth client interviews (Discovery Workshops) helped define business priorities and expectations for the new platform. In parallel, competitor analysis (Desk Research) provided valuable insights into best practices and solutions in the e-commerce sector, particularly for jewelry and fashion. This collected information allowed me to create detailed user stories, which became the foundation for designing solutions that address real user needs and use cases.',
        },
        {
          head: 'Design',
          text: 'I began the design process with low-fidelity wireframes, mapping out the site structure, key content, and core functionalities. Next, I created high-fidelity wireframes for the main views (homepage, product listing, product page, and search), accurately reflecting the final look, feel, and interactions. Following their approval, I designed the complete user interface for the entire site. I presented work progress during weekly online consultations with the client.',
        },
      ],
      figures: ['03_c.webp'],
    },
    {
      label: 'Wireframes',
      text: [
        'Creating high-fidelity wireframes was an important stage that allowed us to visualize the layout in detail and present key functionalities and sales-driving mechanisms. These mockups intentionally did not yet include full branding. This approach enabled us to precisely discuss crucial functional and structural aspects with the client, avoiding the subjective opinions and strong emotions that often arise when presenting initial versions of the final visual design.',
      ],
      figures: ['02_Wireframes.webp'],
    },
    {
      label: 'Home Page',
      text: [
        'The homepage design played a key role in defining a consistent visual style for the entire Ania Kruk service. While working on this view, I established the foundations of the design system (typography, color palette, and grids), giving the brand a unique and recognizable identity.',
        'I based the homepage structure on a flexible modular system. These modules were designed to enable the client to independently create and modify various layouts, fully tailored to their current communication or marketing needs, without requiring developer support.',
      ],
      figures: ['03_a.webp', '03_b.webp'],
    },
    {
      label: 'Shop the look',
      text: [
        'This feature excels at supporting both brand image and sales goals. Clicking interactive hotspots on the photo allows users to instantly identify products and add them to their cart. The dedicated "Add Entire Look to Cart" CTA drives cross-selling and boosts conversion rates. For maximum implementation flexibility and versatility, I designed this module in three distinct versions, including a slider format.',
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
        'Intuitive category navigation and advanced filtering are the absolute foundation of any effective Product Listing Page (PLP). I went a step further. My focus was on delivering full functionality and an optimal user experience, especially for mobile devices (the primary sales channel today).',
        'To cater to mobile users, I designed a list view switcher allowing a choice between a grid view (two products per row for quick scanning) and a single product view. The latter significantly enhances interaction, enabling users to preview additional photos and add items to their cart or wishlist directly from the list, without opening the Product Detail Page (PDP). This streamlines the decision-making process and ensures a more intuitive, seamless shopping experience.',
      ],
      figures: ['05_a.webp', '05_b.webp'],
    },
    {
      label: 'Product Detail Page',
      text: [
        'Deceptively simple, the Product Detail Page (PDP) conceals a wealth of advanced features and extensive, yet neatly tucked-away, informational sections. Key features include: size selection with a comprehensive guide, back-in-stock alerts, an in-store product locator (with an interactive map), exclusive club member pricing, and current promotional details.',
        'My design ensures all crucial information is accessible on a single page, minimizing unnecessary navigation. Expandable accordions and slide-out panels (drawers) maintain a clean, modern aesthetic while keeping users firmly in the product context.',
      ],
      figures: ['06_a.webp', '06_b.webp', '06_c.webp'],
    },
    {
      label: 'Cart & Checkout',
      text: [
        'I thoroughly redesigned the checkout process to make it as simple, fast, and intuitive as possible. Work in this area directly impacts conversion rates and helps build customer loyalty.',
        'Additionally, I enhanced the gifting features, allowing items to be shipped to a different address with an e-receipt for the buyer, an option to hide the price on the tag, and a personalized gift note. Other key improvements I implemented include the ability to edit product sizes directly in the cart, features encouraging account creation and club membership, and intuitive management of discount codes and gift cards.',
        'I also focused heavily on improvements for returning customers. Automated saving of addresses, preferred delivery methods, and payment details, combined with easy data management in the customer account panel, significantly speeds up and simplifies their future purchases.',
      ],
      figures: ['08_a.webp', '08_b.webp', '08_c.webp'],
    },
    {
      label: 'Search',
      text: [
        'The search was also thoroughly redesigned. I added a popular products section, popular searches, intuitive suggestions, and a division by content type.',
      ],
      figures: ['09.webp'],
    },
    {
      label: 'Landing Pages',
      last: true,
      text: [
        'Landing pages, given their dynamic nature and diverse objectives, require particular flexibility. Therefore, continuing the modular approach from the homepage, I designed a dedicated set of a dozen or so additional modules specifically for them.',
        'Combining these new elements with modules shared with the homepage creates a versatile system. This gives the client the freedom to independently build and modify landing pages of any type (for sales, brand-building, or purely informational purposes) by intuitively assembling selected modules, without needing developer involvement.',
      ],
      figures: ['07_a.webp', '07_b.webp', '07_c.webp', '07_d.webp', '07_e.webp', '07_f.webp'],
    },
  ],
};
