import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Item } from '../../items/item.model';

import { ItemsAction, ItemsActionTypes } from './items.actions';

export interface ItemsState extends EntityState<Item> {
  selectedItemId: string | null;
}

export const adapter: EntityAdapter<Item> = createEntityAdapter<Item>();
export const initialState: ItemsState = adapter.getInitialState ({
  selectedItemId: null,
});

export function itemsReducer(state: ItemsState = initialState, action: ItemsAction): ItemsState {
  switch (action.type) {
    case ItemsActionTypes.ItemsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    default:
      return state;
  }
}

export const getSelectedItemId = (state: ItemsState) => state.selectedItemId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of pizzas ids
export const selectItemIds = selectIds;

// select the dictionary of pizza entities
export const selectItemEntities = selectEntities;

// select array of pizzas 
export const selectAllItems = selectAll;

// select the total pizza count: 
export const selectItemTotal = selectTotal;
