import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if (isLoading$ | async; as isLoading) {
    <div class="flex mt-20 justify-center min-h-screen">
      <div
        class="border-4 border-t-transparent rounded-full w-48 h-48 animate-spin border-gray-800 dark:border-gray-200 dark:border-t-transparent"
      ></div>
    </div>
    }
  `,
})
export class LoaderComponent {
  constructor(private loaderService: LoaderService) {}

  public isLoading$ = this.loaderService.isLoading$;
}
