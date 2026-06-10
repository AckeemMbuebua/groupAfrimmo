import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectLocaleContent } from '../../content/inject-locale-content';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection {
  protected readonly home = injectLocaleContent().home;

  /** Fond hero issu des references projet locales. */
  protected readonly heroImageSrc =
    '/images/projet/optimized/mbweni-jkt-villa-06.webp';
}
