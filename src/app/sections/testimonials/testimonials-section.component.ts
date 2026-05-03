import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SELECTED_REFERENCES } from '../../shared/content/references.data';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './testimonials-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsSectionComponent {
  protected readonly references = SELECTED_REFERENCES;
}
