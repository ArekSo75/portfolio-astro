// Lista prac na stronie głównej (sekcja "Selected work").
// Dodanie nowej pracy = jeden wpis tutaj, nie kopiowanie HTML.
//
// Pola kafelka:
//   title, desc, role, year  — teksty pod miniaturą
//   href                      — dokąd prowadzi kafelek:
//                                 wewnętrzny (np. "/case-study-ania-kruk") | zewnętrzny (https://...) | brak (kafel nieklikalny)
//   external: true            — link zewnętrzny (otwiera w nowej karcie, rel noopener)
//   badge                     — tekst w kółku pod kursorem ("See Case" / "View on Behance" / "Soon...")
//   wide: true                — kafel na pełną szerokość siatki
//   media:
//     cover                   — plik tła (background-image), ścieżka od /assets/, np. "work/ania-kruk/cover.webp"
//     bgColor                 — zamiast tła zdjęciowego, jednolity kolor             (np. "#fb4a36")
//     shot                    — obiekt na wierzchu (img), np. "work/ania-kruk/ui.webp"
//     ar                      — proporcje pudełka (np. "1 / 1"); brak = domyślne z CSS
//     shotW                   — szerokość obiektu (np. "90%"); brak = 100%
//     overlay                 — czarna apla 0–1 między tłem a obiektem; brak = 0

export const work = [
  {
    title: 'Ania Kruk',
    desc: 'e-commerce for jewellery brand',
    role: 'UX/UI design',
    year: '2023',
    href: '/case-study/ania-kruk',
    badge: 'See Case',
    media: { cover: 'work/ania-kruk/cover.webp', shot: 'work/ania-kruk/ui.webp', overlay: 0.6 },
  },
  {
    title: 'Home Gallery',
    desc: 'An online store for ready-to-hang fine art prints',
    role: 'UX/UI design',
    year: '2024',
    badge: 'Soon...',
    media: { cover: 'work/home-gallery/cover.webp', shot: 'work/home-gallery/ui.webp', ar: '1 / 1' },
  },
  {
    title: 'Apaczka by Alsendo',
    desc: 'A technology platform for managing shipping processes',
    role: 'Product design',
    year: '2024',
    href: '/case-study-apaczka',
    badge: 'See Case',
    wide: true,
    media: { cover: 'work/apaczka/cover.webp', shot: 'work/apaczka/ui.webp', shotW: '90%' },
  },
  {
    title: 'K2 Internet',
    desc: 'Brand refresh & website for digital agency',
    role: 'UI design, Branding, Art direction',
    year: '2018',
    href: 'https://www.behance.net/gallery/76906329/K2-agency-brand-refresh-website-redesign',
    external: true,
    badge: 'View on Behance',
    media: { cover: 'work/k2-internet/cover.webp', shot: 'work/k2-internet/ui.webp', ar: '1 / 1' },
  },
  {
    title: 'K2 Bank',
    desc: 'AI-powered assistant for personal banking',
    role: 'UI design, Art direction',
    year: '2016',
    href: '/case-study/k2-bank',
    badge: 'See Case',
    media: { bgColor: '#fb4a36', shot: 'work/k2-bank/ui.webp', shotW: '92%' },
  },
  {
    title: 'PKO Bank Polski',
    desc: 'Main website for the largest bank in Poland',
    role: 'UI design',
    year: '2016',
    href: 'https://www.behance.net/gallery/56434179/PKO-Bank-Polski-website',
    external: true,
    badge: 'View on Behance',
    media: { cover: 'work/pko/cover.webp', shot: 'work/pko/ui.webp', ar: '1 / 1' },
  },
  {
    title: 'woshwosh',
    desc: 'an app for ordering professional shoe cleaning',
    role: 'UX/UI design',
    year: '2022',
    href: '/case-study-woshwosh',
    badge: 'See Case',
    media: { bgColor: '#EEF3F1', shot: 'work/woshwosh/cover.webp', shotW: '85%' },
  },
];
