import { Component, signal } from "@angular/core";

interface Character{
  id : number;
  name : string;
  power : number;
}

@Component({
  templateUrl:  './dragonball-page.component.html',
})
export class DragonballPageComponent{

  characters = signal<Character[]>([
    {id: 1, name : "goku", power: 9001},
    {id: 2, name : "vegeta", power: 9002},
    {id: 3, name : "picolo", power: 9003}])
}
