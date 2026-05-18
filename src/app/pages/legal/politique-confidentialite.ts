import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_EMAIL_DISPLAY, SITE_EMAIL_HREF } from '../../shared/content/contact.data';
import { SeoService } from '../../shared/seo/seo.service';
import { LocaleService } from '../../content/locale.service';

@Component({
  selector: 'app-politique-confidentialite',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './politique-confidentialite.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolitiqueConfidentialite {
  private readonly seo = inject(SeoService);
  protected readonly locale = inject(LocaleService);

  protected readonly mailDisplay = SITE_EMAIL_DISPLAY;
  protected readonly mailHref = SITE_EMAIL_HREF;

  constructor() {
    effect(() => {
      this.seo.update(this.locale.site().seo.pages.politiqueConfidentialite);
    });
  }
}
