import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  SITE_EMAIL_DISPLAY,
  SITE_EMAIL_HREF,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_HREF,
} from '../../shared/content/contact.data';
import { SeoService } from '../../shared/seo/seo.service';
import { LocaleService } from '../../content/locale.service';

@Component({
  selector: 'app-mentions-legales',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mentions-legales.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MentionsLegales {
  private readonly seo = inject(SeoService);
  protected readonly locale = inject(LocaleService);

  protected readonly mailDisplay = SITE_EMAIL_DISPLAY;
  protected readonly mailHref = SITE_EMAIL_HREF;
  protected readonly phoneDisplay = SITE_PHONE_DISPLAY;
  protected readonly phoneHref = SITE_PHONE_HREF;

  constructor() {
    effect(() => {
      this.seo.update(this.locale.site().seo.pages.mentionsLegales);
    });
  }
}
