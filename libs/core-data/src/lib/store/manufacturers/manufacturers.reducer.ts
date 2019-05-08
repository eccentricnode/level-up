import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Manufacturer } from '../../cars/manufacturer.model';

import { ManufacturersAction, ManufacturersActionTypes } from './manufacturers.actions';


export interface ManufacturersState extends EntityState<Manufacturer> {
  selectedManufacturerId: string | null;
}

export const adapter: EntityAdapter<Manufacturer> = createEntityAdapter<Manufacturer>();
export const initialState: ManufacturersState = adapter.getInitialState ({
  selectedManufacturerId: null,
});

export function manufacturersReducer(state: ManufacturersState = initialState, action: ManufacturersAction): ManufacturersState {
  switch (action.type) {
    case ManufacturersActionTypes.ManufacturerSelected: {
      return Object.assign({}, state, { selectedManufacturerId: action.payload.id});
    }
    
    case ManufacturersActionTypes.ManufacturersLoaded: {
      return adapter.addAll(action.payload, state);
    }

    default: 
      return state;
  }
}

export const getSelectedManufacturerId = (state: ManufacturersState) => state.selectedManufacturerId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of manufacturer ids
export const selectManufacturerIds = selectIds;

// select the dictionary of manufacturer entities
export const selectManufacturerEntities = selectEntities;

// select the array of manufacturers
export const selectAllManufacturers = selectAll;

// select the total manufacturer count 
export const selectManufacturerTotal = selectTotal;