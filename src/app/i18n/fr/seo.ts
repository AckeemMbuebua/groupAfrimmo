import type { SeoContent } from '../site-content.model';
import { BRAND } from './brand';

const brand = BRAND.legalName;
const suffix = ` | ${brand}`;

export const FR_SEO: SeoContent = {
  brandName: brand,
  pages: {
    home: {
      title: `${brand} | Construction, génie civil, logistique & import-export`,
      description:
        `${brand} accompagne vos projets de construction et de génie civil, infrastructures, logistique, import-export et approvisionnement en RDC, en Afrique centrale et à l’international.`,
    },
    realisations: {
      title: `Réalisations${suffix}`,
      description:
        `Références terrain — résidentiel, hôtellerie, industrie, santé — périmètres rappelés sur chaque fiche. ${brand}`,
    },
    actualites: {
      title: `Actualités et analyses${suffix}`,
      description:
        `Points de vue et retours d’expérience sur la conduite de programmes construction, logistique et industrie en Afrique centrale et de l’Est — ${brand}`,
    },
    carrieres: {
      title: `Carrières${suffix}`,
      description:
        `Rejoindre ${brand} : chantier, logistique, développement et expertises transverses sur des programmes en RDC et en Afrique de l’Est.`,
    },
    mentionsLegales: {
      title: `Mentions légales${suffix}`,
      description:
        `Mentions légales du site afrimmo.com — éditeur, hébergement et coordonnées de ${brand}.`,
    },
    politiqueConfidentialite: {
      title: `Politique de confidentialité${suffix}`,
      description:
        'Politique de confidentialité du site afrimmo.com : données collectées, finalités, durée de conservation et modalités de contact.',
    },
  },
  routeTitles: {
    home: `${brand} | Construction, génie civil, logistique & import-export`,
    realisations: `Réalisations${suffix}`,
    realisationsProject: `Projet · Réalisations${suffix}`,
    actualites: `Actualités${suffix}`,
    actualite: `Article${suffix}`,
    carrieres: `Carrières${suffix}`,
    mentionsLegales: `Mentions légales${suffix}`,
    politiqueConfidentialite: `Politique de confidentialité${suffix}`,
  },
  projectDetailTitle: (projectTitle) => `${projectTitle} · Réalisations${suffix}`,
  articleDetailTitle: (articleTitle) => `${articleTitle}${suffix}`,
};
