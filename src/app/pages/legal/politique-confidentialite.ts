import {
  ChangeDetectionStrategy,
  Component,
  inject,
  type OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../shared/seo/seo.service';

@Component({
  selector: 'app-politique-confidentialite',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './politique-confidentialite.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolitiqueConfidentialite implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Politique de confidentialité | Groupe Afrimmo S.A.',
      description:
        'Politique de confidentialité du site afrimmo.com : données collectées, finalités, durée de conservation et modalités de contact.',
    });
  }
}
