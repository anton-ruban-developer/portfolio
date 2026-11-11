import uk from './uk';
import ru from './ru';
import en from './en';
import type { Dict } from './types';

export const locales = ['uk', 'ru', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'uk';

/** Підписи для перемикача мов і коди для мета-тегів */
export const langMeta: Record<Locale, { label: string; name: string; ogLocale: string }> = {
  uk: { label: 'UA', name: 'Українська', ogLocale: 'uk_UA' },
  ru: { label: 'RU', name: 'Русский', ogLocale: 'ru_RU' },
  en: { label: 'EN', name: 'English', ogLocale: 'en_US' },
};

const dicts: Record<Locale, Dict> = { uk, ru, en };

/** Мова поточної сторінки: Astro визначає її за адресою (/, /ru/, /en/) */
export function getLang(currentLocale: string | undefined): Locale {
  return (locales as readonly string[]).includes(currentLocale ?? '') ? (currentLocale as Locale) : defaultLocale;
}

export function useT(currentLocale: string | undefined) {
  const lang = getLang(currentLocale);
  return { lang, t: dicts[lang], home: homePath(lang) };
}

/** Адреса головної сторінки мови: "/" для української, "/ru/" і "/en/" для інших */
export function homePath(lang: Locale): string {
  return localizePath(lang, '/');
}

/** Прибирає префікс мови: "/ru/about/" → "/about/" */
export function stripLocale(pathname: string): string {
  const [, first, ...rest] = pathname.split('/');
  return (locales as readonly string[]).includes(first) ? `/${rest.join('/')}` : pathname;
}

/** Та сама сторінка іншою мовою: ("ru", "/about/") → "/ru/about/" */
export function localizePath(lang: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLocale ? clean : `/${lang}${clean}`;
}
