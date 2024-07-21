import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountriesService } from '../services/countries.service';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe],
  template: `
    <main>
      @if(data$ | async; as countries){ @for(country of countries; track 1){
      <p>{{ country.capital }}</p>
      } }
      <main>
        <router-outlet />
      </main>
    </main>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(private service: CountriesService) {}

  public data$!: Observable<Country[]>;

  ngOnInit(): void {
    this.data$ = this.service.get();
  }
}
