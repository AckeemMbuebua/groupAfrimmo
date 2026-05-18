import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import type { ContactProjectOption } from '../../shared/landing/landing.models';
import { CTA_LABELS } from '../../shared/content/cta-labels';
import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_HREF,
  SITE_WHATSAPP_HREF,
} from '../../shared/content/contact.data';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  protected readonly cta = CTA_LABELS;

  protected readonly phoneDisplay = SITE_PHONE_DISPLAY;
  protected readonly phoneHref = SITE_PHONE_HREF;
  protected readonly whatsappHref = SITE_WHATSAPP_HREF;
  protected readonly mailHref = 'mailto:Info@groupeafrimmo.com';
  protected readonly mailDisplay = 'Info@groupeafrimmo.com';

  protected readonly projectOptions: readonly ContactProjectOption[] = [
    { value: 'construction', label: 'Construction et génie civil' },
    { value: 'renovation', label: 'Rénovation, seconde œuvre et finitions' },
    { value: 'electrical', label: 'Ouvrages et infrastructures électriques' },
    { value: 'raw-materials', label: 'Approvisionnement matériaux et fournitures' },
    { value: 'industrial-services', label: 'Services techniques, maintenance, appui industriel' },
    { value: 'workforce', label: 'Main-d’œuvre qualifiée' },
    { value: 'logistics', label: 'Logistique et transport' },
    { value: 'import-export', label: 'Import-export' },
    { value: 'other', label: 'Autre besoin' },
  ];

  protected submitByEmail(event: Event): void {
    event.preventDefault();

    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) {
      return;
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const projectType = String(data.get('projectType') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const subject = `Demande projet - ${name || 'Groupe Afrimmo'}`;
    const lines = [
      'Bonjour Groupe Afrimmo S.A.,',
      '',
      'Je souhaite vous contacter au sujet d’un projet.',
      '',
      `Nom complet : ${name}`,
      `Téléphone : ${phone}`,
    ];
    if (email) {
      lines.push(`E-mail : ${email}`);
    }
    lines.push(
      `Type de projet : ${projectType}`,
      '',
      'Message :',
      message,
    );

    const body = lines.join('\n');

    const mailtoUrl = `${this.mailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_self');
  }
}
