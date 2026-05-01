import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-marquee-section',
  standalone: true,
  templateUrl: './marquee-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarqueeSectionComponent {
  protected readonly labels = [
    'Génie civil',
    'Import-export',
    'Logistique',
    'Approvisionnement',
  ] as const;

  protected readonly trackIndices = [0, 1] as const;
}
