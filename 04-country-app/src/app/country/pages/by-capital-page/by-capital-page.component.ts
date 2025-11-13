import { Component, inject, OnInit, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { RestCountry } from '../../interfaces/rest-country.interfaces';
import { CountryMapper } from '../../../mappers/country.mapper';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'by-capital-page',
  templateUrl: './by-capital-page.component.html',
  imports: [SearchInputComponent, CountryListComponent]
})

export class ByCapitalPageComponent  {

  countryService = inject(CountryService);
  isLoading = signal(false);
  isError = signal<string|null>(null);
  countries = signal<Country[]>([]);

  onSearch(query : string){
    if(this.isLoading()) return;
    this.isLoading.set(true);
    this.isError.set(null);
    this.countryService
    .searchByCapital(query)
    .subscribe(
      {next:(countries)=>{
        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: (err)=>{
        this.isLoading.set(false);
        this.countries.set([]);
        this.isError.set(err);
      }}
    );
  }
}
