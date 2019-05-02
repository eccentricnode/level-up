import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Starship } from '../../starships/starship.model';

import { StarshipsAction, StarshipsActionTypes } from './starships.actions';


export interface StarshipsState extends EntityState<Starship> {
  selectedStarshipId: string | null;
}

export const adapter: EntityAdapter<Starship> = createEntityAdapter<Starship>();
export const initialState: StarshipsState = adapter.getInitialState({
  selectedStarshipId: null,
});

export function starshipsReducer(state = initialState, action: StarshipsAction): StarshipsState {
  switch (action.type) {
    case StarshipsActionTypes.StarshipSelected: {
      return Object.assign({}, state, { selectedStarshipId: action.payload.id });
    };

    case StarshipsActionTypes.StarshipsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    default: 
      return state;
  }
}

export const getSelectedStarshipId = (state: StarshipsState) => state.selectedStarshipId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of starship ids
export const selectStarshipIds = selectIds;

// select the dictionary of starship entities
export const selectStarshipEntities = selectEntities;

// select the array of starships
export const selectAllStarships = selectAll;

// select the total starship count
export const selectStarshipTotal = selectTotal;