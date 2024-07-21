import { Component, OnInit } from '@angular/core';
import { CountriesComponent } from './countries.component';
import { RouterOutlet } from '@angular/router';
import { CountriesService } from '../services/countries.service';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountriesComponent],
  template: `
    <main class="max-w-[2000px] mx-auto mt-12">
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
