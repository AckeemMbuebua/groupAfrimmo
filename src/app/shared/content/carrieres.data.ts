import type { JobPosting } from './content.models';

export const JOB_POSTINGS: readonly JobPosting[] = [
  {
    id: 'ingenieur-chantier',
    title: 'Ingénieur / chef de projet chantier (H/F)',
    contract: 'CDI · mobilité Afrique de l’Est / RDC',
    location: 'Kinshasa · missions terrain',
    snippet:
      'Pilotage d’exécution, interfaces MOE / entreprises, reporting MOA. Profil bâtiment / génie civil, expérience multi-lots.',
  },
  {
    id: 'coordinateur-logistique',
    title: 'Coordinateur logistique opérations (H/F)',
    contract: 'CDI',
    location: 'Kinshasa',
    snippet:
      'Organisation des flux matériaux, coordination import / douanes partenaires, support aux programmes industriels et retail.',
  },
  {
    id: 'business-developer',
    title: 'Responsable développement & partenariats (H/F)',
    contract: 'CDI',
    location: 'Hybride',
    snippet:
      'Prospection B2B, structuration d’offres intégrées construction / logistique, relation institutions et grands comptes.',
  },
];
