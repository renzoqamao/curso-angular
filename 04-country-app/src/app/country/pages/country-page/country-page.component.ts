import { Component, inject, OnInit } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { NotFoundComponent } from "../../../shared/components/not-found/not-found.component";
import { CountryInformationComponent } from "./country-information/country-information.component";

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
  imports: [NotFoundComponent, CountryInformationComponent],
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
