import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "../../components/side-menu/side-menu.component";

@Component({
  imports: [RouterOutlet, SideMenuComponent],
  selector: 'dashboard-page-component',
  templateUrl: './dashboard-page.component.html',
})

export default class DashboardPageComponent {
}

