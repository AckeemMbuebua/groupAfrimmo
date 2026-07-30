import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { FooterNavLink } from '../../shared/landing/landing.models';
import { injectLocaleContent } from '../../content/inject-locale-content';
import {
  SITE_EMAIL_DISPLAY,
  SITE_EMAIL_HREF,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_HREF,
  SITE_WHATSAPP_HREF,
} from '../../shared/content/contact.data';
import { HomeAnimationReplayService } from '../../shared/animations/home-animation-replay.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly i18n = injectLocaleContent();
  private readonly homeAnimationReplay = inject(HomeAnimationReplayService);

  protected readonly site = this.i18n.site;

  protected readonly footerLinks = computed(() => this.site().navigation.footer);

  protected readonly phoneDisplay = SITE_PHONE_DISPLAY;

  protected readonly phoneHref = SITE_PHONE_HREF;

  protected readonly whatsappHref = SITE_WHATSAPP_HREF;

  protected readonly mailHref = SITE_EMAIL_HREF;

  protected readonly mailDisplay = SITE_EMAIL_DISPLAY;

  protected itemLabel(item: FooterNavLink): string {
    if (item.kind === 'homeFragment') {
      return `f:${item.fragment}`;
    }
    if (item.kind === 'route') {
      return `r:${item.path}`;
    }
    return `e:${item.href}`;
  }

  protected onHomeFragmentClick(fragment: string): void {
    if (fragment === 'home') {
      this.homeAnimationReplay.scrollToHomeAndReplayAnimations();
    }
  }
}
