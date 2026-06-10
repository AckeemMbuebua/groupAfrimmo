import { HOME_EN } from '../../content/home.en';
import type { SeoContent } from '../site-content.model';
import { BRAND } from '../fr/brand';

const brand = BRAND.legalName;
const suffix = ` | ${brand} DRC`;

export const EN_SEO: SeoContent = {
  brandName: brand,
  pages: {
    home: HOME_EN.seo,
    realisations: {
      title: `Projects${suffix}`,
      description:
        `${brand} (Afrimmo DRC) project references: construction, residential, hospitality, industrial, healthcare and commercial work in Central and East Africa.`,
    },
    actualites: {
      title: `News & insights${suffix}`,
      description:
        `Afrimmo DRC insights: construction, civil engineering, logistics and industrial programme delivery across the DRC, Central Africa and East Africa.`,
    },
    carrieres: {
      title: `Careers${suffix}`,
      description:
        `Careers at ${brand} in the DRC: site delivery, civil engineering, logistics, business development and cross-functional project expertise.`,
    },
    mentionsLegales: {
      title: `Legal notice${suffix}`,
      description:
        `Legal notice for afrimmo.com — publisher, hosting and contact details for ${brand}.`,
    },
    politiqueConfidentialite: {
      title: `Privacy policy${suffix}`,
      description:
        'Privacy policy for afrimmo.com: data collected, purposes, retention and contact details.',
    },
  },
  routeTitles: {
    home: HOME_EN.seo.title,
    realisations: `Projects${suffix}`,
    realisationsProject: `Project · Projects${suffix}`,
    actualites: `News${suffix}`,
    actualite: `Article${suffix}`,
    carrieres: `Careers${suffix}`,
    mentionsLegales: `Legal notice${suffix}`,
    politiqueConfidentialite: `Privacy policy${suffix}`,
  },
  projectDetailTitle: (projectTitle) => `${projectTitle} · Projects${suffix}`,
  articleDetailTitle: (articleTitle) => `${articleTitle}${suffix}`,
};
