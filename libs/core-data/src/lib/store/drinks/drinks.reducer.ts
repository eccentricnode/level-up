import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { Drink } from '../../drinks/drink.model';

import { DrinksAction, DrinksActionTypes } from './drinks.actions';

export interface DrinksState extends EntityState<Drink>{
  selectDrinkId: string | null;
}

export const adapter: EntityAdapter<Drink> = createEntityAdapter<Drink>();
export const initialState: DrinksState = adapter.getInitialState ({
  selectDrinkId: null,
});

export function drinksReducer(state: DrinksState = initialState, action: DrinksAction): DrinksState {
  switch (action.type) {
    case DrinksActionTypes.DrinksLoaded: {
      return adapter.addAll(action.payload, state);
    }

    default: 
      return state;
  }
}

export const getSelectedDrinkId = (state: DrinksState) => state.selectDrinkId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of pizzas ids
export const selectDrinkIds = selectIds;

// select the dictionary of pizza entities
export const selectDrinkEntities = selectEntities;

// select array of pizzas 
export const selectAllDrinks = selectAll;

// select the total pizza count: 
export const selectDrinkTotal = selectTotal;
