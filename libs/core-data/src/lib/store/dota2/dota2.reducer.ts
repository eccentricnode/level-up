import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Dota2 } from '../../dota2/dota2.model';

import { Dota2Action, Dota2ActionTypes } from './dota2.actions';

export interface Dota2State extends EntityState<Dota2>{
  selectedTeamId: string | null;
}

export const adapter: EntityAdapter<Dota2> = createEntityAdapter<Dota2>();
export const initialState: Dota2State = adapter.getInitialState ({
  selectedTeamId: null
});

export function dota2Reducer(state: Dota2State = initialState, action: Dota2Action): Dota2State {
  switch (action.type) {
    case Dota2ActionTypes.Dota2Selected: {
      return Object.assign({}, state, { selectedTeamId: action.payload.id })  
    };

    case Dota2ActionTypes.Dota2Loaded: {
      return adapter.addAll(action.payload, state);
    }
    
    default: 
    return state;
  }
}

export const getSelectedTeamId = (state: Dota2State) => state.selectedTeamId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array teams ids
export const selectTeamIds = selectIds;

// select the dictionary of team entities
export const selectTeamEntities = selectEntities;

// select the array of teams
export const selectAllTeams = selectAll;

// select the total team count
export const selectTeamTotal = selectTotal;