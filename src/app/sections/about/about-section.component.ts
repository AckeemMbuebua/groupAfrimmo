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
    'Groupe Afrimmo S.A. est une entreprise multisectorielle basée en République démocratique du Congo, organisée pour exécuter des projets de construction, d’infrastructures, de logistique et d’approvisionnement avec une même exigence de terrain.';

  protected readonly bullets: readonly string[] = [
    'Nous accompagnons maîtres d’ouvrage, partenaires privés et acteurs institutionnels sur des périmètres où la coordination, les délais et la conformité sont critiques.',
    'Notre valeur tient à la combinaison d’une présence locale, d’un réseau de partenaires fiables et de standards d’exécution adaptés aux projets complexes.',
  ];
}
