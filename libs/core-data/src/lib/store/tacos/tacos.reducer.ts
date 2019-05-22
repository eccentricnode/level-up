import { TacosAction, TacosActionTypes } from './tacos.actions';

export const TACOS_FEATURE_KEY = 'tacos';

/**
 * Interface for the 'Tacos' data used in
 *  - TacosState, and
 *  - tacosReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface TacosState {
  list: Entity[]; // list of Tacos; analogous to a sql normalized table
  selectedId?: string | number; // which Tacos record has been selected
  loaded: boolean; // has the Tacos list been loaded
  error?: any; // last none error (if any)
}

export interface TacosPartialState {
  readonly [TACOS_FEATURE_KEY]: TacosState;
}

export const initialState: TacosState = {
  list: [],
  loaded: false
};

export function tacosReducer(
  state: TacosState = initialState,
  action: TacosAction
): TacosState {
  switch (action.type) {
    case TacosActionTypes.TacosLoaded: {
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
