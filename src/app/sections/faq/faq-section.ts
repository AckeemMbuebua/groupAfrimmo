import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { FAQ_ITEMS } from '../../shared/content/faq.data';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [NgClass, RevealDirective],
  templateUrl: './faq-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqSection {
  protected readonly openIndex = signal<number | null>(null);

  protected readonly items = FAQ_ITEMS;

  protected toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
