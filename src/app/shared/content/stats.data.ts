import type { StatItem } from '../landing/landing.models';
import { PROJECT_CARD_LIST } from './projects.data';

/** En-tête de section — éditorial centralisé. */
export const STATS_SECTION_TITLE = 'Nos repères terrain';

export const STATS_SECTION_LEAD =
  'Quelques indicateurs pour situer l’expérience et les capacités de Groupe Afrimmo S.A.';

/**
 * Nombre de références présentées dans `projects.data.ts`.
 * Modifie la liste des projets plutôt que ce nombre pour rester cohérent.
 */
export const LANDING_REFERENCE_PROJECT_COUNT = PROJECT_CARD_LIST.length;

/** Domaines intégrés mis en avant en card 4 — ajustable sans toucher au template. */
export const LANDING_INTEGRATED_DOMAINS_COUNT = 4;

export const LANDING_STATS: readonly StatItem[] = [
  {
    valuePrefix: '',
    value: '28',
    label: 'Unités résidentielles',
    sublabel: 'Al Saad Apartments, Zanzibar',
  },
  {
    valuePrefix: '',
    value: '10',
    label: 'Hôpitaux de district',
    sublabel: 'Contribution technique / lots MEP, Zanzibar',
    transitionDelaySeconds: 0.08,
  },
  {
    valuePrefix: '',
    value: String(LANDING_REFERENCE_PROJECT_COUNT),
    label: 'Références projets',
    sublabel: 'Résidentiel, hôtelier, industriel et institutionnel',
    transitionDelaySeconds: 0.16,
  },
  {
    valuePrefix: '',
    value: String(LANDING_INTEGRATED_DOMAINS_COUNT),
    label: 'Domaines intégrés',
    sublabel: 'Construction, logistique, import-export, services techniques',
    transitionDelaySeconds: 0.24,
  },
];

/** Ligne secondaire : messages généraux, hors cartes chiffrées. */
export const STAT_CAPABILITY_LABELS: readonly string[] = [
  'RDC & international',
  'Capacité d’intervention selon projet',
  'Services techniques',
  'Main-d’œuvre qualifiée',
  'Logistique & transport',
  'Import-export & matériaux',
];
