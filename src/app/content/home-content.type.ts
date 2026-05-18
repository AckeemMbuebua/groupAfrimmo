import type {
  ContactProjectOption,
  ExpertiseCard,
  FaqItem,
  MethodPhase,
  OfferedServiceLine,
  SelectedReference,
  StatItem,
} from '../shared/landing/landing.models';
import type { AppLocale } from './locale';

export interface HomeSeoCopy {
  readonly title: string;
  readonly description: string;
}

export interface HomeCtaCopy {
  readonly primary: string;
  readonly secondary: string;
  readonly formSubmit: string;
  readonly call: string;
  readonly whatsapp: string;
}

export interface HomeHeroCopy {
  readonly chip: string;
  readonly title: string;
  readonly titleAccent: string;
  readonly lead: string;
}

export interface HomeStatsCopy {
  readonly eyebrow: string;
  readonly title: string;
  readonly lead: string;
  readonly items: readonly StatItem[];
  readonly capabilityLabels: readonly string[];
}

export interface HomeAboutCopy {
  readonly eyebrow: string;
  readonly title: string;
  readonly intro: string;
  readonly valueAddPrefix: string;
  readonly valueAddBody: string;
  readonly trustHeading: string;
  readonly trustPoints: readonly string[];
  readonly zones: readonly string[];
  readonly mainImageAlt: string;
}

export interface HomeExpertiseCopy {
  readonly eyebrow: string;
  readonly title: string;
  readonly lead: string;
  readonly cards: readonly ExpertiseCard[];
}

export interface HomeProjectsCopy {
  readonly eyebrow: string;
  readonly title: string;
  readonly lead: string;
}

export interface HomeServicesCopy {
  readonly eyebrow: string;
  readonly title: string;
  readonly lead: string;
  readonly lines: readonly OfferedServiceLine[];
}

export interface HomeMethodCopy {
  readonly eyebrow: string;
  readonly title: string;
  readonly lead: string;
  readonly phases: readonly MethodPhase[];
}

export interface HomeEngagementCopy {
  readonly eyebrow: string;
  readonly title: string;
  readonly partnersLead: string;
  readonly qualityEyebrow: string;
  readonly qualityTitle: string;
  readonly qualityIntro: string;
  readonly qualityPillars: readonly string[];
  readonly responsibilityEyebrow: string;
  readonly responsibilityTitle: string;
  readonly responsibilityLead: string;
}

export interface HomeReferencesFieldLabels {
  readonly clientType: string;
  readonly projectType: string;
  readonly zone: string;
  readonly scope: string;
}

export interface HomeReferencesCopy {
  readonly eyebrow: string;
  readonly title: string;
  readonly lead: string;
  readonly fieldLabels: HomeReferencesFieldLabels;
  readonly items: readonly SelectedReference[];
}

export interface HomeFaqCopy {
  readonly eyebrow: string;
  readonly title: string;
  readonly items: readonly FaqItem[];
}

export interface HomeContactFormCopy {
  readonly nameLabel: string;
  readonly namePlaceholder: string;
  readonly phoneLabel: string;
  readonly phonePlaceholder: string;
  readonly emailLabel: string;
  readonly emailPlaceholder: string;
  readonly projectTypeLabel: string;
  readonly messageLabel: string;
  readonly messagePlaceholder: string;
  readonly submitNote: string;
  readonly projectOptions: readonly ContactProjectOption[];
}

export interface HomeContactMailtoCopy {
  readonly subjectPrefix: string;
  readonly greeting: string;
  readonly intro: string;
  readonly nameLine: string;
  readonly phoneLine: string;
  readonly emailLine: string;
  readonly projectTypeLine: string;
  readonly messageHeading: string;
}

export interface HomeContactCopy {
  readonly eyebrow: string;
  readonly title: string;
  readonly lead: string;
  readonly whatsappAria: string;
  readonly form: HomeContactFormCopy;
  readonly mailto: HomeContactMailtoCopy;
}

/** Contenu statique de la page d’accueil (une locale = un fichier). */
export interface HomeContent {
  readonly locale: AppLocale;
  readonly seo: HomeSeoCopy;
  readonly cta: HomeCtaCopy;
  readonly hero: HomeHeroCopy;
  readonly stats: HomeStatsCopy;
  readonly about: HomeAboutCopy;
  readonly expertise: HomeExpertiseCopy;
  readonly projects: HomeProjectsCopy;
  readonly services: HomeServicesCopy;
  readonly method: HomeMethodCopy;
  readonly engagement: HomeEngagementCopy;
  readonly references: HomeReferencesCopy;
  readonly faq: HomeFaqCopy;
  readonly contact: HomeContactCopy;
}
