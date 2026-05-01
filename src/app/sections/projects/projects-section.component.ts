import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import type { ProjectCard } from '../../shared/landing/landing.models';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [NgClass, RevealDirective],
  templateUrl: './projects-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {
  protected readonly projects: readonly ProjectCard[] = [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop',
      imageAlt: 'Complexe résidentiel moderne',
      category: 'Résidentiel',
      title: 'Al Saad Apartments',
      description:
        '28 unités de luxe livrées avec une exigence forte sur finition et coordination.',
      wide: true,
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=900&auto=format&fit=crop',
      imageAlt: 'Bâtiment hospitalier',
      category: 'Santé',
      title: 'Hôpitaux district',
      wide: false,
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1531971589569-0d93759d744f?q=80&w=900&auto=format&fit=crop',
      imageAlt: 'Infrastructure industrielle',
      category: 'Industrie',
      title: 'Supervision & MEP',
      wide: false,
    },
  ];
}
