import type { SecondaryPagesContent } from '../site-content.model';

const brand = 'Groupe Afrimmo S.A.';

export const EN_PAGES: SecondaryPagesContent = {
  realisations: {
    breadcrumb: 'Projects',
    eyebrow: 'Projects',
    title: 'Concrete references illustrating our scopes of intervention.',
    lead:
      'Concise project sheets: context, location, status and scope of intervention as defined in the mandate. Confidential details remain available on request during a business discussion.',
    expertCtaEyebrow: 'After the project sheets',
    expertCtaLead:
      'To frame a need or clarify the scope of a reference, include the project name and context in your message.',
    detail: {
      locationLabel: 'Location',
      scopeLabel: `${brand} scope`,
      backToList: 'Back to projects',
      scopeHeading: 'Mobilised scope',
      outcomesHeading: 'Follow-up and stated outcomes',
      fallbackDetail:
        'The full detail of this reference is being prepared — our teams can nevertheless prepare a tailored presentation under NDA during an initial business discussion.',
    },
  },
  actualites: {
    breadcrumb: 'News',
    eyebrow: 'Editorial',
    title: 'News and field insights',
    lead:
      'Field analysis, methods, execution decisions and lessons learned from multi-site programmes. For a tailored topic or external contribution, contact our team.',
    readArticle: 'Read article',
    backToList: 'All news',
  },
  mentionsLegales: {
    backHome: 'Back to home',
    title: 'Legal notice',
    intro:
      'Information document. Detailed legal identification data (trade register, tax number, share capital, etc.) may be completed from the company’s official documents.',
    sections: [
      {
        heading: 'Website publisher',
        body:
          `The groupeafrimmo.com website is presented under the responsibility of ${brand}. Additional legal information will be specified using the company’s official documents.`,
      },
      {
        heading: 'Hosting',
        body:
          'The host identity (name, address, contact) will be specified once production hosting contractual information is final.',
      },
      {
        heading: 'Intellectual property',
        body:
          'The site components (structure, texts, visuals, marks and logos when used as such) are governed by applicable law unless explicit notices or third-party rights state otherwise. Any unauthorised reproduction is prohibited.',
      },
      {
        heading: 'Contact',
        body: 'For any question regarding this notice:',
      },
    ],
    lastUpdated: 'Last updated: May 2026',
  },
  politiqueConfidentialite: {
    backHome: 'Back to home',
    title: 'Privacy policy',
    intro:
      `This presentation summarises the principles applied to data processing relating to the ${brand} showcase website. It may be refined according to applicable legal obligations and the group’s internal policy.`,
    sections: [
      {
        heading: 'Data collected',
        body:
          'When you use our contact form or the contact details displayed on the site, we may process: name or company name, email address, phone number and message content — only to the extent strictly necessary for your request.',
      },
      {
        heading: 'Purposes & legal basis',
        body:
          'This data is used to respond to your requests, prepare or follow a pre-contractual or contractual business relationship, and provide service communications proportionate to the intended purposes (legitimate interest in the context of a standard corporate website).',
      },
      {
        heading: 'Retention and recipients',
        body:
          `Messages are handled by authorised people at ${brand} and, where applicable, by technical processors (email, hosting) located in accordance with applicable security choices and contractual commitments. Retention periods follow internal business and archiving rules.`,
      },
      {
        heading: 'Your rights',
        body:
          'Depending on applicable texts, especially personal data protection rules, you may request access, rectification, restriction or deletion when the conditions are met, or exercise your rights with the competent authority. To contact us:',
      },
      {
        heading: 'Cookies',
        body:
          'In its public version, this site aims to use cookies only when technically necessary, or after consent if measurements or third-party integrations requiring a banner are activated.',
      },
    ],
    lastUpdated: 'Last updated: May 2026',
  },
};
