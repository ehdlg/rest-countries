import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { LoaderComponent } from './loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoaderComponent],
  template: `
    <app-header />
    <main class="max-w-[1900px] px-4 mt-20 mx-auto">
      <router-outlet />
      <app-loader />
    </main>
  `,
})
export class AppComponent {}
