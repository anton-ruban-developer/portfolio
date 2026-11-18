// Тексти сторінки «Контакти» (/contacts/, /ru/contacts/, /en/contacts/).
// Самі контакти (Telegram, телефон, пошта) беруться з src/data/site.ts.
import type { Locale } from '../../i18n';

export interface ContactsText {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  formTitle: string;
  formLead: string;
  next: { title: string; lead: string; steps: { title: string; text: string }[] };
  where: { title: string; text: string; time: string; timeNote: string };
  servicesTitle: string;
}

export const contacts: Record<Locale, ContactsText> = {
  uk: {
    metaTitle: 'Контакти: замовити сайт у Харкові | Ruban Web Studio',
    metaDescription:
      'Зв’яжіться зі мною, щоб замовити лендінг, сайт-візитку або багатосторінковий сайт: Telegram, телефон, email або форма заявки. Харків, вся Україна та за кордоном.',
    eyebrow: 'Контакти',
    h1: 'Обговоримо ваш сайт',
    intro:
      'Напишіть у Telegram, зателефонуйте або залиште заявку через форму. Ви спілкуєтесь напряму зі мною, без менеджерів: розповім, який формат сайту вам підійде, покажу приклади й назву орієнтовну вартість.',
    formTitle: 'Напишіть мені',
    formLead: 'Оберіть зручний спосіб зв’язку або залиште заявку, і я відповім з прикладами та орієнтовною вартістю.',
    next: {
      title: 'Що буде після заявки',
      lead: 'Перший контакт ні до чого вас не зобов’язує.',
      steps: [
        { title: 'Відповідь', text: 'Я відповідаю у зручному для вас месенджері чи телефоном і ставлю кілька уточнювальних питань.' },
        { title: 'Короткий бриф', text: 'Обговорюємо задачу, аудиторію та приклади сайтів, які вам подобаються. Можна листуванням або дзвінком.' },
        { title: 'Ціна і термін', text: 'Пропоную формат сайту, називаю вартість і термін. Фіксуємо їх до старту, і можна починати.' },
      ],
    },
    where: {
      title: 'Де я працюю',
      text: 'Я з Харкова, але працюю дистанційно з клієнтами по всій Україні та за кордоном: усе можна обговорити онлайн, а сайт ви отримуєте на своєму домені.',
      time: 'Зараз у Харкові',
      timeNote: 'за київським часом',
    },
    servicesTitle: 'Послуги',
  },
  ru: {
    metaTitle: 'Контакты: заказать сайт в Харькове | Ruban Web Studio',
    metaDescription:
      'Свяжитесь со мной, чтобы заказать лендинг, сайт-визитку или многостраничный сайт: Telegram, телефон, email или форма заявки. Харьков, вся Украина и за рубежом.',
    eyebrow: 'Контакты',
    h1: 'Обсудим ваш сайт',
    intro:
      'Напишите в Telegram, позвоните или оставьте заявку через форму. Вы общаетесь напрямую со мной, без менеджеров: расскажу, какой формат сайта вам подойдёт, покажу примеры и назову ориентировочную стоимость.',
    formTitle: 'Напишите мне',
    formLead: 'Выберите удобный способ связи или оставьте заявку, и я отвечу с примерами и ориентировочной стоимостью.',
    next: {
      title: 'Что будет после заявки',
      lead: 'Первый контакт ни к чему вас не обязывает.',
      steps: [
        { title: 'Ответ', text: 'Я отвечаю в удобном для вас мессенджере или по телефону и задаю несколько уточняющих вопросов.' },
        { title: 'Короткий бриф', text: 'Обсуждаем задачу, аудиторию и примеры сайтов, которые вам нравятся. Можно в переписке или по звонку.' },
        { title: 'Цена и срок', text: 'Предлагаю формат сайта, называю стоимость и срок. Фиксируем их до старта, и можно начинать.' },
      ],
    },
    where: {
      title: 'Где я работаю',
      text: 'Я из Харькова, но работаю удалённо с клиентами по всей Украине и за рубежом: всё можно обсудить онлайн, а сайт вы получаете на своём домене.',
      time: 'Сейчас в Харькове',
      timeNote: 'по киевскому времени',
    },
    servicesTitle: 'Услуги',
  },
  en: {
    metaTitle: 'Contact: Order a Website | Ruban Web Studio',
    metaDescription:
      'Get in touch to order a landing page, business website or multi-page website: Telegram, phone, email or the contact form. Based in Ukraine, working with clients worldwide.',
    eyebrow: 'Contact',
    h1: 'Let’s talk about your website',
    intro:
      'Message me on Telegram, call, or leave a request using the form. You talk to me directly, with no managers in between: I’ll suggest the right website format, show examples and give you an estimated price.',
    formTitle: 'Get in touch',
    formLead: 'Choose a convenient way to reach me or leave a request, and I’ll reply with examples and an estimated price.',
    next: {
      title: 'What happens next',
      lead: 'The first contact doesn’t commit you to anything.',
      steps: [
        { title: 'Reply', text: 'I reply in the messenger of your choice or by phone and ask a few clarifying questions.' },
        { title: 'Short brief', text: 'We discuss your goals, audience and websites you like, by message or on a call.' },
        { title: 'Price and timeline', text: 'I suggest a website format and give you the price and timeline. We fix them before we start.' },
      ],
    },
    where: {
      title: 'Where I work',
      text: 'I’m based in Kharkiv, Ukraine, and work remotely with clients across Ukraine and abroad: everything can be discussed online, and you get the website on your own domain.',
      time: 'Time in Kharkiv',
      timeNote: 'Kyiv time',
    },
    servicesTitle: 'Services',
  },
};
