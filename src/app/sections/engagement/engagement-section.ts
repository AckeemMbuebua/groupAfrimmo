import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { injectLocaleContent } from '../../content/inject-locale-content';

@Component({
  selector: 'app-engagement-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './engagement-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EngagementSection {
  protected readonly home = injectLocaleContent().home;
}
