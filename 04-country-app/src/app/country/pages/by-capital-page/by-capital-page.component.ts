import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop'
@Component({
  selector: 'by-capital-page',
  templateUrl: './by-capital-page.component.html',
  imports: [SearchInputComponent, CountryListComponent]
})

export class ByCapitalPageComponent {

  countryService = inject(CountryService);
  query = signal('');
  countryResource = rxResource({
    params: this.query,
    stream: ({ params }) => {
      if (!params) return of([])
      return this.countryService.searchByCapital(params)
    }
  })

}
