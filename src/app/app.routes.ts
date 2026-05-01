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
