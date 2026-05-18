import type { SiteContent } from '../site-content.model';
import { INSIGHT_ARTICLES } from './actualites';
import { FR_CARRIERES } from './carrieres';
import { FR_LANDING } from './landing';
import { FR_NAVIGATION } from './navigation';
import { FR_PAGES } from './pages';
import { PROJECT_CARD_LIST, PROJECT_EXTRA } from './projects';
import { FR_SEO } from './seo';
import { FR_SHARED } from './shared';
import { FR_UI } from './ui';

export const FR_SITE_CONTENT: SiteContent = {
  locale: 'fr',
  seo: FR_SEO,
  navigation: FR_NAVIGATION,
  shared: FR_SHARED,
  ui: FR_UI,
  landing: FR_LANDING,
  pages: FR_PAGES,
  projects: {
    cards: PROJECT_CARD_LIST,
    extra: PROJECT_EXTRA,
  },
  actualites: {
    articles: INSIGHT_ARTICLES,
  },
  carrieres: FR_CARRIERES,
};
