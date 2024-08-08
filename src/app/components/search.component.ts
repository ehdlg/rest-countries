import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { isValidRegion, Region, AllRegions } from '../../interfaces';
import { REGION_FILTERS } from '../../constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgFor],
  template: `
    <div class="flex justify-between  w-full p-4 mb-12 gap-2">
      <form
        class="w-5/6 md:w-1/3 p-4 outline-none border-none rounded shadow-lg bg-white dark:bg-gray-700 flex gap-2"
        (submit)="onSubmit()"
      >
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>

        <input
          type="text"
          placeholder="Search country"
          name="country"
          [(ngModel)]="country"
          class="w-full outline-none text-gray-800 text-xl dark:text-gray-200 bg-inherit"
        />
      </form>
      <select
        name="select-region"
        id="select-region"
        class="lg:w-1/6 w-1/4 dark:bg-gray-700 dark:text-gray-200 p-4 rounded bg-white shadow-lg hover:cursor-pointer"
        (change)="updateRegion($event)"
      >
        <option *ngFor="let option of options" [value]="option">
          {{ option }}
        </option>
      </select>
    </div>
  `,
})
export class SearchComponent {
  public country: string = '';
  public region = 'All';
  protected options = Object.keys(REGION_FILTERS);
  @Output() regionEmitter = new EventEmitter<AllRegions>();

  constructor(private route: Router) {}

  onSubmit() {
    if (null == this.country) return;

    this.route.navigate([this.country]);
  }

  updateRegion(e: Event) {
    if (!(e.target instanceof HTMLSelectElement)) return;

    const newRegion = e.target.value;

    if (!isValidRegion(newRegion)) return;

    this.regionEmitter.emit(newRegion);
  }
}
