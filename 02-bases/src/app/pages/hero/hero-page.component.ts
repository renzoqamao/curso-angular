import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  imports : [UpperCasePipe]
})
export class HeroPageComponent{

  name = signal("Ironman");
  age = signal(45);

  heroDescription = computed(()=>{ // deberia salir ReadOnlySignal
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  capitalizedName = computed(()=>{ // deberia salir ReadOnlySignal
    const capitalized = `${this.name().toUpperCase()}`;
    return capitalized;
  });
  /*getHeroDescription(){
    return `${this.name()} - ${this.age()}`;
  }*/

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge(){
    this.age.set(60);
  }
}
