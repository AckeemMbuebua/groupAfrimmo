import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { getProjectCards } from '../../shared/content/projects.data';
import { ProjectsGridComponent } from '../../shared/projects-grid/projects-grid.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [RevealDirective, RouterLink, ProjectsGridComponent],
  templateUrl: './projects-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {
  protected readonly projects = getProjectCards();

  readonly phoneHref = 'tel:+243899450037';
}
