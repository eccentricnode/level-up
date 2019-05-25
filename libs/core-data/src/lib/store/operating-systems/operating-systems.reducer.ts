import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { OperatingSystem } from '../../operating-systems/operating-system.model';

import {
  OperatingSystemsAction,
  OperatingSystemsActionTypes
} from './operating-systems.actions';

export interface OperatingSystemsState extends EntityState<OperatingSystem> {
  selectedOSId: string | null;
}

export const adapter: EntityAdapter<OperatingSystem> = createEntityAdapter<OperatingSystem>();
export const initialState: OperatingSystemsState = adapter.getInitialState ({
    selectedOSId: null,
});

export function operatingSystemsReducer(state: OperatingSystemsState = initialState, action: OperatingSystemsAction): OperatingSystemsState {
  switch (action.type) {
    case OperatingSystemsActionTypes.OperatingSystemsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    default: 
      return state;
  }
}

export const getSelectedOSId = (state: OperatingSystemsState) => state.selectedOSId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of pizzas ids
export const selectOSIds = selectIds;

// select the dictionary of pizza entities
export const selectOSEntities = selectEntities;

// select array of pizzas 
export const selectAllOSs = selectAll;

// select the total pizza count: 
export const selectOSTotal = selectTotal;