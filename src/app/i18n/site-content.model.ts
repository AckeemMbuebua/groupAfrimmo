import type {
  ExpertiseCard,
  FaqItem,
  FooterNavLink,
  MethodPhase,
  NavMainEntry,
  OfferedServiceLine,
  ProjectCard,
  SelectedReference,
  StatItem,
} from '../shared/landing/landing.models';
import type {
  InsightArticle,
  JobPosting,
  ProjectCaseExtended,
} from '../shared/content/content.models';

export interface SeoPageMeta {
  readonly title: string;
  readonly description: string;
}

/** Titres courts pour `Routes.title` (fallback navigateur / SSR). */
export interface SeoRouteTitles {
  readonly home: string;
  readonly realisations: string;
  readonly realisationsProject: string;
  readonly actualites: string;
  readonly actualite: string;
  readonly carrieres: string;
  readonly mentionsLegales: string;
  readonly politiqueConfidentialite: string;
}

export interface SeoContent {
  readonly brandName: string;
  readonly pages: {
    readonly home: SeoPageMeta;
    readonly realisations: SeoPageMeta;
    readonly actualites: SeoPageMeta;
    readonly carrieres: SeoPageMeta;
    readonly mentionsLegales: SeoPageMeta;
    readonly politiqueConfidentialite: SeoPageMeta;
  };
  readonly routeTitles: SeoRouteTitles;
  readonly projectDetailTitle: (projectTitle: string) => string;
  readonly articleDetailTitle: (articleTitle: string) => string;
}

export interface CtaLabels {
  readonly primary: string;
  readonly secondary: string;
  readonly formSubmit: string;
  readonly projectSheet: string;
  readonly call: string;
  readonly whatsapp: string;
}

export interface BrandContent {
  readonly legalName: string;
  readonly footerSlogan: string;
}

export interface SharedContent {
  readonly brand: BrandContent;
  readonly cta: CtaLabels;
  readonly contact: {
    readonly locationLabel: string;
  };
}

export interface UiLocaleLabels {
  readonly fr: string;
  readonly en: string;
}

export interface UiContent {
  readonly aria: {
    readonly primaryNav: string;
    readonly mobileNav: string;
    readonly homeLink: string;
    readonly siteLanguage: string;
    readonly chooseLanguage: string;
    readonly openMenu: string;
    readonly closeMenu: string;
    readonly breadcrumb: string;
  };
  readonly locale: UiLocaleLabels;
  readonly footer: {
    readonly sitemapHeading: string;
    readonly contactHeading: string;
    readonly whatsappDirect: string;
    readonly copyright: string;
  };
  readonly common: {
    readonly home: string;
    readonly legalNotice: string;
    readonly privacy: string;
    readonly lastUpdated: string;
  };
}

export interface NavigationContent {
  readonly main: readonly NavMainEntry[];
  readonly footer: readonly FooterNavLink[];
}

export interface LandingContent {
  readonly faq: readonly FaqItem[];
  readonly services: readonly OfferedServiceLine[];
  readonly stats: {
    readonly sectionTitle: string;
    readonly sectionLead: string;
    readonly items: readonly StatItem[];
    readonly capabilityLabels: readonly string[];
  };
  readonly method: readonly MethodPhase[];
  readonly expertise: readonly ExpertiseCard[];
  readonly references: readonly SelectedReference[];
}

export interface ProjectsContent {
  readonly cards: readonly ProjectCard[];
  readonly extra: Readonly<Record<string, ProjectCaseExtended>>;
}

export interface ActualitesContent {
  readonly articles: readonly InsightArticle[];
}

export interface CarrieresContent {
  readonly jobs: readonly JobPosting[];
}

export interface LegalSectionCopy {
  readonly heading: string;
  readonly body: string;
}

export interface LegalPageCopy {
  readonly backHome: string;
  readonly title: string;
  readonly intro: string;
  readonly sections: readonly LegalSectionCopy[];
  readonly lastUpdated: string;
}

export interface SecondaryPagesContent {
  readonly realisations: {
    readonly breadcrumb: string;
    readonly eyebrow: string;
    readonly title: string;
    readonly lead: string;
    readonly expertCtaEyebrow: string;
    readonly expertCtaLead: string;
    readonly detail: {
      readonly locationLabel: string;
      readonly scopeLabel: string;
      readonly backToList: string;
      readonly scopeHeading: string;
      readonly outcomesHeading: string;
      readonly fallbackDetail: string;
    };
  };
  readonly actualites: {
    readonly breadcrumb: string;
    readonly eyebrow: string;
    readonly title: string;
    readonly lead: string;
    readonly readArticle: string;
    readonly backToList: string;
  };
  readonly carrieres: {
    readonly breadcrumb: string;
    readonly eyebrow: string;
    readonly title: string;
    readonly lead: string;
    readonly pillars: readonly string[];
    readonly opportunitiesTitle: string;
    readonly opportunitiesFlag: string;
    readonly opportunitiesLead: string;
    readonly codeLabel: string;
    readonly sendCv: string;
    readonly closingTextBefore: string;
    readonly closingLink: string;
    readonly closingTextAfter: string;
    readonly mailSubjectPrefix: string;
  };
  readonly mentionsLegales: LegalPageCopy;
  readonly politiqueConfidentialite: LegalPageCopy;
}

export interface SiteContent {
  readonly locale: import('./locale').SupportedLocale;
  readonly seo: SeoContent;
  readonly navigation: NavigationContent;
  readonly shared: SharedContent;
  readonly ui: UiContent;
  readonly landing: LandingContent;
  readonly pages: SecondaryPagesContent;
  readonly projects: ProjectsContent;
  readonly actualites: ActualitesContent;
  readonly carrieres: CarrieresContent;
}
