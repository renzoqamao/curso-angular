import { Component, computed, inject, OnInit } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import {toSignal} from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'gif-history',
  templateUrl: './gif-history.component.html',
  imports: [GifListComponent],
})
export default class GifHistoryComponent {

  /*query = inject(ActivatedRoute).params.subscribe((params)=>{
    console.log(params['query'] );
  });*/

  gifService = inject(GifService);

  query = toSignal(inject(ActivatedRoute).params.pipe(
    map((params)=> params['query']),
  ));

  gifsByKey = computed(()=>this.gifService.getHistoryGifs(this.query()));

}
