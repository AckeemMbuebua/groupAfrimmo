import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../directives/reveal.directive';
import type { ProjectCard } from '../landing/landing.models';

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  imports: [NgClass, RevealDirective, RouterLink],
  templateUrl: './projects-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsGridComponent {
  readonly projects = input.required<readonly ProjectCard[]>();

  /** Ex. `'realisations'` pour lier vers `/realisations/:id`. */
  readonly projectDetailParent = input<string>();

  readonly phoneHref = 'tel:+243899450037';

  readonly mailHref = 'mailto:contact@afrimmo.com?subject=Dossier%20r%C3%A9alisation';

  readonly contactFragment = input<string>('contact');

  readonly showExpertCta = input(false);
}
