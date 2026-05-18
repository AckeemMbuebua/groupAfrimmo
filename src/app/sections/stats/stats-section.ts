import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import type { StatItem } from '../../shared/landing/landing.models';
import { CounterDirective } from '../../shared/directives/counter.directive';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { injectLocaleContent } from '../../content/inject-locale-content';

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [RevealDirective, CounterDirective],
  templateUrl: './stats-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsSection {
  private readonly content = injectLocaleContent();

  protected readonly stats = computed(() => this.content.home().stats);

  /** Valeur numérique pour l’animation de compteur. */
  protected statTarget(stat: StatItem): number {
    const parsed = Number.parseInt(stat.value, 10);
    return Number.isFinite(parsed) ? parsed : 0;
  }
}
