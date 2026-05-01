import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import type {
  ProfileHighlight,
  ValuePillar,
} from '../../shared/landing/landing.models';

@Component({
  selector: 'app-profile-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './profile-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSectionComponent {
  /** même host Unsplash déjà utilisé côté réalisations (meilleure fiabilité hotlink que l’URL précédente). */
  protected readonly mainImageSrc =
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=82';
  protected readonly mainImageAlt =
    'Chantier avec grues et ouvrages — coordination exécution et sécurité opérationnelle';

  protected readonly pillars: readonly ProfileHighlight[] = [
    {
      title: 'Mission',
      body:
        'Fournir des produits et des services de haute qualité, tout en favorisant le développement économique et social dans toutes les régions où nous opérons. Viser à être un partenaire de confiance pour nos clients, avec des solutions intégrées et personnalisées.',
      borderClass: 'border-red-cmt',
    },
    {
      title: 'Vision',
      body:
        "Devenir un leader incontournable dans les secteurs de l'import-export, des technologies de l'information et de la construction, et au-delà. Être reconnus pour l'excellence, la fiabilité et une capacité d'innovation constante au service des besoins clients.",
      borderClass: 'border-dark-cmt',
    },
  ];

  protected readonly values: readonly ValuePillar[] = [
    { title: 'Qualité', body: 'Respect des standards élevés.' },
    {
      title: 'Innovation',
      body: 'Solutions modernes et efficaces.',
    },
    {
      title: 'Engagement',
      body: 'Satisfaction client prioritaire.',
    },
    {
      title: 'Fiabilité',
      body: 'Respect des délais et des engagements.',
    },
  ];
}
