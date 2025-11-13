import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RestCountry } from '../interfaces/rest-country.interfaces';
import { map } from 'rxjs';
import { CountryMapper } from '../../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({providedIn: 'root'})
export class CountryService {

  private http = inject(HttpClient);

  searchByCapital(query: string){
    query = query.toLowerCase();
    return this.http.get<RestCountry[]>(`${API_URL}/capital/${query}`)
    .pipe(
      map(restCountries => CountryMapper.mapRestCountryArrayToCountryArray(restCountries) ),
    );

  }


}
