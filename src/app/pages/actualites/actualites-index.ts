import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { formatArticleDate } from '../../shared/content/actualites.data';
import type { InsightArticle } from '../../shared/content/content.models';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SeoService } from '../../shared/seo/seo.service';
import { LocaleService } from '../../content/locale.service';

@Component({
  selector: 'app-actualites-index',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './actualites-index.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActualitesIndex {
  private readonly seo = inject(SeoService);
  private readonly cdr = inject(ChangeDetectorRef);
  protected readonly locale = inject(LocaleService);

  private readonly brokenCovers = new Set<string>();

  protected readonly fallbackCover = '/images/fallback-card.jpg';

  protected readonly articles = computed(
    () => this.locale.site().actualites.articles,
  );

  constructor() {
    effect(() => {
      this.seo.update(this.locale.site().seo.pages.actualites);
    });
  }

  protected formatDate(iso: string): string {
    return formatArticleDate(iso, this.locale.locale());
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
}
