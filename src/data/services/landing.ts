import type { Locale } from '../../i18n';
import type { ServicePageText } from './types';

// Сторінка /landing/. Ціна й термін підтягуються з t.services.items[0].
// Факти (терміни, оплата, підтримка) мають збігатися з головною сторінкою та FAQ у словниках.
const landing: Partial<Record<Locale, ServicePageText>> = {
  uk: {
    metaTitle: 'Створення лендінгу під ключ у Харкові | Ruban Web Studio',
    metaDescription:
      'Лендінг під ключ за 3–5 днів: дизайн під ваш бренд, адаптація під телефон, заявки в Telegram і базове SEO. Від 10 000 грн. Харків і вся Україна.',

    eyebrow: 'Послуги · Лендінг',
    h1: 'Створення лендінгу під ключ',
    intro:
      'Лендінг — це односторінковий сайт, який веде відвідувача до однієї дії: залишити заявку, подзвонити чи написати в Telegram. Роблю лендінги під ключ для бізнесу в Харкові та по всій Україні: від структури й дизайну до запуску на вашому домені.',

    about: {
      title: 'Кому потрібен лендінг',
      text: [
        'Лендінг найкраще працює, коли у вас є одна головна пропозиція і ви хочете швидко отримувати заявки: з реклами в Google, Instagram чи Facebook або з пошуку. На сторінці немає нічого зайвого, тому відвідувач не губиться в меню і швидше доходить до кнопки «Залишити заявку».',
        'Якщо послуг багато і кожній потрібен окремий опис, краще підійде сайт-візитка або багатосторінковий сайт. Допоможу обрати формат на першій розмові.',
      ],
      who: [
        'Запуск нової послуги чи продукту під рекламу',
        'Майстри та спеціалісти з однією основною послугою',
        'Курси, події, марафони й вебінари',
        'Перевірка попиту перед створенням великого сайту',
        'Окрема сторінка під акцію або сезонну пропозицію',
      ],
    },

    includes: {
      title: 'Що входить у лендінг',
      lead: 'Ви отримуєте готовий до роботи сайт, а не лише дизайн-макет.',
      items: [
        { icon: 'structure', title: 'Структура під продаж', text: 'Продумую порядок блоків: проблема клієнта, ваше рішення, переваги, приклади, ціни, відповіді на заперечення і заклик до дії.' },
        { icon: 'design', title: 'Дизайн під ваш бренд', text: 'Кольори, шрифти й стиль під ваш логотип і аудиторію. Без шаблонів, які вже бачили на сотні інших сайтів.' },
        { icon: 'mobile', title: 'Адаптація під телефон', text: 'Більшість відвідувачів приходять з телефону, тому кожен блок перевіряю на смартфонах і планшетах.' },
        { icon: 'leads', title: 'Заявки в Telegram і на пошту', text: 'Форма заявки, кнопки дзвінка та месенджерів. Заявки приходять одразу, з захистом від спаму.' },
        { icon: 'speed', title: 'Швидке завантаження', text: 'Оптимізовані зображення й чистий код: сторінка відкривається за секунди навіть на мобільному інтернеті.' },
        { icon: 'seo', title: 'Базове SEO', text: 'Заголовки, описи для Google, розмітка для пошуку, sitemap і підключення до Google Search Console.' },
        { icon: 'domain', title: 'Домен і запуск', text: 'Допомагаю купити домен, підключаю хостинг і HTTPS. Домен і доступи оформлені на вас.' },
        { icon: 'support', title: 'Місяць підтримки', text: 'Перший місяць після запуску виправляю помилки й вношу дрібні правки безкоштовно.' },
      ],
    },

    steps: {
      title: 'Як я роблю лендінг за 3–5 днів',
      lead: 'Терміни реальні, якщо матеріали (тексти, фото, логотип) готові. Якщо їх немає, допоможу підготувати.',
      items: [
        { title: 'Бриф', text: 'Обговорюємо пропозицію, аудиторію, конкурентів і приклади сайтів, які вам подобаються. Фіксуємо ціну й термін.' },
        { title: 'Структура і дизайн', text: 'Готую структуру блоків і дизайн першого екрана. Погоджуємо вигляд до початку верстки.' },
        { title: 'Розробка', text: 'Верстаю всю сторінку, налаштовую форму, адаптацію під телефон і швидкість.' },
        { title: 'Запуск', text: 'Перевіряю на різних пристроях, підключаю домен, аналітику та Search Console. Лендінг готовий приймати заявки.' },
      ],
    },

    price: {
      title: 'Скільки коштує лендінг',
      text: [
        'Вартість лендінгу — від 10 000 грн. Точну ціну називаю після короткого брифу і фіксую її до старту, тож сюрпризів у кінці не буде.',
        'Оплата частинами: аванс перед початком і решта після того, як ви погодили результат. Домен і хостинг оплачуються окремо, допоможу обрати недорогий варіант.',
      ],
      factors: [
        'Кількість блоків на сторінці',
        'Чи є готові тексти й фото, або їх потрібно підготувати',
        'Анімації та інтерактивні елементи (калькулятор, квіз, таймер)',
        'Кілька мовних версій',
      ],
    },

    compare: {
      title: 'Лендінг чи сайт-візитка?',
      text: 'Лендінг продає одну пропозицію на одній сторінці і найкраще працює з рекламою. Сайт-візитка має до 5 сторінок: послуги, ціни, про вас і контакти, тому краще підходить, коли клієнти шукають вас у Google і хочуть дізнатися більше про бізнес.',
      link: { slug: 'business-card-website', label: 'Детальніше про сайт-візитку →' },
    },

    faq: [
      { q: 'Скільки часу займає створення лендінгу?', a: 'Зазвичай 3–5 днів від погодження брифу до запуску. Якщо потрібно підготувати тексти чи фото з нуля, термін може трохи збільшитися. Точний термін називаю до старту.' },
      { q: 'Скільки коштує лендінг під ключ?', a: 'Від 10 000 грн. Ціна залежить від кількості блоків, готовності матеріалів, анімацій і кількості мов. Остаточну вартість фіксуємо після брифу.' },
      { q: 'Чи допоможете з текстами для лендінгу?', a: 'Так. Якщо готових текстів немає, складаю структуру і тексти на основі брифу, а ви вносите правки. Це найчастіший варіант.' },
      { q: 'Куди приходитимуть заявки з лендінгу?', a: 'У Telegram і на пошту, одразу після відправки форми.' },
      { q: 'Чи підійде лендінг для реклами в Google та Instagram?', a: 'Так, саме для реклами лендінг і створюється. За бажанням підключаю Google Analytics, щоб ви бачили, скільки відвідувачів і заявок приходить на сторінку.' },
      { q: 'Чи можна потім розширити лендінг до повноцінного сайту?', a: 'Так. Можна додати нові сторінки й розділи на тому ж домені, не втрачаючи позицій у пошуку.' },
    ],

    cta: {
      title: 'Обговоримо ваш лендінг',
      text: 'Напишіть коротко про продукт чи послугу, і я відповім з прикладами та орієнтовною вартістю.',
    },
  },

  ru: {
    metaTitle: 'Создание лендинга под ключ в Харькове | Ruban Web Studio',
    metaDescription:
      'Лендинг под ключ за 3–5 дней: дизайн под ваш бренд, адаптация под телефон, заявки в Telegram и базовое SEO. От 10 000 грн. Харьков и вся Украина.',

    eyebrow: 'Услуги · Лендинг',
    h1: 'Создание лендинга под ключ',
    intro:
      'Лендинг — это одностраничный сайт, который ведёт посетителя к одному действию: оставить заявку, позвонить или написать в Telegram. Делаю лендинги под ключ для бизнеса в Харькове и по всей Украине: от структуры и дизайна до запуска на вашем домене.',

    about: {
      title: 'Кому нужен лендинг',
      text: [
        'Лендинг лучше всего работает, когда у вас есть одно главное предложение и вы хотите быстро получать заявки: из рекламы в Google, Instagram или Facebook либо из поиска. На странице нет ничего лишнего, поэтому посетитель не теряется в меню и быстрее доходит до кнопки «Оставить заявку».',
        'Если услуг много и каждой нужно отдельное описание, лучше подойдёт сайт-визитка или многостраничный сайт. Помогу выбрать формат на первом разговоре.',
      ],
      who: [
        'Запуск новой услуги или продукта под рекламу',
        'Мастера и специалисты с одной основной услугой',
        'Курсы, мероприятия, марафоны и вебинары',
        'Проверка спроса перед созданием большого сайта',
        'Отдельная страница под акцию или сезонное предложение',
      ],
    },

    includes: {
      title: 'Что входит в лендинг',
      lead: 'Вы получаете готовый к работе сайт, а не только дизайн-макет.',
      items: [
        { icon: 'structure', title: 'Структура под продажи', text: 'Продумываю порядок блоков: проблема клиента, ваше решение, преимущества, примеры, цены, ответы на возражения и призыв к действию.' },
        { icon: 'design', title: 'Дизайн под ваш бренд', text: 'Цвета, шрифты и стиль под ваш логотип и аудиторию. Без шаблонов, которые уже видели на сотне других сайтов.' },
        { icon: 'mobile', title: 'Адаптация под телефон', text: 'Большинство посетителей приходят с телефона, поэтому каждый блок проверяю на смартфонах и планшетах.' },
        { icon: 'leads', title: 'Заявки в Telegram и на почту', text: 'Форма заявки, кнопки звонка и мессенджеров. Заявки приходят сразу, с защитой от спама.' },
        { icon: 'speed', title: 'Быстрая загрузка', text: 'Оптимизированные изображения и чистый код: страница открывается за секунды даже на мобильном интернете.' },
        { icon: 'seo', title: 'Базовое SEO', text: 'Заголовки, описания для Google, разметка для поиска, sitemap и подключение к Google Search Console.' },
        { icon: 'domain', title: 'Домен и запуск', text: 'Помогаю купить домен, подключаю хостинг и HTTPS. Домен и доступы оформлены на вас.' },
        { icon: 'support', title: 'Месяц поддержки', text: 'Первый месяц после запуска исправляю ошибки и вношу мелкие правки бесплатно.' },
      ],
    },

    steps: {
      title: 'Как я делаю лендинг за 3–5 дней',
      lead: 'Сроки реальные, если материалы (тексты, фото, логотип) готовы. Если их нет, помогу подготовить.',
      items: [
        { title: 'Бриф', text: 'Обсуждаем предложение, аудиторию, конкурентов и примеры сайтов, которые вам нравятся. Фиксируем цену и срок.' },
        { title: 'Структура и дизайн', text: 'Готовлю структуру блоков и дизайн первого экрана. Согласовываем внешний вид до начала вёрстки.' },
        { title: 'Разработка', text: 'Верстаю всю страницу, настраиваю форму, адаптацию под телефон и скорость.' },
        { title: 'Запуск', text: 'Проверяю на разных устройствах, подключаю домен, аналитику и Search Console. Лендинг готов принимать заявки.' },
      ],
    },

    price: {
      title: 'Сколько стоит лендинг',
      text: [
        'Стоимость лендинга — от 10 000 грн. Точную цену называю после короткого брифа и фиксирую её до старта, так что сюрпризов в конце не будет.',
        'Оплата частями: аванс перед началом и остаток после того, как вы согласовали результат. Домен и хостинг оплачиваются отдельно, помогу выбрать недорогой вариант.',
      ],
      factors: [
        'Количество блоков на странице',
        'Есть ли готовые тексты и фото, или их нужно подготовить',
        'Анимации и интерактивные элементы (калькулятор, квиз, таймер)',
        'Несколько языковых версий',
      ],
    },

    compare: {
      title: 'Лендинг или сайт-визитка?',
      text: 'Лендинг продаёт одно предложение на одной странице и лучше всего работает с рекламой. Сайт-визитка — это до 5 страниц: услуги, цены, о вас и контакты, поэтому она лучше подходит, когда клиенты ищут вас в Google и хотят узнать о бизнесе больше.',
      link: { slug: 'business-card-website', label: 'Подробнее о сайте-визитке →' },
    },

    faq: [
      { q: 'Сколько времени занимает создание лендинга?', a: 'Обычно 3–5 дней от согласования брифа до запуска. Если нужно подготовить тексты или фото с нуля, срок может немного увеличиться. Точный срок называю до старта.' },
      { q: 'Сколько стоит лендинг под ключ?', a: 'От 10 000 грн. Цена зависит от количества блоков, готовности материалов, анимаций и количества языков. Окончательную стоимость фиксируем после брифа.' },
      { q: 'Поможете с текстами для лендинга?', a: 'Да. Если готовых текстов нет, составляю структуру и тексты на основе брифа, а вы вносите правки. Это самый частый вариант.' },
      { q: 'Куда будут приходить заявки с лендинга?', a: 'В Telegram и на почту, сразу после отправки формы.' },
      { q: 'Подойдёт ли лендинг для рекламы в Google и Instagram?', a: 'Да, именно для рекламы лендинг и создаётся. По желанию подключаю Google Analytics, чтобы вы видели, сколько посетителей и заявок приходит на страницу.' },
      { q: 'Можно ли потом расширить лендинг до полноценного сайта?', a: 'Да. Можно добавить новые страницы и разделы на том же домене, не теряя позиций в поиске.' },
    ],

    cta: {
      title: 'Обсудим ваш лендинг',
      text: 'Напишите коротко о продукте или услуге, и я отвечу с примерами и ориентировочной стоимостью.',
    },
  },

  en: {
    metaTitle: 'Landing Page Design & Development | Ruban Web Studio',
    metaDescription:
      'A turnkey landing page in 3–5 days: custom design, mobile-friendly layout, leads straight to Telegram and basic SEO. From $350. Working with clients worldwide.',

    eyebrow: 'Services · Landing page',
    h1: 'Turnkey landing page development',
    intro:
      'A landing page is a one-page website that leads visitors to a single action: send a request, call or message you. I build turnkey landing pages for businesses in the US and worldwide, from structure and design to launch on your own domain.',

    about: {
      title: 'Who needs a landing page',
      text: [
        'A landing page works best when you have one main offer and want leads fast: from Google, Instagram or Facebook ads, or from search. There is nothing extra on the page, so visitors don’t get lost in menus and reach the “Get in touch” button sooner.',
        'If you offer many services and each one needs its own description, a business website or a multi-page site is a better fit. I’ll help you choose the format on our first call.',
      ],
      who: [
        'Launching a new service or product with ads',
        'Professionals with one main service',
        'Courses, events, challenges and webinars',
        'Testing demand before building a bigger website',
        'A separate page for a promotion or seasonal offer',
      ],
    },

    includes: {
      title: 'What’s included',
      lead: 'You get a website that’s ready to work, not just a design mockup.',
      items: [
        { icon: 'structure', title: 'Structure that sells', text: 'I plan the order of sections: the client’s problem, your solution, benefits, examples, prices, answers to objections and a call to action.' },
        { icon: 'design', title: 'Design that fits your brand', text: 'Colors, fonts and style matched to your logo and audience. No templates people have already seen on a hundred other sites.' },
        { icon: 'mobile', title: 'Mobile-friendly', text: 'Most visitors come from phones, so I check every section on smartphones and tablets.' },
        { icon: 'leads', title: 'Leads to Telegram and email', text: 'A contact form plus call and messenger buttons. Requests arrive instantly, with spam protection.' },
        { icon: 'speed', title: 'Fast loading', text: 'Optimized images and clean code: the page opens in seconds even on mobile data.' },
        { icon: 'seo', title: 'Basic SEO', text: 'Titles, Google descriptions, structured data, a sitemap and Google Search Console setup.' },
        { icon: 'domain', title: 'Domain and launch', text: 'I help you buy a domain and set up hosting and HTTPS. The domain and all access stay in your name.' },
        { icon: 'support', title: 'One month of support', text: 'For the first month after launch I fix bugs and make small edits for free.' },
      ],
    },

    steps: {
      title: 'How I build a landing page in 3–5 days',
      lead: 'This timeline is realistic when materials (texts, photos, logo) are ready. If they aren’t, I’ll help you prepare them.',
      items: [
        { title: 'Brief', text: 'We discuss your offer, audience, competitors and websites you like. We agree on the price and timeline.' },
        { title: 'Structure and design', text: 'I prepare the section structure and the first-screen design. We approve the look before development starts.' },
        { title: 'Development', text: 'I build the full page and set up the form, mobile layout and speed.' },
        { title: 'Launch', text: 'I test on different devices and connect the domain, analytics and Search Console. Your landing page is ready to take requests.' },
      ],
    },

    price: {
      title: 'How much does a landing page cost',
      text: [
        'A landing page starts from $350. I give an exact quote after a short brief and fix it before we start, so there are no surprises at the end.',
        'Payment in parts by PayPal invoice (any card, no PayPal account needed): a deposit before we start and the rest after you approve the result. The domain and hosting are paid separately, and I’ll help you choose an affordable option.',
      ],
      factors: [
        'Number of sections on the page',
        'Whether texts and photos are ready or need to be prepared',
        'Animations and interactive elements (calculator, quiz, timer)',
        'Several language versions',
      ],
    },

    compare: {
      title: 'Landing page or business website?',
      text: 'A landing page sells one offer on one page and works best with ads. A business website has up to 5 pages: services, prices, about you and contacts, so it’s a better fit when clients find you on Google and want to learn more about your business.',
      link: { slug: 'business-card-website', label: 'More about business websites →' },
    },

    faq: [
      { q: 'How long does it take to build a landing page?', a: 'Usually 3–5 days from the approved brief to launch. If texts or photos need to be created from scratch, it may take a little longer. I confirm the exact timeline before we start.' },
      { q: 'How much does a turnkey landing page cost?', a: 'From $350. The price depends on the number of sections, how ready your materials are, animations and the number of languages. The final price is fixed after the brief.' },
      { q: 'Can you help with the copy?', a: 'Yes. If you don’t have texts, I write the structure and copy based on the brief, and you make edits. That’s the most common option.' },
      { q: 'Where will the leads go?', a: 'To Telegram and email, right after the form is submitted.' },
      { q: 'Is a landing page suitable for Google and Instagram ads?', a: 'Yes, that’s exactly what landing pages are made for. If you like, I connect Google Analytics so you can see how many visitors and requests the page gets.' },
      { q: 'Can a landing page be expanded into a full website later?', a: 'Yes. New pages and sections can be added on the same domain without losing your search rankings.' },
    ],

    cta: {
      title: 'Let’s discuss your landing page',
      text: 'Tell me briefly about your product or service, and I’ll reply with examples and an estimated price.',
    },
  },
};

export default landing;
