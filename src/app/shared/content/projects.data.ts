import type { ProjectCard } from '../landing/landing.models';
import type { ProjectCaseExtended } from './content.models';

/**
 * Images : URLs Unsplash temporaires.
 * Remplacer par `public/images/{futureImageAsset}` quand les visuels projet seront disponibles.
 */
export const PROJECT_CARD_LIST: readonly ProjectCard[] = [
  {
    id: 'al-saad',
    imageUrl:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop',
    imageAlt:
      'Résidence Al Saad Apartments — 28 unités, Chukwani, Zanzibar (visuel provisoire, à remplacer par al-saad-apartments.webp).',
    category: 'Résidentiel haut standing',
    title: 'Al Saad Apartments',
    description: 'Résidence de 28 unités à Zanzibar, livrée en 2022.',
    statusLabel: 'Terminé · 2022',
    wide: true,
    location: 'Chukwani, Zanzibar',
    roleScope: 'Intervention / contribution projet (périmètre défini au mandat)',
    tags: ['Résidentiel', 'Zanzibar', '28 unités', 'standing'],
    futureImageAsset: 'al-saad-apartments.webp',
  },
  {
    id: 'kiwengwa-hotel',
    imageUrl:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=900&auto=format&fit=crop',
    imageAlt:
      'Projet hôtelier Kiwengwa — Zanzibar (visuel provisoire, à remplacer par kiwengwa-hotel.webp).',
    category: 'Hôtellerie',
    title: 'Kiwengwa Hotel',
    description: 'Hôtel à Kiwengwa avec unités indépendantes, piscines et restaurant.',
    statusLabel: 'En cours',
    wide: false,
    transitionDelaySeconds: 0.06,
    location: 'Kiwengwa, Zanzibar',
    roleScope: 'Intervention / contribution projet (périmètre défini au mandat)',
    tags: ['Hôtel', 'Zanzibar', 'front de mer', '14 unités'],
    futureImageAsset: 'kiwengwa-hotel.webp',
  },
  {
    id: 'kisraa-godowns',
    imageUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop',
    imageAlt:
      'Entrepôts industriels Kisraa — Kisarawe II (visuel provisoire, à remplacer par kisraa-godowns.webp).',
    category: 'Industriel / entrepôts',
    title: 'Kisraa Company Limited — Entrepôts industriels',
    description: 'Première phase de 2 entrepôts industriels, terminée en 2024.',
    statusLabel: 'Phase 1 terminée · 2024',
    wide: false,
    transitionDelaySeconds: 0.12,
    location: 'Kisarawe II Industrial Area',
    roleScope: 'Intervention / contribution projet (périmètre défini au mandat)',
    tags: ['Industriel', 'entrepôts', 'Kisarawe', '2024'],
    futureImageAsset: 'kisraa-godowns.webp',
  },
  {
    id: 'mbweni-jkt',
    imageUrl:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=900&auto=format&fit=crop',
    imageAlt:
      'Villa Mbweni JKT — conception à la livraison (visuel provisoire, à remplacer par mbweni-jkt-villa.webp).',
    category: 'Villa / résidentiel premium',
    title: 'Mbweni JKT Villa Construction',
    description: 'Villa livrée en 2025 après 8 mois de conception et d’exécution.',
    statusLabel: 'Terminé · 2025',
    wide: false,
    transitionDelaySeconds: 0.18,
    location: 'Mbweni JKT',
    roleScope: 'Intervention / contribution projet (périmètre défini au mandat)',
    tags: ['Villa', 'conception-réalisation', '8 mois', '2025'],
    futureImageAsset: 'mbweni-jkt-villa.webp',
  },
  {
    id: 'lake-energies',
    imageUrl:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop',
    imageAlt:
      'Refonte d’identité et travaux sur sites Lake Energies (visuel provisoire, à remplacer par lake-energies.webp).',
    category: 'Station-service / supervision',
    title: 'Lake Energies — Refonte d’identité et supervision',
    description: 'Refonte d’identité et supervision de sites Lake Energies sur 9 mois.',
    statusLabel: 'Réalisé · 2024',
    wide: false,
    transitionDelaySeconds: 0.24,
    location: 'Non précisé',
    roleScope: 'Intervention créative et exécution terrain sur sites (périmètre défini au mandat)',
    tags: ['Refonte d’identité', 'supervision', 'station-service', '2024'],
    futureImageAsset: 'lake-energies.webp',
  },
  {
    id: 'hospitaux-znz',
    imageUrl:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=900&auto=format&fit=crop',
    imageAlt:
      'Programme de santé à Zanzibar — contribution technique (visuel provisoire, à remplacer par zanzibar-district-hospitals.webp).',
    category: 'Infrastructure de santé',
    title: 'Zanzibar 10 District Hospitals',
    description: 'Contribution MEP sur un programme de 10 hôpitaux de district.',
    statusLabel: 'Terminé · 2025',
    wide: false,
    transitionDelaySeconds: 0.3,
    location: 'Zanzibar',
    roleScope: 'Contribution technique / lots MEP — programme public de 10 hôpitaux de district',
    tags: ['Santé', 'MEP', 'hôpitaux', 'Zanzibar', '2025'],
    futureImageAsset: 'zanzibar-district-hospitals.webp',
  },
  {
    id: 'palm-complex',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop',
    imageAlt:
      'Complexe commercial et résidentiel Palm Complex — Kigamboni (visuel provisoire, à remplacer par palm-complex-kigamboni.webp).',
    category: 'Commercial & résidentiel',
    title: 'Palm Complex in Kigamboni',
    description: 'Complexe commercial et résidentiel livré à Kigamboni en 2025.',
    statusLabel: 'Terminé · 2025',
    wide: false,
    transitionDelaySeconds: 0.36,
    location: 'Kigamboni',
    roleScope: 'Intervention / contribution projet (périmètre défini au mandat)',
    tags: ['Commercial', 'résidentiel', 'Kigamboni', '2025'],
    futureImageAsset: 'palm-complex-kigamboni.webp',
  },
];

const PROJECT_EXTRA: Record<string, ProjectCaseExtended> = {
  'al-saad': {
    seoDescription:
      'Al Saad Apartments — résidence de 28 unités à Chukwani (Zanzibar), livrée en 2022. Référence Groupe Afrimmo S.A.',
    intro: [
      'Projet résidentiel de standing situé à Chukwani, Zanzibar, comprenant 28 unités avec espaces de détente, équipement type whirlpool et terrasse extérieure, en proximité des plages de l’océan Indien.',
      'Le périmètre exact confié au groupe et aux équipes mobilisées est celui défini au mandat ; les formulations ci-dessous restent générales pour préserver la confidentialité contractuelle.',
    ],
    scope: [
      'Coordination et suivi selon le périmètre mandaté',
      'Interfaces entre corps d’état et jalons de livraison',
      'Pilotage qualité des livrables sensibles (espaces extérieurs, équipements)',
    ],
    outcomes: [
      'Livraison conforme au calendrier convenu pour les phases suivies',
      'Mise en œuvre des finitions et équipements attendus pour une résidence de standing',
    ],
  },
  'kiwengwa-hotel': {
    seoDescription:
      'Kiwengwa Hotel — projet hôtelier à Kiwengwa, Zanzibar (14 unités indépendantes, piscines, restaurant, front de mer). Référence Groupe Afrimmo S.A.',
    intro: [
      'Projet hôtelier situé à Kiwengwa, Zanzibar, composé de 14 unités indépendantes avec piscines individuelles ou communes, restaurant et accès front de mer.',
      'Chantier en cours : la coordination des lots techniques et des interfaces MEP reste un levier central pour tenir le programme.',
    ],
  },
  'kisraa-godowns': {
    seoDescription:
      'Kisraa Company Limited — première phase d’entrepôts industriels à Kisarawe II (2 entrepôts sur un programme prévu de 8). Référence Groupe Afrimmo S.A.',
    intro: [
      'Première phase d’un programme d’entrepôts industriels pour Kisraa Company Limited, avec 2 entrepôts réalisés sur un total prévu de 8 en zone industrielle Kisarawe II.',
      'Les enjeux portent sur le génie civil, la voirie interne et l’alignement des livrables avec un programme d’extension ultérieure.',
    ],
  },
  'mbweni-jkt': {
    seoDescription:
      'Mbweni JKT Villa — projet mené de la conception à la livraison en environ 8 mois. Référence Groupe Afrimmo S.A.',
    intro: [
      'Projet de villa mené de la conception à la réalisation, avec une exécution suivie sur une période d’environ huit mois selon le mandat.',
      'Les projets très architecturés appellent une gouvernance claire entre bureau technique et chantier pour sécuriser les finitions.',
    ],
  },
  'lake-energies': {
    seoDescription:
      'Lake Energies — refonte d’identité depuis Lake Oil, avec supervision et travaux sur sites sur environ 9 mois. Référence Groupe Afrimmo S.A.',
    intro: [
      'Projet de passage de Lake Oil vers Lake Energies, intégrant conception visuelle, supervision et exécution des interventions sur les sites concernés.',
      'Ce type de mandat conjugue continuité d’exploitation, signalétique et contraintes réglementaires locales.',
    ],
  },
  'hospitaux-znz': {
    seoDescription:
      'Contribution technique sur un programme public de 10 hôpitaux de district à Zanzibar — implication sur les lots MEP. Référence Groupe Afrimmo S.A.',
    intro: [
      'Contribution technique au programme de 10 hôpitaux de district à Zanzibar, avec implication des équipes sur les lots MEP et la coordination de mise en œuvre associée au projet.',
      'Il ne s’agit pas d’attribuer la construction intégrale des ouvrages sans validation contractuelle : le rôle porte sur la contribution technique dans le cadre du programme public.',
    ],
  },
  'palm-complex': {
    seoDescription:
      'Palm Complex — projet mixte commercial et résidentiel à Kigamboni, livré en 2025. Référence Groupe Afrimmo S.A.',
    intro: [
      'Projet commercial et résidentiel réalisé à Kigamboni, livré en 2025 après une exécution d’environ un an selon le mandat.',
      'Les opérations mixtes combinent interfaces commerces / logements et planification des accès ; le pilotage des phases critiques sécurise la livraison globale.',
    ],
  },
};

export function getProjectCards(): readonly ProjectCard[] {
  return PROJECT_CARD_LIST;
}

export function getProjectCase(
  id: string,
): (ProjectCard & ProjectCaseExtended) | undefined {
  const card = PROJECT_CARD_LIST.find((p) => p.id === id);
  const extra = PROJECT_EXTRA[id];
  if (!card || !extra) {
    return undefined;
  }
  return { ...card, ...extra };
}
