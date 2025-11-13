import { Component, input, OnInit } from '@angular/core';
import { RestCountry } from '../../interfaces/rest-country.interfaces';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html'
})

export class CountryListComponent {

  countries = input.required<Country[]>();
}
