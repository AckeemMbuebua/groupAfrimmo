import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import type { MethodPhase } from '../../shared/landing/landing.models';

@Component({
  selector: 'app-method-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './method-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MethodSectionComponent {
  protected readonly phases: readonly MethodPhase[] = [
    {
      numberLabel: '01',
      title: 'Diagnostic & faisabilité',
      description:
        'Analyse des objectifs, contraintes, budgets, ressources, délais et risques terrain.',
    },
    {
      numberLabel: '02',
      title: 'Conception de la solution',
      description:
        "Planification, choix techniques, sélection des matériaux, équipes et circuits d'approvisionnement.",
    },
    {
      numberLabel: '03',
      title: 'Exécution & supervision',
      description:
        "Suivi de chantier, coordination des lots techniques, contrôle qualité et rapports d'avancement.",
    },
    {
      numberLabel: '04',
      title: 'Livraison & continuité',
      description:
        'Réception, levée des réserves, documentation et accompagnement après livraison.',
    },
  ];
}
