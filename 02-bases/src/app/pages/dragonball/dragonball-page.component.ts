import { NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

interface Character{
  id : number;
  name : string;
  power : number;
}

@Component({
  templateUrl:  './dragonball-page.component.html',
  //imports: [NgClass],
})
export class DragonballPageComponent{

  characters = signal<Character[]>([
    {id: 1, name : "goku", power: 9001},
    {id: 2, name : "vegeta", power: 9000},
    {id: 3, name : "picolo", power: 3000},
    {id: 4, name : "yamcha", power: 500}]);

    /*powerClasses = computed(()=>{
      return {
        'text-danger':true,
      }
    });*/
}
