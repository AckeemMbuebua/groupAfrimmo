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
      imageAlt: 'Engin de chantier sur un site de construction',
      numberLabel: '01',
      title: 'Construction & génie civil',
      description:
        'Bâtiments, infrastructures routières, ouvrages techniques et coordination des travaux complexes.',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
      imageAlt: 'Entrepôt logistique industriel',
      numberLabel: '02',
      title: 'Logistique industrielle',
      description:
        'Transport, approvisionnement, coordination de flux et disponibilité des ressources critiques.',
      transitionDelaySeconds: 0.08,
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop',
      imageAlt: 'Containers et commerce international',
      numberLabel: '03',
      title: 'Import - export',
      description:
        'Ciment, fer à béton, bois, agrégats et fournitures techniques pour projets publics et privés.',
      transitionDelaySeconds: 0.16,
    },
  ];
}
