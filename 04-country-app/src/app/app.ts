import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePageComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('country-app');
}
