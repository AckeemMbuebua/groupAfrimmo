import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight, LucideSparkles } from '@lucide/angular';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink, LucideSparkles, LucideArrowRight],
  templateUrl: './hero-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  protected readonly videoSrc =
    'https://assets.mixkit.co/videos/preview/mixkit-working-at-a-construction-site-with-a-crane-18868-large.mp4';
}
