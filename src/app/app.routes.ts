import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title:
      'Groupe Afrimmo S.A. | Construction, génie civil, logistique & import-export',
    loadComponent: () =>
      import('./pages/landing/landing-page').then((m) => m.LandingPage),
  },
  {
    path: 'realisations',
    title: 'Réalisations · Groupe Afrimmo',
    loadComponent: () =>
      import('./pages/realisations/realisations-hub').then(
        (m) => m.RealisationsHub,
      ),
  },
  {
    path: 'realisations/:id',
    loadComponent: () =>
      import('./pages/realisations/project-detail').then(
        (m) => m.ProjectDetail,
      ),
  },
  {
    path: 'actualites',
    title: 'Actualités · Groupe Afrimmo',
    loadComponent: () =>
      import('./pages/actualites/actualites-index').then(
        (m) => m.ActualitesIndex,
      ),
  },
  {
    path: 'actualites/:slug',
    loadComponent: () =>
      import('./pages/actualites/actualite-detail').then(
        (m) => m.ActualiteDetail,
      ),
  },
  {
    path: 'carrieres',
    title: 'Carrières · Groupe Afrimmo',
    loadComponent: () =>
      import('./pages/carrieres/carrieres').then((m) => m.Carrieres),
  },
  {
    path: 'mentions-legales',
    loadComponent: () =>
      import('./pages/legal/mentions-legales').then(
        (m) => m.MentionsLegales,
      ),
  },
  {
    path: 'politique-de-confidentialite',
    loadComponent: () =>
      import('./pages/legal/politique-confidentialite').then(
        (m) => m.PolitiqueConfidentialite,
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
