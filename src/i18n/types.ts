// Структура словника: кожна мова (uk.ts, ru.ts, en.ts) має заповнити всі ці поля.
// Якщо в одній з мов чогось бракує, TypeScript підсвітить помилку.

export interface Service {
  title: string;
  forWho: string;
  features: string[];
  term: string;
  price: string;
  /** ціна зі знижкою на час акції (site.promoUntil); після дати показується звичайна price */
  promoPrice?: string;
  popular?: boolean;
}

export interface ProjectText {
  /** бізнес і місто */
  short: string;
  type: string;
  description: string;
  /** пункти «що зроблено»: показуються тільки у великому кейсі */
  results?: string[];
  tags: string[];
}

export interface Dict {
  /** SEO: заголовок вкладки, опис для пошуку */
  meta: {
    title: string;
    description: string;
  };
  city: string;
  nav: {
    portfolio: string;
    services: string;
    process: string;
    why: string;
    faq: string;
    contact: string;
  };
  ui: {
    telegramCta: string;
    discuss: string;
    toHome: string;
    openMenu: string;
    language: string;
    acceptingProjects: string;
  };
  hero: {
    eyebrow: string;
    /** заголовок по словах: звичайні слова + виділені жовтим */
    lead: string[];
    accent: string[];
    text: string;
    viewWork: string;
    chip: string;
  };
  stats: { value: string; unit: string; label: string }[];
  stackLabel: string;
  portfolio: {
    eyebrow: string;
    title: string;
    lead: string;
    openSite: string;
    openSiteAria: string;
    screenshotAlt: string;
    screenshot: string;
    hint: string;
    projects: Record<string, ProjectText>;
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    popular: string;
    term: string;
    price: string;
    /** плашка акції, напр. «−20% до 31 грудня» */
    promoBadge: string;
    /** примітка під тарифами: що оплачується окремо */
    extras: string;
    items: Service[];
  };
  process: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: { title: string; text: string }[];
  };
  why: {
    eyebrow: string;
    title: string;
    lead: string;
    codeComment: string;
    card: [string, string][];
    points: { title: string; text: string }[];
    reviews: { text: string; name: string; role: string }[];
  };
  faq: {
    title: string;
    lead: string;
    ask: string;
    items: { q: string; a: string }[];
  };
  contact: {
    title: string;
    lead: string;
    phone: string;
    form: {
      subject: string;
      name: string;
      namePh: string;
      contact: string;
      contactPh: string;
      /** підказка, якщо контакт введено в незрозумілому форматі */
      contactHint: string;
      project: string;
      other: string;
      message: string;
      messagePh: string;
      submit: string;
      consent: string;
      privacyLink: string;
      /** повторна заявка раніше ніж за хвилину */
      wait: string;
      sending: string;
      success: string;
      error: string;
      network: string;
    };
  };
  footer: {
    about: string;
    navLabel: string;
    sections: string;
    contacts: string;
    timeNote: string;
    worldwide: string;
    rights: string;
    up: string;
    privacy: string;
  };
  privacy: {
    title: string;
    description: string;
    updated: string;
    intro: string;
    sections: { title: string; text: string }[];
    /** показується, тільки якщо підключено Google Analytics (site.gaId) */
    analytics: { title: string; text: string };
    contactTitle: string;
    contactText: string;
    back: string;
  };
}
