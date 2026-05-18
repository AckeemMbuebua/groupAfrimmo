import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../directives/reveal.directive';
import type { ProjectCard } from '../landing/landing.models';
import { SITE_PHONE_HREF } from '../content/contact.data';
import { injectLocaleContent } from '../../content/inject-locale-content';

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  imports: [NgClass, RevealDirective, RouterLink],
  templateUrl: './projects-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsGridComponent {
  private readonly cdr = inject(ChangeDetectorRef);
  protected readonly site = injectLocaleContent().site;

  private readonly brokenCardImages = new Set<string>();

  protected readonly fallbackCardImage = '/images/fallback-card.jpg';

  readonly projects = input.required<readonly ProjectCard[]>();

  /** Ex. `'realisations'` pour lier vers `/realisations/:id`. */
  readonly projectDetailParent = input<string>();

  readonly phoneHref = SITE_PHONE_HREF;

  readonly contactFragment = input<string>('contact');

  readonly showExpertCta = input(false);

  protected cardImageSrc(project: ProjectCard): string {
    return this.brokenCardImages.has(project.id)
      ? this.fallbackCardImage
      : project.imageUrl;
  }

  protected onCardImageError(projectId: string): void {
    if (!this.brokenCardImages.has(projectId)) {
      this.brokenCardImages.add(projectId);
      this.cdr.markForCheck();
    }
  }
}
