import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import {
  LANDING_STATS,
  STAT_CAPABILITY_LABELS,
} from '../../shared/content/stats.data';

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './stats-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsSectionComponent {
  protected readonly stats = LANDING_STATS;

  protected readonly capabilityLabels = STAT_CAPABILITY_LABELS;
}
