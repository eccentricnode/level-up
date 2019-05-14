import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { LeaguesAction, LeaguesActionTypes } from './leagues.actions';

import { League } from '../../leagues/league.model';

export interface LeaguesState extends EntityState<League> {
  selectedLeagueId: string | null;
}

export const adapter: EntityAdapter<League> = createEntityAdapter<League>();
export const initialState: LeaguesState = adapter.getInitialState({
  selectedLeagueId: null
});

export function leaguesReducer(state: LeaguesState = initialState, action: LeaguesAction): LeaguesState {
  switch (action.type) {
    case LeaguesActionTypes.LeagueSelected: {
      return Object.assign({}, state, { selectedLeagueId: action.payload.id });
    }

    case LeaguesActionTypes.LeaguesLoaded: {
     return adapter.addAll(action.payload, state);
    }

    default: 
      return state;
  }
}

export const getSelectedLeagueId = (state: LeaguesState) => state.selectedLeagueId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of league ids
export const selectLeagueIds = selectIds;

// select the array of leagues
export const selectLeagueEntities = selectEntities;

// select the array of leagues
export const selectAllLeagues = selectAll;

// select the total league count
export const selectLeagueTotal = selectTotal;