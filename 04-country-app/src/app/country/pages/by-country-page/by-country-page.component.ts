import { Component, inject, OnInit, resource, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'by-country-page',
  templateUrl: './by-country-page.component.html',
  imports: [SearchInputComponent, CountryListComponent]
})

export class ByCountryPageComponent  {
  countryService = inject(CountryService);
  query = signal('');
  countryResource = rxResource({
    params: this.query,
    stream: ({ params }) => {
      if (!params) return of([])
      return this.countryService.searchByCountry(params)
    }
  })
}
