// Animacje portfolio. Silnik: Motion (motion.dev) — ten sam co we Framerze.
// Import z pakietu npm (Astro/Vite bundluje), nie z CDN.
import { scroll, animate, stagger } from "motion";


// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// wspólny easing (easeOutExpo) — używany w menu i sekwencji otwierającej
const EASE = [0.16, 1, 0.3, 1];

// Mobile menu (hamburger <-> X, fullscreen overlay)
const overlay = document.getElementById('menuOverlay');
const openBtn = document.getElementById('menuOpen');
const menuReduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// linki menu: każde słowo w masce (ml-word wyjeżdża od dołu), jak headline
const menuWords = [];
if (overlay) {
  overlay.querySelectorAll('.menu-links a').forEach((a) => {
    const txt = a.textContent.trim();
    a.textContent = '';
    const mask = document.createElement('span'); mask.className = 'ml-mask';
    const word = document.createElement('span'); word.className = 'ml-word'; word.textContent = txt;
    mask.appendChild(word); a.appendChild(mask);
    menuWords.push(word);
  });
}

function openMenu() {
  overlay.classList.add('open');
  if (openBtn) openBtn.classList.add('open');     // hamburger -> X
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('menu-open');
  document.body.style.overflow = 'hidden';
  // linki wjeżdżają z dołu ze staggerem (jak headline)
  if (!menuReduce && menuWords.length) {
    menuWords.forEach((w) => { w.style.transform = 'translateY(110%)'; });
    animate(menuWords, { y: ['110%', '0%'] }, { duration: 0.7, delay: stagger(0.06), ease: EASE });
  } else {
    menuWords.forEach((w) => { w.style.transform = 'none'; });
  }
}
function closeMenu() {
  overlay.classList.remove('open');
  if (openBtn) openBtn.classList.remove('open');  // X -> hamburger
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('menu-open');
  document.body.style.overflow = '';
  // reset słów, żeby przy kolejnym otwarciu znów wjechały
  menuWords.forEach((w) => { w.style.transform = 'translateY(110%)'; });
}
function toggleMenu() {
  if (overlay.classList.contains('open')) closeMenu(); else openMenu();
}

if (openBtn) openBtn.addEventListener('click', toggleMenu);   // ten sam przycisk otwiera i zamyka
if (overlay) {
  overlay.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
}
// Esc zamyka menu
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

// --- Kafelki: animacja na scroll (silnik Motion, ten sam co we Framerze) ---
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Obiekt każdego kafelka: subtelny scale 1.05 -> 1 w miarę wchodzenia w ekran.
// Tło (cover na .tile-media) zostaje nieruchome. Działa na desktop i mobile.
if (!reduceMotion) {
  document.querySelectorAll('.tile .shot').forEach((shot) => {
    scroll(
      animate(shot, { scale: [1.05, 1] }, { ease: 'linear' }),
      { target: shot.closest('.tile-media'), offset: ['start end', 'center center'] }
    );
  });
}

// --- Hero: zapętlona wymiana 4 obrazków (crossfade) ---
const heroShots = [...document.querySelectorAll('.hero-shot')];
if (heroShots.length > 1 && !reduceMotion) {
  let cur = 0, z = 1;
  const HOLD = 700;         // ile zdjęcie wisi (ms) — jak w oryginale
  const FADE = 0.25;        // długość przejścia (s)
  // utwardzony start: tylko pierwszy widoczny, reszta przezroczysta, znane z-index
  heroShots.forEach((s, i) => { s.style.opacity = i === 0 ? '1' : '0'; s.style.zIndex = i === 0 ? '1' : '0'; });
  // tylko WCHODZĄCY obrazek animujemy (0->1) na wierzchu; poprzedni zostaje pełny pod spodem,
  // więc nigdy nie ma przezroczystej dziury = brak migotania
  setInterval(() => {
    cur = (cur + 1) % heroShots.length;
    const el = heroShots[cur];
    el.style.opacity = '0';
    el.style.zIndex = String(++z + 1);
    animate(el, { opacity: 1 }, { duration: FADE, ease: 'easeOut' });
  }, HOLD);
}

// === SEKWENCJA OTWIERAJĄCA: 1) obrazek z dołu  2) headline  3) Send ===

// 1) obrazek hero: maska rozsuwa się od dołu (clip-path) + subtelny ruch obrazka w górę pod maską
const heroMedia = document.querySelector('.hero-media');
const heroStack = document.querySelector('.hero-stack');
if (heroMedia) {
  if (reduceMotion) {
    heroMedia.style.clipPath = 'none';
    if (heroStack) heroStack.style.transform = 'none';
  } else {
    setTimeout(() => {
      animate(
        heroMedia,
        { clipPath: ['inset(100% 0 0 0 round 4px)', 'inset(0% 0 0 0 round 4px)'] },
        { duration: 1.0, ease: EASE }
      );
      if (heroStack) animate(heroStack, { y: ['10%', '0%'] }, { duration: 1.0, ease: EASE });
    }, 100);
  }
}

// 2) Headline: mask reveal słowo po słowie (jak rejouice.com), startuje chwilę po obrazku
// każde słowo w masce (overflow:hidden), wewnętrzny span wyjeżdża od dołu (translateY 115% -> 0)
const headline = document.querySelector('.hero-text h1');
if (headline) {
  // Zbierz słowa zachowując wyróżnienie: fragment w <span class="hl-mute"> dostaje szary kolor
  // (case study: czarna nazwa + szary opis). Bez hl-mute = wszystko czarne (HP/About bez zmian).
  const tokens = [];
  headline.childNodes.forEach((node) => {
    if (node.nodeType === 1 && node.tagName === 'BR') { tokens.push({ br: true }); return; }  // wymuszone złamanie wiersza
    const mute = node.nodeType === 1 && node.classList && node.classList.contains('hl-mute');
    node.textContent.trim().split(/\s+/).filter(Boolean).forEach((w) => tokens.push({ w, mute }));
  });
  headline.textContent = '';
  const wordEls = [];
  tokens.forEach((tok, i) => {
    if (tok.br) { headline.appendChild(document.createElement('br')); return; }
    // rozbij słowo po myślniku, zostawiając "-" przy lewej części ("human-centered" -> ["human-", "centered"]),
    // żeby mogło się złamać do następnego wiersza (każde słowo to osobny blok maski, więc bez tego nie pęka)
    const parts = tok.w.split(/(?<=-)/);
    parts.forEach((p, j) => {
      const mask = document.createElement('span');
      mask.className = 'mask';
      const inner = document.createElement('span');
      inner.className = 'word';
      if (tok.mute) inner.classList.add('word--mute');
      inner.textContent = p;
      mask.appendChild(inner);
      headline.appendChild(mask);
      // między częściami tego samego słowa: punkt podziału bez widocznej spacji (zero-width space)
      if (j < parts.length - 1) headline.appendChild(document.createTextNode('\u200B'));
      wordEls.push(inner);
    });
    // spacja po słowie tylko gdy następny token to też słowo (nie <br>, nie koniec)
    if (i < tokens.length - 1 && !tokens[i + 1].br) headline.appendChild(document.createTextNode(' '));
  });

  if (reduceMotion) {
    wordEls.forEach((el) => { el.style.transform = 'none'; });
  } else {
    // startuje po obrazku; słowa wyjeżdżają ze staggerem (easeOutExpo)
    setTimeout(() => {
      animate(
        wordEls,
        { y: ['115%', '0%'] },
        { duration: 0.9, delay: stagger(0.03), ease: EASE }
      );
    }, 450);
  }
}

// 3) Linki pod headline (Send me a message / Learn more about me) — na końcu,
// delikatny fade + lekki wjazd od dołu. HP ma jeden link, About dwa (kaskada przez stagger).
const sendLinks = document.querySelectorAll('.send');
if (sendLinks.length) {
  if (reduceMotion) sendLinks.forEach((l) => { l.style.opacity = '1'; });
  else setTimeout(() => animate(sendLinks, { opacity: [0, 1], y: [24, 0] }, { duration: 0.6, delay: stagger(0.08), ease: EASE }), 1150);
}

// --- Kółko przyklejone do kursora (See Case / View on Behance / Soon...) ---
// Tylko urządzenia z prawdziwą myszą. Na dotyku (mobile) pomijamy.
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

if (finePointer) {
  document.body.classList.add('cursor-badge-on');   // włącza chowanie kursora na obrazku (CSS)

  const badge = document.createElement('div');
  badge.className = 'cursor-badge';
  badge.innerHTML = '<span></span>';
  document.body.appendChild(badge);
  const label = badge.querySelector('span');

  // spring jak we Framerze (Physics: Stiffness 500, Damping 60, Mass 1)
  const spring = { type: 'spring', stiffness: 500, damping: 60, mass: 1 };

  // kółko pojawia się TYLKO na obrazku kafelka (.tile-media), nie na podpisie pod spodem
  document.querySelectorAll('.tile-media').forEach((media) => {
    const tile = media.closest('.tile');
    media.addEventListener('pointerenter', () => {
      label.textContent = (tile && tile.dataset.badge) || 'See Case';
      animate(badge, { opacity: 1 }, spring);
    });
    media.addEventListener('pointerleave', () => {
      animate(badge, { opacity: 0 }, { duration: 0.15, ease: 'easeOut' });  // wygaszanie szybsze
    });
  });

  // pozycja ustawiana wprost pod kursor (bez lerpa = bez dojazdu z boku, samo opacity robi pojawianie)
  window.addEventListener('pointermove', (e) => {
    badge.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  });
}
