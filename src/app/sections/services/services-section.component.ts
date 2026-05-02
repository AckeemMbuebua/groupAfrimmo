import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import type { OfferedServiceLine } from '../../shared/landing/landing.models';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './services-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSectionComponent {
  protected formatOrdinal(index: number): string {
    return (index + 1).toString().padStart(2, '0');
  }

  protected readonly services: readonly OfferedServiceLine[] = [
    { summary: 'Rénovation, habillage et finitions de bâtiments' },
    { summary: "Construction et réhabilitation d'infrastructures électriques" },
    { summary: 'Fourniture de matériaux et matières premières' },
    { summary: 'Services industriels, techniques et maintenance projet' },
    { summary: 'Mobilisation de main-d’œuvre qualifiée' },
  ];
}
