import type { SelectedReference } from '../landing/landing.models';

/** Références sélectionnées — typologies publiques, sans attribution client détaillée. */
export const SELECTED_REFERENCES: readonly SelectedReference[] = [
  {
    id: 'ref-1',
    clientType: 'Maître d’ouvrage privé',
    projectType: 'Projet résidentiel',
    zone: 'Zanzibar',
    scope: 'Coordination et exécution terrain',
  },
  {
    id: 'ref-2',
    clientType: 'Programme institutionnel',
    projectType: 'Infrastructures de santé',
    zone: 'Zanzibar',
    scope: 'Contribution technique / lots MEP',
  },
  {
    id: 'ref-3',
    clientType: 'Acteur industriel',
    projectType: 'Entrepôts',
    zone: 'Kisarawe II',
    scope: 'Première phase de livraison — périmètre défini au mandat',
  },
  {
    id: 'ref-4',
    clientType: 'Programme mixte',
    projectType: 'Commerce et résidentiel',
    zone: 'Kigamboni',
    scope: 'Pilotage et livraison sur fenêtre contractuelle',
  },
];
