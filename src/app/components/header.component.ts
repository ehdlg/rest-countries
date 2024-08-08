import { Component } from '@angular/core';
import { ThemeToggleIconComponent } from './theme-toggle-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeToggleIconComponent, RouterLink],
  template: `
    <header class="p-4 2xl:p-0 bg-white dark:bg-gray-700  drop-shadow-lg">
      <div
        class="max-w-[1900px] min-h-20 mx-auto flex justify-between items-center"
      >
        <a routerLink="/">
          <h2 class="text-2xl font-bold">Where in the world?</h2>
        </a>
        <div class="flex gap-2 items-center">
          <button id="toggleDark" (click)="toggleDarkMode()">
            <app-theme-toggle-icon
              [darkMode]="darkMode"
              class="size-8 text-slate-800 dark:text-slate-200"
            />
          </button>
          <label
            class="font-bold hover:cursor-pointer hidden lg:block"
            for="toggleDark"
            >{{ darkMode ? 'Light mode' : 'Dark mode' }}</label
          >
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  private static htmlElement = document.documentElement;
  public darkMode: boolean =
    HeaderComponent.htmlElement.classList.contains('dark');

  public toggleDarkMode() {
    if (HeaderComponent.htmlElement.classList.contains('dark')) {
      this.darkMode = false;
      window.localStorage.setItem('theme', 'light');
    } else {
      this.darkMode = true;
      window.localStorage.setItem('theme', 'dark');
    }

    HeaderComponent.htmlElement.classList.toggle('dark');
  }
}
