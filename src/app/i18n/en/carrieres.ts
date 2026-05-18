import type { CarrieresContent } from '../site-content.model';
import type { JobPosting } from '../../shared/content/content.models';

const jobs: readonly JobPosting[] = [
  {
    id: 'ingenieur-chantier',
    title: 'Site engineer / project manager (M/F)',
    contract: 'Permanent · mobility East Africa / DRC',
    location: 'Kinshasa · field missions',
    snippet:
      'Execution management, design-team / contractor interfaces, client reporting. Building / civil engineering profile, multi-package experience.',
  },
  {
    id: 'coordinateur-logistique',
    title: 'Operations logistics coordinator (M/F)',
    contract: 'Permanent',
    location: 'Kinshasa',
    snippet:
      'Materials flow organisation, import / customs coordination with partners, support for industrial and retail programmes.',
  },
  {
    id: 'business-developer',
    title: 'Business development & partnerships lead (M/F)',
    contract: 'Permanent',
    location: 'Hybrid',
    snippet:
      'B2B development, integrated construction / logistics proposals, institutional and key-account relationships.',
  },
];

export const EN_CARRIERES: CarrieresContent = { jobs };
