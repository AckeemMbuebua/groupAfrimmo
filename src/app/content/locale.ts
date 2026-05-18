/** Langues du site vitrine (fichiers statiques, sans lib i18n). */
export const APP_LOCALES = ['fr', 'en'] as const;

export type AppLocale = (typeof APP_LOCALES)[number];

export const DEFAULT_APP_LOCALE: AppLocale = 'fr';

const STORAGE_KEY = 'afrimmo-locale';

export function readStoredLocale(): AppLocale | null {
  if (typeof localStorage === 'undefined') {
    return null;
  }
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw === 'fr' || raw === 'en' ? raw : null;
}

export function persistLocale(locale: AppLocale): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, locale);
  }
}

export function resolveInitialLocale(): AppLocale {
  return readStoredLocale() ?? DEFAULT_APP_LOCALE;
}
