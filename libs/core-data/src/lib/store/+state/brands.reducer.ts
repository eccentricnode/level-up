import { BrandsAction, BrandsActionTypes } from './brands.actions';

export const BRANDS_FEATURE_KEY = 'brands';

/**
 * Interface for the 'Brands' data used in
 *  - BrandsState, and
 *  - brandsReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface BrandsState {
  list: Entity[]; // list of Brands; analogous to a sql normalized table
  selectedId?: string | number; // which Brands record has been selected
  loaded: boolean; // has the Brands list been loaded
  error?: any; // last none error (if any)
}

export interface BrandsPartialState {
  readonly [BRANDS_FEATURE_KEY]: BrandsState;
}

export const initialState: BrandsState = {
  list: [],
  loaded: false
};

export function brandsReducer(
  state: BrandsState = initialState,
  action: BrandsAction
): BrandsState {
  switch (action.type) {
    case BrandsActionTypes.BrandsLoaded: {
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
