import type { ProjectCard } from '../../shared/landing/landing.models';
import type { ProjectCaseExtended } from '../../shared/content/content.models';
import { PROJECT_IMAGES } from '../project-images';

export const EN_PROJECT_CARD_LIST: readonly ProjectCard[] = [
  {
    id: 'al-saad',
    imageUrl: PROJECT_IMAGES['al-saad'].primary,
    imageAlt:
      'Al Saad Apartments residence — 28 units, Chukwani, Zanzibar.',
    galleryImageUrls: PROJECT_IMAGES['al-saad'].gallery,
    category: 'High-end residential',
    title: 'Al Saad Apartments',
    description: 'A 28-unit residence in Zanzibar, delivered in 2022.',
    statusLabel: 'Completed · 2022',
    wide: true,
    location: 'Chukwani, Zanzibar',
    roleScope: 'Project intervention / contribution (scope defined in the mandate)',
    tags: ['Residential', 'Zanzibar', '28 units', 'high-end'],
    futureImageAsset: 'al-saad-apartments-01.webp',
  },
  {
    id: 'kiwengwa-hotel',
    imageUrl: PROJECT_IMAGES['kiwengwa-hotel'].primary,
    imageAlt: 'Kiwengwa hospitality project — Zanzibar.',
    galleryImageUrls: PROJECT_IMAGES['kiwengwa-hotel'].gallery,
    category: 'Hospitality',
    title: 'Kiwengwa Hotel',
    description:
      'Hotel in Kiwengwa with independent units, pools and restaurant.',
    statusLabel: 'In progress',
    wide: false,
    transitionDelaySeconds: 0.06,
    location: 'Kiwengwa, Zanzibar',
    roleScope: 'Project intervention / contribution (scope defined in the mandate)',
    tags: ['Hotel', 'Zanzibar', 'seafront', '14 units'],
    futureImageAsset: 'kiwengwa-hotel-01.webp',
  },
  {
    id: 'kisraa-godowns',
    imageUrl: PROJECT_IMAGES['kisraa-godowns'].primary,
    imageAlt: 'Kisraa industrial warehouses — Kisarawe II.',
    galleryImageUrls: PROJECT_IMAGES['kisraa-godowns'].gallery,
    category: 'Industrial / warehouses',
    title: 'Kisraa Company Limited — Industrial warehouses',
    description:
      'First phase of 2 industrial warehouses, completed in 2024.',
    statusLabel: 'Phase 1 completed · 2024',
    wide: false,
    transitionDelaySeconds: 0.12,
    location: 'Kisarawe II Industrial Area',
    roleScope: 'Project intervention / contribution (scope defined in the mandate)',
    tags: ['Industrial', 'warehouses', 'Kisarawe', '2024'],
    futureImageAsset: 'kisraa-godowns-01.webp',
  },
  {
    id: 'mbweni-jkt',
    imageUrl: PROJECT_IMAGES['mbweni-jkt'].primary,
    imageAlt: 'Mbweni JKT Villa — from design to delivery.',
    galleryImageUrls: PROJECT_IMAGES['mbweni-jkt'].gallery,
    category: 'Villa / premium residential',
    title: 'Mbweni JKT Villa',
    description:
      'Villa delivered in 2025 after eight months of design and execution, according to the mandate.',
    statusLabel: 'Completed · 2025',
    wide: false,
    transitionDelaySeconds: 0.18,
    location: 'Mbweni JKT',
    roleScope: 'Project intervention / contribution (scope defined in the mandate)',
    tags: ['Villa', 'design-build', '8 months', '2025'],
    futureImageAsset: 'mbweni-jkt-villa-01.webp',
  },
  {
    id: 'lake-energies',
    imageUrl: PROJECT_IMAGES['lake-energies'].primary,
    imageAlt: 'Lake Energies — branding and site interventions.',
    galleryImageUrls: PROJECT_IMAGES['lake-energies'].gallery,
    category: 'Service station / supervision',
    title: 'Lake Energies — Branding and site supervision',
    description:
      'Support for the Lake Oil to Lake Energies transition: identity, monitoring and site interventions over nine months.',
    statusLabel: 'Delivered · 2024',
    wide: false,
    transitionDelaySeconds: 0.24,
    location: 'Lake Energies sites',
    roleScope: 'Creative intervention and field execution on sites (scope defined in the mandate)',
    tags: ['Branding', 'supervision', 'service station', '2024'],
    futureImageAsset: 'lake-energies-01.webp',
  },
  {
    id: 'hospitaux-znz',
    imageUrl: PROJECT_IMAGES['hospitaux-znz'].primary,
    imageAlt: 'Healthcare programme in Zanzibar — technical contribution.',
    galleryImageUrls: PROJECT_IMAGES['hospitaux-znz'].gallery,
    category: 'Healthcare infrastructure',
    title: 'Programme of 10 district hospitals in Zanzibar',
    description:
      'Technical contribution / MEP packages on a programme of 10 district hospitals.',
    statusLabel: 'Completed · 2025',
    wide: false,
    transitionDelaySeconds: 0.3,
    location: 'Zanzibar',
    roleScope:
      'Technical contribution / MEP packages — public programme of 10 district hospitals',
    tags: ['Healthcare', 'MEP', 'hospitals', 'Zanzibar', '2025'],
    futureImageAsset: 'zanzibar-district-hospitals-01.webp',
  },
  {
    id: 'palm-complex',
    imageUrl: PROJECT_IMAGES['palm-complex'].primary,
    imageAlt: 'Palm Complex commercial and residential development — Kigamboni.',
    galleryImageUrls: PROJECT_IMAGES['palm-complex'].gallery,
    category: 'Commercial & residential',
    title: 'Palm Complex — Kigamboni',
    description:
      'Commercial and residential complex in Kigamboni, delivered in 2025 according to the mandated scope.',
    statusLabel: 'Completed · 2025',
    wide: false,
    transitionDelaySeconds: 0.36,
    location: 'Kigamboni',
    roleScope: 'Project intervention / contribution (scope defined in the mandate)',
    tags: ['Commercial', 'residential', 'Kigamboni', '2025'],
    futureImageAsset: 'palm-complex-kigamboni-01.webp',
  },
];

export const EN_PROJECT_EXTRA: Record<string, ProjectCaseExtended> = {
  'al-saad': {
    seoDescription:
      'Al Saad Apartments — 28-unit residence in Chukwani, Zanzibar, delivered in 2022. Groupe Afrimmo S.A. reference.',
    intro: [
      'High-end residential project located in Chukwani, Zanzibar, comprising 28 units with leisure areas, whirlpool-type equipment and outdoor terrace, close to Indian Ocean beaches.',
      'The exact scope entrusted to the group and mobilised teams is the one defined in the mandate; the wording below remains general to preserve contractual confidentiality.',
    ],
    scope: [
      'Coordination and follow-up according to the mandated scope',
      'Interfaces between trades and delivery milestones',
      'Quality management of sensitive deliverables (outdoor areas, equipment)',
    ],
    outcomes: [
      'Delivery aligned with the agreed schedule for the monitored phases',
      'Implementation of expected finishes and equipment for a high-end residence',
    ],
  },
  'kiwengwa-hotel': {
    seoDescription:
      'Kiwengwa Hotel — hospitality project in Kiwengwa, Zanzibar (14 independent units, pools, restaurant, seafront). Groupe Afrimmo S.A. reference.',
    intro: [
      'Hospitality project located in Kiwengwa, Zanzibar, composed of 14 independent units with private or shared pools, restaurant and seafront access.',
      'Work in progress: coordination of technical packages and MEP interfaces remains central to keeping the programme on track.',
    ],
  },
  'kisraa-godowns': {
    seoDescription:
      'Kisraa Company Limited — first phase of industrial warehouses in Kisarawe II (2 warehouses out of a planned programme of 8). Groupe Afrimmo S.A. reference.',
    intro: [
      'First phase of an industrial warehouse programme for Kisraa Company Limited, with 2 warehouses delivered out of a planned total of 8 in the Kisarawe II industrial area.',
      'Key issues include civil engineering, internal roadways and aligning deliverables with a future extension programme.',
    ],
  },
  'mbweni-jkt': {
    seoDescription:
      'Mbweni JKT Villa — project conducted from design to delivery over approximately 8 months. Groupe Afrimmo S.A. reference.',
    intro: [
      'Villa project conducted from design to execution, with delivery followed over an approximately eight-month period according to the mandate.',
      'Highly architectural projects require clear governance between the technical office and site teams to secure finishes.',
    ],
  },
  'lake-energies': {
    seoDescription:
      'Lake Energies — transition from Lake Oil: branding, supervision and site interventions over approximately nine months. Groupe Afrimmo S.A. reference.',
    intro: [
      'Lake Oil to Lake Energies transition project: visual identity, site monitoring and execution of interventions on the relevant sites over approximately nine months.',
      'This type of mandate combines operating continuity, signage and local regulatory constraints.',
    ],
  },
  'hospitaux-znz': {
    seoDescription:
      'Technical contribution to a public programme of 10 district hospitals in Zanzibar — involvement on MEP packages. Groupe Afrimmo S.A. reference.',
    intro: [
      'Technical contribution to the programme of 10 district hospitals in Zanzibar, with team involvement on MEP packages and associated implementation coordination.',
      'The presented scope concerns the documented MEP technical support for this public programme.',
    ],
  },
  'palm-complex': {
    seoDescription:
      'Palm Complex — mixed commercial and residential project in Kigamboni, delivered in 2025 according to the mandated scope. Groupe Afrimmo S.A. reference.',
    intro: [
      'Commercial and residential project in Kigamboni, executed over approximately one year and delivered in 2025 according to the contractually defined scope.',
      'Mixed-use operations combine retail / housing interfaces and access planning; milestone management follows the mandate.',
    ],
  },
};
