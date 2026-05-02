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
    'Analyse précise du besoin, du site et des contraintes',
    'Solution calibrée sur le budget, les délais et les ressources',
    'Exécution suivie par points de contrôle terrain',
    'Culture du résultat et reporting exploitable',
  ];

  protected readonly strengthItems: readonly string[] = [
    'Expertise multisectorielle',
    'Capacité à gérer des projets complexes',
    'Réseau de partenaires locaux et internationaux',
    'Adaptabilité aux besoins du marché',
  ];
}
