import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterDirective } from '../../shared/directives/counter.directive';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import type { StatItem } from '../../shared/landing/landing.models';

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [CounterDirective, RevealDirective],
  templateUrl: './stats-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsSectionComponent {
  protected readonly stats: readonly StatItem[] = [
    {
      target: 10,
      suffix: '+',
      label: 'Hôpitaux construits',
    },
    {
      target: 28,
      suffix: '',
      label: 'Unités de luxe',
      transitionDelaySeconds: 0.08,
    },
    {
      target: 2026,
      suffix: '',
      label: 'Vision durable',
      transitionDelaySeconds: 0.16,
    },
    {
      target: 100,
      suffix: '%',
      label: 'Engagement qualité',
      transitionDelaySeconds: 0.24,
    },
  ];
}
