import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { METHOD_PHASES } from '../../shared/content/method.data';

@Component({
  selector: 'app-method-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './method-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MethodSectionComponent {
  protected readonly phases = METHOD_PHASES;
}
