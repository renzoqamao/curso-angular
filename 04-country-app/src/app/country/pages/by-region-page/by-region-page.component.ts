import { Component, inject, linkedSignal, OnInit, signal } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.interface';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';

function validateQueryParam(queryParam:string):Region{
  const validRegions: Record<string,Region>={

  };

  return validRegions[queryParam]??'America';
}

@Component({
  selector: 'by-region-page',
  templateUrl: './by-region-page.component.html',
  imports: [CountryListComponent]
})
export class ByRegionPageComponent {

  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = validateQueryParam(this.activatedRoute.snapshot.queryParamMap.get('region')?? '' ) ;// (this.activatedRoute.snapshot.queryParamMap.get('region') ?? '') as Region;
  public regions: Region[] = [
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  selectedRegion = linkedSignal<Region>(()=> validateQueryParam(this.queryParam))

  countryResource = rxResource({
    params: this.selectedRegion,
    stream: ({ params }) => {
      if (!params) return of([])
      this.router.navigate(['/country/by-region'], {
        queryParams: {
          region: params
        }
      });
      return this.countryService.searchByRegion(params)
    }
  })


}
