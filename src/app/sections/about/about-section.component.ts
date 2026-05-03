import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {
  protected readonly mainImageSrc =
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=82';
  protected readonly mainImageAlt =
    'Chantier — coordination, génie civil et exécution terrain (visuel illustratif)';

  private readonly mainImageBroken = signal(false);
  protected readonly fallbackMainImage = '/images/fallback-card.jpg';

  protected mainImageUrl(): string {
    return this.mainImageBroken() ? this.fallbackMainImage : this.mainImageSrc;
  }

  protected onMainImageError(): void {
    this.mainImageBroken.set(true);
  }

  protected readonly trustPoints: readonly string[] = [
    'Organisation terrain et hiérarchie de décision claire',
    'Coordination multi-lots et interfaces techniques',
    'Réseau de partenaires mobilisé selon le besoin',
    'Respect des engagements et qualité d’exécution',
  ];
}
