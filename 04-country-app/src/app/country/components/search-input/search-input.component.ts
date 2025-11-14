import { Component, effect, input, linkedSignal, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
})

export class SearchInputComponent {

  placeholder = input('Buscar');
  value = output<string>();
  initialValue = input<string>('');
  inputValue = linkedSignal<string>(()=>this.initialValue() ?? '');
  debounceTime= input(1000);

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
