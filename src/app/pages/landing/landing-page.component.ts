import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutSectionComponent } from '../../sections/about/about-section.component';
import { HeroSectionComponent } from '../../sections/hero/hero-section.component';
import { MarqueeSectionComponent } from '../../sections/marquee/marquee-section.component';
import { StatsSectionComponent } from '../../sections/stats/stats-section.component';
import { ExpertiseSectionComponent } from '../../sections/expertise/expertise-section.component';
import { ServicesSectionComponent } from '../../sections/services/services-section.component';
import { MethodSectionComponent } from '../../sections/method/method-section.component';
import { ProjectsSectionComponent } from '../../sections/projects/projects-section.component';
import { EngagementSectionComponent } from '../../sections/engagement/engagement-section.component';
import { TestimonialsSectionComponent } from '../../sections/testimonials/testimonials-section.component';
import { FaqSectionComponent } from '../../sections/faq/faq-section.component';
import { ContactSectionComponent } from '../../sections/contact/contact-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    AboutSectionComponent,
    HeroSectionComponent,
    MarqueeSectionComponent,
    StatsSectionComponent,
    ExpertiseSectionComponent,
    ServicesSectionComponent,
    MethodSectionComponent,
    ProjectsSectionComponent,
    EngagementSectionComponent,
    TestimonialsSectionComponent,
    FaqSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {}
