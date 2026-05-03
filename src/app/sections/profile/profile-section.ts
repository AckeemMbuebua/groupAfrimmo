import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

export interface ProfileValueIcon {
  readonly title: string;
  readonly iconClass: string;
}

@Component({
  selector: 'app-profile-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './profile-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSection {
  protected readonly mainImageSrc =
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=82';
  protected readonly mainImageAlt =
    'Chantier — génie civil, coordination et sécurité opérationnelle';

  private readonly mainImageBroken = signal(false);

  protected readonly fallbackMainImage = '/images/fallback-card.jpg';

  protected mainImageUrl(): string {
    return this.mainImageBroken() ? this.fallbackMainImage : this.mainImageSrc;
  }

  protected onMainImageError(): void {
    this.mainImageBroken.set(true);
  }

  /** Références visuelles compactes (sans sous-texte). */
  protected readonly valueIcons: readonly ProfileValueIcon[] = [
    { title: 'Qualité', iconClass: 'fa-solid fa-award' },
    { title: 'Innovation', iconClass: 'fa-solid fa-lightbulb' },
    { title: 'Engagement', iconClass: 'fa-solid fa-handshake' },
    { title: 'Fiabilité', iconClass: 'fa-solid fa-shield-halved' },
  ];
}
