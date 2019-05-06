import { CitiesAction, CitiesActionTypes } from './cities.actions';

export const CITIES_FEATURE_KEY = 'cities';

/**
 * Interface for the 'Cities' data used in
 *  - CitiesState, and
 *  - citiesReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface CitiesState {
  list: Entity[]; // list of Cities; analogous to a sql normalized table
  selectedId?: string | number; // which Cities record has been selected
  loaded: boolean; // has the Cities list been loaded
  error?: any; // last none error (if any)
}

export interface CitiesPartialState {
  readonly [CITIES_FEATURE_KEY]: CitiesState;
}

export const initialState: CitiesState = {
  list: [],
  loaded: false
};

export function citiesReducer(
  state: CitiesState = initialState,
  action: CitiesAction
): CitiesState {
  switch (action.type) {
    case CitiesActionTypes.CitiesLoaded: {
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
