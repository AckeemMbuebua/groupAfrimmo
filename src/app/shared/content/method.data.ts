import type { MethodPhase } from '../landing/landing.models';

export const METHOD_PHASES: readonly MethodPhase[] = [
  {
    numberLabel: '01',
    title: 'Cadrage',
    description:
      'Analyse du besoin, du site, des contraintes et des priorités du maître d’ouvrage.',
  },
  {
    numberLabel: '02',
    title: 'Planification',
    description:
      'Définition des ressources, des lots, du calendrier, des circuits d’approvisionnement et des points de contrôle.',
  },
  {
    numberLabel: '03',
    title: 'Exécution',
    description:
      'Coordination des équipes, supervision terrain, suivi qualité et ajustements opérationnels.',
  },
  {
    numberLabel: '04',
    title: 'Livraison',
    description:
      'Réception, levée des réserves, reporting et transmission des éléments utiles au client.',
  },
];
