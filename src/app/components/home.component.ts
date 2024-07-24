import { Component } from '@angular/core';
import { CountriesComponent } from './countries.component';
import { HeaderComponent } from './header.component';
import { RouterOutlet } from '@angular/router';
import { CountriesService } from '../services/countries.service';
import { Observable } from 'rxjs';
import { Country, AllRegions } from '../../interfaces';
import { SearchComponent } from './search.component';
import { REGION_FILTERS } from '../../constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountriesComponent, HeaderComponent, SearchComponent],
  template: `
    <app-search (regionEmitter)="updateRegion($event)" />
    <app-countries [data$]="data$" />
  `,
})
export class HomeComponent {
  public data$!: Observable<Country[]>;

  constructor(private service: CountriesService) {
    this.data$ = this.service.get();
  }

  public updateRegion(newRegion: AllRegions) {
    const endpoint = REGION_FILTERS[newRegion];

    this.data$ = this.service.get(endpoint);
  }
}
