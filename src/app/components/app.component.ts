import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <main class="max-w-[1900px] px-4 mt-20 mx-auto">
      <router-outlet />
    </main>
  `,
})
export class AppComponent {}
