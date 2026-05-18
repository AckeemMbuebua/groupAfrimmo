import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { FooterNavLink } from '../../shared/landing/landing.models';
import { injectLocaleContent } from '../../content/inject-locale-content';
import {
  SITE_EMAIL_DISPLAY,
  SITE_EMAIL_HREF,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_HREF,
  SITE_WHATSAPP_HREF,
} from '../../shared/content/contact.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly i18n = injectLocaleContent();

  protected readonly site = this.i18n.site;

  protected readonly footerLinks = computed(() => this.site().navigation.footer);

  protected readonly legalLinks = computed(() =>
    this.footerLinks().filter(
      (item) =>
        item.kind === 'route' &&
        (item.path === '/mentions-legales' ||
          item.path === '/politique-de-confidentialite'),
    ),
  );

  protected readonly phoneDisplay = SITE_PHONE_DISPLAY;

  protected readonly phoneHref = SITE_PHONE_HREF;

  protected readonly whatsappHref = SITE_WHATSAPP_HREF;

  protected readonly mailHref = SITE_EMAIL_HREF;

  protected readonly mailDisplay = SITE_EMAIL_DISPLAY;

  protected itemLabel(item: FooterNavLink): string {
    if (item.kind === 'homeFragment') {
      return `f:${item.fragment}`;
    }
    if (item.kind === 'route') {
      return `r:${item.path}`;
    }
    return `e:${item.href}`;
  }
}
