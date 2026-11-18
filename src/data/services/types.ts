import type { IconName } from '../icons';

// Структура тексту сторінки послуги (/landing/, /business-card-website/, /multipage-website/).
// Ціна і термін беруться з t.services.items, щоб на головній і на сторінці послуги вони завжди збігалися.

export interface ServicePageText {
  /** SEO: заголовок вкладки (до ~60 символів) і опис для пошуку (до ~160) */
  metaTitle: string;
  metaDescription: string;

  eyebrow: string;
  h1: string;
  /** перший абзац під заголовком: головний запит і користь */
  intro: string;

  /** що це і кому підходить */
  about: { title: string; text: string[]; who: string[] };
  /** що входить у роботу */
  includes: { title: string; lead: string; items: { icon: IconName; title: string; text: string }[] };
  /** етапи і терміни саме для цієї послуги */
  steps: { title: string; lead: string; items: { title: string; text: string }[] };
  /** від чого залежить ціна */
  price: { title: string; text: string[]; factors: string[] };
  /** порівняння з сусідньою послугою (з посиланням на неї) */
  compare?: { title: string; text: string; link: { slug: string; label: string } };

  faq: { q: string; a: string }[];
  cta: { title: string; text: string };
}

/** Спільні підписи для всіх сторінок послуг */
export interface ServiceUi {
  home: string;
  services: string;
  term: string;
  price: string;
  discuss: string;
  worksTitle: string;
  worksLead: string;
  otherTitle: string;
  more: string;
  faqTitle: string;
  faqLead: string;
  /** ілюстрація на першому екрані: сповіщення про заявку */
  artLead: string;
  artNow: string;
}
