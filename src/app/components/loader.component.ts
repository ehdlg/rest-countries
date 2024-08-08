import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  template: `
    <div class="flex items-center justify-center min-h-screen">
      <div
        class="border-4 border-t-transparent rounded-full w-48 h-48 animate-spin border-gray-800 dark:border-gray-200 dark:border-t-transparent"
      ></div>
    </div>
  `,
})
export class LoaderComponent {}
