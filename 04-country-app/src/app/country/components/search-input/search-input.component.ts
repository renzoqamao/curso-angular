import { Component, effect, input, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
})

export class SearchInputComponent {

  placeholder = input('Buscar');
  value = output<string>();
  inputValue = signal<string>('');
  debounceTime= input(300);

  debounceEffect = effect((onCleanUp)=>{
    const value = this.inputValue();
    const timeout = setTimeout(()=>{
      this.value.emit(value);
    },this.debounceTime());
    onCleanUp(()=>{
      clearTimeout(timeout);
    });
  });
}
