import { Component, inject, OnInit } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
})

export class CountryPageComponent {

  countryCode: string = inject(ActivatedRoute).snapshot.params['code'] as string;
  countryService = inject(CountryService);
  countryResource = rxResource({
      params: () => this.countryCode,
      stream: ({ params }) => {
        return this.countryService.searchCountryByAlphaCode(params)
      }
    })

}
