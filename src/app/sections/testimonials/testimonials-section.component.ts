import { NgClass, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  PLATFORM_ID,
  ViewEncapsulation,
  inject,
  input,
  signal,
} from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import type { CarouselTestimonial } from '../../shared/landing/landing.models';
import {
  LucideChevronLeft,
  LucideChevronRight,
  LucideQuote,
  LucideStar,
} from '@lucide/angular';

const DEFAULT_AFRIMMO_TESTIMONIALS: readonly CarouselTestimonial[] = [
  {
    id: 1,
    name: 'Direction projet',
    role: 'Construction institutionnelle',
    company: 'Client privé — RDC',
    content:
      'Une équipe présente, claire dans ses rapports et rapide dans la résolution des points critiques.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Responsable opérations',
    role: 'Approvisionnement industriel',
    company: 'Projet multisite',
    content:
      "Le suivi logistique a changé le rythme du chantier : moins d'attente, plus de visibilité, meilleure coordination.",
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop',
  },
  {
    id: 3,
    name: "Maîtrise d'ouvrage",
    role: 'Résidentiel premium',
    company: 'Programme résidentiel',
    content:
      "Afrimmo a su transformer un besoin complexe en plan d'exécution simple, mesurable et livré proprement.",
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop',
  },
];

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [
    NgClass,
    LucideChevronLeft,
    LucideChevronRight,
    LucideQuote,
    LucideStar,
    RevealDirective,
  ],
  templateUrl: './testimonials-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class:
      '[&_svg[lucideStar]]:fill-yellow-500 [&_svg[lucideStar]]:stroke-yellow-500 [&_svg[lucideStar]]:text-yellow-500',
  },
})
export class TestimonialsSectionComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);

  /** Libellé court au-dessus du titre (surtitre fil rouge). */
  readonly sectionEyebrow = input('Témoignages');

  readonly sectionTitle = input('La confiance se construit sur le terrain.');

  readonly sectionLead = input(
    'Retours terrain sur la coordination chantier et la livraison de projets exigeants.',
  );

  readonly testimonials = input<readonly CarouselTestimonial[]>(
    DEFAULT_AFRIMMO_TESTIMONIALS,
  );

  /** Délai entre deux diapositives en lecture auto ; 0 pour désactiver. */
  readonly carouselIntervalMs = input(6000);

  readonly showVerifiedBadge = input(true);

  readonly partnerNames = input<readonly string[]>([]);

  readonly partnersBlockTitle = input('Ils nous font confiance');

  /** Classes Tailwind supplémentaires sur la balise host du composant. */
  readonly hostClass = input('');

  protected readonly activeIndex = signal(0);
  protected readonly avatarBrokenIds = signal<ReadonlySet<number>>(new Set());

  constructor() {
    let timerId: ReturnType<typeof window.setInterval> | undefined;

    if (isPlatformBrowser(this.platformId)) {
      timerId = this.startCarouselInterval();
      this.destroyRef.onDestroy(() => {
        if (timerId !== undefined) window.clearInterval(timerId);
      });
    }
  }

  private startCarouselInterval(): ReturnType<typeof window.setInterval> | undefined {
    const ms = this.carouselIntervalMs();
    const list = this.testimonials();
    if (ms <= 0 || list.length <= 1) return undefined;
    return window.setInterval(() => this.goNextSlide(), ms);
  }

  private goNextSlide(): void {
    const list = this.testimonials();
    if (list.length === 0) return;
    this.activeIndex.update((i) => (i + 1) % list.length);
  }

  protected goPrevClick(): void {
    const list = this.testimonials();
    if (list.length === 0) return;
    this.activeIndex.update((i) => (i - 1 + list.length) % list.length);
  }

  protected goNextClick(): void {
    this.goNextSlide();
  }

  protected goToSlide(idx: number): void {
    this.activeIndex.set(idx);
  }

  protected handleDotKeyboard(ev: KeyboardEvent, idx: number): void {
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      this.goToSlide(idx);
    }
  }

  protected initials(name: string): string {
    const parts = name.trim().split(/\s+/).slice(0, 2);
    return parts.map((p) => p.charAt(0).toUpperCase()).join('');
  }

  protected onAvatarError(testimonialId: number): void {
    this.avatarBrokenIds.update((prev) => new Set(prev).add(testimonialId));
  }

  protected ratingIndices(rating: number): readonly number[] {
    return Array.from({ length: Math.floor(rating) }, (_, idx) => idx);
  }
}
