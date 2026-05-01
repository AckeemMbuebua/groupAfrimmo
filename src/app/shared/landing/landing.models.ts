export interface NavLink {
  readonly href: string;
  readonly label: string;
}

export interface StatItem {
  readonly target: number;
  readonly suffix: string;
  readonly label: string;
  readonly transitionDelaySeconds?: number;
}

export interface ProfileHighlight {
  readonly title: string;
  readonly body: string;
  readonly borderClass: 'border-red-cmt' | 'border-dark-cmt';
}

/** Valeurs de marque (piliers). */
export interface ValuePillar {
  readonly title: string;
  readonly body: string;
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
  readonly category: string;
  readonly title: string;
  readonly description: string;
  /** Ex. « Livré 2025 », « En cours », « Phase 1 — 2024 ». */
  readonly statusLabel: string;
  readonly wide: boolean;
  readonly transitionDelaySeconds?: number;
}

/** Données d’un témoignage affiché dans le carousel. */
export interface CarouselTestimonial {
  readonly id: number;
  readonly name: string;
  readonly role: string;
  readonly company: string;
  readonly content: string;
  readonly rating: number;
  readonly avatar: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface FooterNavColumn {
  readonly heading: string;
  readonly links: readonly { readonly label: string; readonly href: string }[];
}

export interface FooterSocialLink {
  readonly href: string;
  readonly ariaLabel: string;
  readonly iconClass: string;
}

export interface ContactProjectOption {
  readonly value: string;
  readonly label: string;
}
