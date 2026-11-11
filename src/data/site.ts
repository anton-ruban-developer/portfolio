const telegramUser = 'ruban_web_studio';

export const site = {
  name: 'Ruban Web Studio',
  logo: '/portfolio/logo.webp',
  telegram: `https://t.me/${telegramUser}`,
  telegramHandle: `@${telegramUser}`,
  email: 'ruban_web_studio@ukr.net',
  phone: '+380958702674',
  phoneLabel: '+38 (095) 870-26-74',
  /** ключ Web3Forms: заявки з форми приходять на пошту, на яку він створений (ruban_web_studio@ukr.net) */
  formKey: '0384fabe-1909-4cd8-96b5-88a68200f75a',
  /** ID Google Analytics 4 (вигляд G-XXXXXXXXXX). Порожньо: аналітика не підключається */
  gaId: '',
  /** останній день акції (за Києвом). Ціни зі знижкою: promoPrice у словниках. Після дати акція зникає сама */
  promoUntil: '2026-12-31',
};

/** кінець останнього дня акції, Київ (UTC+2 взимку) */
export const promoEnd = new Date(`${site.promoUntil}T23:59:59+02:00`);

/** Пошта для сторінки: закодована (розкодовує скрипт у Layout) і запасний текст для тих, у кого вимкнено JS */
export const emailEncoded = btoa(site.email);
export const emailMasked = site.email.replace('@', ' [at] ');
