// Тексти сторінки «Портфоліо» (/works/, /ru/works/, /en/works/).
// Описи самих проєктів лежать у словниках: t.portfolio.projects.
import type { Locale } from '../../i18n';

export interface WorksText {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  /** короткі цифри під заголовком */
  facts: { value: string; label: string }[];
  done: string;
  stack: string;
  similar: string;
  hint: string;
  allWorks: string;
  cta: { title: string; text: string };
}

export const works: Record<Locale, WorksText> = {
  uk: {
    metaTitle: 'Портфоліо: приклади сайтів | Ruban Web Studio',
    metaDescription:
      'Приклади сайтів, які я зробив для клієнтів в Україні та США: спортивний клуб у Харкові, барбершопи й клініка в Нью-Йорку, автостудія, мережа ломбардів. Скріншоти й живі сайти.',
    eyebrow: 'Портфоліо',
    h1: 'Сайти, які я зробив для клієнтів',
    intro:
      'Тут зібрані реальні проєкти: від сайту спортивного клубу в Харкові до сайтів мереж у США. Наведіть курсор на скріншот, щоб прокрутити сторінку, або відкрийте живий сайт і подивіться, як він працює.',
    facts: [
      { value: '10+', label: 'запущених сайтів' },
      { value: '2', label: 'країни: Україна та США' },
      { value: '100%', label: 'адаптація під телефон' },
    ],
    done: 'Що зроблено',
    stack: 'Технології',
    similar: 'Потрібен схожий сайт? →',
    hint: 'Наведіть, щоб прокрутити',
    allWorks: 'Усі роботи →',
    cta: {
      title: 'Хочете такий самий результат?',
      text: 'Напишіть коротко про ваш бізнес, і я покажу, як може виглядати ваш сайт, та назву орієнтовну вартість.',
    },
  },
  ru: {
    metaTitle: 'Портфолио: примеры сайтов | Ruban Web Studio',
    metaDescription:
      'Примеры сайтов, которые я сделал для клиентов в Украине и США: спортивный клуб в Харькове, барбершопы и клиника в Нью-Йорке, автостудия, сеть ломбардов. Скриншоты и живые сайты.',
    eyebrow: 'Портфолио',
    h1: 'Сайты, которые я сделал для клиентов',
    intro:
      'Здесь собраны реальные проекты: от сайта спортивного клуба в Харькове до сайтов сетей в США. Наведите курсор на скриншот, чтобы прокрутить страницу, или откройте живой сайт и посмотрите, как он работает.',
    facts: [
      { value: '10+', label: 'запущенных сайтов' },
      { value: '2', label: 'страны: Украина и США' },
      { value: '100%', label: 'адаптация под телефон' },
    ],
    done: 'Что сделано',
    stack: 'Технологии',
    similar: 'Нужен похожий сайт? →',
    hint: 'Наведите, чтобы прокрутить',
    allWorks: 'Все работы →',
    cta: {
      title: 'Хотите такой же результат?',
      text: 'Напишите коротко о вашем бизнесе, и я покажу, как может выглядеть ваш сайт, и назову ориентировочную стоимость.',
    },
  },
  en: {
    metaTitle: 'Portfolio: Website Examples | Ruban Web Studio',
    metaDescription:
      'Websites I built for clients in Ukraine and the US: a sports club in Kharkiv, barbershops and a clinic in New York, a car wrap studio and a pawn shop chain. Screenshots and live sites.',
    eyebrow: 'Portfolio',
    h1: 'Websites I built for clients',
    intro:
      'These are real projects, from a sports club website in Kharkiv to websites for chains in the US. Hover over a screenshot to scroll the page, or open the live site to see how it works.',
    facts: [
      { value: '10+', label: 'websites launched' },
      { value: '2', label: 'countries: Ukraine and the US' },
      { value: '100%', label: 'mobile-friendly' },
    ],
    done: 'What was done',
    stack: 'Technologies',
    similar: 'Need a similar website? →',
    hint: 'Hover to scroll',
    allWorks: 'All projects →',
    cta: {
      title: 'Want the same result?',
      text: 'Tell me briefly about your business, and I’ll show you how your website could look and give you an estimated price.',
    },
  },
};
