import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { FooterNavLink } from '../../shared/landing/landing.models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly slogan =
    'Excellence en génie civil, logistique et industrie.';

  protected readonly phoneHref = 'tel:+243899450037';

  protected readonly mailHref = 'mailto:contact@afrimmo.com';

  protected readonly quickLinks: readonly FooterNavLink[] = [
    { kind: 'homeFragment', label: 'Accueil', fragment: 'home' },
    { kind: 'homeFragment', label: 'Profil', fragment: 'profil' },
    { kind: 'route', label: 'Réalisations', path: '/realisations' },
    { kind: 'route', label: 'Actualités', path: '/actualites' },
    { kind: 'homeFragment', label: 'Contact', fragment: 'contact' },
  ];

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
