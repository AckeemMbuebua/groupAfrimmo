import type { NavigationContent } from '../site-content.model';
import type { FooterNavLink, NavMainEntry } from '../../shared/landing/landing.models';

const main: readonly NavMainEntry[] = [
  { kind: 'fragment', label: 'Accueil', fragment: 'home' },
  { kind: 'fragment', label: 'Expertises', fragment: 'expertise' },
  { kind: 'route', label: 'Réalisations', path: '/realisations' },
  { kind: 'fragment', label: 'Contact', fragment: 'contact' },
];

const footer: readonly FooterNavLink[] = [
  { kind: 'homeFragment', label: 'À propos', fragment: 'a-propos' },
  { kind: 'homeFragment', label: 'Services', fragment: 'services' },
  { kind: 'homeFragment', label: 'FAQ', fragment: 'faq' },
  { kind: 'route', label: 'Actualités', path: '/actualites' },
  { kind: 'route', label: 'Carrières', path: '/carrieres' },
  { kind: 'route', label: 'Mentions légales', path: '/mentions-legales' },
  { kind: 'route', label: 'Confidentialité', path: '/politique-de-confidentialite' },
];

export const FR_NAVIGATION: NavigationContent = { main, footer };
