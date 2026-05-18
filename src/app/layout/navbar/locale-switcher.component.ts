import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { injectLocaleContent } from '../../content/inject-locale-content';
import type { AppLocale } from '../../content/locale';

@Component({
  selector: 'app-locale-switcher',
  standalone: true,
  templateUrl: './locale-switcher.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocaleSwitcherComponent {
  /** `header` : topbar desktop ; `drawer` : menu mobile pleine largeur. */
  readonly variant = input<'header' | 'drawer'>('header');

  private readonly i18n = injectLocaleContent();
  private readonly host = inject(ElementRef<HTMLElement>);
  protected readonly site = this.i18n.site;
  protected readonly currentLocale = this.i18n.locale;

  protected readonly open = signal(false);

  protected readonly localeOptions = computed(() => {
    const labels = this.site().ui.locale;
    return [
      { code: 'fr' as const, short: 'FR', label: labels.fr },
      { code: 'en' as const, short: 'EN', label: labels.en },
    ];
  });

  protected readonly activeOption = computed(() => {
    const code = this.currentLocale();
    return this.localeOptions().find((opt) => opt.code === code) ?? this.localeOptions()[0];
  });

  protected toggleOpen(): void {
    this.open.update((value) => !value);
  }

  protected selectLocale(locale: AppLocale): void {
    this.i18n.setLocale(locale);
    this.open.set(false);
  }

  protected isActive(code: AppLocale): boolean {
    return this.currentLocale() === code;
  }

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: MouseEvent): void {
    if (!this.open()) {
      return;
    }
    const target = event.target;
    if (target instanceof Node && this.host.nativeElement.contains(target)) {
      return;
    }
    this.open.set(false);
  }

  @HostListener('document:keydown', ['$event'])
  protected onDocumentKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.open()) {
      event.preventDefault();
      this.open.set(false);
      const trigger = this.host.nativeElement.querySelector('[data-locale-trigger]');
      if (trigger instanceof HTMLButtonElement) {
        trigger.focus();
      }
    }
  }
}
