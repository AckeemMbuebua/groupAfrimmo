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
        'Le Groupe Afrimmo S.A. intervient sur les bâtiments publics et privés, les infrastructures routières, les complexes résidentiels et hôteliers, les projets industriels et miniers, les équipements de santé, les travaux MEP, ainsi que sur l’approvisionnement et la coordination logistique.',
    },
    {
      question: 'Fournissez-vous les matériaux ?',
      answer:
        "Oui. Le groupe peut assurer l'approvisionnement en ciment, fer à béton, bois, agrégats, matières premières et fournitures techniques définies au cahier des charges.",
    },
    {
      question: 'Dans quelles zones intervenez-vous ?',
      answer:
        'Le groupe opère en RDC et accompagne aussi des missions internationales selon la nature du projet et les ressources requises.',
    },
    {
      question: 'Comment demander une estimation ?',
      answer:
        "Envoyez un brief avec la localisation, la nature des travaux, les délais souhaités, le budget indicatif et les contraintes connues. L'équipe vous répond avec les prochaines étapes.",
    },
    {
      question: 'Intervenez-vous sur les infrastructures électriques ou les très grands ensembles ?',
      answer:
        'Oui, selon le périmètre : construction et réhabilitation de réseaux et ouvrages associés peuvent faire partie du mandat, avec coordination des équipes techniques et corps de métier. Les projets d’envergure suivent la même exigence de méthode et de pilotage.',
    },
    {
      question: 'Proposez-vous uniquement du gros œuvre ou aussi des lots spécialisés ?',
      answer:
        'Le Groupe Afrimmo S.A. peut mobiliser plusieurs lots : rénovation et habillage, services industriels, renfort de capacité terrain (personnel qualifié) et autres prestations présentées dans la partie « Nos services ».',
    },
  ];

  protected toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
