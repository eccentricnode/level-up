import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { VolumesAction, VolumesActionTypes, Volumes } from './volumes.actions';

import { Volume } from '../../volumes/volume.model';

export interface VolumesState extends EntityState<Volume> {
  selectedVolumeId: string | null;  
}

export const adapter: EntityAdapter<Volume> = createEntityAdapter<Volume>();
export const initialState: VolumesState = adapter.getInitialState ({
  selectedVolumeId: null
});

export function volumesReducer(state: VolumesState = initialState, action: VolumesAction): VolumesState {
  switch (action.type) {
    case VolumesActionTypes.VolumeSelected: {
      return Object.assign({}, state, { selectedVolumeId: action.payload.id });
    }

    case VolumesActionTypes.VolumesLoaded: {
      return adapter.upsertMany(action.payload, state);
    }
    default: 
      return state;
  }
}

export const getSelectedVolumeId = (state: VolumesState) => state.selectedVolumeId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of volume id
export const selectVolumeIds = selectIds;

// select the dictionary of volume entities
export const selectVolumeEntities = selectEntities;

// select the array of volumes
export const selectAllVolumes = selectAll;

// select the total volume count
export const selectVolumeTotal = selectTotal;