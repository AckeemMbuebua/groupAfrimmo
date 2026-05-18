import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_PHONE_HREF } from '../../shared/content/contact.data';
import { ProjectsGridComponent } from '../../shared/projects-grid/projects-grid.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SeoService } from '../../shared/seo/seo.service';
import { LocaleService } from '../../content/locale.service';

@Component({
  selector: 'app-realisations-hub',
  standalone: true,
  imports: [RouterLink, ProjectsGridComponent, RevealDirective],
  templateUrl: './realisations-hub.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RealisationsHub {
  private readonly seo = inject(SeoService);
  protected readonly locale = inject(LocaleService);

  protected readonly projects = computed(() => this.locale.site().projects.cards);

  protected readonly phoneHref = SITE_PHONE_HREF;

  constructor() {
    effect(() => {
      this.seo.update(this.locale.site().seo.pages.realisations);
    });
  }
}
