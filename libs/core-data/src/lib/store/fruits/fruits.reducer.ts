import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Fruit } from '../../fruits/fruit.model';

import { FruitsAction, FruitsActionTypes } from './fruits.actions';

export interface FruitsState extends EntityState<Fruit>{
  selectedFruitId: string | null;
}

export const adapter: EntityAdapter<Fruit> = createEntityAdapter<Fruit>();
export const initialState: FruitsState = adapter.getInitialState ({
  selectedFruitId: null,
});

export function fruitsReducer(state: FruitsState = initialState, action: FruitsAction): FruitsState {
  switch (action.type) {
    case FruitsActionTypes.FruitSelected: {
      return Object.assign({}, state, { selectedFruitId: action.payload });
    }

    case FruitsActionTypes.FruitsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case FruitsActionTypes.FruitAdded: {
      return adapter.addOne(action.payload, state);
    }

    case FruitsActionTypes.FruitUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case FruitsActionTypes.FruitDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default: 
      return state;
  }
}

export const getSelectedFruitId = (state: FruitsState) => state.selectedFruitId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of fruits ids 
export const selectFruitIds = selectIds;


// select the dictionary of fruit entities
export const selectFruitEntities = selectEntities;

// select the array of fruits
export const selectAllFruits = selectAll;

// select the total fruit count
export const selectFruitTotal = selectTotal;