import type { FooterNavLink, NavMainEntry } from '../landing/landing.models';

/** Menu principal header : compréhension en < 3 s, pas de doublon avec le footer. */
export const SITE_MAIN_NAV: readonly NavMainEntry[] = [
  { kind: 'fragment', label: 'Accueil', fragment: 'home' },
  { kind: 'fragment', label: 'Expertises', fragment: 'expertise' },
  { kind: 'route', label: 'Réalisations', path: '/realisations' },
  { kind: 'fragment', label: 'Méthode', fragment: 'methode' },
  { kind: 'fragment', label: 'Contact', fragment: 'contact' },
];

/** Liens secondaires : réservés au footer. */
export const SITE_FOOTER_NAV: readonly FooterNavLink[] = [
  { kind: 'homeFragment', label: 'À propos', fragment: 'a-propos' },
  { kind: 'homeFragment', label: 'Services', fragment: 'services' },
  { kind: 'homeFragment', label: 'FAQ', fragment: 'faq' },
  { kind: 'route', label: 'Actualités', path: '/actualites' },
  { kind: 'route', label: 'Carrières', path: '/carrieres' },
  { kind: 'route', label: 'Mentions légales', path: '/mentions-legales' },
  { kind: 'route', label: 'Confidentialité', path: '/politique-de-confidentialite' },
];
