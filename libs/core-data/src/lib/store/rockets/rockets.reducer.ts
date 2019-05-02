import { RocketsAction, RocketsActionTypes } from './rockets.actions';

export const ROCKETS_FEATURE_KEY = 'rockets';

/**
 * Interface for the 'Rockets' data used in
 *  - RocketsState, and
 *  - rocketsReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface RocketsState {
  list: Entity[]; // list of Rockets; analogous to a sql normalized table
  selectedId?: string | number; // which Rockets record has been selected
  loaded: boolean; // has the Rockets list been loaded
  error?: any; // last none error (if any)
}

export interface RocketsPartialState {
  readonly [ROCKETS_FEATURE_KEY]: RocketsState;
}

export const initialState: RocketsState = {
  list: [],
  loaded: false
};

export function rocketsReducer(
  state: RocketsState = initialState,
  action: RocketsAction
): RocketsState {
  switch (action.type) {
    case RocketsActionTypes.RocketsLoaded: {
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
