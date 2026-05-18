import type { UiContent } from '../site-content.model';

const brand = 'Groupe Afrimmo S.A.';

export const EN_UI: UiContent = {
  aria: {
    primaryNav: 'Primary navigation',
    mobileNav: 'Mobile navigation',
    homeLink: `${brand} home`,
    siteLanguage: 'Site language',
    chooseLanguage: 'Choose language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    breadcrumb: 'Breadcrumb',
  },
  footer: {
    sitemapHeading: 'Sitemap',
    contactHeading: 'Contact',
    whatsappDirect: 'WhatsApp direct',
    copyright: `© 2026 ${brand} | All rights reserved.`,
  },
  locale: {
    fr: 'French',
    en: 'English',
  },
  common: {
    home: 'Home',
    legalNotice: 'Legal notice',
    privacy: 'Privacy',
    lastUpdated: 'Last updated: May 2026',
  },
};
