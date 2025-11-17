import { Component, effect, inject, signal, Pipe } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { switchMap, tap } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-country-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {
  fb = inject(FormBuilder);
  countryService = inject(CountryService);
  regions = signal(this.countryService.regions);
  countriesByRegion = signal<Country[]>([]);
  borders = signal<Country[]>([]);

  myForm = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required]
  })

  onFormChanged = effect((onCleanup) => {
    const formRegionChanged = this.onRegionChanged();
    onCleanup(()=>{
      formRegionChanged.unsubscribe();
    });
  });

  onRegionChanged(){
    return this.myForm.get('region')!
    .valueChanges
    .pipe(
      tap((region)=>this.myForm.get('country')!.setValue('')),
      tap((region)=>this.myForm.get('border')!.setValue('')),
      tap((region)=>{
        this.borders.set([]);
        this.countriesByRegion.set([]);
      }),
      switchMap((region)=> this.countryService.getCountriesByRegion(region ?? ''))
    )
    .subscribe( (countries) =>{
      this.countriesByRegion.set(countries);
    })
  }

}
