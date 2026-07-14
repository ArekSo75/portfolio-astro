// Treść case study: K2 Bank.
// Źródło treści (tekst + lista obrazków). Układ/CSS robi szablon
// src/pages/case-study/[slug].astro. Opis pól: patrz ania-kruk.js.

export const k2Bank = {
  slug: 'k2-bank',
  title: 'K2 Bank',
  description: 'K2 Bank: a 2016 concept for conversational, AI-powered banking. UI design and art direction by Arek Sobczyk.',

  hero: {
    title: [
      { text: 'K2 Bank' },
      { text: 'the future', mute: true },
      { text: 'of banking', mute: true },
    ],
    intro: 'AI-powered assistant for personal banking',
    introNoWrap: true,
    role: 'UI design, art direction',
    year: '2016',
    cover: 'K2_Case_BOT_v01.webp',
  },

  sections: [
    {
      label: 'Introduction',
      figLg: true,
      text: [
        'K2 Bank is a concept of a bank built entirely around conversation. In 2016, years before AI assistants became everyday tools, the goal was to reimagine digital banking and show banks how their relationship with customers could look: simpler, more personal, more human. A personal financial advisor, accessible to everyone.',
        'At its core is BankBot, an intelligent assistant that understands natural language. Sending money is as easy as telling it the amount and the recipient\'s name. Checking expenses, opening a deposit, or canceling a card works the same way: you just ask.',
      ],
      facts: [
        ['My role', 'UI Design, Art Direction'],
        ['Agency', 'K2 Internet'],
        ['Date', '2016'],
      ],
      team: [
        'Maciek Lipiec, UX Design',
        'Gabriela Żukowska, Motion Design',
      ],
      video: 'kPh6M4VOw6g',
    },
    {
      label: 'The main interface',
      text: [
        'The interface feels instantly familiar to anyone who has used Slack, Messenger, or SMS (or IRC, if you\'re really old school): one continuous stream of conversation, newest at the bottom. No dashboards to learn, no menus to dig through.',
        'BankBot lives on desktop, mobile, and smartwatch, so checking your finances takes seconds wherever you are.',
        'The design challenge: make a chat feel like a bank. An interface this simple still has to look like a place you\'d trust with your money.',
      ],
      figures: [
        { src: 'K2_Case_BOT_v02.webp', width: '80%', widthMobile: '100%' },
        'K2_Case_BOT_v03.webp',
      ],
    },
    {
      label: 'BankBot is an advisor',
      text: [
        'BankBot is proactive. It warns you before you exceed your monthly budget, reminds you about regular payments, and suggests better ways to save or invest, showing how much more you could earn. Over time it learns your behavior and gets better at advising you.',
      ],
      figures: [
        'K2_Case_BOT_v04.webp',
        {
          panel: '#EFF0ED',
          width: '80%',
          images: [
            'K2_Case_BOT_v05-a.webp',
            'K2_Case_BOT_v05-b.webp',
            'K2_Case_BOT_v05-c.webp',
            'K2_Case_BOT_v05-d.webp',
            'K2_Case_BOT_v05-e.webp',
          ],
        },
      ],
    },
    {
      label: 'APIs and AppStore',
      text: [
        'The concept assumed open banking before it existed. PSD2 was still two years from becoming law, and K2 Bank was already designed around it: an AppStore built on the bank\'s APIs, third-party services connected with the user\'s permission, accounts from different banks managed in one interface, and instant payments woven into online shopping.',
        'What was a prediction then is everyday reality now.',
      ],
      figures: ['K2_Case_BOT_v06.webp'],
    },
    {
      label: 'Voice control',
      text: [
        'BankBot also talks. Phone, smartwatch, desktop, or a smart speaker like Amazon Echo: smart home and smart banking in one conversation.',
      ],
      figures: [{ src: 'K2_Case_BOT_v07.webp', width: '80%', widthMobile: '100%' }],
    },
    {
      label: 'Ten years later',
      last: true,
      text: [
        'K2 Bank never went to market. It was a concept, built to show the industry what banking could feel like. It aged well: open banking became law, conversational assistants became normal.',
        'For me it closed a different loop. In 2016 I designed an interface for AI. Today I design with AI, directly in code.',
      ],
    },
  ],
};
