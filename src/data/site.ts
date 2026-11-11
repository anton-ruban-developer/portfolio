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
  formKey: 'a942b5d7-3f46-451f-bea0-3f8060569501',
  /** ID Google Analytics 4 (вигляд G-XXXXXXXXXX). Порожньо: аналітика не підключається */
  gaId: '',
};

/** Пошта для сторінки: закодована (розкодовує скрипт у Layout) і запасний текст для тих, у кого вимкнено JS */
export const emailEncoded = btoa(site.email);
export const emailMasked = site.email.replace('@', ' [at] ');
