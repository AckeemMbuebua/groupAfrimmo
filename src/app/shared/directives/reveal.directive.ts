import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: { class: 'reveal' },
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private revealed = false;

  ngAfterViewInit(): void {
    // Une frame après hydration / lazy route évite un premier IO erroné ; threshold 0 évite qu’un
    // bloc très haut reste bloqué sous l’ancien seuil 16 %.
    requestAnimationFrame(() => this.startObserver());
  }

  private startObserver(): void {
    const host = this.el.nativeElement;
    if (!host.isConnected || host.classList.contains('is-visible')) {
      return;
    }

    const applyVisible = (): void => {
      if (this.revealed) return;
      this.revealed = true;
      host.classList.add('is-visible');
      this.observer?.unobserve(host);
    };

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          applyVisible();
        }
      },
      { threshold: 0, rootMargin: '48px 0px 96px 0px' },
    );

    this.observer.observe(host);

    requestAnimationFrame(() => {
      if (host.classList.contains('is-visible')) return;

      const root = document.documentElement;
      const vh = root.clientHeight || window.innerHeight;
      const bounds = root.getBoundingClientRect();
      const vw = bounds.width || root.clientWidth;
      const r = host.getBoundingClientRect();
      if (r.top < vh + 96 && r.bottom > -96 && r.left < vw && r.right > 0) {
        applyVisible();
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
