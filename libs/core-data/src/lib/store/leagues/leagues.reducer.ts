import { LeaguesAction, LeaguesActionTypes } from './leagues.actions';

export const LEAGUES_FEATURE_KEY = 'leagues';

/**
 * Interface for the 'Leagues' data used in
 *  - LeaguesState, and
 *  - leaguesReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface LeaguesState {
  list: Entity[]; // list of Leagues; analogous to a sql normalized table
  selectedId?: string | number; // which Leagues record has been selected
  loaded: boolean; // has the Leagues list been loaded
  error?: any; // last none error (if any)
}

export interface LeaguesPartialState {
  readonly [LEAGUES_FEATURE_KEY]: LeaguesState;
}

export const initialState: LeaguesState = {
  list: [],
  loaded: false
};

export function leaguesReducer(
  state: LeaguesState = initialState,
  action: LeaguesAction
): LeaguesState {
  switch (action.type) {
    case LeaguesActionTypes.LeaguesLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
