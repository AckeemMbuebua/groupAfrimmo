import { RenderMode, ServerRoute } from '@angular/ssr';
import { INSIGHT_ARTICLES } from './shared/content/actualites.data';
import { PROJECT_CARD_LIST } from './shared/content/projects.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'realisations',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'actualites',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'carrieres',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'mentions-legales',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'politique-de-confidentialite',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'realisations/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return PROJECT_CARD_LIST.map((project) => ({ id: project.id }));
    },
  },
  {
    path: 'actualites/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return INSIGHT_ARTICLES.map((article) => ({ slug: article.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
