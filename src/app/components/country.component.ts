import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a [routerLink]="country.name.common">
      <div class="w-full rounded grid grid-rows-2 gap-2 h-full">
        <div class="w-full">
          <img
            class="object-cover rounded h-52 w-full"
            [src]="country.flags.svg"
            alt=""
          />
        </div>
        <div class="m-4 flex flex-col justify-around">
          <h2 class="text-2xl font-bold mb-4">{{ country.name.common }}</h2>

          <div class="text-lg font-bold ml-2 -mt-2">
            <p>
              Population:
              <span class="font-normal">{{ country.population }}</span>
            </p>
            <p>
              Region: <span class="font-normal">{{ country.region }}</span>
            </p>
            <p>
              Capital: <span class="font-normal"> {{ country.capital }}</span>
            </p>
          </div>
        </div>
      </div>
    </a>
  `,
})
export class CountryComponent {
  @Input({ required: true }) country!: Country;
}
