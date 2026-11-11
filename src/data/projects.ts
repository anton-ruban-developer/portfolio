export interface Project {
  title: string;
  /** бізнес і місто */
  short: string;
  type: string;
  description: string;
  /** пункти «що зроблено»: показуються тільки у великому кейсі */
  results?: string[];
  tags: string[];
  url: string;
  image?: string;
  /** тривалість прокрутки скриншота при наведенні, сек */
  scroll?: number;
  /** великий кейс угорі; решта йдуть сіткою */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'REVIVAL',
    short: 'Клуб дзюдо, Харків',
    type: 'Корпоративний сайт на WordPress',
    description:
      'Сайт спортивного клубу з розкладом, програмою атестацій і фотогалереєю. Перенесений з конструктора на власну тему для швидкості та зручного оновлення.',
    results: [
      'Власна тема WordPress, зібрана через Vite',
      'Розклад із фільтрами за залом і групою, дані в одному JSON-файлі',
      'Програми атестацій з відео-демонстраціями та файлами для друку',
      'Збережено заголовки та описи для пошуку під час переходу на нову тему',
    ],
    tags: ['WordPress', 'Vite', 'JavaScript', 'CSS', 'SEO'],
    url: 'https://revival-judo.com',
    image: '/portfolio/judo-full.webp',
    scroll: 12,
    featured: true,
  },
  {
    title: 'Premium Barbershop',
    short: 'Мережа барбершопів, Нью-Йорк',
    type: 'Сайт мережі на WordPress',
    description: 'П’ять філій на Мангеттені: окремі сторінки локацій і послуг із цінами, онлайн-запис, галерея та відгуки.',
    tags: ['WordPress', 'Локальне SEO', 'Онлайн-запис'],
    url: 'https://premiumbarbershop.com',
    image: '/portfolio/premiumbarbershop.webp',
    scroll: 11,
  },
  {
    title: 'Skin Center NYC',
    short: 'Косметологічна клініка, Нью-Йорк',
    type: 'Багатосторінковий сайт на WordPress',
    description: 'Понад 30 процедур у семи категоріях, дві локації, галерея «до / після» та форма безкоштовної консультації.',
    tags: ['WordPress', 'Elementor', 'Лідогенерація'],
    url: 'https://skincenter.nyc',
    image: '/portfolio/skincenter.webp',
    scroll: 9,
  },
  {
    title: 'Car Wrapping Studio',
    short: 'Студія оклеювання авто, Арізона',
    type: 'Сайт послуг на WordPress',
    description: 'Сторінки під кожну послугу, ціни, галерея робіт і форма розрахунку вартості для заявок.',
    tags: ['WordPress', 'SEO', 'Форма заявки'],
    url: 'https://carwrapping.studio',
    image: '/portfolio/carwrapping.webp',
    scroll: 8,
  },
  {
    title: 'Dallas Super Pawn',
    short: 'Мережа ломбардів, Техас',
    type: 'Корпоративний сайт',
    description: 'Чотири філії, каталог того, що приймають у заставу, онлайн-оцінка виробу та програма лояльності.',
    tags: ['Корпоративний сайт', 'Онлайн-оцінка', 'Локальне SEO'],
    url: 'https://dallassuperpawn.com',
    image: '/portfolio/dallassuperpawn.webp',
    scroll: 13,
  },
];
