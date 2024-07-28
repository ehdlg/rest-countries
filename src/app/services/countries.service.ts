import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, COUNTRY_FIELDS } from '../../constants';
import { forkJoin, map, Observable } from 'rxjs';
import { Country } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  get(filter = 'all'): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${API_URL}${filter}?fields=${COUNTRY_FIELDS.join(',')}`)
      .pipe(
        map((data) => {
          return data.sort((a, b) => (a.name.common >= b.name.common ? 1 : -1));
        })
      );
  }

  getOne(country: string): Observable<Country> {
    return this.http
      .get<Country[]>(
        `${API_URL}name/${country}?fields=${COUNTRY_FIELDS.join(',')}`
      )
      .pipe(map(([data]) => data));
  }

  getBorderCountriesName(codes: string[]): Observable<string[]> {
    const requests = codes.map((code) =>
      this.http
        .get<Country[]>(`${API_URL}alpha/${code}`)
        .pipe(map(([data]) => data.name.common))
    );

    return forkJoin(requests);
  }
}
