import { Component, inject, OnInit, signal } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.interface';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'by-region-page',
  templateUrl: './by-region-page.component.html',
  imports:[CountryListComponent]
})

export class ByRegionPageComponent  {

  countryService = inject(CountryService);
  public regions: Region[] = [
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  selectedRegion = signal<Region|null>(null);

  countryResource = rxResource({
    params: this.selectedRegion,
    stream: ({ params }) => {
      if (!params) return of([])
      return this.countryService.searchByRegion(params)
    }
  })


}
