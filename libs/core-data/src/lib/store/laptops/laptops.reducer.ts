import { LaptopsAction, LaptopsActionTypes } from './laptops.actions';

export const LAPTOPS_FEATURE_KEY = 'laptops';

/**
 * Interface for the 'Laptops' data used in
 *  - LaptopsState, and
 *  - laptopsReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface LaptopsState {
  list: Entity[]; // list of Laptops; analogous to a sql normalized table
  selectedId?: string | number; // which Laptops record has been selected
  loaded: boolean; // has the Laptops list been loaded
  error?: any; // last none error (if any)
}

export interface LaptopsPartialState {
  readonly [LAPTOPS_FEATURE_KEY]: LaptopsState;
}

export const initialState: LaptopsState = {
  list: [],
  loaded: false
};

export function laptopsReducer(
  state: LaptopsState = initialState,
  action: LaptopsAction
): LaptopsState {
  switch (action.type) {
    case LaptopsActionTypes.LaptopsLoaded: {
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
