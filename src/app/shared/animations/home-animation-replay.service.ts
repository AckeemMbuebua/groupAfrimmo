import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HomeAnimationReplayService {
  private readonly doc = inject(DOCUMENT);
  private readonly replayToken = signal(0);
  private pendingReplayTimer: number | undefined;

  readonly replayRequest = this.replayToken.asReadonly();

  scrollToHomeAndReplayAnimations(): void {
    const win = this.doc.defaultView;
    const home = this.doc.getElementById('home');

    if (!win || !home) {
      this.requestReplay();
      return;
    }

    const reducedMotion =
      win.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const distance = Math.abs(home.getBoundingClientRect().top);

    home.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });

    if (this.pendingReplayTimer !== undefined) {
      win.clearTimeout(this.pendingReplayTimer);
    }

    const delay = reducedMotion ? 0 : Math.min(420, Math.max(120, distance * 0.35));
    this.pendingReplayTimer = win.setTimeout(() => {
      this.pendingReplayTimer = undefined;
      this.requestReplay();
    }, delay);
  }

  private requestReplay(): void {
    this.replayToken.update((token) => token + 1);
  }
}
