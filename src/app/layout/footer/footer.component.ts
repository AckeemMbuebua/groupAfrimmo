import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { FooterNavLink } from '../../shared/landing/landing.models';
import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_HREF,
  SITE_WHATSAPP_HREF,
} from '../../shared/content/contact.data';
import { SITE_FOOTER_NAV } from '../../shared/content/site-nav.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly slogan =
    'Construction, génie civil, infrastructures, logistique et approvisionnement — Groupe Afrimmo S.A.';

  protected readonly phoneDisplay = SITE_PHONE_DISPLAY;

  protected readonly phoneHref = SITE_PHONE_HREF;

  protected readonly whatsappHref = SITE_WHATSAPP_HREF;

  protected readonly mailHref = 'mailto:Info@groupeafrimmo.com';

  protected readonly footerLinks: readonly FooterNavLink[] = SITE_FOOTER_NAV;

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
