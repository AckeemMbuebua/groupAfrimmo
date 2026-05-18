import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { AboutSection } from '../../sections/about/about-section';
import { HeroSection } from '../../sections/hero/hero-section';
import { StatsSection } from '../../sections/stats/stats-section';
import { ExpertiseSection } from '../../sections/expertise/expertise-section';
import { ServicesSection } from '../../sections/services/services-section';
import { MethodSection } from '../../sections/method/method-section';
import { ProjectsSection } from '../../sections/projects/projects-section';
import { EngagementSection } from '../../sections/engagement/engagement-section';
import { TestimonialsSection } from '../../sections/testimonials/testimonials-section';
import { FaqSection } from '../../sections/faq/faq-section';
import { ContactSection } from '../../sections/contact/contact-section';
import { injectLocaleContent } from '../../content/inject-locale-content';
import { SeoService } from '../../shared/seo/seo.service';

@Component({
  selector: 'app-landing-page',
  imports: [
    AboutSection,
    HeroSection,
    StatsSection,
    ExpertiseSection,
    ServicesSection,
    MethodSection,
    ProjectsSection,
    EngagementSection,
    TestimonialsSection,
    FaqSection,
    ContactSection,
  ],
  templateUrl: './landing-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage {
  private readonly seo = inject(SeoService);
  private readonly home = injectLocaleContent().home;

  constructor() {
    effect(() => {
      this.seo.update(this.home().seo);
    });
  }
}
