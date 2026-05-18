import type { ProjectCard } from '../shared/landing/landing.models';
import type {
  InsightArticle,
  ProjectCaseExtended,
} from '../shared/content/content.models';
import { DEFAULT_SITE_CONTENT, getContent } from './get-content';
import { DEFAULT_LOCALE, type SupportedLocale } from './locale';

export function getProjectCards(
  locale: SupportedLocale = DEFAULT_LOCALE,
): readonly ProjectCard[] {
  return getContent(locale).projects.cards;
}

export function getProjectCase(
  id: string,
  locale: SupportedLocale = DEFAULT_LOCALE,
): (ProjectCard & ProjectCaseExtended) | undefined {
  const content = getContent(locale);
  const card = content.projects.cards.find((p) => p.id === id);
  const extra = content.projects.extra[id];
  if (!card || !extra) {
    return undefined;
  }
  return { ...card, ...extra };
}

export function getArticleBySlug(
  slug: string,
  locale: SupportedLocale = DEFAULT_LOCALE,
): InsightArticle | undefined {
  return getContent(locale).actualites.articles.find((a) => a.slug === slug);
}

export function formatArticleDate(
  iso: string,
  locale: SupportedLocale = DEFAULT_LOCALE,
): string {
  return new Intl.DateTimeFormat(locale === 'fr' ? 'fr-FR' : 'en-US', {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(new Date(iso));
}

export { DEFAULT_SITE_CONTENT };
