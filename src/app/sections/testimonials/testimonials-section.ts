import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { injectLocaleContent } from '../../content/inject-locale-content';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './testimonials-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsSection {
  protected readonly home = injectLocaleContent().home;
}
