import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { VideosState } from './videos.reducer';
import {
  LoadVideos,
  VideosLoaded,
  VideosActionTypes
} from './videos.actions';

import { YoutubeService } from '../../youtube/youtube.service';
import { Video } from '../../youtube/video.model';

@Injectable()
export class VideosEffects {
  @Effect() loadVideos$ = this.dataPersistence.fetch(
    VideosActionTypes.LoadVideos,
    {
      run: (action: LoadVideos, state: VideosState) => {
        return this.youtubeService.getUrl().pipe(map((res: Video[]) => new VideosLoaded(res)));
      },

      onError: (action: LoadVideos, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<VideosState>,
    private youtubeService: YoutubeService
  ) {}
}
