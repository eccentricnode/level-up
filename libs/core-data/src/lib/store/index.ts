import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStarships from './starships/starships.reducer';
import * as fromRockets from './rockets/rockets.reducer';
import * as fromDota2 from './dota2/dota2.reducer';

import { Starship } from '../starships/starship.model';
import { Rocket } from '../rockets/rocket.model';
import { Dota2 } from '../dota2/dota2.model';

export interface AppState {
    starships: fromStarships.StarshipsState
    rockets: fromRockets.RocketsState
    teams: fromDota2.Dota2State
}

export const reducers: ActionReducerMap<AppState> = {
    starships: fromStarships.starshipsReducer,
    rockets: fromRockets.rocketsReducer,
    teams: fromDota2.dota2Reducer
}

//-------------------------------------------------------------------
// Starships Selectors
//-------------------------------------------------------------------
export const selectStarshipsState = createFeatureSelector<fromStarships.StarshipsState>('starships');

export const selectStarshipIds = createSelector(
    selectStarshipsState,
    fromStarships.selectStarshipIds
);
export const selectStarshipEntities = createSelector(
    selectStarshipsState, 
    fromStarships.selectStarshipEntities
);
export const selectAllStarships = createSelector(
    selectStarshipsState,
    fromStarships.selectAllStarships
);
export const selectCurrentStarshipId = createSelector(
    selectStarshipsState,
    fromStarships.getSelectedStarshipId
);

const emptyStarship: Starship = {
    id: '',
    name: '',
    model: '',
    manufacturer: '',
    crew: '',
    passengers: '',
    cargo_capacity: '',
    url: ''
};

export const selectCurrentStarship = createSelector(
    selectStarshipEntities,
    selectCurrentStarshipId,
    (starshipEntities, starshipId) => {
        return starshipId ? starshipEntities[starshipId] : emptyStarship;
    }
);

//-------------------------------------------------------------------
// ROCKETS SELECTORS 
//-------------------------------------------------------------------

export const selectRocketsState = createFeatureSelector<fromRockets.RocketsState>('rockets');

export const selectRocketIds = createSelector(
    selectRocketsState,
    fromRockets.selectRocketIds
);
export const selectRocketEntities = createSelector(
    selectRocketsState,
    fromRockets.selectRocketEntities
);
export const selectAllRockets = createSelector(
    selectRocketsState,
    fromRockets.selectAllRockets
)
export const selectCurrentRocketId = createSelector(
    selectRocketsState,
    fromRockets.getSelectedRocketId
);

const emptyRocket: Rocket = {
    id: null,
    rocket_name: '',
    company: '', 
    first_flight: '',
    success_rate_pct: null,
    description: ''
};

export const selectCurrentRocket = createSelector(
    selectRocketEntities,
    selectCurrentRocketId,
    (rocketEntities, rocketId) => {
        return rocketId ? rocketEntities[rocketId] : emptyRocket;
    }
);

//-------------------------------------------------------------------
// TEAMS SELECTORS
//-------------------------------------------------------------------

export const selectTeamsState = createFeatureSelector<fromDota2.Dota2State>('teams');

export const selectTeamIds = createSelector(
    selectTeamsState,
    fromDota2.selectTeamIds
);
export const selectTeamEntites = createSelector(
    selectTeamsState,
    fromDota2.selectTeamEntities
);
export const selectAllTeams = createSelector(
    selectTeamsState,
    fromDota2.selectAllTeams
);
export const selectCurrentTeamId = createSelector(
    selectTeamsState,
    fromDota2.getSelectedTeamId
);

const emptyTeam: Dota2 = {
    team_id: null,
    id: null,
    name: '',
    wins: null,
    losses: null,
    rating: null
};

export const selectCurrentTeam = createSelector(
    selectTeamEntites,
    selectCurrentTeamId,
    (teamEntities, teamId) => {
        return teamId ? teamEntities[teamId] : emptyTeam;
    }
);