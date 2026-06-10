import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { injectLocaleContent } from '../../content/inject-locale-content';
import {
  SITE_EMAIL_DISPLAY,
  SITE_EMAIL_HREF,
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
  private readonly content = injectLocaleContent();

  protected readonly home = this.content.home;

  protected readonly site = this.content.site;

  protected readonly phoneDisplay = SITE_PHONE_DISPLAY;
  protected readonly phoneHref = SITE_PHONE_HREF;
  protected readonly whatsappHref = SITE_WHATSAPP_HREF;
  protected readonly mailHref = SITE_EMAIL_HREF;
  protected readonly mailDisplay = SITE_EMAIL_DISPLAY;

  protected submitByWhatsApp(event: Event): void {
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

    const copy = this.home().contact.mailto;
    const lines = [
      copy.greeting,
      '',
      copy.intro,
      '',
      `${copy.nameLine} : ${name}`,
      `${copy.phoneLine} : ${phone}`,
    ];
    if (email) {
      lines.push(`${copy.emailLine} : ${email}`);
    }
    lines.push(
      `${copy.projectTypeLine} : ${projectType}`,
      '',
      `${copy.messageHeading} :`,
      message,
    );

    const whatsappUrl = `${this.whatsappHref}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }
}
