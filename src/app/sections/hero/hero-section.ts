import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  effect,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectLocaleContent } from '../../content/inject-locale-content';
import { HomeAnimationReplayService } from '../../shared/animations/home-animation-replay.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection implements OnDestroy {
  private readonly animationReplay = inject(HomeAnimationReplayService);
  private replayFrame: number | undefined;

  protected readonly home = injectLocaleContent().home;

  /** Fond hero issu des references projet locales. */
  protected readonly heroImageSrc =
    '/images/projet/optimized/mbweni-jkt-villa-06.webp';

  protected readonly replayAlt = signal(false);

  constructor() {
    effect((onCleanup) => {
      const request = this.animationReplay.replayRequest();
      if (request === 0) {
        return;
      }

      this.scheduleReplayToggle();
      onCleanup(() => this.cancelScheduledReplay());
    });
  }

  private scheduleReplayToggle(): void {
    this.cancelScheduledReplay();

    const replay = (): void => {
      this.replayFrame = undefined;
      this.replayAlt.update((active) => !active);
    };

    if (typeof requestAnimationFrame === 'undefined') {
      replay();
      return;
    }

    this.replayFrame = requestAnimationFrame(() => {
      this.replayFrame = requestAnimationFrame(replay);
    });
  }

  private cancelScheduledReplay(): void {
    if (
      this.replayFrame !== undefined &&
      typeof cancelAnimationFrame !== 'undefined'
    ) {
      cancelAnimationFrame(this.replayFrame);
      this.replayFrame = undefined;
    }
  }

  ngOnDestroy(): void {
    this.cancelScheduledReplay();
  }
}
