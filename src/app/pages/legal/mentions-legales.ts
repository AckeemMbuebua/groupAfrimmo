import {
  ChangeDetectionStrategy,
  Component,
  inject,
  type OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../shared/seo/seo.service';

@Component({
  selector: 'app-mentions-legales',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mentions-legales.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MentionsLegales implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Mentions légales | Groupe Afrimmo S.A.',
      description:
        'Mentions légales du site afrimmo.com : informations relatives à l’éditeur, à l’hébergement, à la propriété intellectuelle et au contact.',
    });
  }
}
