import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import type { ContactProjectOption } from '../../shared/landing/landing.models';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  protected readonly phoneDisplay = '+243 899 450 037';
  protected readonly phoneHref = 'tel:+243899450037';
  protected readonly mailHref = 'mailto:contact@afrimmo.com';
  protected readonly mailDisplay = 'contact@afrimmo.com';

  protected readonly projectOptions: readonly ContactProjectOption[] = [
    { value: 'construction', label: 'Construction & génie civil' },
    { value: 'logistics', label: 'Logistique industrielle' },
    { value: 'import-export', label: 'Import - export' },
    { value: 'other', label: 'Autre besoin' },
  ];
}
