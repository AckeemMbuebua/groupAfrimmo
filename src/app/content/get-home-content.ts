import type { AppLocale } from './locale';
import { DEFAULT_APP_LOCALE } from './locale';
import { HOME_EN } from './home.en';
import { HOME_FR } from './home.fr';
import type { HomeContent } from './home-content.type';

const HOME_BY_LOCALE = {
  fr: HOME_FR,
  en: HOME_EN,
} as const satisfies Record<AppLocale, HomeContent>;

export function getHomeContent(locale: AppLocale = DEFAULT_APP_LOCALE): HomeContent {
  return HOME_BY_LOCALE[locale];
}
