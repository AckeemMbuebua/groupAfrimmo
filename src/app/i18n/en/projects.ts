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
    description: 'Luxury 28-unit residence in Chukwani, Zanzibar, completed in 2022.',
    statusLabel: 'Completed · 2022',
    wide: true,
    location: 'Chukwani, Zanzibar',
    roleScope: '28-unit residence with whirlpool and sun terrace',
    tags: ['Residential', 'Zanzibar', '28 units', 'high-end'],
  },
  {
    id: 'kiwengwa-hotel',
    imageUrl: PROJECT_IMAGES['kiwengwa-hotel'].primary,
    imageAlt: 'Kiwengwa hospitality project — Zanzibar.',
    galleryImageUrls: PROJECT_IMAGES['kiwengwa-hotel'].gallery,
    category: 'Hospitality',
    title: 'Kiwengwa Hotel',
    description:
      'Five-star hotel in Kiwengwa with 14 detached units.',
    statusLabel: 'In progress',
    wide: false,
    transitionDelaySeconds: 0.06,
    location: 'Kiwengwa, Zanzibar',
    roleScope: '14 detached units, pools, restaurant and beachfront',
    tags: ['Hotel', 'Zanzibar', 'seafront', '14 units'],
  },
  {
    id: 'kisraa-godowns',
    imageUrl: PROJECT_IMAGES['kisraa-godowns'].primary,
    imageAlt: 'Kisraa industrial warehouses — Kisarawe II.',
    galleryImageUrls: PROJECT_IMAGES['kisraa-godowns'].gallery,
    category: 'Industrial / warehouses',
    title: 'Kisraa Company Limited — Industrial warehouses',
    description:
      'First phase of 2 industrial warehouses in Kisarawe II, completed in 2024.',
    statusLabel: 'Phase 1 completed · 2024',
    wide: false,
    transitionDelaySeconds: 0.12,
    location: 'Kisarawe II Industrial Area',
    roleScope: '2 warehouses completed out of a planned programme of 8',
    tags: ['Industrial', 'warehouses', 'Kisarawe', '2024'],
  },
  {
    id: 'mbweni-jkt',
    imageUrl: PROJECT_IMAGES['mbweni-jkt'].primary,
    imageAlt: 'Mbweni JKT Villa — from design to delivery.',
    galleryImageUrls: PROJECT_IMAGES['mbweni-jkt'].gallery,
    category: 'Villa / premium residential',
    title: 'Mbweni JKT Villa',
    description:
      'Villa delivered from design to completion in 8 months, completed in 2025.',
    statusLabel: 'Completed · 2025',
    wide: false,
    transitionDelaySeconds: 0.18,
    location: 'Mbweni JKT',
    roleScope: 'Design to completion in 8 months',
    tags: ['Villa', 'design-build', '8 months', '2025'],
  },
  {
    id: 'lake-energies',
    imageUrl: PROJECT_IMAGES['lake-energies'].primary,
    imageAlt: 'Lake Energies — branding and site interventions.',
    galleryImageUrls: PROJECT_IMAGES['lake-energies'].gallery,
    category: 'Service station / supervision',
    title: 'Lake Energies — Branding and site supervision',
    description:
      'Lake Oil to Lake Energies rebranding, with site supervision and execution over 9 months.',
    statusLabel: 'Delivered · 2024',
    wide: false,
    transitionDelaySeconds: 0.24,
    location: 'Lake Energies sites',
    roleScope: 'Creative intervention, supervision and site execution',
    tags: ['Branding', 'supervision', 'service station', '2024'],
  },
  {
    id: 'hospitaux-znz',
    imageUrl: PROJECT_IMAGES['hospitaux-znz'].primary,
    imageAlt: 'Healthcare programme in Zanzibar — technical contribution.',
    galleryImageUrls: PROJECT_IMAGES['hospitaux-znz'].gallery,
    category: 'Healthcare infrastructure',
    title: '10 district hospitals',
    description:
      'Technical contribution / MEP packages — Zanzibar, completed in 2025.',
    statusLabel: 'Completed · 2025',
    wide: false,
    transitionDelaySeconds: 0.3,
    location: 'Zanzibar',
    roleScope:
      'Technical contribution / MEP packages — Zanzibar',
    tags: ['Healthcare', 'MEP', 'hospitals', 'Zanzibar', '2025'],
  },
  {
    id: 'palm-complex',
    imageUrl: PROJECT_IMAGES['palm-complex'].primary,
    imageAlt: 'Palm Complex commercial and residential development — Kigamboni.',
    galleryImageUrls: PROJECT_IMAGES['palm-complex'].gallery,
    category: 'Commercial & residential',
    title: 'Palm Complex — Kigamboni',
    description:
      'Commercial and residential project built in Kigamboni in 1 year, completed in 2025.',
    statusLabel: 'Completed · 2025',
    wide: false,
    transitionDelaySeconds: 0.36,
    location: 'Kigamboni',
    roleScope: 'Commercial and residential project built in 1 year',
    tags: ['Commercial', 'residential', 'Kigamboni', '2025'],
  },
];

export const EN_PROJECT_EXTRA: Record<string, ProjectCaseExtended> = {
  'al-saad': {
    seoDescription:
      'Al Saad Apartments — luxury 28-unit residence in Chukwani, Zanzibar, completed in 2022. Groupe Afrimmo S.A. reference.',
    intro: [
      'Luxury apartment project in Chukwani, Zanzibar, with 28 units, whirlpool and sun terrace near the Indian Ocean beaches. Completed in 2022.',
    ],
  },
  'kiwengwa-hotel': {
    seoDescription:
      'Kiwengwa Hotel — five-star hotel in Kiwengwa, Zanzibar, with 14 detached units, pools, restaurant and beachfront access. Groupe Afrimmo S.A. reference.',
    intro: [
      'Five-star hotel in Kiwengwa, Zanzibar, with 14 detached units, individual or shared pools, a restaurant and beachfront access. Ongoing.',
    ],
  },
  'kisraa-godowns': {
    seoDescription:
      'Kisraa Company Limited — first phase of 2 industrial warehouses in Kisarawe II out of a planned programme of 8. Groupe Afrimmo S.A. reference.',
    intro: [
      'First phase of an 8-warehouse industrial programme for Kisraa Company Limited in the Kisarawe II industrial area. Two warehouses were completed in 2024.',
    ],
  },
  'mbweni-jkt': {
    seoDescription:
      'Mbweni JKT Villa — project delivered from design to completion in 8 months, completed in 2025. Groupe Afrimmo S.A. reference.',
    intro: [
      'Mbweni JKT villa project delivered from design to completion in 8 months. Completed in 2025.',
    ],
  },
  'lake-energies': {
    seoDescription:
      'Lake Energies — Lake Oil rebranding in 2024, with creative intervention, supervision and site execution over 9 months. Groupe Afrimmo S.A. reference.',
    intro: [
      'Lake Oil to Lake Energies rebranding project in 2024, with creative work, supervision and construction execution on sites. The project lasted 9 months.',
    ],
  },
  'hospitaux-znz': {
    seoDescription:
      '10 district hospitals — technical contribution / MEP packages in Zanzibar, completed in 2025. Groupe Afrimmo S.A. reference.',
    intro: [
      'Programme launched in 2024 by the Government of Zanzibar for 10 new district hospitals. Technical contribution / MEP packages — Zanzibar, completed in 2025.',
    ],
  },
  'palm-complex': {
    seoDescription:
      'Palm Complex — commercial and residential project built in Kigamboni in 1 year, completed in 2025. Groupe Afrimmo S.A. reference.',
    intro: [
      'Commercial and residential project built in Kigamboni in 1 year, completed in 2025.',
    ],
  },
};
