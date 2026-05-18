import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';
import { CTA_LABELS } from '../../shared/content/cta-labels';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink, LucideArrowRight],
  templateUrl: './hero-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection {
  /** Image hero plein écran (`public/images/`). */
  protected readonly heroImageSrc = '/images/hero-poster.jpg';

  protected readonly cta = CTA_LABELS;
}
