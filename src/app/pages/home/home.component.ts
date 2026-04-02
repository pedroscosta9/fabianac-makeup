import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { MarqueeComponent } from '../../components/marquee/marquee.component';
import { ServicesComponent } from '../../components/services/services.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { BookingCtaComponent } from '../../components/booking-cta/booking-cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    MarqueeComponent,
    ServicesComponent,
    PortfolioComponent,
    TestimonialsComponent,
    CalendarComponent,
    BookingCtaComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-marquee></app-marquee>
    <app-services></app-services>
    <app-portfolio></app-portfolio>
    <app-testimonials></app-testimonials>
    <app-calendar></app-calendar>
    <app-booking-cta></app-booking-cta>
  `
})
export class HomeComponent {}
