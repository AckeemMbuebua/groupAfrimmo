import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import type { ProfileHighlight } from '../../shared/landing/landing.models';

@Component({
  selector: 'app-profile-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './profile-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSectionComponent {
  protected readonly mainImageSrc =
    'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1400&auto=format&fit=crop';
  protected readonly mainImageAlt = 'Équipe de construction sur un chantier';

  protected readonly pillars: readonly ProfileHighlight[] = [
    {
      title: 'Mission',
      body:
        'Fournir des solutions fiables, personnalisées et adaptées aux contraintes du terrain.',
      borderClass: 'border-red-cmt',
    },
    {
      title: 'Vision',
      body:
        'Devenir une référence en construction, import-export et logistique industrielle.',
      borderClass: 'border-dark-cmt',
    },
  ];

  protected readonly commitments: readonly string[] = [
    'Matériaux certifiés',
    'Contrôle qualité',
    'Équipes qualifiées',
    'Délais maîtrisés',
  ];
}
