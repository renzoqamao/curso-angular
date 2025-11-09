import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
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

const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem('gifs') ?? '{}'; // Record<string, Gif[]>
  const gifs = JSON.parse(gifsFromLocalStorage);
  //console.log(gifs);
  return gifs;
}

@Injectable({ providedIn: 'root' })
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifGroup = computed<Gif[][]>(() => {
    const groups = [];
    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      groups.push(this.trendingGifs().slice(i, i + 3));
    }
    //console.log({groups: groups})
    return groups;
  });
  trendingGifsLoading = signal(false);
  private trendingPage = signal(0);
  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
  }

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem('gifs', historyString);
  });

  loadTrendingGifs() {
    if (this.trendingGifsLoading()) return;
    this.trendingGifsLoading.set(true);
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,
      {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          offset: this.trendingPage() * 20
        }
      }).subscribe((resp: GiphyResponse) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        this.trendingGifs.update(currentgifs =>[...currentgifs, ...gifs]);
        this.trendingPage.update(current => current + 1 );
        this.trendingGifsLoading.set(false);
        //console.log({gifs});
      });
  }

  searchGif(query: string): Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`,
      {
        params: {
          api_key: environment.giphyApiKey,
          limit: 25,
          offset: 0,
          q: query,
        }
      })
      .pipe(
        map(({ data }) => data),
        map((items) => { return GifMapper.mapGiphyItemsToGifArray(items) }), // tap , etc
        //  TODO: Historial - tap es para efectos secundarios
        tap(items => {
          this.searchHistory.update(history => ({
            ...history,
            [query.toLowerCase()]: items
          }))
        }),
      );

    // .subscribe((resp: GiphyResponse)=>{
    //   const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
    //   console.log({search: gifs});
    // });
  }

  getHistoryGifs(query: string) {
    return this.searchHistory()[query] ?? [];
  }

}
