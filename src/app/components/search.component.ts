import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, TitleCasePipe } from '@angular/common';
import { isValidRegion, Region, AllRegions } from '../../interfaces';
import { REGION_FILTERS } from '../../constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgFor],
  template: `
    <div class="flex justify-between  w-full p-4 mb-12">
      <form (submit)="onSubmit()">
        <input
          type="text"
          placeholder="Search country"
          name="country"
          [(ngModel)]="country"
          class="min-w-[200px] p-4 outline-none border-none rounded shadow-lg bg-white"
        />
        <button type="submit">submit</button>
      </form>

      <select
        name=""
        id=""
        class="p-4 rounded bg-white shadow-lg hover:cursor-pointer"
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
