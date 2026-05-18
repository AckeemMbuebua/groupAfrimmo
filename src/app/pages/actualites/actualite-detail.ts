import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import {
  formatArticleDate,
  getArticleBySlug,
} from '../../shared/content/actualites.data';
import type { InsightArticle } from '../../shared/content/content.models';
import { SeoService } from '../../shared/seo/seo.service';
import { LocaleService } from '../../content/locale.service';

@Component({
  selector: 'app-actualite-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './actualite-detail.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActualiteDetail {
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  protected readonly locale = inject(LocaleService);

  readonly slug = input.required<string>();

  private readonly coverBroken = signal(false);

  protected readonly fallbackCover = '/images/fallback-card.jpg';

  constructor() {
    effect(() => {
      const s = this.slug();
      const activeLocale = this.locale.locale();
      this.coverBroken.set(false);
      const row = getArticleBySlug(s, activeLocale);
      if (!row) {
        void this.router.navigate(['/actualites']);
        return;
      }
      this.applyMeta(row);
    });
  }

  protected resolve(): InsightArticle | undefined {
    return getArticleBySlug(this.slug(), this.locale.locale());
  }

  protected formatDate(iso: string): string {
    return formatArticleDate(iso, this.locale.locale());
  }

  protected coverSrc(article: InsightArticle): string {
    return this.coverBroken() ? this.fallbackCover : article.coverUrl;
  }

  protected onCoverError(): void {
    this.coverBroken.set(true);
  }

  private applyMeta(row: InsightArticle): void {
    this.seo.update({
      title: this.locale.site().seo.articleDetailTitle(row.title),
      description: row.excerpt,
    });
  }
}
