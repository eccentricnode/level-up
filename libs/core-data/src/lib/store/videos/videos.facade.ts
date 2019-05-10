import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllVideos, selectCurrentVideo } from '..';
import * as VideosActions from './videos.actions';
import { VideosState } from './videos.reducer';
import { Observable } from 'rxjs';
import { Video } from '@level/core-data';

@Injectable()
export class VideosFacade {
  playlist$ = this.store.pipe(select(selectAllVideos));
  selectedVideos$: Observable<Video> = this.store.pipe(select(selectCurrentVideo));

  constructor(private store: Store<VideosState>) {}

  selectVideo(video) {
    this.store.dispatch(new VideosActions.VideoSelected(video));
  }

  loadVideos() {
    this.store.dispatch(new VideosActions.LoadVideos());
  }
}
