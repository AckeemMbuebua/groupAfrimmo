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

    const mailto = this.home().contact.mailto;
    const subject = `${mailto.subjectPrefix} - ${name || this.site().shared.brand.legalName}`;
    const lines = [
      mailto.greeting,
      '',
      mailto.intro,
      '',
      `${mailto.nameLine} : ${name}`,
      `${mailto.phoneLine} : ${phone}`,
    ];
    if (email) {
      lines.push(`${mailto.emailLine} : ${email}`);
    }
    lines.push(
      `${mailto.projectTypeLine} : ${projectType}`,
      '',
      `${mailto.messageHeading} :`,
      message,
    );

    const body = lines.join('\n');
    const mailtoUrl = `${this.mailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_self');
  }
}
