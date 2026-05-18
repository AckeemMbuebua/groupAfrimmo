import { InjectionToken, type Provider } from '@angular/core';
import { DEFAULT_SITE_CONTENT, getContent } from './get-content';
import type { SiteContent } from './site-content.model';
import { DEFAULT_LOCALE, type SupportedLocale } from './locale';

export const SITE_CONTENT = new InjectionToken<SiteContent>('SITE_CONTENT');

export function provideSiteContent(locale: SupportedLocale = DEFAULT_LOCALE): Provider {
  return {
    provide: SITE_CONTENT,
    useValue: getContent(locale),
  };
}

/** Provider par défaut (fr) — à remplacer par une résolution de locale quand l’i18n sera active. */
export const provideDefaultSiteContent = (): Provider =>
  provideSiteContent(DEFAULT_LOCALE);

export { DEFAULT_SITE_CONTENT };
