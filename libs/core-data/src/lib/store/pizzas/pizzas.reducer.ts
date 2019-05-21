import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Pizza } from '../../pizza/pizza.model';

import { PizzasAction, PizzasActionTypes } from './pizzas.actions';

export interface PizzasState extends EntityState<Pizza> {
  selectPizzaId: string | null;
}

export const adapter: EntityAdapter<Pizza> = createEntityAdapter<Pizza>();
export const initialState: PizzasState = adapter.getInitialState ({
  selectPizzaId: null,
});

export function pizzasReducer(state: PizzasState = initialState, action: PizzasAction): PizzasState {
  switch (action.type) {
    case PizzasActionTypes.PizzasLoaded: {
      return adapter.addAll(action.payload, state);
    }

    default: 
      return state;
  }
}

export const getSelectedPizzaId = (state: PizzasState) => state.selectPizzaId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of pizzas ids
export const selectPizzaIds = selectIds;

// select the dictionary of pizza entities
export const selectPizzaEntities = selectEntities;

// select array of pizzas 
export const selectAllPizzas = selectAll;

// select the total pizza count: 
export const selectPizzaTotal = selectTotal;