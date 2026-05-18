import { inject } from '@angular/core';
import { LocaleService } from './locale.service';

/** Signaux home/site liés au composant — rendu OnPush + hydratation fiables. */
export function injectLocaleContent() {
  const localeService = inject(LocaleService);
  return {
    home: localeService.home,
    site: localeService.site,
    locale: localeService.locale,
    setLocale: (locale: Parameters<LocaleService['setLocale']>[0]) =>
      localeService.setLocale(locale),
    isActiveLocale: (code: Parameters<LocaleService['setLocale']>[0]) =>
      localeService.locale() === code,
  };
}
