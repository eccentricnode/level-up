import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Rocket } from '../../rockets/rocket.model';

import { RocketsAction, RocketsActionTypes } from './rockets.actions';


export interface RocketsState extends EntityState<Rocket> {
  selectedRocketId: string | null;
}

export const adapter: EntityAdapter<Rocket> = createEntityAdapter<Rocket>();
export const initialState: RocketsState = adapter.getInitialState ({
  selectedRocketId: null,
});

export function rocketsReducer(state = initialState, action: RocketsAction): RocketsState {
  switch (action.type) {
    case RocketsActionTypes.RocketSelected: {
      return Object.assign({}, state, { selectedRocketId: action.payload.id});
    };

    case RocketsActionTypes.RocketsLoaded: {
      return adapter.addAll(action.payload, state);
    };

    default: 
      return state;
  }
}

export const getSelectedRocketId = (state: RocketsState) => state.selectedRocketId;
    
// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of rocket ids
export const selectRocketIds = selectIds;

// select the dictionary of rocket entities
export const selectRocketEntities = selectEntities;

// select the array of rockets
export const selectAllRockets = selectAll;

// select the total rocket count
export const selectRocketTotal = selectTotal;
