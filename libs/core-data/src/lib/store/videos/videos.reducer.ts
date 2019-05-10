import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { VideosAction, VideosActionTypes } from './videos.actions';

import { Video } from '../../youtube/video.model';

export interface VideosState extends EntityState<Video> {
  selectedVideoId: string | null;
}

export const adapter: EntityAdapter<Video> = createEntityAdapter<Video>();
export const initialState: VideosState = adapter.getInitialState ({
  selectedVideoId: null
});

export function videosReducer(state: VideosState = initialState, action: VideosAction): VideosState {
  switch (action.type) {
    case VideosActionTypes.VideoSelected: {
      return Object.assign({}, state, { selectedVideoId: action.payload.id });
    }
    
    case VideosActionTypes.VideosLoaded: {
      return adapter.addAll(action.payload, state);
    }
    default: 
      return state;
  }
}

export const getSelectedVideoId = (state: VideosState) => state.selectedVideoId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of video ids
export const selectVideoIds = selectIds;

// select the dictionary of video entities
export const selectVideoEntities = selectEntities;

// select the array of videos
export const selectAllVideos = selectAll;

// select the total video count
export const selectVideoTotal = selectTotal;