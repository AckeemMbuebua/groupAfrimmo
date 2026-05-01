import { ChangeDetectionStrategy, Component } from '@angular/core';
import type {
  FooterNavColumn,
  FooterSocialLink,
} from '../../shared/landing/landing.models';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly navigationColumn: FooterNavColumn = {
    heading: 'Navigation',
    links: [
      { label: 'À propos', href: '#a-propos' },
      { label: 'Profil', href: '#profil' },
      { label: 'Expertise', href: '#expertise' },
      { label: 'Services', href: '#services' },
      { label: 'Approche', href: '#approche' },
      { label: 'Méthode', href: '#methode' },
      { label: 'Réalisations', href: '#realisations' },
      { label: 'Engagement', href: '#engagement' },
    ],
  };

  protected readonly directColumn: FooterNavColumn = {
    heading: 'Direct',
    links: [
      { label: 'Appeler', href: 'tel:+243899450037' },
      { label: 'Email', href: 'mailto:contact@afrimmo.com' },
      { label: 'Devis', href: '#contact' },
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
