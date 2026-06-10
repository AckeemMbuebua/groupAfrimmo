import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  template: `
    <app-navbar />
    <main class="min-h-svh">
      <router-outlet />
    </main>
    <app-footer />
  `,
})
export class App {}
