import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import {
  formatArticleDate,
  getArticleBySlug,
} from '../../shared/content/actualites.data';
import type { InsightArticle } from '../../shared/content/content.models';

@Component({
  selector: 'app-actualite-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './actualite-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActualiteDetailComponent {
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly slug = input.required<string>();

  private readonly coverBroken = signal(false);

  protected readonly fallbackCover = '/images/fallback-card.jpg';

  constructor() {
    effect(() => {
      const s = this.slug();
      this.coverBroken.set(false);
      const row = getArticleBySlug(s);
      if (!row) {
        void this.router.navigate(['/actualites']);
        return;
      }
      this.applyMeta(row);
    });
  }

  protected resolve(): InsightArticle | undefined {
    return getArticleBySlug(this.slug());
  }

  protected formatDate(iso: string): string {
    return formatArticleDate(iso);
  }

  protected coverSrc(article: InsightArticle): string {
    return this.coverBroken() ? this.fallbackCover : article.coverUrl;
  }

  protected onCoverError(): void {
    this.coverBroken.set(true);
  }

  private applyMeta(row: InsightArticle): void {
    this.title.setTitle(`${row.title} | Groupe Afrimmo S.A.`);
    this.meta.updateTag({ name: 'description', content: row.excerpt });
  }
}
