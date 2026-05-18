import { HOME_EN } from '../../content/home.en';
import type { SeoContent } from '../site-content.model';
import { BRAND } from '../fr/brand';

const brand = BRAND.legalName;
const suffix = ` | ${brand}`;

export const EN_SEO: SeoContent = {
  brandName: brand,
  pages: {
    home: HOME_EN.seo,
    realisations: {
      title: `Projects${suffix}`,
      description:
        `Field references — residential, hospitality, industry, healthcare — scope stated on each sheet. ${brand}`,
    },
    actualites: {
      title: `News & insights${suffix}`,
      description:
        `Perspectives and lessons learned on construction, logistics and industrial programmes in Central and East Africa — ${brand}`,
    },
    carrieres: {
      title: `Careers${suffix}`,
      description:
        `Join ${brand}: site delivery, logistics, business development and cross-functional expertise on programmes in the DRC and East Africa.`,
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
