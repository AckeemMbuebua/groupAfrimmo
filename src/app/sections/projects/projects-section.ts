import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SITE_PHONE_HREF } from '../../shared/content/contact.data';
import { getProjectCards } from '../../shared/content/projects.data';
import { ProjectsGridComponent } from '../../shared/projects-grid/projects-grid.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [RevealDirective, RouterLink, ProjectsGridComponent],
  templateUrl: './projects-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  protected readonly projects = getProjectCards();

  readonly phoneHref = SITE_PHONE_HREF;
}
