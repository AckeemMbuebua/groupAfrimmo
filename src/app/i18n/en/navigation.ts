import type { NavigationContent } from '../site-content.model';
import type { FooterNavLink, NavMainEntry } from '../../shared/landing/landing.models';

const main: readonly NavMainEntry[] = [
  { kind: 'fragment', label: 'Home', fragment: 'home' },
  { kind: 'fragment', label: 'Expertise', fragment: 'expertise' },
  { kind: 'route', label: 'Projects', path: '/realisations' },
  { kind: 'fragment', label: 'Contact', fragment: 'contact' },
];

const footer: readonly FooterNavLink[] = [
  { kind: 'homeFragment', label: 'About', fragment: 'a-propos' },
  { kind: 'homeFragment', label: 'Services', fragment: 'services' },
  { kind: 'homeFragment', label: 'FAQ', fragment: 'faq' },
  { kind: 'route', label: 'News', path: '/actualites' },
  { kind: 'route', label: 'Careers', path: '/carrieres' },
  { kind: 'route', label: 'Legal notice', path: '/mentions-legales' },
  { kind: 'route', label: 'Privacy', path: '/politique-de-confidentialite' },
];

export const EN_NAVIGATION: NavigationContent = { main, footer };
