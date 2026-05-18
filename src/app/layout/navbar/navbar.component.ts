import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { injectLocaleContent } from '../../content/inject-locale-content';
import { LocaleSwitcherComponent } from './locale-switcher.component';
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from '../../shared/content/contact.data';
import type { NavMainEntry } from '../../shared/landing/landing.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink, LocaleSwitcherComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private readonly i18n = injectLocaleContent();

  protected readonly site = this.i18n.site;

  private readonly doc = inject(DOCUMENT);
  private lastFocusedElement: HTMLElement | null = null;

  private readonly menuContainer = viewChild<ElementRef<HTMLElement>>('menuContainer');
  private readonly menuToggleButton = viewChild<ElementRef<HTMLButtonElement>>('menuToggleButton');

  protected readonly menuOpen = signal(false);

  protected readonly isScrolled = signal(false);

  constructor() {
    this.onWindowScroll();

    effect((onCleanup) => {
      const open = this.menuOpen();
      this.doc.body.style.overflow = open ? 'hidden' : '';
      if (open) {
        queueMicrotask(() => this.focusFirstMenuItem());
      }
      onCleanup(() => {
        this.doc.body.style.overflow = '';
      });
    });
  }

  protected readonly phoneHref = SITE_PHONE_HREF;

  protected readonly phoneDisplay = SITE_PHONE_DISPLAY;

  protected onWindowScroll(): void {
    const y = this.doc.defaultView?.scrollY ?? 0;
    this.isScrolled.set(y > 40);
  }

  protected toggleMenu(): void {
    if (this.menuOpen()) {
      this.closeMenu();
      return;
    }
    this.openMenu();
  }

  protected openMenu(): void {
    const active = this.doc.activeElement;
    this.lastFocusedElement = active instanceof HTMLElement ? active : null;
    this.menuOpen.set(true);
  }

  protected closeMenu(restoreFocus = true): void {
    this.menuOpen.set(false);
    if (restoreFocus) {
      const target = this.menuToggleButton()?.nativeElement ?? this.lastFocusedElement;
      target?.focus();
    }
  }

  protected onMobileMenuKeydown(event: KeyboardEvent): void {
    if (!this.menuOpen()) {
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeMenu();
      return;
    }
    if (event.key !== 'Tab') {
      return;
    }

    const focusable = this.getFocusableElements();
    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }

    const currentIndex = focusable.indexOf(this.doc.activeElement as HTMLElement);
    if (event.shiftKey) {
      if (currentIndex <= 0) {
        event.preventDefault();
        focusable[focusable.length - 1]?.focus();
      }
      return;
    }

    if (currentIndex === -1 || currentIndex === focusable.length - 1) {
      event.preventDefault();
      focusable[0]?.focus();
    }
  }

  protected trackMain(_i: number, item: NavMainEntry): string {
    return item.kind === 'fragment' ? `f:${item.fragment}` : `r:${item.path}`;
  }

  private focusFirstMenuItem(): void {
    const first = this.getFocusableElements()[0];
    first?.focus();
  }

  private getFocusableElements(): HTMLElement[] {
    const host = this.menuContainer()?.nativeElement;
    if (!host) {
      return [];
    }
    const nodes = host.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    return Array.from(nodes).filter((item) => !item.hasAttribute('disabled'));
  }
}
