import { Action } from '@ngrx/store';
import { Video } from '../../youtube/video.model';

export enum VideosActionTypes {
  VideosAction = '[Videos] Action',
  VideoSelected = '[Videos] Selected',
  LoadVideos = '[Videos] Load Videos',
  VideosLoaded = '[Videos] Videos Loaded',
}

export class Videos implements Action {
  readonly type = VideosActionTypes.VideosAction;
}

export class VideoSelected implements Action {
  readonly type = VideosActionTypes.VideoSelected;
  constructor(public payload) { }
}

export class LoadVideos implements Action {
  readonly type = VideosActionTypes.LoadVideos;
}

export class VideosLoaded implements Action {
  readonly type = VideosActionTypes.VideosLoaded;
  constructor(public payload: Video[]) {}
}

export type VideosAction = Videos
  | VideoSelected
  | LoadVideos 
  | VideosLoaded
;