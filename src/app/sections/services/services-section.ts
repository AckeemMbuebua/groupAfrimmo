import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { injectLocaleContent } from '../../content/inject-locale-content';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './services-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSection {
  protected readonly home = injectLocaleContent().home;

  protected formatOrdinal(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
