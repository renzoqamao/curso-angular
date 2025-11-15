import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';

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

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    });
  });

}
