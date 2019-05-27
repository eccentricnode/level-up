import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ScrollModel } from '../../scrolls/scroll.model';

import { ScrollsAction, ScrollsActionTypes } from './scrolls.actions';

export interface ScrollsState extends EntityState<ScrollModel> {
  selectedScrollId: string | null;
}

export const adapter: EntityAdapter<ScrollModel> = createEntityAdapter<ScrollModel>();
export const initialState: ScrollsState = adapter.getInitialState ({
  selectedScrollId: null,
});

export function scrollsReducer(state: ScrollsState = initialState, action: ScrollsAction): ScrollsState {
  switch (action.type) {
    case ScrollsActionTypes.ScrollsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    default: 
      return state;
  }
}

export const getSelectedScrollId = (state: ScrollsState) => state.selectedScrollId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of scroll ids
export const selectScrollIds = selectIds;

// select the dictionary of scroll entities
export const selectScrollEntities = selectEntities;

// select array of scrolls 
export const selectAllScrolls = selectAll;

// select the total scroll count: 
export const selectScrollTotal = selectTotal;