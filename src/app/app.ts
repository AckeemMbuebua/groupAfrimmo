import { Component } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroSectionComponent } from './sections/hero/hero-section.component';
import { MarqueeSectionComponent } from './sections/marquee/marquee-section.component';
import { StatsSectionComponent } from './sections/stats/stats-section.component';
import { ProfileSectionComponent } from './sections/profile/profile-section.component';
import { ExpertiseSectionComponent } from './sections/expertise/expertise-section.component';
import { MethodSectionComponent } from './sections/method/method-section.component';
import { ProjectsSectionComponent } from './sections/projects/projects-section.component';
import { TestimonialsSectionComponent } from './sections/testimonials/testimonials-section.component';
import { FaqSectionComponent } from './sections/faq/faq-section.component';
import { ContactSectionComponent } from './sections/contact/contact-section.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroSectionComponent,
    MarqueeSectionComponent,
    StatsSectionComponent,
    ProfileSectionComponent,
    ExpertiseSectionComponent,
    MethodSectionComponent,
    ProjectsSectionComponent,
    TestimonialsSectionComponent,
    FaqSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './app.html',
})
export class App {}
