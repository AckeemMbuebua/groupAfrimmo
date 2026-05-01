import {
  ChangeDetectionStrategy,
  Component,
  inject,
  type OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { getProjectCards } from '../../shared/content/projects.data';
import { ProjectsGridComponent } from '../../shared/projects-grid/projects-grid.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-realisations-hub',
  standalone: true,
  imports: [RouterLink, ProjectsGridComponent, RevealDirective],
  templateUrl: './realisations-hub.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RealisationsHubComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  protected readonly projects = getProjectCards();

  protected readonly phoneHref = 'tel:+243899450037';

  ngOnInit(): void {
    this.title.setTitle('Réalisations | Groupe Afrimmo S.A.');
    this.meta.updateTag({
      name: 'description',
      content:
        'Réalisations représentatives en construction résidentielle, hôtelière, industrie et programmes publics — Groupe Afrimmo S.A., RDC & missions régionales.',
    });
  }
}
