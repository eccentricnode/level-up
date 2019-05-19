import { FruitsAction, FruitsActionTypes } from './fruits.actions';

export const FRUITS_FEATURE_KEY = 'fruits';

/**
 * Interface for the 'Fruits' data used in
 *  - FruitsState, and
 *  - fruitsReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface FruitsState {
  list: Entity[]; // list of Fruits; analogous to a sql normalized table
  selectedId?: string | number; // which Fruits record has been selected
  loaded: boolean; // has the Fruits list been loaded
  error?: any; // last none error (if any)
}

export interface FruitsPartialState {
  readonly [FRUITS_FEATURE_KEY]: FruitsState;
}

export const initialState: FruitsState = {
  list: [],
  loaded: false
};

export function fruitsReducer(
  state: FruitsState = initialState,
  action: FruitsAction
): FruitsState {
  switch (action.type) {
    case FruitsActionTypes.FruitsLoaded: {
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
