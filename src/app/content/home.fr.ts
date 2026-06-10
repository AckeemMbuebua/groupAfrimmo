import type { HomeContent } from './home-content.type';
import { PROJECT_CARD_LIST } from '../i18n/fr/projects';

const brand = 'Groupe Afrimmo S.A.';
const projectCount = PROJECT_CARD_LIST.length;

export const HOME_FR: HomeContent = {
  locale: 'fr',
  seo: {
    title: `${brand} | Construction, génie civil, logistique & import-export`,
    description:
      `${brand} accompagne vos projets de construction et de génie civil, infrastructures, logistique, import-export et approvisionnement en RDC, en Afrique centrale et à l’international.`,
  },
  cta: {
    primary: 'Parler de votre projet',
    secondary: 'Voir nos réalisations',
    formSubmit: 'Envoyer ma demande',
    call: 'Appeler Afrimmo',
    whatsapp: 'Écrire sur WhatsApp',
  },
  hero: {
    chip: 'Construction • Génie civil • Logistique • Approvisionnement',
    title: 'Bâtir, coordonner et livrer',
    titleAccent: 'Avec maîtrise.',
    lead:
      `${brand} accompagne vos projets de construction, d’infrastructures, de logistique et d’approvisionnement en RDC, en Afrique centrale et à l’international.`,
  },
  stats: {
    eyebrow: 'Indicateurs',
    title: 'Nos repères terrain',
    lead:
      'Quelques indicateurs pour situer l’expérience du groupe et ses capacités d’intervention.',
    items: [
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
        sublabel:
          'Programme de 10 hôpitaux de district (Zanzibar) — contribution technique / lots MEP',
        transitionDelaySeconds: 0.08,
      },
      {
        valuePrefix: '',
        value: String(projectCount),
        label: 'Références projets',
        sublabel: 'Résidentiel, hôtelier, industriel et institutionnel',
        transitionDelaySeconds: 0.16,
      },
      {
        valuePrefix: '',
        value: '4',
        label: 'Domaines intégrés',
        sublabel: 'Construction, logistique, import-export, services techniques',
        transitionDelaySeconds: 0.24,
      },
    ],
    capabilityLabels: [
      'RDC et international',
      'Capacité d’intervention selon projet',
      'Services techniques',
      'Main-d’œuvre qualifiée',
      'Logistique et transport',
      'Import-export et matériaux',
    ],
  },
  about: {
    eyebrow: 'Qui nous sommes',
    title: 'Une entreprise structurée pour les projets exigeants.',
    intro:
      `Basée en République démocratique du Congo, ${brand} intervient dans la construction, le génie civil, les infrastructures, la logistique et l’approvisionnement. L’entreprise accompagne les maîtres d’ouvrage, partenaires privés et acteurs institutionnels avec une organisation orientée terrain, coordination et qualité d’exécution.`,
    valueAddPrefix: 'Notre valeur ajoutée :',
    valueAddBody:
      'relier les besoins du projet, les ressources techniques, les approvisionnements et l’exécution terrain dans une même logique de résultat.',
    trustHeading: 'Pourquoi nous faire confiance',
    trustPoints: [
      'Organisation terrain et hiérarchie de décision claire',
      'Coordination multi-lots et interfaces techniques',
      'Réseau de partenaires mobilisé selon le besoin',
      'Respect des engagements et qualité d’exécution',
    ],
    zones: ['RDC', 'Afrique centrale & Est', 'Missions internationales selon projet'],
    mainImageAlt:
      'Chantier — coordination, génie civil et exécution terrain (visuel illustratif)',
  },
  expertise: {
    eyebrow: 'Expertises',
    title: 'Des expertises intégrées pour sécuriser vos projets.',
    lead:
      `${brand} intervient sur des projets où la construction, la coordination technique, la logistique et l’approvisionnement doivent avancer ensemble.`,
    cards: [
      {
        imageUrl: '/images/projet/optimized/mbweni-jkt-villa-04.webp',
        imageAlt: 'Construction et génie civil — visuel illustratif',
        numberLabel: '01',
        title: 'Construction et génie civil',
        description:
          'Bâtiments, infrastructures, ouvrages techniques et interventions liées aux projets publics, privés, industriels ou résidentiels.',
      },
      {
        imageUrl: '/images/projet/optimized/kisraa-godowns-01.webp',
        imageAlt: 'Logistique et transport — visuel illustratif',
        numberLabel: '02',
        title: 'Logistique et transport',
        description:
          'Organisation des flux, approvisionnement terrain, coordination des ressources et appui aux opérations projet.',
        transitionDelaySeconds: 0.08,
      },
      {
        imageUrl: '/images/projet/optimized/lake-energies-06.webp',
        imageAlt: 'Import-export et matériaux — visuel illustratif',
        numberLabel: '03',
        title: 'Import-export et approvisionnement',
        description:
          'Fourniture de matériaux, matières premières et équipements nécessaires à l’exécution des projets.',
        transitionDelaySeconds: 0.16,
      },
    ],
  },
  projects: {
    eyebrow: 'Réalisations',
    title: 'Des réalisations concrètes pour illustrer nos périmètres d’intervention.',
    lead:
      `Une sélection de références résidentielles, hôtelières, industrielles, institutionnelles et commerciales, réalisées ou accompagnées par les équipes et partenaires mobilisés autour de ${brand}. Le rôle exact sur chaque mandat est rappelé sur la fiche projet.`,
  },
  services: {
    eyebrow: 'Services',
    title: 'Des interventions concrètes sur tout le cycle projet.',
    lead:
      'Prestations mobilisées selon le mandat : de l’appui technique à l’exécution coordonnée sur chantier.',
    lines: [
      { summary: 'Rénovation, seconde œuvre et finitions de bâtiments' },
      { summary: 'Construction et réhabilitation d’ouvrages électriques' },
      {
        summary:
          'Approvisionnement en matériaux, matières premières et fournitures techniques',
      },
      { summary: 'Services techniques, maintenance et appui industriel' },
      { summary: 'Mobilisation de main-d’œuvre qualifiée selon les besoins chantier' },
    ],
  },
  method: {
    eyebrow: 'Méthode',
    title: 'Un pilotage lisible à chaque phase.',
    lead:
      'Chaque projet est cadré autour des contraintes terrain, des ressources disponibles, des délais, des approvisionnements et des exigences de qualité.',
    phases: [
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
    ],
  },
  engagement: {
    eyebrow: 'Qualité & responsabilité',
    title: 'Qualité, responsabilité et adaptation terrain.',
    partnersLead:
      `${brand} inscrit ses interventions dans une logique de qualité, d’adaptation au contexte local et de mobilisation de partenaires fiables selon les besoins du projet.`,
    qualityEyebrow: 'Qualité d’exécution',
    qualityTitle: 'Méthode, contrôle et livrables.',
    qualityIntro:
      'La démarche qualité repose sur des méthodes de planification, de suivi terrain et de contrôle des livrables — adaptées au périmètre mandaté et aux contraintes du chantier.',
    qualityPillars: [
      'Coordination lisible entre maître d’ouvrage, équipes et fournisseurs',
      'Points de contrôle aux jalons critiques du calendrier',
      'Reporting proportionné à la sensibilité du projet',
    ],
    responsibilityEyebrow: 'Responsabilité',
    responsibilityTitle: 'Une conduite responsable adaptée à chaque projet.',
    responsibilityLead:
      'L’entreprise veille à intégrer des pratiques responsables dans la conduite de ses opérations : respect des équipes, attention aux communautés, gestion raisonnée des ressources et adaptation aux contraintes environnementales. Les actions communautaires, éducatives ou environnementales peuvent être structurées avec les parties prenantes, lorsque le mandat et le cadre du projet le permettent.',
  },
  references: {
    eyebrow: 'Références',
    title: 'Références sélectionnées',
    lead:
      'Un aperçu de références, typologies de mandats et périmètres d’intervention sur des projets résidentiels, industriels, institutionnels et mixtes.',
    fieldLabels: {
      clientType: 'Type de client',
      projectType: 'Type de projet',
      zone: 'Zone',
      scope: 'Périmètre d’intervention',
    },
    items: [
      {
        id: 'ref-1',
        clientType: 'Maître d’ouvrage privé',
        projectType: 'Projet résidentiel',
        zone: 'Zanzibar',
        scope: 'Coordination et intervention selon périmètre mandaté',
      },
      {
        id: 'ref-2',
        clientType: 'Programme institutionnel',
        projectType: 'Infrastructures de santé',
        zone: 'Zanzibar',
        scope:
          'Contribution technique et lots MEP — programme public de 10 hôpitaux de district (Zanzibar)',
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
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Besoin d’éclaircissements ?',
    items: [
      {
        question: 'Sur quels types de projets intervenez-vous ?',
        answer:
          `${brand} intervient sur des projets de construction, de génie civil et d’infrastructures, sur des programmes résidentiels, hôteliers, industriels ou de santé, ainsi que sur la logistique et l’approvisionnement, selon le périmètre défini avec le maître d’ouvrage.`,
      },
      {
        question: 'Pouvez-vous fournir les matériaux et gérer l’approvisionnement ?',
        answer:
          'Oui. L’entreprise peut accompagner l’approvisionnement en matériaux, matières premières et fournitures techniques, selon le cahier des charges et les contraintes du projet.',
      },
      {
        question: 'Dans quelles zones intervenez-vous ?',
        answer:
          'Le groupe intervient en RDC, en Afrique centrale et de l’Est, avec des missions internationales possibles selon la nature du projet, les ressources et les partenaires mobilisables.',
      },
      {
        question: 'Quelles informations envoyer pour un premier cadrage ?',
        answer:
          'Indiquez la localisation, le type de projet, le stade d’avancement, les délais souhaités, le budget indicatif si disponible et les contraintes connues.',
      },
      {
        question: 'Intervenez-vous sur des lots spécialisés ?',
        answer:
          `Oui. Selon le mandat, ${brand} peut intervenir sur des lots techniques, la rénovation, la seconde œuvre, les finitions, les infrastructures électriques, l’appui industriel, la logistique ou la mobilisation de main-d’œuvre qualifiée.`,
      },
      {
        question: 'Travaillez-vous avec des clients publics et privés ?',
        answer:
          'Oui. Le groupe accompagne des maîtres d’ouvrage privés, partenaires institutionnels et acteurs économiques, avec un niveau de reporting adapté au projet.',
      },
      {
        question: 'Peut-on vous consulter pour un projet déjà en cours ?',
        answer:
          'Oui. L’entreprise peut intervenir pour un appui technique, une reprise de coordination, un approvisionnement, une évaluation de contraintes ou une mission spécifique.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Parlons de votre projet.',
    lead:
      'Construction, génie civil, logistique, import-export ou appui technique : envoyez les premières informations et notre équipe revient vers vous avec un cadrage clair.',
    whatsappAria: `Écrire sur WhatsApp — ${brand}`,
    form: {
      nameLabel: 'Nom complet',
      namePlaceholder: 'Nom et prénom',
      phoneLabel: 'Téléphone',
      phonePlaceholder: '+243 ...',
      emailLabel: 'E-mail (optionnel)',
      emailPlaceholder: 'vous@exemple.com',
      projectTypeLabel: 'Type de projet',
      messageLabel: 'Message',
      messagePlaceholder: 'Localisation, délais, budget indicatif, besoin principal...',
      submitNote:
        'Le bouton ouvre votre messagerie avec un message prérempli ; aucun envoi automatique n’est effectué depuis le site.',
      projectOptions: [
        { value: 'construction', label: 'Construction et génie civil' },
        { value: 'renovation', label: 'Rénovation, seconde œuvre et finitions' },
        { value: 'electrical', label: 'Ouvrages et infrastructures électriques' },
        { value: 'raw-materials', label: 'Approvisionnement matériaux et fournitures' },
        {
          value: 'industrial-services',
          label: 'Services techniques, maintenance, appui industriel',
        },
        { value: 'workforce', label: 'Main-d’œuvre qualifiée' },
        { value: 'logistics', label: 'Logistique et transport' },
        { value: 'import-export', label: 'Import-export' },
        { value: 'other', label: 'Autre besoin' },
      ],
    },
    mailto: {
      subjectPrefix: 'Demande projet',
      greeting: `Bonjour ${brand},`,
      intro: 'Je souhaite vous contacter au sujet d’un projet.',
      nameLine: 'Nom complet',
      phoneLine: 'Téléphone',
      emailLine: 'E-mail',
      projectTypeLine: 'Type de projet',
      messageHeading: 'Message',
    },
  },
};
