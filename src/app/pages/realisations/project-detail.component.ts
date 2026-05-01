import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
} from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { getProjectCase } from '../../shared/content/projects.data';
import type { ResolvedProjectCase } from '../../shared/content/content.models';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailComponent {
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  /** Lié automatiquement à la route `:id` via `withComponentInputBinding()`. */
  readonly id = input.required<string>();

  constructor() {
    effect(() => {
      const slug = this.id();
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

  private applyMeta(row: ResolvedProjectCase): void {
    this.title.setTitle(`${row.title} · Réalisations | Groupe Afrimmo S.A.`);
    this.meta.updateTag({ name: 'description', content: row.seoDescription });
  }
}
