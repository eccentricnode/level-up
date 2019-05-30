import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Mmo } from '../../mmos/mmo.model';

import { MmosAction, MmosActionTypes } from './mmos.actions';

export interface MmosState extends EntityState<Mmo> {
  selectedMmoId: string | null;
}

export const adapter: EntityAdapter<Mmo> = createEntityAdapter<Mmo>();
export const initialState: MmosState = adapter.getInitialState ({
  selectedMmoId: null,
});

export function mmosReducer(state: MmosState = initialState, action: MmosAction): MmosState {
  switch (action.type) {
    case MmosActionTypes.MmosLoaded: {
      return adapter.addAll(action.payload, state);
    }

    default: 
      return state;
  }
}

export const getSelectedMmoId = (state: MmosState) => state.selectedMmoId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of mmo ids
export const selectMmoIds = selectIds;

// select the dictionary of mmo entities
export const selectMmoEntities = selectEntities;

// select array of mmos 
export const selectAllMmos = selectAll;

// select the total mmo count: 
export const selectMmoTotal = selectTotal;