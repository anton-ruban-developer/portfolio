// Головна кнопка сайту: за замовчуванням Telegram, а якщо у словнику задано ui.primaryCta
// (англійська версія), то сторінка з формою заявки.
import { site } from './site';
import { localizePath, type Locale } from '../i18n';
import type { Dict } from '../i18n/types';

export function primaryCta(lang: Locale, t: Dict) {
  const c = t.ui.primaryCta;
  return c
    ? { href: localizePath(lang, c.path), label: c.label, external: false, telegram: false }
    : { href: site.telegram, label: t.ui.telegramCta, external: true, telegram: true };
}
