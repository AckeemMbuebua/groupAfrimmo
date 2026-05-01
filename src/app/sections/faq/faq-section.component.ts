import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import type { FaqItem } from '../../shared/landing/landing.models';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [NgClass, RevealDirective],
  templateUrl: './faq-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqSectionComponent {
  protected readonly openIndex = signal<number | null>(null);

  protected readonly items: readonly FaqItem[] = [
    {
      question: 'Quels types de projets gérez-vous ?',
      answer:
        'Bâtiments publics et privés, infrastructures, logements, projets industriels, travaux MEP, approvisionnement et coordination logistique.',
    },
    {
      question: 'Fournissez-vous les matériaux ?',
      answer:
        "Oui. Afrimmo peut assurer l'approvisionnement en ciment, fer à béton, bois, agrégats et autres fournitures techniques selon le cahier des charges.",
    },
    {
      question: 'Dans quelles zones intervenez-vous ?',
      answer:
        'Le groupe opère en RDC et accompagne aussi des missions internationales selon la nature du projet et les ressources requises.',
    },
    {
      question: 'Comment demander une estimation ?',
      answer:
        "Envoyez un brief avec la localisation, la nature des travaux, les délais souhaités et les contraintes connues. L'équipe revient avec les prochaines étapes.",
    },
  ];

  protected toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
