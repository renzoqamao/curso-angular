import { Component, OnInit } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';

@Component({
  selector: 'by-region-page',
  templateUrl: './by-region-page.component.html',
  imports:[CountryListComponent]
})

export class ByRegionPageComponent  {
}
