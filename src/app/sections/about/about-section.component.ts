import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {
  protected readonly leadParagraph =
    'Bienvenue au Groupe Afrimmo S.A., une entreprise polyvalente et innovante opérant en République démocratique du Congo et à l’international.';

  protected readonly bullets: readonly string[] = [
    'Depuis notre création, nous nous engageons à offrir des solutions complètes et diversifiées pour répondre aux besoins de nos clients dans plusieurs secteurs clés de l’économie.',
    'Nous croyons fermement en l’importance de l’innovation et de la qualité pour stimuler le développement et la croissance durable.',
  ];
}
