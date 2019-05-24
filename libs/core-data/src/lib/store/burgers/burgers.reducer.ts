import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Burger } from '../../burgers/burger.model';

import { BurgersAction, BurgersActionTypes } from './burgers.actions';

export interface BurgersState extends EntityState<Burger>{
  selectBurgerId: string | null;
}

export const adapter: EntityAdapter<Burger> = createEntityAdapter<Burger>();
export const initialState: BurgersState = adapter.getInitialState ({
  selectBurgerId: null,
});

export function burgersReducer(state: BurgersState = initialState, action: BurgersAction): BurgersState {
  switch (action.type) {
    case BurgersActionTypes.BurgersLoaded: {
      return adapter.addAll(action.payload, state);
    }

    default:
      return state;
  }
}

export const getSelectedBurgerId = (state: BurgersState) => state.selectBurgerId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of pizzas ids
export const selectBurgerIds = selectIds;

// select the dictionary of pizza entities
export const selectBurgerEntities = selectEntities;

// select array of pizzas 
export const selectAllBurgers = selectAll;

// select the total pizza count: 
export const selectBurgerTotal = selectTotal;
