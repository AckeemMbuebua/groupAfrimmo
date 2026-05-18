import {
  ChangeDetectionStrategy,
  Component,
  inject,
  type OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_PHONE_HREF } from '../../shared/content/contact.data';
import { getProjectCards } from '../../shared/content/projects.data';
import { ProjectsGridComponent } from '../../shared/projects-grid/projects-grid.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SeoService } from '../../shared/seo/seo.service';

@Component({
  selector: 'app-realisations-hub',
  standalone: true,
  imports: [RouterLink, ProjectsGridComponent, RevealDirective],
  templateUrl: './realisations-hub.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RealisationsHub implements OnInit {
  private readonly seo = inject(SeoService);

  protected readonly projects = getProjectCards();

  protected readonly phoneHref = SITE_PHONE_HREF;

  ngOnInit(): void {
    this.seo.update({
      title: 'Réalisations | Groupe Afrimmo S.A.',
      description:
        'Références terrain — résidentiel, hôtellerie, industrie, santé — périmètres rappelés sur chaque fiche. Groupe Afrimmo S.A.',
    });
  }
}
