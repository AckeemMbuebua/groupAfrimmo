/** Entrée menu principal ou footer (fragments accueil ou routes). */
export type NavMainEntry =
  | { readonly kind: 'fragment'; readonly label: string; readonly fragment: string }
  | { readonly kind: 'route'; readonly label: string; readonly path: string };

/** Carte indicateur : préfixe optionnel, valeur et libellés. */
export interface StatItem {
  readonly valuePrefix: string;
  readonly value: string;
  readonly label: string;
  readonly sublabel: string;
  readonly transitionDelaySeconds?: number;
}

/** Intitulé d’une ligne de services proposés. */
export interface OfferedServiceLine {
  readonly summary: string;
}

export interface ExpertiseCard {
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly numberLabel: string;
  readonly title: string;
  readonly description: string;
  readonly transitionDelaySeconds?: number;
}

export interface MethodPhase {
  readonly numberLabel: string;
  readonly title: string;
  readonly description: string;
}

export interface ProjectCard {
  readonly id: string;
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly galleryImageUrls?: readonly string[];
  readonly category: string;
  readonly title: string;
  /** Texte court affiché sur la carte. */
  readonly description: string;
  /** Ex. « Livré 2025 », « En cours », « Phase 1 — 2024 ». */
  readonly statusLabel: string;
  readonly wide: boolean;
  readonly transitionDelaySeconds?: number;
  readonly location: string;
  /** Formulation prudente du périmètre d’intervention du groupe. */
  readonly roleScope: string;
  readonly tags: readonly string[];
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

/** Référence anonymisée (pas de citation inventée). */
export interface SelectedReference {
  readonly id: string;
  readonly clientType: string;
  readonly projectType: string;
  readonly zone: string;
  readonly scope: string;
}

export type FooterNavLink =
  | { readonly kind: 'homeFragment'; readonly label: string; readonly fragment: string }
  | { readonly kind: 'external'; readonly label: string; readonly href: string }
  | { readonly kind: 'route'; readonly label: string; readonly path: string };

export interface ContactProjectOption {
  readonly value: string;
  readonly label: string;
}
