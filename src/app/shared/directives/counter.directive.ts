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

  ngAfterViewInit(): void {
    const host = this.el.nativeElement;
    const suffix = this.suffix();
    host.textContent = `0${suffix}`;
    host.classList.add('counter');

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const counterEl = entry.target as HTMLElement;
          this.observer?.unobserve(counterEl);
          this.runAnimation(counterEl);
        }
      },
      { threshold: 0.55 },
    );
    this.observer.observe(host);
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
