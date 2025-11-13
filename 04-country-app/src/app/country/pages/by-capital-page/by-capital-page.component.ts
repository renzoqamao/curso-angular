import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'by-capital-page',
  templateUrl: './by-capital-page.component.html',
  imports: [SearchInputComponent, CountryListComponent]
})

export class ByCapitalPageComponent  {

  countryService = inject(CountryService);
  query = signal('');
  countryResource = resource({
    params:()=>({ query: this.query()}),
    loader: async ({params})=>{
      if(!params.query) return [];
      return await firstValueFrom(this.countryService.searchByCapital(params.query));
    }
  });

}
