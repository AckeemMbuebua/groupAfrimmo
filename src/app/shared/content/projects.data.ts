import type { ProjectCard } from '../landing/landing.models';
import type { ProjectCaseExtended } from './content.models';

export const PROJECT_CARD_LIST: readonly ProjectCard[] = [
  {
    id: 'al-saad',
    imageUrl:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop',
    imageAlt:
      'Résidence de luxe Al Saad Apartments à Chukwani, île de Unguja — Zanzibar',
    category: 'Résidentiel · Zanzibar',
    title: 'Al Saad Apartments',
    description: '28 unités · front de mer · Chukwani, Zanzibar.',
    statusLabel: 'Livré · 2022',
    wide: true,
  },
  {
    id: 'hospitaux-znz',
    imageUrl:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Infrastructure hospitalière de district',
    category: 'Santé · Zanzibar',
    title: '10 hôpitaux de districts',
    description: 'Programme public — lots techniques & coord. MEP.',
    statusLabel: 'Livré · 2025',
    wide: false,
    transitionDelaySeconds: 0.06,
  },
  {
    id: 'kiwengwa-hotel',
    imageUrl:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Hôtel cinq étoiles Kiwengwa',
    category: 'Hôtellerie · Zanzibar',
    title: 'Kiwengwa Hotel',
    description:
      'Complexe boutique 14 villas indépendantes, piscines, restaurant front de mer.',
    statusLabel: 'En cours',
    wide: false,
    transitionDelaySeconds: 0.12,
  },
  {
    id: 'kisraa-godowns',
    imageUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Entrepôts industriels Kisarawe II',
    category: 'Industrie · Tanzanie mainland',
    title: 'Kisraa Company — godowns',
    description:
      'Première phase : 2 godowns sur un programme global de 8, zone industrielle Kisarawe II.',
    statusLabel: 'Phase 1 · 2024',
    wide: false,
    transitionDelaySeconds: 0.18,
  },
  {
    id: 'mbweni-jkt',
    imageUrl:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Construction villa Mbweni JKT',
    category: 'Résidentiel · Zanzibar',
    title: 'Mbweni JKT Villa',
    description:
      'Conception jusqu’aux finitions — boucle livrée en huit mois pour un parti architectural exigeant.',
    statusLabel: 'Livré · 2025',
    wide: false,
    transitionDelaySeconds: 0.24,
  },
  {
    id: 'lake-energies',
    imageUrl:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Chantier de réaménagement enseigne et façade',
    category: 'Rebranding · retail',
    title: 'Lake Energies — rebrand',
    description:
      'Lake Oil rebranded Lake Energies : coordination équipe créative et exécution chantier (neuf mois).',
    statusLabel: 'Livré · 2024',
    wide: false,
    transitionDelaySeconds: 0.3,
  },
  {
    id: 'palm-complex',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Complexe résidentiel et commercial Palm Complex à Kigamboni',
    category: 'Mixte · Dar es Salaam',
    title: 'Palm Complex · Kigamboni',
    description:
      'Programme résidentiel et commercial densifié livré à l’échelle du mandat prévu (douze mois environ).',
    statusLabel: 'Livré · 2025',
    wide: false,
    transitionDelaySeconds: 0.36,
  },
];

const PROJECT_EXTRA: Record<string, ProjectCaseExtended> = {
  'al-saad': {
    seoDescription:
      'Al Saad Apartments : 28 unités haut de gamme à Chukwani (Zanzibar), livraison opérationnelle et finitions premium coordonnées par le Groupe Afrimmo S.A.',
    intro: [
      'Le programme visait un produit résidentiel haut de gamme en bord de mer, avec exigences architecturales strictes et fenêtre de réalisation courte sur un site exposé (vent salin, logistique île).',
      'Notre rôle a couvert la coordination d’exécution, la planification des corps d’état sensibles (étanchéité, finitions extérieures, aménagements wellness) et la tenue des jalons jusqu’à mise en service.',
    ],
    scope: [
      'Coordination générale de chantier et reporting maître d’ouvrage',
      'Interfaces gros œuvre / second œuvre technique',
      'Pilotage qualité des livrables clés (façades, terrasses, équipements)',
    ],
    outcomes: [
      'Livraison des volumes principaux dans le calendrier prévu',
      'Mise en conformité des finitions avec le cahier des charges « résidence de standing »',
    ],
  },
  'kiwengwa-hotel': {
    seoDescription:
      'Kiwengwa Hotel : complexe hôtelier boutique sur la côte est de Zanzibar — structuration de programme, phasage et chantier en cours.',
    intro: [
      'Un actif hôtelier à forte composante paysagère et technique (piscines, restauration maritime, villas indépendantes) nécessite une organisation par lots et une vigilance accrue sur les interfaces MEP.',
      'Nous accompagnons la maîtrise d’ouvrage dans le pilotage de l’avancement, la priorisation des décisions en finition et la gestion des risques sur site.',
    ],
  },
  'kisraa-godowns': {
    seoDescription:
      'Première livraison industrielle Kisraa : deux entrepôts en zone industrielle Kisarawe II (Tanzanie).',
    intro: [
      'La phase 1 installe deux godowns représentatifs avant extension du périmètre global de huit volumes — enjeux de génie civil, voirie interne et calendriers fournisseurs longs cycles.',
      'Le dispositif d’implémentation mise sur la préfabrication rationnelle, le contrôle des interfaces logistiques et une traçabilité avancée des livrables structure.',
    ],
  },
  'mbweni-jkt': {
    seoDescription:
      'Villa Mbweni JKT : conception à la livraison en huit mois, pilotage multidisciplinaire pour un parti architectural très expressif.',
    intro: [
      'Les projets « design-led » appellent une gouvernance claire entre studio, bureau technique et chantier pour éviter la dérive des finitions.',
      'Nous avons structuré le planning critique, sécurisé les arbitrages techniques et conduit la mise en conformité jusqu’aux détails décoratifs.',
    ],
  },
  'lake-energies': {
    seoDescription:
      'Rebrand Lake Energies : coordination chantier sur neuf mois après passage de Lake Oil.',
    intro: [
      'Un rebranding multi-sites conjugue identification visuelle homogène, contraintes d’exploitation (stations, signalétique réglementaire) et continuité d’activité terrain.',
      'Le dispositif a synchronisé la chaîne créative, les plans d’exécution et la logistique de pose pour limiter l’impact opérationnel.',
    ],
  },
  'hospitaux-znz': {
    seoDescription:
      'Appui sur un programme de dix hôpitaux de district à Zanzibar — expertise MEP et coordination de mise en œuvre.',
    intro: [
      'Les ouvrages de santé imposent des normes techniques élevées (fluides médicaux, réseaux, énergie de secours) et une coordination forte entre maîtres d’œuvre spécialisés.',
      'Notre contribution s’est concentrée sur l’alignement des lots techniques et le suivi de conformité sur un calendre public exigeant.',
    ],
  },
  'palm-complex': {
    seoDescription:
      'Palm Complex à Kigamboni : programme mixte résidentiel et commercial densifié, livré sur la fenêtre contractuelle.',
    intro: [
      'Les opérations mixtes combinent logistique verticale, interfaces commerces / logements et planification des accès — sujet propice aux conflits de planning si non gouvernés.',
      'Un pilotage intégré des phases clés a permis de stabiliser les interfaces et de sécuriser la livraison globale sans dégradation fonctionnelle des espaces vendus.',
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
