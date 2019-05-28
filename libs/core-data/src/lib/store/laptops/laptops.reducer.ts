import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Laptop } from '../../laptops/laptop.model';

import { LaptopsAction, LaptopsActionTypes } from './laptops.actions';

export interface LaptopsState extends EntityState<Laptop> {
  selectedLaptopId: string | null;
}

export const adapter: EntityAdapter<Laptop> = createEntityAdapter<Laptop>();
export const initialState: LaptopsState = adapter.getInitialState ({
  selectedLaptopId: null,
});

export function laptopsReducer(state: LaptopsState = initialState, action: LaptopsAction): LaptopsState {
  switch (action.type) {
    case LaptopsActionTypes.LaptopsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    default:
      return state;
  }
}

export const getSelectedLaptopId = (state: LaptopsState) => state.selectedLaptopId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of laptop ids
export const selectLaptopIds = selectIds;

// select the dictionary of laptop entities
export const selectLaptopEntities = selectEntities;

// select array of laptops 
export const selectAllLaptops = selectAll;

// select the total laptop count: 
export const selectLaptopTotal = selectTotal;