import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectLocaleContent } from '../../content/inject-locale-content';
import { SITE_PHONE_HREF } from '../../shared/content/contact.data';
import { ProjectsGridComponent } from '../../shared/projects-grid/projects-grid.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [RouterLink, ProjectsGridComponent, RevealDirective],
  templateUrl: './projects-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  private readonly content = injectLocaleContent();

  protected readonly home = this.content.home;

  protected readonly projects = computed(() => this.content.site().projects.cards);

  readonly phoneHref = SITE_PHONE_HREF;
}
