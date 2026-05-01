import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink, LucideArrowRight],
  templateUrl: './hero-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  /**
   * Vidéo servie depuis `public/videos/` (même origine = fiabilité max).
   * Remplacez `hero.mp4` par votre bande-annonce chantier sans changer le code.
   */
  protected readonly videoSrc = '/videos/hero.mp4';

  /** Poster affiché avant lecture + fond si la vidéo échoue (`public/images/`). */
  protected readonly posterSrc = '/images/hero-poster.jpg';
}
