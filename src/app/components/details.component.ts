import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Country } from '../../interfaces';
import { Observable } from 'rxjs';
import { CountriesService } from '../services/countries.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterLink],
  template: `
    <a routerLink="/">
      <button
        class="outline-none px-10 py-2 shadow-lg bg-slate-100 border-none"
      >
        Back
      </button>
    </a>
    @if(data$ | async; as country){
    <div class="grid grid-cols-2 mx-auto max-w-[1600px] mt-20 gap-8 w-full">
      <div class="lg:h-[500px] lg:w-[750px]">
        <img class="w-full h-full" src="{{ country.flags.svg }}" alt="" />
      </div>

      <div class="flex flex-col justify-center gap-12">
        <div>
          <h2 class="text-3xl font-bold">{{ country.name.common }}</h2>
        </div>
        <div class="flex gap-20 country-details-data">
          <div class="flex flex-col gap-6">
            <p>
              Native name: <span>{{ getNativeName(country) }}</span>
            </p>
            <p>
              Population: <span>{{ country.population }}</span>
            </p>
            <p>
              Sub Region <span>{{ country.subregion }}</span>
            </p>
            <p>
              Capital: <span>{{ country.capital }}</span>
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <p>
              Top Level Domain: <span>{{ country.tld }}</span>
            </p>
            <p>
              Currencies: <span>{{ getCurrencies(country) }}</span>
            </p>
          </div>
        </div>

        @if(borderCountries$ | async; as borderCountries){

        <div class="flex gap-4 items-center font-lg w-full flex-wrap">
          <span class="font-bold">Border countries:</span>
          @for(borderCountry of borderCountries; track borderCountry){
          <a
            [routerLink]="['/', borderCountry]"
            class="p-4 bg-slate-100 rounded"
            >{{ borderCountry }}</a
          >
          }
        </div>
        }
      </div>
    </div>
    }
  `,
})
export class DetailsComponent implements OnChanges {
  @Input() country!: string;
  public nativeName!: string;
  public data$!: Observable<Country>;
  public borderCountries$: Observable<string[]> | null = null;
  public currencies!: string;

  constructor(private service: CountriesService) {}

  updateCountry() {
    this.data$ = this.service.getOne(this.country);

    this.data$.subscribe((country) => {
      if (country.borders && country.borders.length > 0) {
        this.borderCountries$ = this.service.getBorderCountriesName(
          country.borders
        );
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['country']) {
      this.updateCountry();
    }
  }

  getNativeName(data: Country) {
    return Object.entries(data.name.nativeName)[0][1].common;
  }

  getCurrencies(data: Country) {
    return Object.values(data.currencies)
      .map((key) => key.name)
      .join(', ');
  }
}
