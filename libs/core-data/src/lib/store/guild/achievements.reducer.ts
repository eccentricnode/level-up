import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Guild } from '../../guild/guild.model';

import {
  AchievementsAction,
  AchievementsActionTypes
} from './achievements.actions';

export interface AchievementsState extends EntityState<Guild>{
  selectedAchievementId: string | null;
}

export const adapter: EntityAdapter<Guild> = createEntityAdapter<Guild>();
export const initialState: AchievementsState = adapter.getInitialState ({
  selectedAchievementId: null,
});

export function achievementsReducer(state: AchievementsState = initialState, action: AchievementsAction): AchievementsState {
  switch (action.type) {
    case AchievementsActionTypes.AchievementSelected: {
      return Object.assign({}, state, { selectedAchievementId: action.payload.id });
    };
    
    case AchievementsActionTypes.AchievementsLoaded: {
      return adapter.addAll(action.payload, state);
    };

    default: 
      return state;
  }
}

export const getSelectedAchievementId = (state: AchievementsState) => state.selectedAchievementId;

// get the selectors
const{ selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of achievement ids
export const selectAchievementIds = selectIds;

// select the dictionary of achievement entities
export const selectAchievementEntities = selectEntities;

// select the array of achievements
export const selectAllAchievements = selectAll;

// select the total achievement count 
export const selectAchievementTotal = selectTotal;