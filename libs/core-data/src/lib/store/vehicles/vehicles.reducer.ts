import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { VehiclesAction, VehiclesActionTypes } from './vehicles.actions';

import { Vehicle } from '../../vehicles/vehicle.model';

export interface VehiclesState extends EntityState<Vehicle> {
  selectedVehicleId: string | null;
}

export const adapter: EntityAdapter<Vehicle> = createEntityAdapter<Vehicle>();
export const initialState: VehiclesState = adapter.getInitialState ({
  selectedVehicleId: null
});

export function vehiclesReducer(state: VehiclesState = initialState, action: VehiclesAction): VehiclesState {
  switch (action.type) {
    case VehiclesActionTypes.VehicleSelected: {
      return Object.assign({}, state, { selectedVehicleId: action.payload.id });
    }

    case VehiclesActionTypes.VehiclesLoaded: {
      return adapter.addAll(action.payload, state);
    }

    default:
     return state;
  }
}

export const getSelectedVehicleId = (state: VehiclesState) => state.selectedVehicleId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of vehicle ids
export const selectVehicleIds = selectIds;

// select the dictionary of vehicle entities
export const selectVehicleEntities = selectEntities;

// select the array of vehicles 
export const selectAllVehicles = selectAll;

// select the total vehicle count
export const selectVehicleTotal = selectTotal;