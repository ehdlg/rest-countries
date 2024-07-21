import { Component } from '@angular/core';
import { ThemeToggleIconComponent } from './theme-toggle-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeToggleIconComponent],
  template: `
    <header class="bg-white dark:bg-slate-800 drop-shadow-sm">
      <div
        class="max-w-[1900px] min-h-20 mx-auto flex justify-between items-center"
      >
        <h2 class="text-2xl font-bold">Where in the world?</h2>

        <div class="flex gap-2 items-center">
          <button>
            <app-theme-toggle-icon
              [darkMode]="darkMode"
              class="size-8 text-slate-800 dark:text-slate-200"
            />
          </button>
          <span class="font-bold">Dark mode</span>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  public darkMode = true;
}
