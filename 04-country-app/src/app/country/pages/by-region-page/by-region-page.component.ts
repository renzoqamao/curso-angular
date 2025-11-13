import { Component, OnInit, signal } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'by-region-page',
  templateUrl: './by-region-page.component.html',
  imports:[CountryListComponent]
})

export class ByRegionPageComponent  {
countries = signal<Country[]>([]);
}
