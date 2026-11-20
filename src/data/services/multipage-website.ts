import type { Locale } from '../../i18n';
import type { ServicePageText } from './types';

// Сторінка /multipage-website/. Ціна й термін підтягуються з t.services.items[2].
// Факти (терміни, оплата, підтримка) мають збігатися з головною сторінкою та FAQ у словниках.
const multipage: Partial<Record<Locale, ServicePageText>> = {
  uk: {
    metaTitle: 'Розробка багатосторінкового сайту в Харкові | Ruban Web Studio',
    metaDescription:
      'Багатосторінковий сайт для бізнесу за 1–2 тижні: окрема сторінка під кожну послугу, структура під SEO, блог, кілька мов і адмін-панель за бажанням. Від 20 000 грн.',

    eyebrow: 'Послуги · Багатосторінковий сайт',
    h1: 'Розробка багатосторінкового сайту для бізнесу',
    intro:
      'Багатосторінковий сайт — це повноцінний сайт компанії, де кожна послуга, філія чи напрямок має власну сторінку. Такий сайт приводить клієнтів з Google за десятками різних запитів і показує бізнес солідно. Роблю багатосторінкові сайти під ключ для компаній у Харкові, по всій Україні та за кордоном.',

    about: {
      title: 'Кому потрібен багатосторінковий сайт',
      text: [
        'Коли послуг багато, одна сторінка не може добре відповісти на всі запити. Людина шукає «чистка обличчя Харків» або «оклеювання авто плівкою», і Google показує сторінку, яка відповідає саме на це питання. Тому кожна послуга отримує свою сторінку з описом, цінами й прикладами.',
        'Багатосторінковий сайт також росте разом із бізнесом: можна додавати нові послуги, статті в блог, філії та мови, не переробляючи все з нуля.',
      ],
      who: [
        'Компанії з кількома напрямками чи послугами',
        'Мережі з кількома філіями або локаціями',
        'Клініки, салони, сервісні центри з великим прайсом',
        'Бізнес, який хоче отримувати клієнтів із Google',
        'Компанії, яким потрібна кількамовна версія сайту',
      ],
    },

    includes: {
      title: 'Що входить у багатосторінковий сайт',
      lead: 'Не набір сторінок, а продумана система, яку зручно розвивати й просувати.',
      items: [
        { icon: 'structure', title: 'Структура під SEO', text: 'Збираю ключові запити й будую структуру: окремі сторінки під послуги, категорії та локації.' },
        { icon: 'pages', title: 'Сторінки послуг і компанії', text: 'Послуги з цінами, про компанію, кейси й портфоліо, відгуки, контакти. Кожна сторінка має свій заголовок і опис для Google.' },
        { icon: 'design', title: 'Єдиний дизайн', text: 'Дизайн під ваш бренд, однаково впізнаваний на всіх сторінках і на всіх пристроях.' },
        { icon: 'blog', title: 'Блог або новини', text: 'За потреби: розділ для статей, які приводять клієнтів з пошуку за інформаційними запитами.' },
        { icon: 'lang', title: 'Кілька мов', text: 'За потреби: українська, англійська чи інші мови, з правильними налаштуваннями для Google.' },
        { icon: 'admin', title: 'Адмін-панель', text: 'За бажанням: зручна панель, щоб самостійно змінювати тексти, ціни й фото без програміста.' },
        { icon: 'speed', title: 'Швидкість', text: 'Оптимізовані зображення й лише потрібні плагіни: сайт швидко відкривається навіть із великою кількістю сторінок.' },
        { icon: 'analytics', title: 'Форми й аналітика', text: 'Форми заявок на потрібних сторінках, Google Analytics і Search Console, щоб бачити результат.' },
      ],
    },

    steps: {
      title: 'Як я роблю багатосторінковий сайт за 1–2 тижні',
      lead: 'Термін залежить від кількості сторінок, мов і готовності матеріалів. Точний план узгоджуємо до старту.',
      items: [
        { title: 'Бриф і структура', text: 'Обговорюємо послуги, клієнтів і конкурентів, збираю запити й складаю карту сторінок. Фіксуємо ціну й термін.' },
        { title: 'Дизайн', text: 'Готую дизайн головної та типових сторінок: послуги, контакти, статті. Погоджуємо до розробки.' },
        { title: 'Розробка і наповнення', text: 'Верстаю сторінки, наповнюю текстами й фото, налаштовую форми, мови й адмін-панель, якщо вона потрібна.' },
        { title: 'Запуск і SEO', text: 'Перевіряю на різних пристроях, підключаю домен, аналітику та Search Console, надсилаю карту сайту в Google.' },
      ],
    },

    price: {
      title: 'Скільки коштує багатосторінковий сайт',
      text: [
        'Вартість багатосторінкового сайту — від 20 000 грн. Точну ціну називаю після брифу і складання структури, фіксую її до старту.',
        'Оплата частинами: аванс перед початком і решта після того, як ви погодили результат. Домен і хостинг оплачуються окремо, допоможу обрати оптимальний варіант.',
      ],
      factors: [
        'Кількість сторінок і розділів',
        'Чи є готові тексти й фото, або їх потрібно підготувати',
        'Блог, каталог послуг або сторінки філій',
        'Кількість мовних версій',
        'Адмін-панель для самостійного редагування',
      ],
    },

    compare: {
      title: 'Багатосторінковий сайт чи сайт-візитка?',
      text: 'Якщо послуг небагато і вони вміщаються на кількох сторінках, швидше й дешевше зробити сайт-візитку. Багатосторінковий сайт варто обирати, коли кожен напрямок потребує окремої сторінки для пошуку, потрібні блог, кілька мов або адмін-панель.',
      link: { slug: 'business-card-website', label: 'Детальніше про сайт-візитку →' },
    },

    faq: [
      { q: 'Скільки часу займає розробка багатосторінкового сайту?', a: 'Зазвичай 1–2 тижні від погодження брифу до запуску. Великий сайт з багатьма сторінками й мовами може зайняти більше, точний термін називаю до старту.' },
      { q: 'Скільки коштує багатосторінковий сайт?', a: 'Від 20 000 грн. Ціна залежить від кількості сторінок, мов, блогу, адмін-панелі та готовності матеріалів. Остаточну вартість фіксуємо після брифу.' },
      { q: 'Чи зможу я сам редагувати сайт?', a: 'Так, якщо потрібна адмін-панель, я її підключу: ви змінюватимете тексти, ціни й фото самостійно. Або просто пишіть мені, і я внесу правки сам.' },
      { q: 'Чи допоможе багатосторінковий сайт у просуванні в Google?', a: 'Так, це його головна перевага: окрема сторінка під кожну послугу дає змогу з’являтися в пошуку за багатьма запитами. Позиції залежать від конкуренції й часу, але правильна структура — основа для цього.' },
      { q: 'Чи можна зробити сайт кількома мовами?', a: 'Так. Налаштовую мовні версії так, щоб Google показував людям сторінку їхньою мовою і не вважав версії дублями.' },
      { q: 'Чи можна перенести мій старий сайт?', a: 'Так. Переношу вміст і, де можливо, зберігаю адреси, заголовки й описи сторінок, щоб не втратити позиції в пошуку. Саме так я переніс сайт клубу REVIVAL з конструктора на власну тему.' },
    ],

    cta: {
      title: 'Обговоримо ваш сайт',
      text: 'Напишіть коротко про ваш бізнес і напрямки, і я відповім з прикладами, структурою та орієнтовною вартістю.',
    },
  },

  ru: {
    metaTitle: 'Разработка многостраничного сайта в Харькове | Ruban Web Studio',
    metaDescription:
      'Многостраничный сайт для бизнеса за 1–2 недели: отдельная страница под каждую услугу, структура под SEO, блог, несколько языков и админ-панель по желанию. От 20 000 грн.',

    eyebrow: 'Услуги · Многостраничный сайт',
    h1: 'Разработка многостраничного сайта для бизнеса',
    intro:
      'Многостраничный сайт — это полноценный сайт компании, где у каждой услуги, филиала или направления есть своя страница. Такой сайт приводит клиентов из Google по десяткам разных запросов и показывает бизнес солидно. Делаю многостраничные сайты под ключ для компаний в Харькове, по всей Украине и за рубежом.',

    about: {
      title: 'Кому нужен многостраничный сайт',
      text: [
        'Когда услуг много, одна страница не может хорошо ответить на все запросы. Человек ищет «чистка лица Харьков» или «оклейка авто плёнкой», и Google показывает страницу, которая отвечает именно на этот вопрос. Поэтому каждая услуга получает свою страницу с описанием, ценами и примерами.',
        'Многостраничный сайт также растёт вместе с бизнесом: можно добавлять новые услуги, статьи в блог, филиалы и языки, не переделывая всё с нуля.',
      ],
      who: [
        'Компании с несколькими направлениями или услугами',
        'Сети с несколькими филиалами или локациями',
        'Клиники, салоны, сервисные центры с большим прайсом',
        'Бизнес, который хочет получать клиентов из Google',
        'Компании, которым нужна многоязычная версия сайта',
      ],
    },

    includes: {
      title: 'Что входит в многостраничный сайт',
      lead: 'Не набор страниц, а продуманная система, которую удобно развивать и продвигать.',
      items: [
        { icon: 'structure', title: 'Структура под SEO', text: 'Собираю ключевые запросы и строю структуру: отдельные страницы под услуги, категории и локации.' },
        { icon: 'pages', title: 'Страницы услуг и компании', text: 'Услуги с ценами, о компании, кейсы и портфолио, отзывы, контакты. У каждой страницы свой заголовок и описание для Google.' },
        { icon: 'design', title: 'Единый дизайн', text: 'Дизайн под ваш бренд, одинаково узнаваемый на всех страницах и на всех устройствах.' },
        { icon: 'blog', title: 'Блог или новости', text: 'При необходимости: раздел для статей, которые приводят клиентов из поиска по информационным запросам.' },
        { icon: 'lang', title: 'Несколько языков', text: 'При необходимости: украинский, английский или другие языки, с правильными настройками для Google.' },
        { icon: 'admin', title: 'Админ-панель', text: 'По желанию: удобная панель, чтобы самостоятельно менять тексты, цены и фото без программиста.' },
        { icon: 'speed', title: 'Скорость', text: 'Оптимизированные изображения и только нужные плагины: сайт быстро открывается даже с большим количеством страниц.' },
        { icon: 'analytics', title: 'Формы и аналитика', text: 'Формы заявок на нужных страницах, Google Analytics и Search Console, чтобы видеть результат.' },
      ],
    },

    steps: {
      title: 'Как я делаю многостраничный сайт за 1–2 недели',
      lead: 'Срок зависит от количества страниц, языков и готовности материалов. Точный план согласовываем до старта.',
      items: [
        { title: 'Бриф и структура', text: 'Обсуждаем услуги, клиентов и конкурентов, собираю запросы и составляю карту страниц. Фиксируем цену и срок.' },
        { title: 'Дизайн', text: 'Готовлю дизайн главной и типовых страниц: услуги, контакты, статьи. Согласовываем до разработки.' },
        { title: 'Разработка и наполнение', text: 'Верстаю страницы, наполняю текстами и фото, настраиваю формы, языки и админ-панель, если она нужна.' },
        { title: 'Запуск и SEO', text: 'Проверяю на разных устройствах, подключаю домен, аналитику и Search Console, отправляю карту сайта в Google.' },
      ],
    },

    price: {
      title: 'Сколько стоит многостраничный сайт',
      text: [
        'Стоимость многостраничного сайта — от 20 000 грн. Точную цену называю после брифа и составления структуры, фиксирую её до старта.',
        'Оплата частями: аванс перед началом и остаток после того, как вы согласовали результат. Домен и хостинг оплачиваются отдельно, помогу выбрать оптимальный вариант.',
      ],
      factors: [
        'Количество страниц и разделов',
        'Есть ли готовые тексты и фото, или их нужно подготовить',
        'Блог, каталог услуг или страницы филиалов',
        'Количество языковых версий',
        'Админ-панель для самостоятельного редактирования',
      ],
    },

    compare: {
      title: 'Многостраничный сайт или сайт-визитка?',
      text: 'Если услуг немного и они помещаются на нескольких страницах, быстрее и дешевле сделать сайт-визитку. Многостраничный сайт стоит выбирать, когда каждому направлению нужна отдельная страница для поиска, нужны блог, несколько языков или админ-панель.',
      link: { slug: 'business-card-website', label: 'Подробнее о сайте-визитке →' },
    },

    faq: [
      { q: 'Сколько времени занимает разработка многостраничного сайта?', a: 'Обычно 1–2 недели от согласования брифа до запуска. Большой сайт с множеством страниц и языков может занять больше, точный срок называю до старта.' },
      { q: 'Сколько стоит многостраничный сайт?', a: 'От 20 000 грн. Цена зависит от количества страниц, языков, блога, админ-панели и готовности материалов. Окончательную стоимость фиксируем после брифа.' },
      { q: 'Смогу ли я сам редактировать сайт?', a: 'Да, если нужна админ-панель, я её подключу: вы будете менять тексты, цены и фото самостоятельно. Или просто пишите мне, и я внесу правки сам.' },
      { q: 'Поможет ли многостраничный сайт в продвижении в Google?', a: 'Да, это его главное преимущество: отдельная страница под каждую услугу позволяет появляться в поиске по многим запросам. Позиции зависят от конкуренции и времени, но правильная структура — основа для этого.' },
      { q: 'Можно ли сделать сайт на нескольких языках?', a: 'Да. Настраиваю языковые версии так, чтобы Google показывал людям страницу на их языке и не считал версии дублями.' },
      { q: 'Можно ли перенести мой старый сайт?', a: 'Да. Переношу содержимое и, где возможно, сохраняю адреса, заголовки и описания страниц, чтобы не потерять позиции в поиске. Именно так я перенёс сайт клуба REVIVAL с конструктора на собственную тему.' },
    ],

    cta: {
      title: 'Обсудим ваш сайт',
      text: 'Напишите коротко о вашем бизнесе и направлениях, и я отвечу с примерами, структурой и ориентировочной стоимостью.',
    },
  },

  en: {
    metaTitle: 'Multi-Page Website Development | Ruban Web Studio',
    metaDescription:
      'A multi-page business website in 1–2 weeks: a separate page for each service, SEO-driven structure, blog, multiple languages and an optional admin panel. From $850.',

    eyebrow: 'Services · Multi-page website',
    h1: 'Multi-page website development for business',
    intro:
      'A multi-page website is a full company website where every service, location or line of business has its own page. It brings clients from Google for dozens of different searches and presents your business professionally. I build turnkey multi-page websites for companies in the US and worldwide.',

    about: {
      title: 'Who needs a multi-page website',
      text: [
        'When you offer many services, one page can’t answer every search well. Someone searches for “facial treatment in Brooklyn” or “car vinyl wrap”, and Google shows the page that answers exactly that question. So each service gets its own page with a description, prices and examples.',
        'A multi-page website also grows with your business: you can add new services, blog posts, locations and languages without rebuilding everything from scratch.',
      ],
      who: [
        'Companies with several services or lines of business',
        'Chains with multiple branches or locations',
        'Clinics, salons and service centers with a large price list',
        'Businesses that want to get clients from Google',
        'Companies that need a multilingual website',
      ],
    },

    includes: {
      title: 'What’s included',
      lead: 'Not just a set of pages, but a well-planned system that’s easy to grow and promote.',
      items: [
        { icon: 'structure', title: 'SEO-driven structure', text: 'I research keywords and plan the structure: separate pages for services, categories and locations.' },
        { icon: 'pages', title: 'Service and company pages', text: 'Services with prices, about, case studies and portfolio, reviews, contacts. Every page has its own title and description for Google.' },
        { icon: 'design', title: 'Consistent design', text: 'Design that fits your brand and stays recognizable across all pages and devices.' },
        { icon: 'blog', title: 'Blog or news', text: 'If needed: a section for articles that bring clients from informational searches.' },
        { icon: 'lang', title: 'Multiple languages', text: 'If needed: English, Ukrainian or other languages, set up correctly for Google.' },
        { icon: 'admin', title: 'Admin panel', text: 'Optional: an easy-to-use panel to change texts, prices and photos yourself, without a developer.' },
        { icon: 'speed', title: 'Speed', text: 'Optimized images and only the plugins you need: the site loads fast even with many pages.' },
        { icon: 'analytics', title: 'Forms and analytics', text: 'Contact forms on the right pages, Google Analytics and Search Console to track results.' },
      ],
    },

    steps: {
      title: 'How I build a multi-page website in 1–2 weeks',
      lead: 'The timeline depends on the number of pages, languages and how ready your materials are. We agree on the exact plan before we start.',
      items: [
        { title: 'Brief and structure', text: 'We discuss your services, clients and competitors; I research keywords and draft a site map. We agree on the price and timeline.' },
        { title: 'Design', text: 'I design the home page and typical pages: services, contacts, articles. We approve them before development.' },
        { title: 'Development and content', text: 'I build the pages, add texts and photos, and set up forms, languages and the admin panel if needed.' },
        { title: 'Launch and SEO', text: 'I test on different devices, connect the domain, analytics and Search Console, and submit the sitemap to Google.' },
      ],
    },

    price: {
      title: 'How much does a multi-page website cost',
      text: [
        'A multi-page website starts from $850. I give an exact quote after the brief and site structure, and fix it before we start.',
        'Payment in parts: a deposit before we start and the rest after you approve the result. The domain and hosting are paid separately, and I’ll help you choose the best option.',
      ],
      factors: [
        'Number of pages and sections',
        'Whether texts and photos are ready or need to be prepared',
        'Blog, service catalog or location pages',
        'Number of language versions',
        'Admin panel for editing the site yourself',
      ],
    },

    compare: {
      title: 'Multi-page website or business website?',
      text: 'If you have a few services that fit on several pages, a business website is faster and cheaper. Choose a multi-page website when each line of business needs its own page for search, or you need a blog, multiple languages or an admin panel.',
      link: { slug: 'business-card-website', label: 'More about business websites →' },
    },

    faq: [
      { q: 'How long does it take to build a multi-page website?', a: 'Usually 1–2 weeks from the approved brief to launch. A large site with many pages and languages may take longer; I confirm the exact timeline before we start.' },
      { q: 'How much does a multi-page website cost?', a: 'From $850. The price depends on the number of pages, languages, blog, admin panel and how ready your materials are. The final price is fixed after the brief.' },
      { q: 'Will I be able to edit the site myself?', a: 'Yes. If you need an admin panel, I’ll set it up so you can change texts, prices and photos yourself. Or just message me and I’ll make the edits.' },
      { q: 'Will a multi-page website help with Google rankings?', a: 'Yes, that’s its main advantage: a separate page for each service lets you appear in search for many queries. Rankings depend on competition and time, but the right structure is the foundation.' },
      { q: 'Can the website be in several languages?', a: 'Yes. I set up language versions so Google shows people the page in their language and doesn’t treat the versions as duplicates.' },
      { q: 'Can you migrate my old website?', a: 'Yes. I move the content and, where possible, keep the URLs, titles and descriptions so you don’t lose search rankings. That’s how I moved the REVIVAL club website from a site builder to a custom theme.' },
    ],

    cta: {
      title: 'Let’s discuss your website',
      text: 'Tell me briefly about your business and services, and I’ll reply with examples, a proposed structure and an estimated price.',
    },
  },
};

export default multipage;
