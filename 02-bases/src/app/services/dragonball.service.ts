import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character []=>{
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

    saveToLocalStorage = effect(()=>{ //el efecto reacciona al cambio de la señal
      console.log(`Character count ${this.characters().length}`);
      localStorage.setItem('characters', JSON.stringify(this.characters()));
    });


    addCharacter(character : Character){
      this.characters.update((list)=>[...list, character]);
    }

}


// al ser un servicio es un singleton y siempre tendremos la misma instancia.s
