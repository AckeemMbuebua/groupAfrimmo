import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import type { ExpertiseCard } from '../../shared/landing/landing.models';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { injectLocaleContent } from '../../content/inject-locale-content';

@Component({
  selector: 'app-expertise-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './expertise-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpertiseSection {
  protected readonly home = injectLocaleContent().home;

  private readonly cdr = inject(ChangeDetectorRef);

  private readonly brokenImages = new Set<string>();

  protected readonly fallbackImage = '/images/fallback-card.jpg';

  protected cardImageSrc(card: ExpertiseCard): string {
    return this.brokenImages.has(card.numberLabel)
      ? this.fallbackImage
      : card.imageUrl;
  }

  protected onCardImageError(numberLabel: string): void {
    if (!this.brokenImages.has(numberLabel)) {
      this.brokenImages.add(numberLabel);
      this.cdr.markForCheck();
    }
  }
}
