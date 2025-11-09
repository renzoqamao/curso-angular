import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  imports: [GifListComponent],
})

export default class SearchPageComponent {

  GifService = inject(GifService);

  gifs = signal<Gif[]>([]);

  onSearch( query : string){
    this.GifService.searchGif(query).subscribe((resp)=>{ this.gifs.set(resp)});
  }
}
