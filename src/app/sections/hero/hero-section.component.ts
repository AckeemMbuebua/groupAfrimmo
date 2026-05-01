import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  protected readonly videoSrc =
    'https://assets.mixkit.co/videos/preview/mixkit-working-at-a-construction-site-with-a-crane-18868-large.mp4';
}
