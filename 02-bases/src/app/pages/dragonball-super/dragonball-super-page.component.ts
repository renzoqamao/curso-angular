import { Component, computed, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list.component";
import { Character } from "../../interfaces/character.interface";
import { characterAddComponent } from "../../components/dragonball/character-add/character-add.component";



@Component({
  templateUrl:  './dragonball-super-page.component.html',
  imports: [CharacterList, characterAddComponent],
  selector: 'dragonball-super'
})
export class DragonballSuperPageComponent{

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name : "goku", power: 9001},
    {id: 2, name : "vegeta", power: 9000}]);


    addCharacter(character : Character){
      this.characters.update((list)=>[...list, character]);
    }


}
