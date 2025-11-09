import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

/*{
  'goku': [gif1,gif2,gif3],
  'saitama' : [gif1,gif2,gif3]
}
Record<string, Gif[]>
*/
@Injectable({providedIn: 'root'})
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);
  searchHistory = signal<Record<string, Gif[]>>({});
  searchHistoryKeys = computed(()=>Object.keys(this.searchHistory()));

  constructor(){
    //this.loadTrendingGifs();
    console.log("servicio creado");
  }

  loadTrendingGifs(){
    this.http.get<GiphyResponse>(`${ environment.giphyUrl}/gifs/trending`,
      {
        params:{
          api_key: environment.giphyApiKey,
          limit:25,
          offset:0
        }
      }).subscribe((resp: GiphyResponse)=>{
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log({gifs});
      });
  }

  searchGif(query:string){
    return this.http.get<GiphyResponse>(`${ environment.giphyUrl}/gifs/search`,
      {
        params:{
          api_key: environment.giphyApiKey,
          limit:25,
          offset:0,
          q : query,
        }
      })
      .pipe(
        map(({data}) => data),
        map((items)=>{ return GifMapper.mapGiphyItemsToGifArray(items)}), // tap , etc
        //  TODO: Historial - tap es para efectos secundarios
        tap(items => {
          this.searchHistory.update(history => ({
            ...history,
            [query.toLowerCase()] : items
          }))
        }),
      );

      // .subscribe((resp: GiphyResponse)=>{
      //   const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      //   console.log({search: gifs});
      // });
  }

}
