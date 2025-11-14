import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RestCountry } from '../interfaces/rest-country.interfaces';
import { catchError, delay, map, of, tap, throwError } from 'rxjs';
import { CountryMapper } from '../../mappers/country.mapper';
import { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({providedIn: 'root'})
export class CountryService {

  private http = inject(HttpClient);
  private queryCacheCapital = new Map<string, Country[]>();

  searchByCapital(query: string){
    query = query.toLowerCase();
    if( this.queryCacheCapital.has(query)) return of(this.queryCacheCapital.get(query));
    return this.http.get<RestCountry[]>(`${API_URL}/capital/${query}`)
    .pipe(
      map(restCountries => CountryMapper.mapRestCountryArrayToCountryArray(restCountries) ),
      tap((countries)=> this.queryCacheCapital.set(query,countries)),
      catchError((error)=>{
        return throwError(()=> new Error(`No se pudo obtener países con ese query ${query}`));
      }

      )
    );
  }

  searchByCountry(query: string){
    query= query.toLowerCase();
     return this.http.get<RestCountry[]>(`${API_URL}/name/${query}`)
    .pipe(
      map(restCountries => CountryMapper.mapRestCountryArrayToCountryArray(restCountries) ),
      delay(2000),
      catchError((error)=>{
        return throwError(()=> new Error(`No se pudo obtener países con ese query ${query}`));
      }

      )
    );
  }

  searchCountryByAlphaCode(code: string){
     return this.http.get<RestCountry[]>(`${API_URL}/alpha/${code}`)
    .pipe(
      map(restCountries => CountryMapper.mapRestCountryArrayToCountryArray(restCountries) ),
      map(countries => countries.at(0)),
      catchError((error)=>{
        return throwError(()=> new Error(`No se pudo obtener países con ese codigo ${code}`));
      }

      )
    );
  }

}
