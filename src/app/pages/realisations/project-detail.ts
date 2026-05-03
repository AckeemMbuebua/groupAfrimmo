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
import { getProjectCase } from '../../shared/content/projects.data';
import type { ResolvedProjectCase } from '../../shared/content/content.models';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetail {
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  /** Lié automatiquement à la route `:id` via `withComponentInputBinding()`. */
  readonly id = input.required<string>();

  /** Si l’image distante (Unsplash) échoue, affiche le JPG local `public/images/fallback-card.jpg`. */
  protected readonly heroImageBroken = signal(false);

  constructor() {
    effect(() => {
      const slug = this.id();
      this.heroImageBroken.set(false);
      const row = getProjectCase(slug);
      if (!row) {
        void this.router.navigate(['/realisations']);
        return;
      }
      this.applyMeta(row);
    });
  }

  protected snapshot(): ResolvedProjectCase | undefined {
    return getProjectCase(this.id());
  }

  protected heroImageSrc(project: ResolvedProjectCase): string {
    return this.heroImageBroken() ? '/images/fallback-card.jpg' : project.imageUrl;
  }

  protected onHeroImageError(): void {
    this.heroImageBroken.set(true);
  }

  private applyMeta(row: ResolvedProjectCase): void {
    this.title.setTitle(`${row.title} · Réalisations | Groupe Afrimmo S.A.`);
    this.meta.updateTag({ name: 'description', content: row.seoDescription });
  }
}
