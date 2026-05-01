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

  protected readonly navLinks: readonly NavLink[] = [
    { href: '#profil', label: 'Profil' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#realisations', label: 'Réalisations' },
    { href: '#temoignages', label: 'Témoignages' },
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
