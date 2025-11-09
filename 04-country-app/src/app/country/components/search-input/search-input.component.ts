import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
})

export class SearchInputComponent {

  placeholder = input('Buscar');
  value = output<string>();
}
