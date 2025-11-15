import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/heroColor.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
@Component({
  selector: 'app-custom-page.component',
  imports: [ToggleCasePipe, CanFyPipe, HeroColorPipe, TitleCasePipe, HeroTextColorPipe, HeroCreatorPipe,HeroFilterPipe,HeroSortByPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Renzo Quispe');
  upperCase = signal(true);

  heroes = signal(heroes);
  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');

}
