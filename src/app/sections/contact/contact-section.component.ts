import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import type { ContactProjectOption } from '../../shared/landing/landing.models';
import { CTA_LABELS } from '../../shared/content/cta-labels';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  protected readonly cta = CTA_LABELS;

  protected readonly phoneDisplay = '+243 899 450 037';
  protected readonly phoneHref = 'tel:+243899450037';
  protected readonly whatsappHref = 'https://wa.me/243899450037';
  protected readonly mailHref = 'mailto:Info@groupeafrimmo.com';
  protected readonly mailDisplay = 'Info@groupeafrimmo.com';

  protected readonly projectOptions: readonly ContactProjectOption[] = [
    { value: 'construction', label: 'Construction & génie civil' },
    { value: 'renovation', label: 'Rénovation, second œuvre et finitions' },
    { value: 'electrical', label: 'Ouvrages et infrastructures électriques' },
    { value: 'raw-materials', label: 'Approvisionnement matériaux et fournitures' },
    { value: 'industrial-services', label: 'Services techniques, maintenance, appui industriel' },
    { value: 'workforce', label: 'Main-d’œuvre qualifiée' },
    { value: 'logistics', label: 'Logistique & transport' },
    { value: 'import-export', label: 'Import-export' },
    { value: 'other', label: 'Autre besoin' },
  ];
}
