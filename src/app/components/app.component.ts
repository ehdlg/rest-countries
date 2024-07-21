import { Component, OnInit } from '@angular/core';
import { CountriesComponent } from './countries.component';
import { HeaderComponent } from './header.component';
import { RouterOutlet } from '@angular/router';
import { CountriesService } from '../services/countries.service';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountriesComponent, HeaderComponent],
  template: `
    <app-header />
    <main class="max-w-[1900px] px-4 mt-20 mx-auto">
      <app-countries [data$]="data$" />
      <router-outlet />
    </main>
  `,
})
export class AppComponent {
  public data$!: Observable<Country[]>;

  constructor(private service: CountriesService) {
    this.data$ = this.service.get();
  }
}
