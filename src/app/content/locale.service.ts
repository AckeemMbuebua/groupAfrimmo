import { DOCUMENT } from '@angular/common';
import {
  Injectable,
  computed,
  inject,
  signal,
  type Signal,
} from '@angular/core';
import { getContent } from '../i18n/get-content';
import type { SiteContent } from '../i18n/site-content.model';
import { getHomeContent } from './get-home-content';
import type { HomeContent } from './home-content.type';
import {
  type AppLocale,
  persistLocale,
  resolveInitialLocale,
} from './locale';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly doc = inject(DOCUMENT);

  private readonly localeState = signal<AppLocale>(resolveInitialLocale());

  constructor() {
    this.doc.documentElement.lang = this.localeState();
  }

  /** Locale active (fr | en). */
  readonly locale: Signal<AppLocale> = this.localeState.asReadonly();

  /** Contenu statique de la page d’accueil pour la locale active. */
  readonly home: Signal<HomeContent> = computed(() =>
    getHomeContent(this.localeState()),
  );

  /** Contenu global (navigation, CTA site, SEO secondaires…) pour la locale active. */
  readonly site: Signal<SiteContent> = computed(() =>
    getContent(this.localeState()),
  );

  setLocale(locale: AppLocale): void {
    if (this.localeState() === locale) {
      return;
    }
    this.localeState.set(locale);
    persistLocale(locale);
    this.doc.documentElement.lang = locale;
  }

  toggleLocale(): void {
    this.setLocale(this.localeState() === 'fr' ? 'en' : 'fr');
  }
}
