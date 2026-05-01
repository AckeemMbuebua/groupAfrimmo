import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-demarche-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './demarche-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemarcheSectionComponent {
  protected readonly approachItems: readonly string[] = [
    'Une analyse précise des besoins clients',
    'Des solutions personnalisées',
    'Une exécution rigoureuse',
    'Une culture de résultats',
  ];

  protected readonly strengthItems: readonly string[] = [
    'Expertise multisectorielle',
    'Capacité à gérer des projets complexes',
    'Réseau de partenaires locaux et internationaux',
    'Adaptabilité aux besoins du marché',
  ];
}
