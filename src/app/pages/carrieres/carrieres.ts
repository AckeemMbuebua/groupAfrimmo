import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_EMAIL_HREF } from '../../shared/content/contact.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SeoService } from '../../shared/seo/seo.service';
import { LocaleService } from '../../content/locale.service';

@Component({
  selector: 'app-carrieres',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './carrieres.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Carrieres {
  private readonly seo = inject(SeoService);
  protected readonly locale = inject(LocaleService);

  protected readonly roles = computed(() => this.locale.site().carrieres.jobs);

  constructor() {
    effect(() => {
      this.seo.update(this.locale.site().seo.pages.carrieres);
    });
  }

  protected mailForRole(title: string): string {
    const subject = `${this.locale.site().pages.carrieres.mailSubjectPrefix}${title}`;
    return `${SITE_EMAIL_HREF}?subject=${encodeURIComponent(subject)}`;
  }
}
