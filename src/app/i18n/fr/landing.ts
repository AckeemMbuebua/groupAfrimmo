import { HOME_FR } from '../../content/home.fr';
import type { LandingContent } from '../site-content.model';

/** Données landing FR — source canonique : `content/home.fr.ts`. */
export const FR_LANDING: LandingContent = {
  faq: HOME_FR.faq.items,
  services: HOME_FR.services.lines,
  stats: {
    sectionTitle: HOME_FR.stats.title,
    sectionLead: HOME_FR.stats.lead,
    items: HOME_FR.stats.items,
    capabilityLabels: HOME_FR.stats.capabilityLabels,
  },
  method: HOME_FR.method.phases,
  expertise: HOME_FR.expertise.cards,
  references: HOME_FR.references.items,
};
