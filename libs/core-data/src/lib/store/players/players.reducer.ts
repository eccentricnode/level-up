import { PlayersAction, PlayersActionTypes } from './players.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Player } from '../../players/player.model';

export interface PlayersState extends EntityState<Player> {
  selectedPlayerId: string | null;
}

export const adapter: EntityAdapter<Player> = createEntityAdapter<Player>();
export const initialState: PlayersState = adapter.getInitialState ({
  selectedPlayerId: null,
});

export function playersReducer(state: PlayersState = initialState, action: PlayersAction): PlayersState {
  switch (action.type) {
    case PlayersActionTypes.PlayerSelected: {
      return Object.assign({}, state, { selectedPlayerId: action.payload.id });
    }

    case PlayersActionTypes.PlayersLoaded: {
      return adapter.addAll(action.payload, state);
    }

    default:
      return state;
  }
}

export const getSelectedPlayerId = (state: PlayersState) => state.selectedPlayerId;

//get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of player ids
export const selectPlayerIds = selectIds;

// select the dictionary of player entities 
export const selectPlayerEntities = selectEntities;

// select the array of players
export const selectAllPlayers = selectAll;

// select the total player count
export const selectPlayerTotal = selectTotal;