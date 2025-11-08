import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DragonballService {
  characters = signal<Character[]>([
    {id: 1, name : "goku", power: 9001},
    {id: 2, name : "vegeta", power: 9000}]);


    addCharacter(character : Character){
      this.characters.update((list)=>[...list, character]);
    }

}


// al ser un servicio es un singleton y siempre tendremos la misma instancia.s
