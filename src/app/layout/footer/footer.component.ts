import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { FooterNavLink } from '../../shared/landing/landing.models';
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

  protected readonly phoneHref = 'tel:+243899450037';

  protected readonly mailHref = 'mailto:contact@afrimmo.com';

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
