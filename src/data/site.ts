const telegramUser = 'ruban_web_studio';

export const site = {
  name: 'Ruban Web Studio',
  logo: '/portfolio/logo.webp',
  telegram: `https://t.me/${telegramUser}`,
  telegramHandle: `@${telegramUser}`,
  // TODO: замінити на окрему пошту студії. Після заміни створіть новий formKey на web3forms.com на цю адресу.
  email: 'anton-ruban@ukr.net',
  phone: '+380958702674',
  phoneLabel: '+38 (095) 870-26-74',
  /** ключ Web3Forms: заявки з форми приходять на пошту, на яку він створений */
  formKey: '13b43453-3360-4747-86a1-3cd3b388a733',
  /** ID Google Analytics 4 (вигляд G-XXXXXXXXXX). Порожньо: аналітика не підключається */
  gaId: '',
};

/** Пошта для сторінки: закодована (розкодовує скрипт у Layout) і запасний текст для тих, у кого вимкнено JS */
export const emailEncoded = btoa(site.email);
export const emailMasked = site.email.replace('@', ' [at] ');
