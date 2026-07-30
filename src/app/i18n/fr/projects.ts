import type { ProjectCard } from '../../shared/landing/landing.models';
import type { ProjectCaseExtended } from '../../shared/content/content.models';
import { PROJECT_IMAGES } from '../project-images';

/**
 * Images locales optimisées depuis le PDF de références projets.
 */
export const PROJECT_CARD_LIST: readonly ProjectCard[] = [
  {
    id: 'al-saad',
    imageUrl: PROJECT_IMAGES['al-saad'].primary,
    imageAlt:
      'Résidence Al Saad Apartments — 28 unités, Chukwani, Zanzibar.',
    galleryImageUrls: PROJECT_IMAGES['al-saad'].gallery,
    category: 'Résidentiel haut standing',
    title: 'Al Saad Apartments',
    description: 'Résidence de luxe de 28 unités à Chukwani, Zanzibar, livrée en 2022.',
    statusLabel: 'Terminé · 2022',
    wide: true,
    location: 'Chukwani, Zanzibar',
    roleScope: 'Résidence de 28 unités avec whirlpool et terrasse extérieure',
    tags: ['Résidentiel', 'Zanzibar', '28 unités', 'standing'],
  },
  {
    id: 'kiwengwa-hotel',
    imageUrl: PROJECT_IMAGES['kiwengwa-hotel'].primary,
    imageAlt:
      'Projet hôtelier Kiwengwa — Zanzibar.',
    galleryImageUrls: PROJECT_IMAGES['kiwengwa-hotel'].gallery,
    category: 'Hôtellerie',
    title: 'Kiwengwa Hotel',
    description: 'Hôtel cinq étoiles à Kiwengwa, avec 14 unités indépendantes.',
    statusLabel: 'En cours',
    wide: false,
    transitionDelaySeconds: 0.06,
    location: 'Kiwengwa, Zanzibar',
    roleScope: '14 unités indépendantes, piscines, restaurant et front de mer',
    tags: ['Hôtel', 'Zanzibar', 'front de mer', '14 unités'],
  },
  {
    id: 'kisraa-godowns',
    imageUrl: PROJECT_IMAGES['kisraa-godowns'].primary,
    imageAlt:
      'Entrepôts industriels Kisraa — Kisarawe II.',
    galleryImageUrls: PROJECT_IMAGES['kisraa-godowns'].gallery,
    category: 'Industriel / entrepôts',
    title: 'Kisraa Company Limited — Entrepôts industriels',
    description: 'Première phase de 2 entrepôts industriels à Kisarawe II, achevée en 2024.',
    statusLabel: 'Phase 1 terminée · 2024',
    wide: false,
    transitionDelaySeconds: 0.12,
    location: 'Kisarawe II Industrial Area',
    roleScope: '2 entrepôts achevés sur un programme prévu de 8',
    tags: ['Industriel', 'entrepôts', 'Kisarawe', '2024'],
  },
  {
    id: 'mbweni-jkt',
    imageUrl: PROJECT_IMAGES['mbweni-jkt'].primary,
    imageAlt:
      'Villa Mbweni JKT — conception à la livraison.',
    galleryImageUrls: PROJECT_IMAGES['mbweni-jkt'].gallery,
    category: 'Villa / résidentiel premium',
    title: 'Mbweni JKT Villa',
    description: 'Villa menée de la conception à la livraison en 8 mois, achevée en 2025.',
    statusLabel: 'Terminé · 2025',
    wide: false,
    transitionDelaySeconds: 0.18,
    location: 'Mbweni JKT',
    roleScope: 'Conception à livraison en 8 mois',
    tags: ['Villa', 'conception-réalisation', '8 mois', '2025'],
  },
  {
    id: 'lake-energies',
    imageUrl: PROJECT_IMAGES['lake-energies'].primary,
    imageAlt:
      'Lake Energies — image de marque et interventions sur sites.',
    galleryImageUrls: PROJECT_IMAGES['lake-energies'].gallery,
    category: 'Station-service / supervision',
    title: 'Lake Energies — Image de marque et supervision de sites',
    description:
      'Rebranding Lake Oil vers Lake Energies, avec supervision et exécution sur sites pendant 9 mois.',
    statusLabel: 'Réalisé · 2024',
    wide: false,
    transitionDelaySeconds: 0.24,
    location: 'Sites Lake Energies',
    roleScope: 'Intervention créative, supervision et exécution sur sites',
    tags: ['Image de marque', 'supervision', 'station-service', '2024'],
  },
  {
    id: 'hospitaux-znz',
    imageUrl: PROJECT_IMAGES['hospitaux-znz'].primary,
    imageAlt:
      'Programme de santé à Zanzibar — contribution technique.',
    galleryImageUrls: PROJECT_IMAGES['hospitaux-znz'].gallery,
    category: 'Infrastructure de santé',
    title: '10 hôpitaux de district',
    description: 'Contribution technique / lots MEP — Zanzibar, projet achevé en 2025.',
    statusLabel: 'Terminé · 2025',
    wide: false,
    transitionDelaySeconds: 0.3,
    location: 'Zanzibar',
    roleScope: 'Contribution technique / lots MEP — Zanzibar',
    tags: ['Santé', 'MEP', 'hôpitaux', 'Zanzibar', '2025'],
  },
  {
    id: 'palm-complex',
    imageUrl: PROJECT_IMAGES['palm-complex'].primary,
    imageAlt:
      'Complexe commercial et résidentiel Palm Complex — Kigamboni.',
    galleryImageUrls: PROJECT_IMAGES['palm-complex'].gallery,
    category: 'Commercial & résidentiel',
    title: 'Palm Complex — Kigamboni',
    description:
      'Projet commercial et résidentiel construit à Kigamboni en 1 an, livré en 2025.',
    statusLabel: 'Terminé · 2025',
    wide: false,
    transitionDelaySeconds: 0.36,
    location: 'Kigamboni',
    roleScope: 'Projet commercial et résidentiel construit en 1 an',
    tags: ['Commercial', 'résidentiel', 'Kigamboni', '2025'],
  },
];

export const PROJECT_EXTRA: Record<string, ProjectCaseExtended> = {
  'al-saad': {
    seoDescription:
      'Al Saad Apartments — résidence de luxe de 28 unités à Chukwani, Zanzibar, livrée en 2022. Référence Groupe Afrimmo S.A.',
    intro: [
      'Résidence de luxe à Chukwani, Zanzibar, composée de 28 unités, avec whirlpool et terrasse extérieure, à proximité des plages de l’océan Indien. Projet livré en 2022.',
    ],
  },
  'kiwengwa-hotel': {
    seoDescription:
      'Kiwengwa Hotel — hôtel cinq étoiles à Kiwengwa, Zanzibar, avec 14 unités indépendantes, piscines, restaurant et front de mer. Référence Groupe Afrimmo S.A.',
    intro: [
      'Hôtel cinq étoiles à Kiwengwa, Zanzibar, composé de 14 unités indépendantes avec piscines individuelles ou communes, restaurant et front de mer. Projet en cours.',
    ],
  },
  'kisraa-godowns': {
    seoDescription:
      'Kisraa Company Limited — première phase de 2 entrepôts industriels à Kisarawe II sur un programme prévu de 8. Référence Groupe Afrimmo S.A.',
    intro: [
      'Première phase d’un programme de 8 entrepôts industriels pour Kisraa Company Limited, situé dans la zone industrielle de Kisarawe II. Deux entrepôts ont été achevés en 2024.',
    ],
  },
  'mbweni-jkt': {
    seoDescription:
      'Mbweni JKT Villa — projet mené de la conception à la livraison en 8 mois, achevé en 2025. Référence Groupe Afrimmo S.A.',
    intro: [
      'Villa Mbweni JKT menée de la conception à la livraison en 8 mois. Projet achevé en 2025.',
    ],
  },
  'lake-energies': {
    seoDescription:
      'Lake Energies — rebranding depuis Lake Oil en 2024, avec intervention créative, supervision et exécution sur sites pendant 9 mois. Référence Groupe Afrimmo S.A.',
    intro: [
      'Projet de rebranding Lake Oil vers Lake Energies en 2024, avec intervention créative, supervision et exécution sur sites. Le projet a duré 9 mois.',
    ],
  },
  'hospitaux-znz': {
    seoDescription:
      '10 hôpitaux de district — contribution technique / lots MEP à Zanzibar, projet achevé en 2025. Référence Groupe Afrimmo S.A.',
    intro: [
      'Programme lancé en 2024 par le gouvernement de Zanzibar pour 10 hôpitaux de district. Contribution technique / lots MEP — Zanzibar, projet achevé en 2025.',
    ],
  },
  'palm-complex': {
    seoDescription:
      'Palm Complex — projet commercial et résidentiel construit à Kigamboni en 1 an, livré en 2025. Référence Groupe Afrimmo S.A.',
    intro: [
      'Projet commercial et résidentiel construit à Kigamboni en 1 an, livré en 2025.',
    ],
  },
};
