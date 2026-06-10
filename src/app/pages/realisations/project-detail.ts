import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { getProjectCase } from '../../shared/content/projects.data';
import type { ResolvedProjectCase } from '../../shared/content/content.models';
import { SeoService } from '../../shared/seo/seo.service';
import { LocaleService } from '../../content/locale.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetail {
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  protected readonly locale = inject(LocaleService);

  /** Lié automatiquement à la route `:id` via `withComponentInputBinding()`. */
  readonly id = input.required<string>();

  /** Si l’image projet échoue, affiche le JPG local `public/images/fallback-card.jpg`. */
  protected readonly heroImageBroken = signal(false);

  constructor() {
    effect(() => {
      const slug = this.id();
      const activeLocale = this.locale.locale();
      this.heroImageBroken.set(false);
      const row = getProjectCase(slug, activeLocale);
      if (!row) {
        void this.router.navigate(['/realisations']);
        return;
      }
      this.applyMeta(row);
    });
  }

  protected snapshot(): ResolvedProjectCase | undefined {
    return getProjectCase(this.id(), this.locale.locale());
  }

  protected heroImageSrc(project: ResolvedProjectCase): string {
    return this.heroImageBroken() ? '/images/fallback-card.jpg' : project.imageUrl;
  }

  protected galleryImages(project: ResolvedProjectCase): readonly string[] {
    return [project.imageUrl, ...(project.galleryImageUrls ?? [])];
  }

  protected onHeroImageError(): void {
    this.heroImageBroken.set(true);
  }

  private applyMeta(row: ResolvedProjectCase): void {
    this.seo.update({
      title: this.locale.site().seo.projectDetailTitle(row.title),
      description: row.seoDescription,
    });
  }
}
