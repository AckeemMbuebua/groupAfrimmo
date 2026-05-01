import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import type {
  FooterNavColumn,
  FooterSocialLink,
} from '../../shared/landing/landing.models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly navigationColumn: FooterNavColumn = {
    heading: 'Navigation',
    links: [
      { kind: 'homeFragment', label: 'À propos', fragment: 'a-propos' },
      { kind: 'homeFragment', label: 'Profil', fragment: 'profil' },
      { kind: 'homeFragment', label: 'Expertise', fragment: 'expertise' },
      { kind: 'homeFragment', label: 'Services', fragment: 'services' },
      { kind: 'homeFragment', label: 'Approche', fragment: 'approche' },
      { kind: 'homeFragment', label: 'Méthode', fragment: 'methode' },
      { kind: 'homeFragment', label: 'Réalisations', fragment: 'realisations' },
      { kind: 'homeFragment', label: 'Engagement', fragment: 'engagement' },
      { kind: 'homeFragment', label: 'Témoignages', fragment: 'temoignages' },
      { kind: 'homeFragment', label: 'FAQ', fragment: 'faq' },
    ],
  };

  protected readonly directColumn: FooterNavColumn = {
    heading: 'Direct',
    links: [
      { kind: 'external', label: 'Appeler', href: 'tel:+243899450037' },
      {
        kind: 'external',
        label: 'Email',
        href: 'mailto:contact@afrimmo.com',
      },
      { kind: 'homeFragment', label: 'Devis', fragment: 'contact' },
    ],
  };

  protected readonly socialLinks: readonly FooterSocialLink[] = [
    {
      href: '#',
      ariaLabel: 'LinkedIn',
      iconClass: 'fa-brands fa-linkedin-in',
    },
    {
      href: '#',
      ariaLabel: 'Twitter',
      iconClass: 'fa-brands fa-twitter',
    },
  ];
}
