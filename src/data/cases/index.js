// Rejestr wszystkich case studies. Nowy case study:
//   1) dodaj plik src/data/cases/<slug>.js (skopiuj ania-kruk.js jako wzór)
//   2) zaimportuj go tutaj i dopisz do tablicy cases
// Szablon src/pages/case-study/[slug].astro generuje stronę z każdego wpisu.
import { aniaKruk } from './ania-kruk.js';
import { k2Bank } from './k2-bank.js';
import { woshwosh } from './woshwosh.js';

export const cases = [
  aniaKruk,
  k2Bank,
  woshwosh,
];
