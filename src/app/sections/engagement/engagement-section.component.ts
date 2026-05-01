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
    'Le Groupe Afrimmo S.A. collabore avec des partenaires locaux et internationaux, renforçant sa capacité à répondre efficacement aux projets d’envergure.';

  protected readonly innovationIntro =
    'Le groupe intègre des approches innovantes dans la conception et la réalisation de ses projets afin d’améliorer la qualité, l’efficacité et la durabilité de ses interventions.';

  protected readonly innovationPillars: readonly string[] = [
    'Techniques modernes de construction',
    'Outils de gestion optimisés',
    'Adaptation constante aux évolutions du marché',
  ];

  protected readonly innovationOutro =
    'Cette démarche permet de proposer des solutions performantes, fiables et adaptées aux exigences des clients.';

  protected readonly csrIntro =
    'L’entreprise s’engage dans des initiatives sociales concrètes sur le long terme :';

  protected readonly csrPillars: readonly string[] = [
    'Développement communautaire',
    'Soutien à l’éducation',
    'Protection de l’environnement',
  ];
}
