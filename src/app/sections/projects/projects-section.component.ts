import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import type { ProjectCard } from '../../shared/landing/landing.models';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [NgClass, RevealDirective],
  templateUrl: './projects-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {
  protected readonly projects: readonly ProjectCard[] = [
    {
      id: 'al-saad',
      imageUrl:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop',
      imageAlt:
        'Résidence de luxe Al Saad Apartments à Chukwani, île de Unguja — Zanzibar',
      category: 'Résidentiel · Zanzibar',
      title: 'Al Saad Apartments',
      description:
        '28 unités luxe avec whirlpool et terrasse vue mer, plage ; réalisation Chukwani (Unguja).',
      statusLabel: 'Livré · 2022',
      wide: true,
    },
    {
      id: 'kiwengwa-hotel',
      imageUrl:
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=900&auto=format&fit=crop',
      imageAlt: 'Hôtel cinq étoiles Kiwengwa',
      category: 'Hôtellerie · Zanzibar',
      title: 'Kiwengwa Hotel',
      description:
        'Complexe boutique 14 villas indépendantes, piscines, restaurant front de mer.',
      statusLabel: 'En cours',
      wide: false,
      transitionDelaySeconds: 0.06,
    },
    {
      id: 'kisraa-godowns',
      imageUrl:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop',
      imageAlt: 'Entrepôts industriels Kisarawe II',
      category: 'Industrie · Tanzanie mainland',
      title: 'Kisraa Company — godowns',
      description:
        'Première phase : 2 godowns sur un programme global de 8, zone industrielle Kisarawe II.',
      statusLabel: 'Phase 1 · 2024',
      wide: false,
      transitionDelaySeconds: 0.12,
    },
    {
      id: 'mbweni-jkt',
      imageUrl:
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=900&auto=format&fit=crop',
      imageAlt: 'Construction villa Mbweni JKT',
      category: 'Résidentiel · Zanzibar',
      title: 'Mbweni JKT Villa',
      description:
        'Conception jusqu’aux finitions — boucle livrée en huit mois pour un parti architectural exigeant.',
      statusLabel: 'Livré · 2025',
      wide: false,
      transitionDelaySeconds: 0.18,
    },
    {
      id: 'lake-energies',
      imageUrl:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop',
      imageAlt: 'Chantier de réaménagement enseigne et façade',
      category: 'Rebranding · retail',
      title: 'Lake Energies — rebrand',
      description:
        'Lake Oil rebranded Lake Energies : coordination équipe créative et exécution chantier (neuf mois).',
      statusLabel: 'Livré · 2024',
      wide: false,
      transitionDelaySeconds: 0.24,
    },
    {
      id: 'hospitaux-znz',
      imageUrl:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=900&auto=format&fit=crop',
      imageAlt: 'Infrastructure hospitalière de district',
      category: 'Santé · Zanzibar',
      title: '10 hôpitaux de districts',
      description:
        'Programme gouvernemental 2024 : appui expert notamment bureau MEP sur la mise en œuvre.',
      statusLabel: 'Livré · 2025',
      wide: false,
      transitionDelaySeconds: 0.3,
    },
    {
      id: 'palm-complex',
      imageUrl:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop',
      imageAlt: 'Complexe résidentiel et commercial Palm Complex à Kigamboni',
      category: 'Mixte · Dar es Salaam',
      title: 'Palm Complex · Kigamboni',
      description:
        'Programme résidentiel et commercial densifié livré à l’échelle du mandat prévu (douze mois environ).',
      statusLabel: 'Livré · 2025',
      wide: false,
      transitionDelaySeconds: 0.36,
    },
  ];
}
