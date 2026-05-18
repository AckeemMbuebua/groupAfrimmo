import type { SupportedLocale } from './locale';
import { DEFAULT_LOCALE } from './locale';
import { EN_SITE_CONTENT } from './en';
import { FR_SITE_CONTENT } from './fr';
import type { SiteContent } from './site-content.model';

const CONTENT_BY_LOCALE = {
  fr: FR_SITE_CONTENT,
  en: EN_SITE_CONTENT,
} as const satisfies Record<SupportedLocale, SiteContent>;

export function getContent(locale: SupportedLocale = DEFAULT_LOCALE): SiteContent {
  return CONTENT_BY_LOCALE[locale];
}

/** Contenu par défaut du site (français) — pratique pour routes et données statiques. */
export const DEFAULT_SITE_CONTENT = getContent(DEFAULT_LOCALE);
