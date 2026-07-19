// Treść case study: Apaczka.
// Źródło treści (tekst + lista obrazków). Układ/CSS robi szablon
// src/pages/case-study/[slug].astro. Opis pól: patrz ania-kruk.js.
//
// Ten case: tła są WYPALONE w obrazkach (szare / czarne / fioletowe apaczki),
// więc NIE dokładamy kolorowych apli (panel). Obrazki idą pełną szerokością.
// Grupy a/b/c (04, 06, 09) = wspólne tło → sklejone przez { join:true } (0px),
// żeby wypalone tła zlały się w jedną ciągłą ramę.
// Mapowanie sekcja→obrazek po TREŚCI ekranu (numeracja plików nie pokrywa się 1:1 z sekcjami).

export const apaczka = {
  slug: 'apaczka',
  title: 'Apaczka',
  description: 'Technology platform redesign for Apaczka, Poland\'s leading parcel shipping service. Product design by Arek Sobczyk.',

  hero: {
    title: [
      { text: 'apaczka' },
      { text: 'smarter way', mute: true },
      { text: 'to ship', mute: true },
    ],
    intro: 'A technology platform for managing shipping processes',
    role: 'Product Design',
    year: '2024',
    cover: '00_hero.webp',   // kolaż ekranów na fioletowym tle (grafika kafla z HP), pełna szerokość
  },

  sections: [
    {
      label: 'Introduction',
      figLg: true,            // 200px odstęp tekst → obrazek
      text: [
        'Apaczka.pl is Poland\'s leading logistics platform for parcel shipping and delivery management. Facing strong competition, demanding customers, and outdated technology, the company decided to <strong>rebuild the platform from the ground up</strong>: UX, UI, and development. The goal was a modern tool that meets user needs, supports business objectives, and eliminates years of technical debt.',
      ],
      facts: [
        ['My role', 'Product Design'],
        ['Agency', 'Move Closer'],
        ['Date', '2024'],
        ['Team', 'Wojtek Wawrzyniak, UX Design'],
      ],
      figures: ['01.webp'],   // dashboard: laptop + telefon (Historia zleceń), pełna szerokość
    },
    {
      label: 'Key Challenges',
      // leady: akapit ciągły „Tytuł (czarny). Opis (szary z dużej litery)". Kropkę po tytule dokłada szablon.
      leads: [
        { lead: 'System complexity', text: 'Hundreds of screens, processes, and integrations.' },
        { lead: 'Outdated architecture', text: 'Difficult to maintain and scale.' },
        { lead: 'UX debt', text: 'Unintuitive user flows, years without optimization.' },
        { lead: 'New business models', text: 'Paid services in the PRO section needed a home.' },
      ],
      figures: ['10.webp'],   // mobile: rozliczenia / oceny / panel (fioletowe tło)
    },
    {
      label: 'Process',
      text: [
        'We started with a platform audit and competitor analysis. Then came <strong>strategic workshops with the Apaczka team</strong>: business requirements, technical constraints, and the legal framework of the shipping market.',
        'Based on these insights, we designed <strong>user flows, UX wireframes, and finally the full UI</strong> with a style guide. At this scale, close collaboration with key stakeholders from multiple departments was part of the daily routine.',
      ],
      figures: ['02.webp'],   // mapy historyjek + mind mapy + proces reklamacji (czarne tło)
    },
    {
      label: 'Dashboard',
      text: [
        'The old start page was just an order form. We replaced it with a dashboard displaying <strong>key data at a glance</strong>, so users see the most important information the moment they log in.',
      ],
      figures: ['03.webp'],   // Panel klienta (fioletowe tło)
    },
    {
      label: 'Order Form',
      text: [
        'We redesigned the order form from scratch, splitting it into <strong>three zones: data entry, dynamic tips and notifications, and carrier offers</strong>. The process got faster and easier to follow.',
      ],
      figures: [
        '04-a.webp',                                         // desktop (Nadawca + Przesyłka)
        // mobile: formularz + menu, obok siebie (rozbity stary 04-b).
        // bg = apla na pełną szerokość w kolorze wypalonej szarości; width 90% zwęża same obrazki.
        { row: ['04-b1.webp', '04-b2.webp'], gap: '32px', width: '90%', bg: '#F2F2F2' },
      ],
    },
    {
      label: 'Mobile',
      text: [
        '<strong>Full functionality on mobile.</strong> Rather than shrinking desktop screens, we redesigned many mechanisms specifically for smaller devices.',
      ],
      figures: ['05.webp'],   // kolaż ekranów mobilnych (fioletowe tło)
    },
    {
      label: 'Apaczka PRO',
      text: [
        'We completely rethought the premium section: <strong>packages instead of single services</strong>. We designed the purchase flows, dashboards, configuration pages, and the up- and cross-selling mechanisms around them.',
      ],
      figures: [
        '06-a.webp',                                         // pakiety PRO desktop
        // pakiety PRO mobile: Pakiet XS + Dostępne w wyższych pakietach (rozbity stary 06-b)
        { row: ['06-b1.webp', '06-b2.webp'], gap: '32px', width: '90%', bg: '#F2F2F2' },
        // dashboardy PRO (rozbity stary 07) — 2 rzędy po 2
        { row: ['07-a1.webp', '07-a2.webp'], gap: '32px', width: '90%', bg: '#F2F2F2' },  // zlecenia + oceny klientów
        { row: ['07-b1.webp', '07-b2.webp'], gap: '32px', width: '90%', bg: '#F2F2F2' },  // pobrania + Pro Returns
      ],
    },
    {
      label: 'Service configuration',
      text: [
        'Service configuration screens continue the PRO experience. <strong>A live preview in the right column shows users the effect of their input as they type.</strong>',
      ],
      figures: ['08.webp'],   // PRO Brand / PRO Returns — konfig z live preview (fioletowe tło)
    },
    {
      label: 'Complete shipping ecosystem',
      text: [
        'Beyond core shipping features, the platform covers the tools businesses need daily: help and support, user accounts, claims, invoices, integrations, imports, and contract management. <strong>Everything about shipping in one place.</strong>',
      ],
      figures: [
        '09-a.webp',                      // rejestracja / onboarding
        // b1 (reklamacja) + b2 (szczegóły przesyłki) OBOK SIEBIE.
        // gap 32px działa w obu osiach: między nimi ORAZ nad rzędem i pod nim (odseparowany blok).
        { row: ['09-b1.webp', '09-b2.webp'], gap: '32px', width: '90%', bg: '#F2F2F2' },
        '09-c.webp',                      // zwrot
      ],
    },
    {
      label: 'Design System',
      text: [
        'To keep hundreds of screens consistent, I built a <strong>design system</strong>: typography, color, components, and interaction patterns. It sped up development and made the platform easier to scale.',
      ],
      figures: ['11.webp'],   // style guide (Typography / Colors / Buttons / Forms / Komunikaty)
    },
    {
      label: 'Impact',
      last: true,
      text: [
        'The new Apaczka.pl <strong>works differently in every key flow</strong>. Users start from a dashboard instead of a form, order shipments in a clear three-zone process, manage everything from mobile, and buy PRO services as packages. The design system keeps it consistent across hundreds of screens and gives the platform room to grow.',
      ],
    },
  ],
};
