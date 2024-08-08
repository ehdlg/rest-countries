import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryComponent } from './country.component';
import { Country } from '../../interfaces';
import { AsyncPipe } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [AsyncPipe, CountryComponent, NgFor],
  template: `
    <div
      class="grid gap-x-32 gap-y-16 p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center"
    >
      @if(data$ | async; as countries){
      <div
        class="w-[300px] md:w-[350px] dark:bg-gray-700 rounded-xl shadow-lg hover:cursor-pointer hover:shadow-2xl hover:-translate-y-3 hover:-translate-x-1 transition ease-in duration-200"
        *ngFor="let country of countries"
      >
        <app-country [country]="country"></app-country>
      </div>
      }
    </div>
  `,
})
export class CountriesComponent {
  @Input({ required: true }) data$!: Observable<Country[]>;
}
