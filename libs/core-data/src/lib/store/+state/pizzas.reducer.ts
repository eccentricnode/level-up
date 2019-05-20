import { PizzasAction, PizzasActionTypes } from './pizzas.actions';

export const PIZZAS_FEATURE_KEY = 'pizzas';

/**
 * Interface for the 'Pizzas' data used in
 *  - PizzasState, and
 *  - pizzasReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface PizzasState {
  list: Entity[]; // list of Pizzas; analogous to a sql normalized table
  selectedId?: string | number; // which Pizzas record has been selected
  loaded: boolean; // has the Pizzas list been loaded
  error?: any; // last none error (if any)
}

export interface PizzasPartialState {
  readonly [PIZZAS_FEATURE_KEY]: PizzasState;
}

export const initialState: PizzasState = {
  list: [],
  loaded: false
};

export function pizzasReducer(
  state: PizzasState = initialState,
  action: PizzasAction
): PizzasState {
  switch (action.type) {
    case PizzasActionTypes.PizzasLoaded: {
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
