import {
  ChangeDetectionStrategy,
  Component,
  inject,
  type OnInit,
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
export class LandingPage implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Groupe Afrimmo S.A. | Construction, génie civil, logistique & import-export',
      description:
        'Groupe Afrimmo S.A. accompagne vos projets de construction et de génie civil, infrastructures, logistique, import-export et approvisionnement en RDC, Afrique centrale et international.',
    });
  }
}
