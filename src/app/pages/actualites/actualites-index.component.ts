import {
  ChangeDetectionStrategy,
  Component,
  inject,
  type OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import {
  formatArticleDate,
  INSIGHT_ARTICLES,
} from '../../shared/content/actualites.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-actualites-index',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './actualites-index.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActualitesIndexComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  protected readonly articles = INSIGHT_ARTICLES;

  protected formatDate(iso: string): string {
    return formatArticleDate(iso);
  }

  ngOnInit(): void {
    this.title.setTitle('Actualités & analyses | Groupe Afrimmo S.A.');
    this.meta.updateTag({
      name: 'description',
      content:
        'Points de vue et retours d’expérience sur la conduite de programmes construction, logistique et industrie en Afrique centrale et de l’Est — Groupe Afrimmo S.A.',
    });
  }
}
