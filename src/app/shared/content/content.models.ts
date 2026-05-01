import type { ProjectCard } from '../landing/landing.models';

/** Contenu étendu pour une fiche réalisation (hors carte landing). */
export interface ProjectCaseExtended {
  readonly seoDescription: string;
  readonly intro: readonly string[];
  readonly scope?: readonly string[];
  readonly outcomes?: readonly string[];
}

/** Article de type actualité / point de vue. */
export interface InsightArticle {
  readonly slug: string;
  readonly title: string;
  readonly dateISO: string;
  readonly excerpt: string;
  readonly coverUrl: string;
  readonly coverAlt: string;
  readonly body: readonly string[];
}

export interface JobPosting {
  readonly id: string;
  readonly title: string;
  readonly contract: string;
  readonly location: string;
  readonly snippet: string;
}

export type ResolvedProjectCase = ProjectCard & ProjectCaseExtended;
