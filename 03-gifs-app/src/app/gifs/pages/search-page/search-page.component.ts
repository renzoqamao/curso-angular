import { Component, inject } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  imports: [GifListComponent],
})

export default class SearchPageComponent {

  GifService = inject(GifService);

  onSearch( query : string){
    this.GifService.searchGif(query);
  }
}
