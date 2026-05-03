import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_MAIN_NAV } from '../../shared/content/site-nav.data';
import type { NavMainEntry } from '../../shared/landing/landing.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected readonly menuOpen = signal(false);

  /** Navigation principale (5 entrées, sans menu « Plus » sur desktop). */
  protected readonly mainLinks: readonly NavMainEntry[] = SITE_MAIN_NAV;

  protected readonly phoneHref = 'tel:+243899450037';

  protected readonly phoneDisplay = '+243 899 450 037';

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected trackMain(_i: number, item: NavMainEntry): string {
    return item.kind === 'fragment' ? `f:${item.fragment}` : `r:${item.path}`;
  }
}
