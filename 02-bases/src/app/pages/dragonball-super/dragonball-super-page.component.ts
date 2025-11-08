import { Component, inject } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list.component";
import { characterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from '../../services/dragonball.service';



@Component({
  templateUrl:  './dragonball-super-page.component.html',
  imports: [CharacterList, characterAddComponent],
  selector: 'dragonball-super'
})
export class DragonballSuperPageComponent{

  /*constructor(
    public dragonballService : DragonballService
  ){}*/

  public dragonballService = inject(DragonballService);

}
