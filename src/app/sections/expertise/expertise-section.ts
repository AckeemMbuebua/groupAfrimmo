import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import type { ExpertiseCard } from '../../shared/landing/landing.models';
import { EXPERTISE_CARDS } from '../../shared/content/expertise.data';

@Component({
  selector: 'app-expertise-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './expertise-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpertiseSection {
  private readonly cdr = inject(ChangeDetectorRef);

  private readonly brokenImages = new Set<string>();

  protected readonly fallbackImage = '/images/fallback-card.jpg';

  protected readonly cards: readonly ExpertiseCard[] = EXPERTISE_CARDS;

  protected cardImageSrc(card: ExpertiseCard): string {
    return this.brokenImages.has(card.numberLabel)
      ? this.fallbackImage
      : card.imageUrl;
  }

  protected onCardImageError(label: string): void {
    if (!this.brokenImages.has(label)) {
      this.brokenImages.add(label);
      this.cdr.markForCheck();
    }
  }
}
