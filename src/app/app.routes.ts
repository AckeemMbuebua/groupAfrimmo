import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing-page.component').then(
        (m) => m.LandingPageComponent,
      ),
  },
  {
    path: 'realisations',
    title: 'Réalisations · Groupe Afrimmo',
    loadComponent: () =>
      import('./pages/realisations/realisations-hub.component').then(
        (m) => m.RealisationsHubComponent,
      ),
  },
  {
    path: 'realisations/:id',
    loadComponent: () =>
      import('./pages/realisations/project-detail.component').then(
        (m) => m.ProjectDetailComponent,
      ),
  },
  {
    path: 'actualites',
    title: 'Actualités · Groupe Afrimmo',
    loadComponent: () =>
      import('./pages/actualites/actualites-index.component').then(
        (m) => m.ActualitesIndexComponent,
      ),
  },
  {
    path: 'actualites/:slug',
    loadComponent: () =>
      import('./pages/actualites/actualite-detail.component').then(
        (m) => m.ActualiteDetailComponent,
      ),
  },
  {
    path: 'carrieres',
    title: 'Carrières · Groupe Afrimmo',
    loadComponent: () =>
      import('./pages/carrieres/carrieres.component').then((m) => m.CarrieresComponent),
  },
  {
    path: 'mentions-legales',
    loadComponent: () =>
      import('./pages/legal/mentions-legales.component').then(
        (m) => m.MentionsLegalesComponent,
      ),
  },
  {
    path: 'politique-de-confidentialite',
    loadComponent: () =>
      import('./pages/legal/politique-confidentialite.component').then(
        (m) => m.PolitiqueConfidentialiteComponent,
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
