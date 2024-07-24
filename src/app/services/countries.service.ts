import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, COUNTRY_FIELDS } from '../../constants';
import { map, Observable } from 'rxjs';
import { Country } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  get(filter = 'all'): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${API_URL}${filter}?${COUNTRY_FIELDS.join(',')}`)
      .pipe(
        map((data) => {
          return data.sort((a, b) => (a.name.common >= b.name.common ? 1 : -1));
        })
      );
  }
}
