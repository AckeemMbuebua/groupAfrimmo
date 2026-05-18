import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { injectLocaleContent } from '../../content/inject-locale-content';

@Component({
  selector: 'app-method-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './method-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MethodSection {
  protected readonly home = injectLocaleContent().home;
}
