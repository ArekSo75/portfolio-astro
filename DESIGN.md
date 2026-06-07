# DESIGN.md — Portfolio Arka Sobczyka (Astro)

Jedno źródło prawdy dla wyglądu serwisu. Czytaj na starcie każdej sesji nad kodem.
Kod-poziom: kolory żyją w `src/styles/global.css` `:root`. Ten plik opisuje cały system (kolory, typografia, grid, komponenty, motion, responsywność), żeby HP, About i przyszłe podstrony (case studies, blog) trzymały jeden standard.

> Uzasadnienia decyzji (*dlaczego* tak): `super-brain/3-Projects/portfolio/decisions/`.

---

## 1. Kolory (`global.css :root`)

**Zasada nazewnictwa:** nazwa mówi CZYM kolor jest (primityw), nie do czego akurat służy. Szarości na skali (wyższy numer = ciemniejszy). Biały tekst = `--white`, nigdy `--bg`.

| Token | Hex | Gdzie używane |
|---|---|---|
| `--white` | `#FFFFFF` | tło strony, tło menu, tło kółka kursora |
| `--black` | `#000000` | tekst główny, kulki, podkreślenia |
| `--gray-300` | `#AEB3BD` | linie / dividery / stroke chipsów |
| `--gray-500` | `#8B9298` | przygaszony tekst: opisy, role, rok |
| `--lime` | `#BEE900` | kulka przed tekstem w chipsach Skills/Industries |

**Kolory klienckie NIE są tokenami.** Tła kafelków case study (`#FF4B36` K2 Bank, `#EEF3F1` woshwosh) to marka klienta, żyją jako dane w `src/data/work.js` (pole `bgColor`), nie w `:root`.

---

## 1a. Skala odstępów (`global.css :root`)

Ósemkowa. **Używaj `var(--space-N)`, nie wpisuj px ręcznie** (jak style tekstowe). Tokeny: `--space-8/12/16/24/32/40/48/64/80/96/120/200`.

Wartości poza skalą (świadome wyjątki, zostają literalne): 20px (górny padding sekcji na mobile), 60px, oraz wnętrza chipsów (8/18, 10/28, 6/14) — chipsy do uporządkowania osobno.

Layout: `--nav-h: 76px` (wysokość sticky nav, do wzoru wysokości strefy hero `calc(Xvh - var(--nav-h))`).

---

## 2. Typografia

**Font:** Geist (Google Fonts), wagi 400 / 500 / 600. Domyślna **500**.

### Skala (desktop → mobile)
| Element | Desktop | Mobile | line-height |
|---|---|---|---|
| Hero headline (h1) | 4.78vw (~68.8px @1440) | 7.6vw | 1.0 |
| Tytuł sekcji / Contact | 55px | 36px | 60 / 40px |
| Statement, daty Experience, chipsy Skills, Send | 40px | 28px | 44 / 32px |
| Tekst bazowy: śródtytuły, listy, chipsy Industries, opisy | 20px | 20px | 28px |

### Tracking (letter-spacing) — STANDARD
- **Duże fonty (display): `-0.03em`** — tytuły sekcji 55, statementy/daty/Skills 40
- **Tekst 20px: `-0.02em`** — minimalnie ciaśniej, żeby nie odstawał
- Reguła: jedna wartość proporcjonalna (em), skaluje się sama desktop→mobile

> Wyjątek (legacy, `global.css`, wspólne z HP): **hero h1, Send, stopka Contact/email** mają `-0.035em` / `-1.9px`. Są odrobinę ciaśniejsze. Docelowo do zrównania z `-0.03em` przy rewizji HP. Arek świadomie zostawił je na teraz.

### Style tekstowe = klasy `.t-*` (odpowiednik stylów tekstowych z Figmy) — UŻYWAJ ICH
Jedno źródło prawdy w `global.css` (rozmiar + interlinia + tracking + waga, z mobile w środku). **Nie wpisuj liczb fontów ręcznie — nadawaj klasę w markupie.** To uniemożliwia rozjazd (np. pomyłkę trackingu).

| Klasa | Desktop | Mobile | Tracking | Gdzie |
|---|---|---|---|---|
| `.t-display-55` | 55/60 | 36/40 | -0.03em | tytuły sekcji (`.sec-title`) |
| `.t-display-40` | 40/44 | 28/32 | -0.03em | daty Experience, chipsy Skills, intro case study |
| `.t-body-20` | 20/28 | 20/28 | -0.02em | nav, section-head, podpisy, bio, opisy, Industries, role/rok |
| `.t-eyebrow` | 20/28 WERSALIKI | jak desktop | -0.02em | śródtytuły w szynie sekcji (Section.astro) |
| `.t-note-16` | 16/22 | 16/22 | -0.02em | małe noty (np. "Awarded to only...") |

- **Hero h1** (vw-based, legacy -0.035em) i **Send / stopka** zostają poza systemem klas (patrz wyjątek wyżej) — mają własne reguły w `global.css`.
- Wyjątki per element (inny rozmiar mobile niż klasa) robi się dodatkową regułą scoped, np. chipsy Skills na mobile schodzą do 20px (`.tags-lg li` w `about.astro`).
- Bezpiecznik w resecie: `h1–h6 { font-size: inherit; font-weight: inherit; }` — nagłówki nie noszą domyślnych rozmiarów przeglądarki, typografią steruje klasa.

### Śródtytuł sekcji (rail label)
20px, **WERSALIKI**, kolor `--black`, z kulką przed tekstem: średnica `1em` (= wysokość fontu), kolor `--black`.

---

## 3. Grid i layout

- **Wrap:** pełna szerokość, padding `0 32px` (mobile `0 16px`).
- **Strefa hero:** `85vh` (`calc(85vh - 76px)` na strefę nad "Selected work").
- **Grid sekcji (model 12 kolumn, tekst = 6/12):**
  - lewa szyna (śródtytuł) `40%` | kolumna treści `51.64%` | prawy margines `8.36%` (≈ **147px @1440**)
  - lewa krawędź treści pokrywa się z lewą krawędzią headline hero
  - mobile: jedna kolumna (śródtytuł nad treścią)
  - logotypy i inne treści sekcji dziedziczą prawy margines 147px
- **Odstępy:**
  - między sekcjami: **200px** (mobile 96px)
  - linia → śródtytuł: **40px**
  - tytuł 55px → content: **80px** (wyjątek Education & Courses: 24px)

---

## 4. Komponenty

### Chipsy (Skills / Industries)
Pigułka: `border 1px var(--line)`, `border-radius 999px`, padding ~`8px 18px` (Skills `10px 28px`).
Kulka przed tekstem: **12px**, `#BEE900`.
Skills = font 40px, Industries = font 20px.

### Wiersz Experience
- firma + stanowisko: czarne, 20px
- opis: `--muted`, 20px (pod spodem)
- data: 40px czarna, dociągnięta w prawo
- divider 1px `--line` nad każdym wierszem
- **mobile:** układ jednokolumnowy, data wędruje na dół (firma/rola → opis → data, prawo)

### Wiersze Education / Courses
- tytuł: czarny 20px; wartość po prawej: czarna 20px; opis/nota: `--muted` 20px
- Education: opis pod lewą kolumną. Courses: nota pod prawą (dociągnięta w prawo)

### Rzędy obrazków (projekty)
- **naturalne proporcje, bez kadrowania**, `border-radius 6px`
- pod hero: 3 szt (mobile 2: Ania + Namoi), widoczne od razu (bez animacji reveal)
- nad stopką: 4 szt (mobile 2: Gallery + 3digits)

### Logotypy klientów
Jeden obraz, `max-width 800px`, w kolumnie treści.

### Standard linków
- bez podkreślenia (nav, social): linia rośnie lewo→prawo na hover
- z podkreśleniem (Send, email): sweep lewo→prawo, reverse na zjeździe
- `.brand` (logo) celowo bez animacji

---

## 5. Motion

- **Silnik:** Motion (motion.dev), ten sam co Framer. Wspólny EASE `[0.16, 1, 0.3, 1]`.
- **Hero, sekwencja otwierająca:** maska odkrywa obrazek od dołu → headline słowo po słowie → linki fade.
- **Scroll reveal:** natywny IntersectionObserver, klasa `.reveal`. Rzędy obrazków NIE animowane.
- Wszystko respektuje `prefers-reduced-motion`.

---

## 6. Responsywność

- Breakpoint: **800px** (`@media (max-width: 800px)`).
- Mobile: marginesy 16px, grid sekcji 1-kolumnowy, nav → hamburger + pełnoekranowe menu.
- Skala fontów wg tabeli w sekcji 2 (55→36, 40→28, 20→20).

---

## 7. Do / Don't

- ✅ Mierz, nie zgaduj (pomiar żywej strony / Figmy). Patrz `[[Figma do Kodu - Workflow]]` w SB.
- ✅ Kolory tylko przez zmienne `--*`, zero hardkodów hex w komponentach.
- ✅ Tracking dużych fontów `-0.03em`, 20px `-0.02em`.
- ❌ Nie kadruj obrazków projektów (naturalne proporcje).
- ❌ Nie dawaj treści sekcji do prawej krawędzi (margines 147px).
- ❌ Nie mieszaj bibliotek animacji (Motion + natywny IO + CSS transitions, każde ma swoją rolę).
