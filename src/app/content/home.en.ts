import type { HomeContent } from './home-content.type';
import { EN_PROJECT_CARD_LIST } from '../i18n/en/projects';

const brand = 'Groupe Afrimmo S.A.';
const projectCount = EN_PROJECT_CARD_LIST.length;

export const HOME_EN: HomeContent = {
  locale: 'en',
  seo: {
    title: `${brand} | Construction, civil engineering, logistics & supply`,
    description:
      `${brand} supports construction and civil engineering projects, infrastructure, logistics, import-export and procurement in the DRC, Central Africa and internationally.`,
  },
  cta: {
    primary: 'Discuss your project',
    secondary: 'View our projects',
    formSubmit: 'Send my request',
    call: 'Call Afrimmo',
    whatsapp: 'Message on WhatsApp',
  },
  hero: {
    chip: 'Construction • Civil engineering • Logistics • Procurement',
    title: 'Build, coordinate and deliver',
    titleAccent: 'With precision.',
    lead:
      `${brand} supports companies, institutions and private partners across construction, infrastructure, logistics and procurement projects in the DRC, Central Africa and internationally.`,
  },
  stats: {
    eyebrow: 'Indicators',
    title: 'Our field benchmarks',
    lead:
      'A few indicators to illustrate the group’s experience and capacity to deliver.',
    items: [
      {
        valuePrefix: '',
        value: '28',
        label: 'Residential units',
        sublabel: 'Al Saad Apartments, Zanzibar',
      },
      {
        valuePrefix: '',
        value: '10',
        label: 'District hospitals',
        sublabel:
          'Programme of 10 district hospitals (Zanzibar) — technical contribution / MEP packages',
        transitionDelaySeconds: 0.08,
      },
      {
        valuePrefix: '',
        value: String(projectCount),
        label: 'Project references',
        sublabel: 'Residential, hospitality, industrial and institutional',
        transitionDelaySeconds: 0.16,
      },
      {
        valuePrefix: '',
        value: '4',
        label: 'Integrated domains',
        sublabel: 'Construction, logistics, import-export, technical services',
        transitionDelaySeconds: 0.24,
      },
    ],
    capabilityLabels: [
      'DRC and international',
      'Project-based delivery capacity',
      'Technical services',
      'Skilled workforce',
      'Logistics and transport',
      'Import-export and materials',
    ],
  },
  about: {
    eyebrow: 'Who we are',
    title: 'A structured company for demanding projects.',
    intro:
      `Based in the Democratic Republic of the Congo, ${brand} operates in construction, civil engineering, infrastructure, logistics and procurement. The company supports private developers, institutional partners and economic stakeholders with field-oriented organisation, coordination and execution quality.`,
    valueAddPrefix: 'Our value proposition:',
    valueAddBody:
      'aligning project requirements, technical resources, procurement and field execution within a single results-driven approach.',
    trustHeading: 'Why work with us',
    trustPoints: [
      'Clear field organisation and decision hierarchy',
      'Multi-package coordination and technical interfaces',
      'Partner network mobilised as required',
      'Commitment delivery and execution quality',
    ],
    zones: ['DRC', 'Central & East Africa', 'International missions by project'],
    mainImageAlt:
      'Construction site — coordination, civil engineering and field execution (illustrative)',
  },
  expertise: {
    eyebrow: 'Expertise',
    title: 'Integrated expertise to secure your projects.',
    lead:
      `${brand} works on projects where construction, technical coordination, logistics and procurement must progress in parallel.`,
    cards: [
      {
        imageUrl: '/images/projet/optimized/mbweni-jkt-villa-04.webp',
        imageAlt: 'Construction and civil engineering — illustrative visual',
        numberLabel: '01',
        title: 'Construction and civil engineering',
        description:
          'Buildings, infrastructure, technical works and interventions on public, private, industrial or residential programmes.',
      },
      {
        imageUrl: '/images/projet/optimized/kisraa-godowns-01.webp',
        imageAlt: 'Logistics and transport — illustrative visual',
        numberLabel: '02',
        title: 'Logistics and transport',
        description:
          'Flow management, field procurement, resource coordination and operational project support.',
        transitionDelaySeconds: 0.08,
      },
      {
        imageUrl: '/images/projet/optimized/lake-energies-06.webp',
        imageAlt: 'Import-export and materials — illustrative visual',
        numberLabel: '03',
        title: 'Import-export and procurement',
        description:
          'Supply of materials, raw inputs and equipment required for project delivery.',
        transitionDelaySeconds: 0.16,
      },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Concrete references illustrating our scopes of intervention.',
    lead:
      `A selection of residential, hospitality, industrial, institutional and commercial references delivered or supported by teams and partners working with ${brand}. The exact role on each mandate is stated on the project sheet.`,
  },
  services: {
    eyebrow: 'Services',
    title: 'Hands-on support across the project lifecycle.',
    lead:
      'Services mobilised according to the mandate: from technical support to coordinated field execution.',
    lines: [
      { summary: 'Renovation, fit-out and building finishes' },
      { summary: 'Construction and rehabilitation of electrical works' },
      { summary: 'Procurement of materials, raw inputs and technical supplies' },
      { summary: 'Technical services, maintenance and industrial support' },
      { summary: 'Skilled workforce mobilisation according to site needs' },
    ],
  },
  method: {
    eyebrow: 'Method',
    title: 'Clear governance at every phase.',
    lead:
      'Each project is framed around field constraints, available resources, timelines, procurement and quality requirements.',
    phases: [
      {
        numberLabel: '01',
        title: 'Scoping',
        description:
          'Analysis of requirements, site, constraints and client priorities.',
      },
      {
        numberLabel: '02',
        title: 'Planning',
        description:
          'Definition of resources, packages, schedule, supply chains and control points.',
      },
      {
        numberLabel: '03',
        title: 'Execution',
        description:
          'Team coordination, field supervision, quality monitoring and operational adjustments.',
      },
      {
        numberLabel: '04',
        title: 'Handover',
        description:
          'Acceptance, snag resolution, reporting and transfer of useful deliverables to the client.',
      },
    ],
  },
  engagement: {
    eyebrow: 'Quality & responsibility',
    title: 'Quality, responsibility and field adaptation.',
    partnersLead:
      `${brand} embeds quality, local context adaptation and reliable partner mobilisation according to each project’s needs.`,
    qualityEyebrow: 'Execution quality',
    qualityTitle: 'Method, control and deliverables.',
    qualityIntro:
      'The quality approach relies on planning, field monitoring and deliverable control — adapted to the mandated scope and site constraints.',
    qualityPillars: [
      'Clear coordination between client, teams and suppliers',
      'Control points at critical schedule milestones',
      'Reporting proportionate to project sensitivity',
    ],
    responsibilityEyebrow: 'Responsibility',
    responsibilityTitle: 'Responsible conduct tailored to each project.',
    responsibilityLead:
      'The company integrates responsible practices into its operations: respect for teams, attention to communities, prudent resource management and adaptation to environmental constraints. Community, educational or environmental initiatives can be structured with stakeholders when the mandate and project framework allow.',
  },
  references: {
    eyebrow: 'References',
    title: 'Selected references',
    lead:
      'An overview of references, mandate types and scopes of intervention on residential, industrial, institutional and mixed projects.',
    fieldLabels: {
      clientType: 'Client type',
      projectType: 'Project type',
      zone: 'Region',
      scope: 'Scope of intervention',
    },
    items: [
      {
        id: 'ref-1',
        clientType: 'Private developer',
        projectType: 'Residential project',
        zone: 'Zanzibar',
        scope: 'Coordination and intervention per mandated scope',
      },
      {
        id: 'ref-2',
        clientType: 'Institutional programme',
        projectType: 'Healthcare infrastructure',
        zone: 'Zanzibar',
        scope:
          'Technical contribution and MEP packages — public programme of 10 district hospitals (Zanzibar)',
      },
      {
        id: 'ref-3',
        clientType: 'Industrial operator',
        projectType: 'Warehouses',
        zone: 'Kisarawe II',
        scope: 'First delivery phase — scope defined in the mandate',
      },
      {
        id: 'ref-4',
        clientType: 'Mixed programme',
        projectType: 'Commercial and residential',
        zone: 'Kigamboni',
        scope: 'Management and delivery within the contractual window',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Need clarification?',
    items: [
      {
        question: 'What types of projects do you handle?',
        answer:
          `${brand} works on construction, civil engineering and infrastructure projects, residential, hospitality, industrial or healthcare programmes, as well as logistics and procurement, within the scope agreed with the client.`,
      },
      {
        question: 'Can you supply materials and manage procurement?',
        answer:
          'Yes. The company can support procurement of materials, raw inputs and technical supplies according to specifications and project constraints.',
      },
      {
        question: 'Where do you operate?',
        answer:
          'The group operates in the DRC, Central and East Africa, with international missions possible depending on the project, resources and partners available.',
      },
      {
        question: 'What information should we send for an initial briefing?',
        answer:
          'Please share location, project type, current stage, desired timeline, indicative budget if available and known constraints.',
      },
      {
        question: 'Do you work on specialised packages?',
        answer:
          `Yes. Depending on the mandate, ${brand} can support technical packages, renovation, fit-out, finishes, electrical infrastructure, industrial support, logistics or skilled workforce mobilisation.`,
      },
      {
        question: 'Do you work with public and private clients?',
        answer:
          'Yes. The group supports private developers, institutional partners and economic stakeholders, with reporting adapted to the project.',
      },
      {
        question: 'Can we contact you for a project already underway?',
        answer:
          'Yes. The company can provide technical support, coordination takeover, procurement, constraint assessment or a specific mission.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s talk about your project.',
    lead:
      'Construction, civil engineering, logistics, import-export or technical support: send initial information and our team will respond with a clear briefing.',
    whatsappAria: `Message on WhatsApp — ${brand}`,
    form: {
      nameLabel: 'Full name',
      namePlaceholder: 'First and last name',
      phoneLabel: 'Phone',
      phonePlaceholder: '+243 ...',
      emailLabel: 'Email (optional)',
      emailPlaceholder: 'you@example.com',
      projectTypeLabel: 'Project type',
      messageLabel: 'Message',
      messagePlaceholder: 'Location, timeline, indicative budget, main requirement...',
      submitNote:
        'The button opens your email client with a pre-filled message; nothing is sent automatically from the website.',
      projectOptions: [
        { value: 'construction', label: 'Construction and civil engineering' },
        { value: 'renovation', label: 'Renovation, fit-out and finishes' },
        { value: 'electrical', label: 'Electrical works and infrastructure' },
        { value: 'raw-materials', label: 'Materials and supplies procurement' },
        {
          value: 'industrial-services',
          label: 'Technical services, maintenance, industrial support',
        },
        { value: 'workforce', label: 'Skilled workforce' },
        { value: 'logistics', label: 'Logistics and transport' },
        { value: 'import-export', label: 'Import-export' },
        { value: 'other', label: 'Other requirement' },
      ],
    },
    mailto: {
      subjectPrefix: 'Project enquiry',
      greeting: `Hello ${brand},`,
      intro: 'I would like to contact you about a project.',
      nameLine: 'Full name',
      phoneLine: 'Phone',
      emailLine: 'Email',
      projectTypeLine: 'Project type',
      messageHeading: 'Message',
    },
  },
};
