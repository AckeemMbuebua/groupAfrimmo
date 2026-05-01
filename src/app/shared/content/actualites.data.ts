import type { InsightArticle } from './content.models';

export const INSIGHT_ARTICLES: readonly InsightArticle[] = [
  {
    slug: 'piloter-multi-pays-afrique-centrale-est',
    title: 'Piloter un grand programme multi-site en Afrique centrale et de l’Est',
    dateISO: '2026-04-08',
    excerpt:
      'Quatre principes pragmatiques — gouvernance, interfaces, données terrain et continuité commerciale — pour tenir cadence et qualité lorsque les périmètres s’élargissent.',
    coverUrl:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
    coverAlt: 'Chantier en cours avec grues et équipements',
    body: [
      'Les chantiers dispersés géographiquement accentuent trois risques systématiques : dérive des interfaces entre lots, dilution du reporting décisionnel, et tension sur la disponibilité des matériaux critiques.',
      'Une gouvernance simple mais non négociable aide : RACI lisible au niveau MOA, points de blocage escaladés en 48 h, et un journal unique des arbitrages qui relie technique et commercial.',
      'La donnée terrain structurée (photographie datée, relevés, non-conformités) évite les reprises coûteuses en finition : elle doit être aussi légère que possible pour rester tenue sur le long cours.',
      'Enfin, la continuité commerciale — maintenir la promesse client malgré les aléas — repose sur une communication proactive des jalons et sur des scénarios de phasage réalistes dès l’avant-projet.',
    ],
  },
  {
    slug: 'qualite-finitions-haut-debit',
    title: 'Qualité des finitions à haut débit : ce que change un chantier exigeant',
    dateISO: '2026-03-12',
    excerpt:
      'Quand le calendrier est serré, la qualité ne se « rattrape » pas en fin de chantier : elle se contracte en amont par des choix de détail et des points de contrôle nommés.',
    coverUrl:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
    coverAlt: 'Détail architecture et finition intérieure',
    body: [
      'Les projets premium demandent des interfaces maîtrisées entre fournisseurs spécialisés : chaque report de décision sur un détail devient un multiplicateur de délais.',
      'Nous privilégions des « arrêts photo » contractuels par zone : une pièce clé validée structure le rythme du reste du bâtiment et aligne les corps de métier.',
      'Le contrôle ne remplace pas la culture qualité des équipes, mais il crée une mémoire partagée des écarts — indispensable quand plusieurs pays et fournisseurs sont en jeu.',
    ],
  },
  {
    slug: 'logistique-industrielle-deploiement',
    title: 'Déployer de la capacité industrielle : logistique, phasage et sécurité',
    dateISO: '2026-02-20',
    excerpt:
      'Des hangars aux plateformes mixtes, la première livraison fixe la réputation opérationnelle du site : anticiper voirie, stocks et services utilitaires.',
    coverUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    coverAlt: 'Zone industrielle et entrepôts',
    body: [
      'La phase 1 d’un parc logistique définit souvent les contraintes structurelles des phases suivantes : gabarits, aires de manœuvre, et redondance énergétique.',
      'Un phasage réaliste intègre les délais d’importation et la disponibilité locale des équipements lourds — variables souvent sous-estimées dans les plannings initiaux.',
      'La sécurité des personnes et des biens (circulation poids lourds, stockage) doit être cadrée dès l’ouverture de chantier, pas en fin de travaux.',
    ],
  },
];

export function getArticleBySlug(slug: string): InsightArticle | undefined {
  return INSIGHT_ARTICLES.find((a) => a.slug === slug);
}

export function formatArticleDate(iso: string): string {
  return new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(new Date(iso));
}
