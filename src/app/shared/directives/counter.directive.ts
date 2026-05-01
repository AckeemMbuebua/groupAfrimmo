import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  inject,
  input,
} from '@angular/core';

@Directive({
  selector: '[appCounter]',
  standalone: true,
})
export class CounterDirective implements AfterViewInit, OnDestroy {
  readonly target = input.required<number>();
  readonly suffix = input<string>('');

  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private rafId = 0;
  private hasStarted = false;

  ngAfterViewInit(): void {
    requestAnimationFrame(() => this.armCounterObserver());
  }

  private armCounterObserver(): void {
    const host = this.el.nativeElement;
    const suffix = this.suffix();
    host.textContent = `0${suffix}`;
    host.classList.add('counter');

    const start = (): void => {
      if (this.hasStarted) return;
      this.hasStarted = true;
      this.observer?.unobserve(host);
      this.runAnimation(host);
    };

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          start();
        }
      },
      { threshold: 0, rootMargin: '0px 0px 96px 0px' },
    );
    this.observer.observe(host);

    requestAnimationFrame(() => {
      const root = document.documentElement;
      const vh = root.clientHeight || window.innerHeight;
      const r = host.getBoundingClientRect();
      if (r.top < vh + 120 && r.bottom > -120) {
        start();
      }
    });
  }

  private runAnimation(el: HTMLElement): void {
    const numericTarget = this.target();
    const suffix = this.suffix();
    const duration = numericTarget > 1000 ? 1100 : 900;
    const startTime = performance.now();

    const frame = (now: number): void => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent =
        Math.round(numericTarget * eased).toLocaleString('fr-FR') + suffix;
      if (progress < 1) {
        this.rafId = requestAnimationFrame(frame);
      }
    };

    this.rafId = requestAnimationFrame(frame);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    cancelAnimationFrame(this.rafId);
  }
}
