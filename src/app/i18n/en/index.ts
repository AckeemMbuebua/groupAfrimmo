import { HOME_EN } from '../../content/home.en';
import type { LandingContent, SiteContent } from '../site-content.model';
import { EN_INSIGHT_ARTICLES } from './actualites';
import { EN_CARRIERES } from './carrieres';
import { EN_NAVIGATION } from './navigation';
import { EN_PAGES } from './pages';
import { EN_PROJECT_CARD_LIST, EN_PROJECT_EXTRA } from './projects';
import { EN_SEO } from './seo';
import { EN_SHARED } from './shared';
import { EN_UI } from './ui';

const EN_LANDING: LandingContent = {
  faq: HOME_EN.faq.items,
  services: HOME_EN.services.lines,
  stats: {
    sectionTitle: HOME_EN.stats.title,
    sectionLead: HOME_EN.stats.lead,
    items: HOME_EN.stats.items,
    capabilityLabels: HOME_EN.stats.capabilityLabels,
  },
  method: HOME_EN.method.phases,
  expertise: HOME_EN.expertise.cards,
  references: HOME_EN.references.items,
};

/** Contenu EN — fichiers statiques sans librairie i18n. */
export const EN_SITE_CONTENT: SiteContent = {
  locale: 'en',
  seo: EN_SEO,
  navigation: EN_NAVIGATION,
  shared: EN_SHARED,
  ui: EN_UI,
  landing: EN_LANDING,
  pages: EN_PAGES,
  projects: {
    cards: EN_PROJECT_CARD_LIST,
    extra: EN_PROJECT_EXTRA,
  },
  actualites: {
    articles: EN_INSIGHT_ARTICLES,
  },
  carrieres: EN_CARRIERES,
};
