import { Component, OnInit, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'by-country-page',
  templateUrl: './by-country-page.component.html',
  imports: [SearchInputComponent, CountryListComponent]
})

export class ByCountryPageComponent  {
  countries = signal<Country[]>([]);
}
