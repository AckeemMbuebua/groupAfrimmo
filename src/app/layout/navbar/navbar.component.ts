import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { NavLink } from '../../shared/landing/landing.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected readonly menuOpen = signal(false);

  /**
   * Menu court : détail du parcours (profil, services, méthode, témoignages…)
   * reste accessible via défilement et liens du pied de page.
   */
  protected readonly navLinks: readonly NavLink[] = [
    { href: '#a-propos', label: 'À propos' },
    { href: '#expertise', label: 'Expertises' },
    { href: '#realisations', label: 'Réalisations' },
    { href: '#contact', label: 'Contact' },
  ];

  protected readonly phoneHref = 'tel:+243899450037';

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
