import type { Locale } from '../../i18n';
import type { ServicePageText } from './types';

// Сторінка /business-card-website/. Ціна й термін підтягуються з t.services.items[1].
// Факти (терміни, оплата, підтримка) мають збігатися з головною сторінкою та FAQ у словниках.
const businessCard: Partial<Record<Locale, ServicePageText>> = {
  uk: {
    metaTitle: 'Створення сайту-візитки в Харкові | Ruban Web Studio',
    metaDescription:
      'Сайт-візитка під ключ за 3–7 днів: до 5 сторінок, послуги й ціни, відгуки, карта та кнопки зв’язку, підготовка до пошуку у вашому місті. Від 14 000 грн.',

    eyebrow: 'Послуги · Сайт-візитка',
    h1: 'Створення сайту-візитки під ключ',
    intro:
      'Сайт-візитка — це невеликий сайт до 5 сторінок, на якому клієнт за хвилину дізнається, що ви робите, скільки це коштує і як з вами зв’язатися. Роблю сайти-візитки для малого бізнесу та спеціалістів у Харкові й по всій Україні, щоб вас знаходили в Google і довіряли з першого відвідування.',

    about: {
      title: 'Кому потрібен сайт-візитка',
      text: [
        'Сьогодні клієнт спершу шукає вас в інтернеті: перевіряє послуги, ціни, відгуки й адресу. Якщо сайту немає або він застарілий, людина йде до конкурента, у якого все зрозуміло з першого екрана.',
        'Сайт-візитка вирішує саме цю задачу: показує ваш бізнес професійно, відповідає на типові питання клієнтів і веде до дзвінка чи повідомлення. Це найпопулярніший формат серед моїх клієнтів.',
      ],
      who: [
        'Салони краси, барбершопи, студії та майстри',
        'Лікарі, юристи, психологи, репетитори',
        'Сервіси й ремонт: авто, техніка, будівництво',
        'Кафе, спортивні клуби, навчальні центри',
        'Компанія, якій потрібна сучасна заміна старого сайту',
      ],
    },

    includes: {
      title: 'Що входить у сайт-візитку',
      lead: 'Готовий сайт, який можна одразу давати клієнтам і вказувати в Google Картах та соцмережах.',
      items: [
        { icon: 'pages', title: 'До 5 сторінок', text: 'Головна, послуги, ціни, про вас і контакти. Структуру підбираю під ваш бізнес: можна об’єднати розділи або додати галерею робіт.' },
        { icon: 'design', title: 'Дизайн під ваш бренд', text: 'Кольори, шрифти й фото у вашому стилі, щоб сайт виглядав солідно і запам’ятовувався.' },
        { icon: 'mobile', title: 'Адаптація під телефон', text: 'Сайт зручний на смартфоні: великі кнопки, читабельний текст, дзвінок в один дотик.' },
        { icon: 'leads', title: 'Кнопки зв’язку і форма', text: 'Telegram, Viber, дзвінок і форма заявки. Заявки приходять у Telegram і на пошту.' },
        { icon: 'map', title: 'Карта і контакти', text: 'Адреса на карті Google, графік роботи, соцмережі. Клієнт швидко знаходить, як до вас дістатися.' },
        { icon: 'seo', title: 'Пошук у вашому місті', text: 'Заголовки, описи й розмітка під запити на кшталт «послуга + місто», щоб вас знаходили клієнти поруч.' },
        { icon: 'analytics', title: 'Search Console і аналітика', text: 'Підключаю Google Search Console та аналітику: видно, скільки людей заходить і за якими запитами.' },
        { icon: 'support', title: 'Правки після запуску', text: 'Перший місяць вношу правки безкоштовно. Далі ви просто пишете, що змінити, і я оновлюю сайт.' },
      ],
    },

    steps: {
      title: 'Як я роблю сайт-візитку за 3–7 днів',
      lead: 'Термін залежить від кількості сторінок і того, чи готові тексти та фото. Якщо матеріалів немає, допоможу їх підготувати.',
      items: [
        { title: 'Бриф', text: 'Обговорюємо ваші послуги, клієнтів, конкурентів і сайти, які вам подобаються. Фіксуємо структуру, ціну й термін.' },
        { title: 'Дизайн', text: 'Готую дизайн головної сторінки. Після погодження в тому ж стилі роблю решту сторінок.' },
        { title: 'Розробка', text: 'Верстаю сторінки, наповнюю текстами й фото, налаштовую форму, карту й кнопки зв’язку.' },
        { title: 'Запуск і пошук', text: 'Підключаю домен і HTTPS, додаю сайт у Google Search Console, перевіряю на різних пристроях.' },
      ],
    },

    price: {
      title: 'Скільки коштує сайт-візитка',
      text: [
        'Вартість сайту-візитки — від 14 000 грн. Точну ціну називаю після короткого брифу і фіксую до старту.',
        'Оплата частинами: аванс перед початком і решта після того, як ви погодили результат. Домен і хостинг оплачуються окремо, допоможу обрати недорогий варіант.',
      ],
      factors: [
        'Кількість сторінок (до 5)',
        'Чи є готові тексти й фото, або їх потрібно підготувати',
        'Галерея робіт, прайс-лист або відгуки',
        'Кілька мовних версій',
      ],
    },

    compare: {
      title: 'Сайт-візитка чи багатосторінковий сайт?',
      text: 'Сайт-візитки вистачає, коли послуг небагато і вони вміщаються на кількох сторінках. Якщо у вас багато напрямків, кожному з яких потрібна окрема сторінка для пошуку, або потрібен блог чи адмін-панель, краще обрати багатосторінковий сайт. Візитку завжди можна розширити пізніше.',
      link: { slug: 'multipage-website', label: 'Детальніше про багатосторінковий сайт →' },
    },

    faq: [
      { q: 'Скільки часу займає створення сайту-візитки?', a: 'Зазвичай 3–7 днів від погодження брифу до запуску. Термін залежить від кількості сторінок і готовності текстів та фото.' },
      { q: 'Скільки коштує сайт-візитка?', a: 'Від 14 000 грн. Ціна залежить від кількості сторінок, готовності матеріалів і кількості мов. Остаточну вартість фіксуємо після брифу.' },
      { q: 'Чим сайт-візитка відрізняється від лендінгу?', a: 'Лендінг — одна сторінка під одну пропозицію, найкраще працює з рекламою. Сайт-візитка має до 5 сторінок і краще підходить, щоб вас знаходили в Google і могли детально ознайомитися з бізнесом.' },
      { q: 'Чи будуть мене знаходити в Google?', a: 'Сайт готую до пошуку у вашому місті: заголовки, описи, розмітка, підключення до Search Console. Перші позиції залежать від конкуренції й часу, але без такої підготовки сайт у пошуку майже не видно.' },
      { q: 'Хто вноситиме зміни після запуску?', a: 'Я. Ви пишете, що потрібно змінити: ціни, фото, текст чи новий блок, і я оновлюю сайт. Перший місяць правки безкоштовні.' },
      { q: 'Чи можна потім додати сторінки?', a: 'Так. Візитку можна розширити до багатосторінкового сайту на тому ж домені, без втрати позицій у пошуку.' },
    ],

    cta: {
      title: 'Обговоримо ваш сайт-візитку',
      text: 'Напишіть коротко про ваш бізнес, і я відповім з прикладами та орієнтовною вартістю.',
    },
  },

  ru: {
    metaTitle: 'Создание сайта-визитки в Харькове | Ruban Web Studio',
    metaDescription:
      'Сайт-визитка под ключ за 3–7 дней: до 5 страниц, услуги и цены, отзывы, карта и кнопки связи, подготовка к поиску в вашем городе. От 14 000 грн.',

    eyebrow: 'Услуги · Сайт-визитка',
    h1: 'Создание сайта-визитки под ключ',
    intro:
      'Сайт-визитка — это небольшой сайт до 5 страниц, на котором клиент за минуту узнаёт, чем вы занимаетесь, сколько это стоит и как с вами связаться. Делаю сайты-визитки для малого бизнеса и специалистов в Харькове и по всей Украине, чтобы вас находили в Google и доверяли с первого посещения.',

    about: {
      title: 'Кому нужен сайт-визитка',
      text: [
        'Сегодня клиент сначала ищет вас в интернете: проверяет услуги, цены, отзывы и адрес. Если сайта нет или он устарел, человек уходит к конкуренту, у которого всё понятно с первого экрана.',
        'Сайт-визитка решает именно эту задачу: показывает ваш бизнес профессионально, отвечает на типичные вопросы клиентов и ведёт к звонку или сообщению. Это самый популярный формат среди моих клиентов.',
      ],
      who: [
        'Салоны красоты, барбершопы, студии и мастера',
        'Врачи, юристы, психологи, репетиторы',
        'Сервисы и ремонт: авто, техника, строительство',
        'Кафе, спортивные клубы, учебные центры',
        'Компания, которой нужна современная замена старого сайта',
      ],
    },

    includes: {
      title: 'Что входит в сайт-визитку',
      lead: 'Готовый сайт, который можно сразу давать клиентам и указывать в Google Картах и соцсетях.',
      items: [
        { icon: 'pages', title: 'До 5 страниц', text: 'Главная, услуги, цены, о вас и контакты. Структуру подбираю под ваш бизнес: можно объединить разделы или добавить галерею работ.' },
        { icon: 'design', title: 'Дизайн под ваш бренд', text: 'Цвета, шрифты и фото в вашем стиле, чтобы сайт выглядел солидно и запоминался.' },
        { icon: 'mobile', title: 'Адаптация под телефон', text: 'Сайт удобен на смартфоне: большие кнопки, читаемый текст, звонок в одно касание.' },
        { icon: 'leads', title: 'Кнопки связи и форма', text: 'Telegram, Viber, звонок и форма заявки. Заявки приходят в Telegram и на почту.' },
        { icon: 'map', title: 'Карта и контакты', text: 'Адрес на карте Google, график работы, соцсети. Клиент быстро находит, как до вас добраться.' },
        { icon: 'seo', title: 'Поиск в вашем городе', text: 'Заголовки, описания и разметка под запросы вида «услуга + город», чтобы вас находили клиенты поблизости.' },
        { icon: 'analytics', title: 'Search Console и аналитика', text: 'Подключаю Google Search Console и аналитику: видно, сколько людей заходит и по каким запросам.' },
        { icon: 'support', title: 'Правки после запуска', text: 'Первый месяц вношу правки бесплатно. Дальше вы просто пишете, что изменить, и я обновляю сайт.' },
      ],
    },

    steps: {
      title: 'Как я делаю сайт-визитку за 3–7 дней',
      lead: 'Срок зависит от количества страниц и от того, готовы ли тексты и фото. Если материалов нет, помогу их подготовить.',
      items: [
        { title: 'Бриф', text: 'Обсуждаем ваши услуги, клиентов, конкурентов и сайты, которые вам нравятся. Фиксируем структуру, цену и срок.' },
        { title: 'Дизайн', text: 'Готовлю дизайн главной страницы. После согласования в том же стиле делаю остальные страницы.' },
        { title: 'Разработка', text: 'Верстаю страницы, наполняю текстами и фото, настраиваю форму, карту и кнопки связи.' },
        { title: 'Запуск и поиск', text: 'Подключаю домен и HTTPS, добавляю сайт в Google Search Console, проверяю на разных устройствах.' },
      ],
    },

    price: {
      title: 'Сколько стоит сайт-визитка',
      text: [
        'Стоимость сайта-визитки — от 14 000 грн. Точную цену называю после короткого брифа и фиксирую до старта.',
        'Оплата частями: аванс перед началом и остаток после того, как вы согласовали результат. Домен и хостинг оплачиваются отдельно, помогу выбрать недорогой вариант.',
      ],
      factors: [
        'Количество страниц (до 5)',
        'Есть ли готовые тексты и фото, или их нужно подготовить',
        'Галерея работ, прайс-лист или отзывы',
        'Несколько языковых версий',
      ],
    },

    compare: {
      title: 'Сайт-визитка или многостраничный сайт?',
      text: 'Сайта-визитки хватает, когда услуг немного и они помещаются на нескольких страницах. Если у вас много направлений и каждому нужна отдельная страница для поиска, либо нужен блог или админ-панель, лучше выбрать многостраничный сайт. Визитку всегда можно расширить позже.',
      link: { slug: 'multipage-website', label: 'Подробнее о многостраничном сайте →' },
    },

    faq: [
      { q: 'Сколько времени занимает создание сайта-визитки?', a: 'Обычно 3–7 дней от согласования брифа до запуска. Срок зависит от количества страниц и готовности текстов и фото.' },
      { q: 'Сколько стоит сайт-визитка?', a: 'От 14 000 грн. Цена зависит от количества страниц, готовности материалов и количества языков. Окончательную стоимость фиксируем после брифа.' },
      { q: 'Чем сайт-визитка отличается от лендинга?', a: 'Лендинг — одна страница под одно предложение, лучше всего работает с рекламой. Сайт-визитка — до 5 страниц, она лучше подходит, чтобы вас находили в Google и могли подробно познакомиться с бизнесом.' },
      { q: 'Будут ли меня находить в Google?', a: 'Сайт готовлю к поиску в вашем городе: заголовки, описания, разметка, подключение к Search Console. Первые позиции зависят от конкуренции и времени, но без такой подготовки сайт в поиске почти не видно.' },
      { q: 'Кто будет вносить изменения после запуска?', a: 'Я. Вы пишете, что нужно изменить: цены, фото, текст или новый блок, и я обновляю сайт. Первый месяц правки бесплатные.' },
      { q: 'Можно ли потом добавить страницы?', a: 'Да. Визитку можно расширить до многостраничного сайта на том же домене, без потери позиций в поиске.' },
    ],

    cta: {
      title: 'Обсудим ваш сайт-визитку',
      text: 'Напишите коротко о вашем бизнесе, и я отвечу с примерами и ориентировочной стоимостью.',
    },
  },

  en: {
    metaTitle: 'Small Business Website Design | Ruban Web Studio',
    metaDescription:
      'A turnkey business website in 3–7 days: up to 5 pages, services and prices, reviews, map and contact buttons, local search optimization. From $550.',

    eyebrow: 'Services · Business website',
    h1: 'Turnkey business website',
    intro:
      'A business website is a compact site of up to 5 pages where a client learns in a minute what you do, how much it costs and how to reach you. I build business websites for small businesses and professionals in the US and worldwide, so people find you on Google and trust you from the first visit.',

    about: {
      title: 'Who needs a business website',
      text: [
        'Today clients look you up online first: they check your services, prices, reviews and address. If there is no website or it looks outdated, they go to a competitor whose offer is clear from the first screen.',
        'A business website solves exactly that: it presents your business professionally, answers typical client questions and leads to a call or a message. It’s the most popular format among my clients.',
      ],
      who: [
        'Beauty salons, barbershops, studios and specialists',
        'Doctors, lawyers, therapists, tutors',
        'Repair and service businesses: auto, appliances, construction',
        'Cafés, sports clubs, training centers',
        'Companies that need a modern replacement for an old site',
      ],
    },

    includes: {
      title: 'What’s included',
      lead: 'A finished website you can share with clients right away and add to Google Maps and social media.',
      items: [
        { icon: 'pages', title: 'Up to 5 pages', text: 'Home, services, prices, about and contacts. I adapt the structure to your business: sections can be combined or a portfolio gallery added.' },
        { icon: 'design', title: 'Design that fits your brand', text: 'Colors, fonts and photos in your style, so the site looks professional and memorable.' },
        { icon: 'mobile', title: 'Mobile-friendly', text: 'Easy to use on a smartphone: large buttons, readable text and one-tap calling.' },
        { icon: 'leads', title: 'Contact buttons and form', text: 'Telegram, Viber, phone and a contact form. Requests go to Telegram and email.' },
        { icon: 'map', title: 'Map and contacts', text: 'Your address on Google Maps, opening hours and social links. Clients quickly see how to reach you.' },
        { icon: 'seo', title: 'Local search', text: 'Titles, descriptions and structured data for searches like “service + city”, so nearby clients can find you.' },
        { icon: 'analytics', title: 'Search Console and analytics', text: 'I connect Google Search Console and analytics, so you see how many people visit and what they searched for.' },
        { icon: 'support', title: 'Edits after launch', text: 'Edits are free for the first month. After that, just tell me what to change and I’ll update the site.' },
      ],
    },

    steps: {
      title: 'How I build a business website in 3–7 days',
      lead: 'The timeline depends on the number of pages and whether texts and photos are ready. If they aren’t, I’ll help you prepare them.',
      items: [
        { title: 'Brief', text: 'We discuss your services, clients, competitors and websites you like. We agree on the structure, price and timeline.' },
        { title: 'Design', text: 'I design the home page. Once it’s approved, I build the other pages in the same style.' },
        { title: 'Development', text: 'I build the pages, add texts and photos, and set up the form, map and contact buttons.' },
        { title: 'Launch and search', text: 'I connect the domain and HTTPS, add the site to Google Search Console and test it on different devices.' },
      ],
    },

    price: {
      title: 'How much does a business website cost',
      text: [
        'A business website starts from $550. I give an exact quote after a short brief and fix it before we start.',
        'Payment in parts by PayPal invoice (any card, no PayPal account needed): a deposit before we start and the rest after you approve the result. The domain and hosting are paid separately, and I’ll help you choose an affordable option.',
      ],
      factors: [
        'Number of pages (up to 5)',
        'Whether texts and photos are ready or need to be prepared',
        'Portfolio gallery, price list or reviews',
        'Several language versions',
      ],
    },

    compare: {
      title: 'Business website or multi-page website?',
      text: 'A business website is enough when you have a few services that fit on several pages. If you have many lines of business, each needing its own page for search, or you need a blog or an admin panel, a multi-page website is a better choice. A business website can always be expanded later.',
      link: { slug: 'multipage-website', label: 'More about multi-page websites →' },
    },

    faq: [
      { q: 'How long does it take to build a business website?', a: 'Usually 3–7 days from the approved brief to launch. It depends on the number of pages and whether texts and photos are ready.' },
      { q: 'How much does a business website cost?', a: 'From $550. The price depends on the number of pages, how ready your materials are and the number of languages. The final price is fixed after the brief.' },
      { q: 'How is it different from a landing page?', a: 'A landing page is one page for one offer and works best with ads. A business website has up to 5 pages and is better for being found on Google and letting clients learn about your business in detail.' },
      { q: 'Will people find me on Google?', a: 'I prepare the site for local search: titles, descriptions, structured data and Search Console setup. Top positions depend on competition and time, but without this groundwork a site is barely visible in search.' },
      { q: 'Who will make changes after launch?', a: 'I will. You tell me what to change: prices, photos, text or a new section, and I update the site. Edits are free for the first month.' },
      { q: 'Can I add pages later?', a: 'Yes. A business website can be expanded into a multi-page site on the same domain without losing search rankings.' },
    ],

    cta: {
      title: 'Let’s discuss your business website',
      text: 'Tell me briefly about your business, and I’ll reply with examples and an estimated price.',
    },
  },
};

export default businessCard;
