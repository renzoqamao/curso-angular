import { Component, signal } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'character-add',
  templateUrl: './character-add.component.html'
})
export class characterAddComponent{

  name = signal('goku');
  power = signal(0);

  addCharacter(){
      console.log(this.name(), this.power());
      if(!this.name() || !this.power() || this.power()<=0)return;
      const newCharacter : Character = {
        id : 1000,
        name: this.name(),
        power: this.power(),
      };
      //this.characters.update((list)=>[...list,newCharacter]);
      console.log({newCharacter});
      this.resetFields();
    }

    resetFields(){
      this.name.set('');
      this.power.set(0);
    }
}
