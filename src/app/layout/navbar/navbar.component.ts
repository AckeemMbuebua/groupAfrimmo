import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

/** Lien principal (4 max visibles) ou entrée du menu « Plus ». */
export type NavMainEntry =
  | { readonly kind: 'fragment'; readonly label: string; readonly fragment: string }
  | { readonly kind: 'route'; readonly label: string; readonly path: string };

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private readonly moreMenuRoot = viewChild<ElementRef<HTMLElement>>('moreMenuRoot');

  protected readonly menuOpen = signal(false);

  /** Navigation principale épurée. */
  protected readonly mainLinks: readonly NavMainEntry[] = [
    { kind: 'fragment', label: 'Accueil', fragment: 'home' },
    { kind: 'fragment', label: 'Profil', fragment: 'profil' },
    { kind: 'route', label: 'Réalisations', path: '/realisations' },
    { kind: 'fragment', label: 'Contact', fragment: 'contact' },
  ];

  /** Sections secondaires regroupées. */
  protected readonly moreLinks: readonly NavMainEntry[] = [
    { kind: 'fragment', label: 'À propos', fragment: 'a-propos' },
    { kind: 'fragment', label: 'Expertises', fragment: 'expertise' },
    { kind: 'route', label: 'Actualités', path: '/actualites' },
    { kind: 'route', label: 'Carrières', path: '/carrieres' },
    { kind: 'fragment', label: 'Réalisations (aperçu)', fragment: 'realisations' },
    { kind: 'fragment', label: 'Services', fragment: 'services' },
    { kind: 'fragment', label: 'Méthode', fragment: 'methode' },
    { kind: 'fragment', label: 'Témoignages', fragment: 'temoignages' },
    { kind: 'fragment', label: 'FAQ', fragment: 'faq' },
  ];

  protected readonly moreOpen = signal(false);

  protected readonly phoneHref = 'tel:+243899450037';

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
    this.moreOpen.set(false);
  }

  protected toggleMore(event?: Event): void {
    event?.stopPropagation();
    this.moreOpen.update((v) => !v);
  }

  protected closeMore(): void {
    this.moreOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.moreOpen()) {
      return;
    }
    const root = this.moreMenuRoot()?.nativeElement;
    const target = event.target as Node | null;
    if (root && target && root.contains(target)) {
      return;
    }
    this.moreOpen.set(false);
  }

  protected trackMain(_i: number, item: NavMainEntry): string {
    return item.kind === 'fragment' ? `f:${item.fragment}` : `r:${item.path}`;
  }

  protected trackMore(_i: number, item: NavMainEntry): string {
    return item.kind === 'fragment' ? `f:${item.fragment}` : `r:${item.path}`;
  }
}
