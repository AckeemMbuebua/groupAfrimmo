import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { NavbarPrimaryLink } from '../../shared/landing/landing.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected readonly menuOpen = signal(false);

  /**
   * Menu court pour mobile ; le détail landing (profil, services, témoignages…)
   * reste largement disponible depuis le pied de page.
   */
  protected readonly navLinks: readonly NavbarPrimaryLink[] = [
    { kind: 'home', label: 'À propos', fragment: 'a-propos' },
    { kind: 'home', label: 'Expertises', fragment: 'expertise' },
    { kind: 'route', label: 'Actualités', path: '/actualites' },
    { kind: 'route', label: 'Réalisations', path: '/realisations' },
    { kind: 'route', label: 'Carrières', path: '/carrieres' },
    { kind: 'home', label: 'Contact', fragment: 'contact' },
  ];

  protected navTrack(_index: number, link: NavbarPrimaryLink): string {
    return link.kind === 'home' ? `home:${link.fragment}` : `route:${link.path}`;
  }

  protected readonly phoneHref = 'tel:+243899450037';

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
