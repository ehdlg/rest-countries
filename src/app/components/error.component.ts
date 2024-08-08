import { Component } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if (error$ | async; as error) {
    <div
      class="mt-8 p-4 bg-red-200 border-none rounded max-w-[800px] min-w-[250px] w-full mx-auto"
    >
      <h2 class="text-2xl font-bold text-red-500">Error:</h2>
      <p class="text-red-500 text-lg">{{ error }}</p>
    </div>
    }
  `,
})
export class ErrorComponent {
  constructor(private errorService: ErrorService) {}
  public error$ = this.errorService.error$;
}
