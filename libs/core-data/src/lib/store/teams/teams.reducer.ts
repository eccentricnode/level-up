import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Team } from '../../teams/team.model';

import { TeamsAction, TeamsActionTypes } from './teams.actions';

export interface TeamsState extends EntityState<Team> {
  selectedTeamId: string | null;
}

export const adapter: EntityAdapter<Team> = createEntityAdapter<Team>();
export const initialState: TeamsState = adapter.getInitialState ({
  selectedTeamId: null
});

export function teamsReducer(state: TeamsState = initialState, action: TeamsAction): TeamsState {
  switch (action.type) {
    case TeamsActionTypes.TeamSelected: {
      return Object.assign({}, state, { selectedTeamId: action.payload.id });
    }

    case TeamsActionTypes.TeamsLoaded: {
      return adapter.addAll(action.payload, state);
    }
    default: 
      return state;
  }
}

export const getSelectedTeamId = (state: TeamsState) => state.selectedTeamId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of team ids
export const selectNflTeamIds = selectIds;

// select the dictionary of team entities
export const selectNflTeamEntities = selectEntities;

// select the array of teams
export const selectAllNflTeams = selectAll;

// select the total team count
export const selectNflTeamTotal = selectTotal;
