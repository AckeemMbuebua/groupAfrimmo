import {
  ChangeDetectionStrategy,
  Component,
  inject,
  type OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { JOB_POSTINGS } from '../../shared/content/carrieres.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-carrieres',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './carrieres.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarrieresComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  protected readonly roles = JOB_POSTINGS;

  protected readonly mailIntro =
    'mailto:Info@groupeafrimmo.com?subject=Candidature%20spontan%C3%A9e%20%2F%20';

  ngOnInit(): void {
    this.title.setTitle('Carrières | Groupe Afrimmo S.A.');
    this.meta.updateTag({
      name: 'description',
      content:
        'Rejoindre le Groupe Afrimmo S.A. : chantier, logistique, développement et expertises transverses sur des programmes en RDC et en Afrique de l’Est.',
    });
  }

  protected mailForRole(title: string): string {
    const encoded = encodeURIComponent(title);
    return `${this.mailIntro}${encoded}`;
  }
}
