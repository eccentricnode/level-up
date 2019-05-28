import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Brand } from '@level/core-data';

import { BrandsAction, BrandsActionTypes } from './brands.actions';

export interface BrandsState extends EntityState<Brand> {
  selectedBrandId: string | null;
}

export const adapter: EntityAdapter<Brand> = createEntityAdapter<Brand>();
export const initialState: BrandsState =  adapter.getInitialState ({
  selectedBrandId: null,
});

export function brandsReducer(state: BrandsState = initialState, action: BrandsAction): BrandsState {
  switch (action.type) {
    case BrandsActionTypes.BrandsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    default: 
      return state;
  }
}

export const getSelectedBrandId = (state: BrandsState) => state.selectedBrandId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of brand ids
export const selectBrandIds = selectIds;

// select the dictionary of brand entities
export const selectBrandEntities = selectEntities;

// select array of brands 
export const selectAllBrands = selectAll;

// select the total brand count: 
export const selectBrandTotal = selectTotal;