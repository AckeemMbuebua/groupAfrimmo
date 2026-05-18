import type { UiContent } from '../site-content.model';
import { BRAND } from './brand';

export const FR_UI: UiContent = {
  aria: {
    primaryNav: 'Navigation principale',
    mobileNav: 'Navigation mobile',
    homeLink: `Accueil ${BRAND.legalName}`,
    siteLanguage: 'Langue du site',
    chooseLanguage: 'Choisir la langue',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    breadcrumb: "Fil d'Ariane",
  },
  footer: {
    sitemapHeading: 'Plan du site',
    contactHeading: 'Contact',
    whatsappDirect: 'WhatsApp direct',
    copyright: `© 2026 ${BRAND.legalName} | Tous droits réservés.`,
  },
  locale: {
    fr: 'Français',
    en: 'English',
  },
  common: {
    home: 'Accueil',
    legalNotice: 'Mentions légales',
    privacy: 'Confidentialité',
    lastUpdated: 'Dernière mise à jour : mai 2026',
  },
};
