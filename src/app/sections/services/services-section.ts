import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import type { OfferedServiceLine } from '../../shared/landing/landing.models';
import { SERVICES_LINES } from '../../shared/content/services.data';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './services-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSection {
  protected formatOrdinal(index: number): string {
    return (index + 1).toString().padStart(2, '0');
  }

  protected readonly services: readonly OfferedServiceLine[] = SERVICES_LINES;
}
