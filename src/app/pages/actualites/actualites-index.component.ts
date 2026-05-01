import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
import type { InsightArticle } from '../../shared/content/content.models';
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
  private readonly cdr = inject(ChangeDetectorRef);

  private readonly brokenCovers = new Set<string>();

  protected readonly fallbackCover = '/images/fallback-card.jpg';

  protected readonly articles = INSIGHT_ARTICLES;

  protected formatDate(iso: string): string {
    return formatArticleDate(iso);
  }

  protected coverSrc(article: InsightArticle): string {
    return this.brokenCovers.has(article.slug)
      ? this.fallbackCover
      : article.coverUrl;
  }

  protected onCoverError(slug: string): void {
    if (!this.brokenCovers.has(slug)) {
      this.brokenCovers.add(slug);
      this.cdr.markForCheck();
    }
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
