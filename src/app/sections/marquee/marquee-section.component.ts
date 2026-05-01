import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-marquee-section',
  standalone: true,
  templateUrl: './marquee-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarqueeSectionComponent {
  /** Périmètres métier alignés plaquette PDF (boucle marquee). */
  protected readonly labels = [
    'Génie civil & infrastructures',
    'Industrie & mines',
    'Logistique & transport',
    'Import-export & matériaux',
    'Services techniques',
    'Main-d’œuvre qualifiée',
  ] as const;

  protected readonly trackIndices = [0, 1] as const;
}
