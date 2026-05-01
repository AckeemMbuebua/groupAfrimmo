import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import type { ExpertiseCard } from '../../shared/landing/landing.models';

@Component({
  selector: 'app-expertise-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './expertise-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpertiseSectionComponent {
  protected readonly cards: readonly ExpertiseCard[] = [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop',
      imageAlt: 'Engins et ouvrages de génie civil',
      numberLabel: '01',
      title: 'Construction & génie civil',
      description:
        'Bâtiments publics et privés, infrastructures routières, projets industriels et miniers.',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
      imageAlt: 'Logistique et transport de marchandises',
      numberLabel: '02',
      title: 'Logistique & transport',
      description:
        'Transport de marchandises, logistique industrielle et coordination des approvisionnements.',
      transitionDelaySeconds: 0.08,
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop',
      imageAlt: 'Commerce international et matériaux',
      numberLabel: '03',
      title: 'Import – export',
      description:
        'Fourniture de matériaux, matières premières et développement du commerce international.',
      transitionDelaySeconds: 0.16,
    },
  ];
}
