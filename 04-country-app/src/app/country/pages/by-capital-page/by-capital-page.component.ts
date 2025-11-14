import { Component, inject, linkedSignal, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'by-capital-page',
  templateUrl: './by-capital-page.component.html',
  imports: [SearchInputComponent, CountryListComponent]
})

export class ByCapitalPageComponent {

  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal(()=>this.queryParam);
  countryResource = rxResource({
    params: this.query,
    stream: ({ params }) => {
      console.log({query: params})
      if (!params) return of([])
      return this.countryService.searchByCapital(params)
    }
  })

}
