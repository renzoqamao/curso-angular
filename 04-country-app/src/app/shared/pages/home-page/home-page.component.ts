import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'home-page',
  imports : [RouterLink],
  templateUrl: './home-page.component.html'
})

export class HomePageComponent{
}
