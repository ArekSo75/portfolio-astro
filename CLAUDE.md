# Portfolio Arka Sobczyka (Astro)

Instrukcja projektu dla agenta. Czytaj na starcie sesji nad tym kodem.

## Cel
Lekki, statyczny serwis portfolio na własnej domenie `areksobczyk.com` (darmowy hosting), zamiast płatnego Framera. Odtworzone wiernie z oryginału, rozwijane o kolejne podstrony.

## Stan
- ✅ Strona główna (`/`) i About (`/about`) gotowe
- ✅ Case study = szablon sterowany danymi. Treść w `src/data/cases/<slug>.js`, układ w `src/pages/case-study/[slug].astro`. Gotowe: Ania Kruk, K2 Bank, woshwosh, Apaczka (komplet).
- ✅ Hosting + domena `areksobczyk.com` (Netlify, auto-deploy z push na `main`)
- ⬜ Blog

## Jak dodać case study
1. Skopiuj `src/data/cases/ania-kruk.js` jako `src/data/cases/<slug>.js`, wypełnij treścią (komentarze w pliku tłumaczą każde pole).
2. Dopisz import + wpis w `src/data/cases/index.js`.
3. Wrzuć obrazki do `public/assets/work/<slug>/case/` (+ `cover.webp`/`ui.webp` dla składaka i kafelka HP).
4. W `src/data/work.js` ustaw `href: '/case-study/<slug>'` na kafelku.
Strona generuje się sama z szablonu. Układ/CSS zmieniasz RAZ w `[slug].astro` = wchodzi do wszystkich case studies.

Sekcja **„Next projects"** na dole case study robi się sama: szablon bierze z `work.js` kolejne 2 wpisy z wewnętrznym linkiem (rotacja po kole, Behance i kafle bez linku pominięte). Nowy case w `work.js` = wpina się do rotacji wszędzie, bez dopisywania czegokolwiek.

## Źródło prawdy
- **`DESIGN.md`** (ten folder) : kompletny design system : kolory, typografia + tracking, grid, komponenty, motion, responsywność. **Buduj z tych wartości, NIE zgaduj.** Czytaj zanim ruszysz CSS.
- Kolory na poziomie kodu: `src/styles/global.css` `:root`.
- Uzasadnienia decyzji (*dlaczego*): `super-brain/3-Projects/portfolio/decisions/`.
- Workflow Figma → kod: `super-brain/5-Knowledge/AI/Figma do Kodu - Workflow.md`.

## Stack i struktura
Astro (statyczny output). Animacje: biblioteka **Motion** (motion.dev, ten sam silnik co Framer), bundlowana z npm.
- `src/layouts/Layout.astro` : szkielet (head, nav, stopka, menu, skrypt) raz dla każdej strony, treść przez `<slot/>`
- `src/components/` : `Nav`, `Footer`, `MobileMenu`, `Tile`, `Section`
  - **`Section.astro`** : sekcja tekstowa (grid: szyna etykiety + kolumna treści). Wspólna dla About i case studies. Props: `label` (śródtytuł), `line` (linia na górze, domyślnie true; case study zwykle `line={false}`), `last` (bez dolnego odstępu). Treść przez `<slot/>`, kolory/typografię nadaje treść klasami `t-*` i `.muted`. Styl w `global.css` (`.section*`).
- `src/pages/` : `index.astro` (HP), `about.astro`, `case-study/[slug].astro` (szablon case study)
- `src/data/work.js` : siatka prac sterowana danymi (dodanie pracy = 1 wpis, nie kopiowanie HTML)
- `src/data/cases/` : treść case studies. `<slug>.js` (jeden plik = jeden case: tekst + lista obrazków), `index.js` (rejestr). Układ robi szablon `case-study/[slug].astro`.
- `src/styles/global.css` : style współdzielone (HP + podstrony)
- `src/scripts/main.js` : animacje (Motion + IntersectionObserver + CSS transitions)
- `public/assets/` : grafiki (webp). Struktura:
  - `assets/site/` : grafika wspólna serwisu, nie projektowa (`hero/` slideshow HP + rzędy About, `about/` arek.webp + brands.webp)
  - `assets/work/[projekt]/` : jeden folder na projekt. `cover.webp` (tło kafelka) + `ui.webp` (obiekt), oraz `case/` na obrazki do case study. Nazwy folderów małymi literami z myślnikiem (jak URL): `ania-kruk`, `k2-bank`, `home-gallery`.
  - W `work.js` ścieżki podajesz od `/assets/` (np. `cover: 'work/ania-kruk/cover.webp'`); `Tile.astro` dokleja prefix `/assets/`.
  - favicony zostają w roocie `public/`.

Style specyficzne dla podstrony trzymaj w jej `<style>` (scoped), wspólne w `global.css`.

**Typografia = klasy `.t-*` (style tekstowe jak w Figmie).** Rozmiar/interlinia/tracking/waga są zdefiniowane RAZ w `global.css` (`.t-display-55`, `.t-display-40`, `.t-body-20`, `.t-note-16`, mobile w środku). W nowym kodzie nadawaj klasę w markupie (np. `class="exp-years t-display-40"`), **nie wpisuj liczb fontów ręcznie** — inaczej wraca rozjazd. Pełna tabela i wyjątki: `DESIGN.md` → „Style tekstowe".

## Model kafelka pracy (`Tile.astro`)
Dwie warstwy: **tło** (`background-image` na `.tile-media`, cover) + **obiekt** (`img.shot`, domyślnie 100% szerokości, wysokość auto, wyśrodkowany). Wyjątki per kafel przez tokeny inline:
- `--ar` na `.tile-media` : proporcje. Domyślnie `1 / 0.86`, kwadrat `1 / 1`
- `--shot-w` na `img.shot` : szerokość obiektu. Domyślnie `100%`
- `--overlay` na `.tile-media` : czarna apla 0–1. Domyślnie brak

## Jak uruchomić podgląd
```
cd portfolio-astro && npm run dev -- --host
```
- Lokalnie: `http://localhost:4321/`
- Na telefonie (ta sama WiFi): `http://<IP-maca>:4321/` (IP: `ipconfig getifaddr en0`)
- Astro ma HMR : zmiany wchodzą bez bumpowania `?v=N` (to było w starym czystym HTML, tu NIE potrzeba).

**Pułapka HMR:** czasem dev server zacina się na scoped CSS i serwuje starą wersję ("nie widać zmiany"). Wtedy zrestartuj: ubij proces (`pkill -f "astro dev"`), odpal ponownie. Build (`npm run build`) zawsze odzwierciedla aktualny plik.

iOS Safari mocno cache'uje : na telefonie testuj w karcie prywatnej.

## Jak weryfikować
- **Arek ocenia wizualnie w przeglądarce i daje uwagi punktami. Ty zmieniasz.**
- Playwright używaj TYLKO do diagnozy/pomiaru (computed style, pozycje, czy reguła weszła), nie do własnych ocen wizualnych ani porównań bez prośby.
- Mierz konkretne wartości (font-size, letter-spacing, odstępy), nie "na oko".

## Zasady pracy z Arkiem
- Arek jest nietechniczny. Tłumacz po ludzku, bez żargonu. Krótko, listy.
- Bez em-dash ("—") w odpowiedziach (reguła z głównego systemu).
- **Arek mówi co zmienić, Ty zmieniasz.** Bez własnych analiz/audytów/porównań bez wyraźnej prośby.
- Po większych zmianach: `npm run build` dla pewności że się kompiluje.
