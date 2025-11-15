import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports:[LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-page.component.html'
})

export default class BasicPageComponent {

  nameLower = signal('Renzo');
  nameUpper = signal('RENZO');
  fullName = signal('RenZo QUisPe AmAo');

}
