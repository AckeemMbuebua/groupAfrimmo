import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { injectLocaleContent } from '../../content/inject-locale-content';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {
  protected readonly home = injectLocaleContent().home;

  protected readonly mainImageSrc =
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=82';

  private readonly mainImageBroken = signal(false);
  protected readonly fallbackMainImage = '/images/fallback-card.jpg';

  protected mainImageUrl(): string {
    return this.mainImageBroken() ? this.fallbackMainImage : this.mainImageSrc;
  }

  protected onMainImageError(): void {
    this.mainImageBroken.set(true);
  }
}
