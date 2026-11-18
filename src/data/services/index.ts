// Реєстр сторінок послуг. Щоб додати мову або сторінку: заповніть текст у файлі послуги,
// додайте файл маршруту в src/pages (див. src/pages/landing/index.astro) і адресу в sitemap.xml.ts.
import type { Locale } from '../../i18n';
import type { ServicePageText, ServiceUi } from './types';
import landing from './landing';
import businessCard from './business-card-website';

export interface ServiceDef {
  slug: string;
  /** індекс тарифу в t.services.items: звідти ціна, термін і назва для форми заявки */
  index: number;
  /** id проєктів з src/data/projects.ts для блоку «Приклади робіт» */
  works: string[];
  /** проєкт для ілюстрації першого екрана: public/portfolio/art/<id>-desk.webp і -mob.webp */
  art: string;
  text: Partial<Record<Locale, ServicePageText>>;
}

export const services: ServiceDef[] = [
  { slug: 'landing', index: 0, works: ['carwrapping', 'barbershop', 'skincenter'], art: 'carwrapping', text: landing },
  { slug: 'business-card-website', index: 1, works: ['barbershop', 'carwrapping', 'skincenter'], art: 'barbershop', text: businessCard },
  { slug: 'multipage-website', index: 2, works: ['revival', 'skincenter', 'pawn'], art: 'skincenter', text: {} },
];

export const serviceUi: Record<Locale, ServiceUi> = {
  uk: {
    home: 'Головна',
    services: 'Послуги',
    term: 'Термін',
    price: 'Вартість',
    discuss: 'Обговорити проєкт',
    worksTitle: 'Приклади моїх робіт',
    worksLead: 'Сайти, які я зробив для клієнтів. Натисніть, щоб відкрити живий сайт.',
    otherTitle: 'Інші послуги',
    more: 'Детальніше →',
    faqTitle: 'Часті питання',
    faqLead: 'Не знайшли відповідь? Напишіть, відповім особисто.',
    artLead: 'Нова заявка з сайту',
    artNow: 'щойно',
  },
  ru: {
    home: 'Главная',
    services: 'Услуги',
    term: 'Срок',
    price: 'Стоимость',
    discuss: 'Обсудить проект',
    worksTitle: 'Примеры моих работ',
    worksLead: 'Сайты, которые я сделал для клиентов. Нажмите, чтобы открыть живой сайт.',
    otherTitle: 'Другие услуги',
    more: 'Подробнее →',
    faqTitle: 'Частые вопросы',
    faqLead: 'Не нашли ответ? Напишите, отвечу лично.',
    artLead: 'Новая заявка с сайта',
    artNow: 'только что',
  },
  en: {
    home: 'Home',
    services: 'Services',
    term: 'Timeline',
    price: 'Price',
    discuss: 'Discuss your project',
    worksTitle: 'Examples of my work',
    worksLead: 'Websites I built for clients. Click to open the live site.',
    otherTitle: 'Other services',
    more: 'Learn more →',
    faqTitle: 'Frequently asked questions',
    faqLead: 'Didn’t find an answer? Message me and I’ll reply personally.',
    artLead: 'New lead from your website',
    artNow: 'just now',
  },
};

/** Сторінки послуг, у яких є текст цією мовою (для посилань і sitemap) */
export const servicesFor = (lang: Locale) => services.filter((s) => s.text[lang]);
