import type { SecondaryPagesContent } from '../site-content.model';
import { BRAND } from './brand';

export const FR_PAGES: SecondaryPagesContent = {
  realisations: {
    breadcrumb: 'Réalisations',
    eyebrow: 'Réalisations',
    title: 'Des réalisations concrètes pour illustrer nos périmètres d’intervention.',
    lead:
      'Fiches synthétiques : contexte, lieu, statut et périmètre d’intervention tel que défini au mandat. Les détails confidentiels restent accessibles sur demande lors d’un échange métier.',
    expertCtaEyebrow: 'Après les fiches projet',
    expertCtaLead:
      'Pour cadrer un besoin ou préciser le périmètre sur une référence, indiquez le nom du projet et le contexte dans votre message.',
    detail: {
      locationLabel: 'Lieu',
      scopeLabel: `Périmètre ${BRAND.legalName}`,
      backToList: 'Retour aux réalisations',
      scopeHeading: 'Périmètre mobilisé',
      outcomesHeading: 'Suivi et résultats mentionnés',
      fallbackDetail:
        'Le détail complet de cette référence est en cours de mise en ligne — nos équipes peuvent toutefois préparer une présentation adaptée sous NDA lors d’un premier échange métier.',
    },
  },
  actualites: {
    breadcrumb: 'Actualités',
    eyebrow: 'Éditorial',
    title: 'Actualités et analyses terrain',
    lead:
      'Analyses terrain, méthodes, décisions d’exécution et enseignements sur des programmes multi-sites. Pour un sujet sur mesure ou une prise de parole externe, contactez notre équipe.',
    readArticle: 'Lire l’article',
    backToList: 'Toutes les actualités',
  },
  carrieres: {
    breadcrumb: 'Carrières',
    eyebrow: 'Talents et terrain',
    title: 'Donner de l’échelle aux grands chantiers du continent',
    lead:
      'Nous recherchons des profils capables de lier cadence, conformité technique et présence client. Nos équipes conjuguent maîtrise d’œuvre industrielle et logistique opérationnelle : rejoindre Afrimmo, c’est travailler sur des programmes où chaque décision doit être claire et réactive.',
    pillars: [
      'Rigueur HSE et respect des équipes locales',
      'Autonomie sur site et coordination collective',
      'Sens commercial et clarté du reporting',
    ],
    opportunitiesTitle: 'Opportunités signalées',
    opportunitiesFlag: 'indicatif',
    opportunitiesLead:
      'Ces fiches constituent des postes représentatifs : précisez le code position dans votre prise de contact pour accélérer le tri lorsque vous postulez.',
    codeLabel: 'Code recrutement',
    sendCv: 'Envoyer votre CV',
    closingTextBefore:
      'Vous n’avez pas encore identifié de poste listé mais disposez de 15 ans d’expertise chantier ou de développement de programmes ? Mentionnez vos références géographiques préférées : nous créons régulièrement des rôles composites pour les dossiers critiques.',
    closingLink: 'Brief via le formulaire contact',
    closingTextAfter: 'après un premier échange téléphonique.',
    mailSubjectPrefix: 'Candidature spontanée / ',
  },
  mentionsLegales: {
    backHome: 'Retour à l’accueil',
    title: 'Mentions légales',
    intro:
      'Document d’information. Les données d’identification juridiques détaillées (RCCM, Nº d’impôt, capital social, etc.) pourront être complétées à partir des documents officiels de l’entreprise.',
    sections: [
      {
        heading: 'Éditeur du site',
        body:
          `Le site afrimmo.com est présenté sous la responsabilité du ${BRAND.legalName}. Les informations légales complémentaires seront précisées avec les documents officiels de l’entreprise.`,
      },
      {
        heading: 'Hébergement',
        body:
          'L’identité de l’hébergeur (nom, adresse, contact) sera précisée lorsque les informations contractuelles de mise en production seront définitives.',
      },
      {
        heading: 'Propriété intellectuelle',
        body:
          'Les éléments constitutifs du site (structure, textes, visuels, marques et logos lorsqu’ils sont utilisés comme tels) relèvent de la législation applicable sauf mentions explicites contraires ou droits tiers. Toute reproduction non autorisée est interdite.',
      },
      {
        heading: 'Contact',
        body: 'Pour toute question relative aux présentes mentions :',
      },
    ],
    lastUpdated: 'Dernière mise à jour : mai 2026',
  },
  politiqueConfidentialite: {
    backHome: 'Retour à l’accueil',
    title: 'Politique de confidentialité',
    intro:
      `Cette présentation résume les principes appliqués au traitement des données relatives au site vitrine du ${BRAND.legalName}. Elle pourra être affinée selon les obligations légales applicables et la politique interne du groupe.`,
    sections: [
      {
        heading: 'Données collectées',
        body:
          'Lorsque vous utilisez notre formulaire de contact ou nos coordonnées affichées, nous pouvons traiter : nom ou raison sociale, adresse e-mail, numéro de téléphone et contenu du message — dans la mesure strictement nécessaire à votre demande.',
      },
      {
        heading: 'Finalités & base légale',
        body:
          'Ces données sont utilisées pour répondre à vos sollicitations, préparer ou suivre une relation commerciale précontractuelle ou contractuelle, et assurer une communication de service proportionnée aux finalités poursuivies (intérêt légitime dans le cadre d’un site d’entreprise conforme aux usages).',
      },
      {
        heading: 'Conservation et destinataires',
        body:
          `Les messages sont traités par les personnes habilitées du ${BRAND.legalName} et, le cas échéant, par des sous-traitants techniques (messagerie, hébergement) situés conformément aux choix de sécurité et aux engagements contractuels applicables. Les durées de conservation suivent les règles internes métier et archivage.`,
      },
      {
        heading: 'Vos droits',
        body:
          'Selon les textes applicables (notamment en matière de protection des données personnelles), vous pouvez solliciter l’accès, la rectification, la limitation ou la suppression lorsque les conditions sont réunies, ou exercer vos droits auprès de l’autorité compétente. Pour nous contacter :',
      },
      {
        heading: 'Cookies',
        body:
          'Ce site vise dans sa version publique une utilisation des cookies uniquement lorsque techniquement nécessaire ou après consentement lorsque vous activerez des mesures ou intégrations tierces nécessitant un bandeau.',
      },
    ],
    lastUpdated: 'Dernière mise à jour : mai 2026',
  },
};
