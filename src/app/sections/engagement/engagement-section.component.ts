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
    'Groupe Afrimmo S.A. s’appuie sur des partenaires locaux et internationaux pour renforcer la capacité d’exécution, sécuriser les approvisionnements et répondre aux projets d’envergure.';

  protected readonly innovationIntro =
    'Le groupe intègre des méthodes de conception, de planification et de suivi qui améliorent la qualité, l’efficacité et la durabilité de ses interventions.';

  protected readonly innovationPillars: readonly string[] = [
    'Techniques modernes de construction',
    'Outils de gestion optimisés',
    'Adaptation constante aux évolutions du marché',
  ];

  protected readonly innovationOutro =
    'Cette démarche permet de livrer des solutions fiables, mesurables et adaptées aux exigences du client.';

  protected readonly csrIntro =
    'L’entreprise s’engage dans des initiatives sociales concrètes sur le long terme :';

  protected readonly csrPillars: readonly string[] = [
    'Développement communautaire',
    'Soutien à l’éducation',
    'Protection de l’environnement',
  ];
}
