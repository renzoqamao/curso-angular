import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, OnInit, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports:[LowerCasePipe, UpperCasePipe, TitleCasePipe,DatePipe],
  templateUrl: './basic-page.component.html'
})

export default class BasicPageComponent {

  nameLower = signal('Renzo');
  nameUpper = signal('RENZO');
  fullName = signal('RenZo QUisPe AmAo');

  customDate = signal(new Date());

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    });
  });

  changeLocale(locale: AvailableLocale) {
    console.log({ locale });
    this.localeService.changeLocale(locale);
  }
}
