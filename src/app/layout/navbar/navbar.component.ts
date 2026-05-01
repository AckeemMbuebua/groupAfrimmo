import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { NavLink } from '../../shared/landing/landing.models';

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
   * Menu court : détail du parcours (profil, services, méthode, témoignages…)
   * reste accessible via défilement et liens du pied de page.
   */
  protected readonly navLinks: readonly NavLink[] = [
    { label: 'À propos', fragment: 'a-propos' },
    { label: 'Expertises', fragment: 'expertise' },
    { label: 'Réalisations', fragment: 'realisations' },
    { label: 'Contact', fragment: 'contact' },
  ];

  protected readonly phoneHref = 'tel:+243899450037';

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
