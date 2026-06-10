import type { SeoContent } from '../site-content.model';
import { BRAND } from './brand';

const brand = BRAND.legalName;
const suffix = ` | ${brand} RDC`;

export const FR_SEO: SeoContent = {
  brandName: brand,
  pages: {
    home: {
      title: `${brand} RDC | Construction, génie civil & logistique`,
      description:
        `${brand} (Afrimmo RDC) accompagne construction, génie civil, infrastructures, logistique, import-export et approvisionnement en RDC, Afrique centrale et à l’international.`,
    },
    realisations: {
      title: `Réalisations${suffix}`,
      description:
        `Réalisations du ${brand} (Afrimmo RDC) : références construction, résidentiel, hôtellerie, industrie, santé et commerce en Afrique centrale et de l’Est.`,
    },
    actualites: {
      title: `Actualités et analyses${suffix}`,
      description:
        `Actualités Afrimmo RDC : retours d’expérience sur construction, génie civil, logistique et programmes industriels en RDC, Afrique centrale et de l’Est.`,
    },
    carrieres: {
      title: `Carrières${suffix}`,
      description:
        `Carrières ${brand} en RDC : chantier, génie civil, logistique, développement et expertises transverses sur des programmes en Afrique centrale et de l’Est.`,
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
    home: `${brand} RDC | Construction, génie civil & logistique`,
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
