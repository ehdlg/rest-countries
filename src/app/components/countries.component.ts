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
      class="grid xl:grid-cols-4 justify-items-center gap-y-28 lg:grid-cols-3 sm:grid-cols-2 mx-auto"
    >
      @if(data$ | async; as countries){
      <div
        class="w-[350px] rounded-xl shadow-lg hover:cursor-pointer hover:shadow-2xl hover:-translate-y-3 transition ease-in duration-200"
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
