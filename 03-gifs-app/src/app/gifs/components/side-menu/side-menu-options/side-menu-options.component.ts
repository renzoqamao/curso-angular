import { Component } from '@angular/core';
import { MenuOption } from '../../../interfaces/MenuOption';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'gifs-side-menu-options',
  templateUrl: './side-menu-options.component.html',
  imports: [RouterLink, RouterLinkActive],
})

export class SideMenuOptionsComponent {
  menuOptions: MenuOption[] = [{
    icon: 'fa-solid fa-chart-line',
    label: 'Trending',
    subLabel: ' Gifs populares',
    route: '/dashboard/trending'
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    label: 'Buscador',
    subLabel: ' Buscar populares',
    route: '/dashboard/search',
  },
  ]
}

