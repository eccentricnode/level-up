import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Taco } from '../../tacos/taco.model';

import { TacosAction, TacosActionTypes } from './tacos.actions';

export interface TacosState extends EntityState<Taco> {
  selectTacoId: string | null;
}

export const adapter: EntityAdapter<Taco> = createEntityAdapter<Taco>();
export const initialState: TacosState = adapter.getInitialState ({
  selectTacoId: null,
});
export function tacosReducer(state: TacosState = initialState, action: TacosAction): TacosState {
  switch (action.type) {
    case TacosActionTypes.TacosLoaded: {
      return adapter.addAll(action.payload, state);
    }

    default:
      return state;
  }
}

export const getSelectedTacoId = (state: TacosState) => state.selectTacoId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of pizzas ids
export const selectTacoIds = selectIds;

// select the dictionary of pizza entities
export const selectTacoEntities = selectEntities;

// select array of pizzas 
export const selectAllTacos = selectAll;

// select the total pizza count: 
export const selectTacoTotal = selectTotal;
