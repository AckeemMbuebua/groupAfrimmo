import { Routes } from '@angular/router';
import { DEFAULT_SITE_CONTENT } from './i18n/get-content';

const { routeTitles } = DEFAULT_SITE_CONTENT.seo;

export const routes: Routes = [
  {
    path: '',
    title: routeTitles.home,
    loadComponent: () =>
      import('./pages/landing/landing-page').then((m) => m.LandingPage),
  },
  {
    path: 'realisations',
    title: routeTitles.realisations,
    loadComponent: () =>
      import('./pages/realisations/realisations-hub').then(
        (m) => m.RealisationsHub,
      ),
  },
  {
    path: 'realisations/:id',
    title: routeTitles.realisationsProject,
    loadComponent: () =>
      import('./pages/realisations/project-detail').then(
        (m) => m.ProjectDetail,
      ),
  },
  {
    path: 'actualites',
    title: routeTitles.actualites,
    loadComponent: () =>
      import('./pages/actualites/actualites-index').then(
        (m) => m.ActualitesIndex,
      ),
  },
  {
    path: 'actualites/:slug',
    title: routeTitles.actualite,
    loadComponent: () =>
      import('./pages/actualites/actualite-detail').then(
        (m) => m.ActualiteDetail,
      ),
  },
  {
    path: 'carrieres',
    title: routeTitles.carrieres,
    loadComponent: () =>
      import('./pages/carrieres/carrieres').then((m) => m.Carrieres),
  },
  {
    path: 'mentions-legales',
    title: routeTitles.mentionsLegales,
    loadComponent: () =>
      import('./pages/legal/mentions-legales').then(
        (m) => m.MentionsLegales,
      ),
  },
  {
    path: 'politique-de-confidentialite',
    title: routeTitles.politiqueConfidentialite,
    loadComponent: () =>
      import('./pages/legal/politique-confidentialite').then(
        (m) => m.PolitiqueConfidentialite,
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
