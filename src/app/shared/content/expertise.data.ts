import type { ExpertiseCard } from '../landing/landing.models';

export const EXPERTISE_CARDS: readonly ExpertiseCard[] = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Construction et génie civil — visuel illustratif',
    numberLabel: '01',
    title: 'Construction & génie civil',
    description:
      'Bâtiments, infrastructures, ouvrages techniques et interventions liées aux projets publics, privés, industriels ou résidentiels.',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Logistique et transport — visuel illustratif',
    numberLabel: '02',
    title: 'Logistique & transport',
    description:
      'Organisation des flux, approvisionnement terrain, coordination des ressources et appui aux opérations projet.',
    transitionDelaySeconds: 0.08,
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Import-export et matériaux — visuel illustratif',
    numberLabel: '03',
    title: 'Import-export & approvisionnement',
    description:
      'Fourniture de matériaux, matières premières et équipements nécessaires à l’exécution des projets.',
    transitionDelaySeconds: 0.16,
  },
];
