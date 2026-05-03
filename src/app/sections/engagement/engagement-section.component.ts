import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-engagement-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './engagement-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EngagementSectionComponent {
  protected readonly partnersLead =
    'Groupe Afrimmo S.A. inscrit ses interventions dans une logique de qualité, d’adaptation au contexte local et de mobilisation de partenaires fiables selon les besoins du projet.';

  protected readonly qualityIntro =
    'La démarche qualité repose sur des méthodes de planification, de suivi terrain et de contrôle des livrables — adaptées au périmètre mandaté et aux contraintes du chantier.';

  protected readonly qualityPillars: readonly string[] = [
    'Coordination lisible entre maître d’ouvrage, équipes et fournisseurs',
    'Points de contrôle aux jalons critiques du calendrier',
    'Reporting proportionné à la sensibilité du projet',
  ];

  protected readonly responsibilityLead =
    'L’entreprise veille à intégrer des pratiques responsables dans la conduite de ses opérations : respect des équipes, attention aux communautés, gestion raisonnée des ressources et adaptation aux contraintes environnementales. Les actions communautaires, éducatives ou environnementales peuvent être structurées avec les parties prenantes lorsque le cadre du projet le permet.';
}
