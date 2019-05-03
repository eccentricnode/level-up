import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStarships from './starships/starships.reducer';
import * as fromRockets from './rockets/rockets.reducer';
import * as fromDota2 from './dota2/dota2.reducer';
import * as fromAchievements from './guild/achievements.reducer';
import * as fromCoins from './coins/coins.reducer';

import { Starship } from '../starships/starship.model';
import { Rocket } from '../rockets/rocket.model';
import { Dota2 } from '../dota2/dota2.model';
import { Guild } from '../guild/guild.model';
import { Coin } from '../crypto/crypto.model';

export interface AppState {
    starships: fromStarships.StarshipsState
    rockets: fromRockets.RocketsState
    teams: fromDota2.Dota2State
    achievements: fromAchievements.AchievementsState
    coins: fromCoins.CoinsState
}

export const reducers: ActionReducerMap<AppState> = {
    starships: fromStarships.starshipsReducer,
    rockets: fromRockets.rocketsReducer,
    teams: fromDota2.dota2Reducer,
    achievements: fromAchievements.achievementsReducer,
    coins: fromCoins.coinsReducer,
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

//-------------------------------------------------------------------
// ACHIEVEMENTS SELECTORS
//-------------------------------------------------------------------

export const selectAchievementsState = createFeatureSelector<fromAchievements.AchievementsState>('achievements');

export const selectAchievementIds = createSelector(
    selectAchievementsState,
    fromAchievements.selectAchievementIds
);
export const selectAchievementEntities = createSelector(
    selectAchievementsState,
    fromAchievements.selectAchievementEntities
);
export const selectAllAchievements = createSelector(
    selectAchievementsState,
    fromAchievements.selectAllAchievements
);
export const selectCurrentAchievementId = createSelector(
    selectAchievementsState,
    fromAchievements.getSelectedAchievementId
);

const emptyAchievement: Guild = {
    id: null,
    name: '',
    description: '',
    requirement: ''
};

export const selectCurrentAchievement = createSelector(
    selectAchievementEntities,
    selectCurrentAchievementId,
    (achievementEntities, achievementId) => {
        return achievementId ? achievementEntities[achievementId] : emptyAchievement;
    }
);

//-------------------------------------------------------------------
// COINS SELECTORS
//-------------------------------------------------------------------

export const selectCoinsState = createFeatureSelector<fromCoins.CoinsState>('coins');

export const selectCoinIds = createSelector(
    selectCoinsState,
    fromCoins.selectCoinIds
);
export const selectCoinEntities = createSelector(
    selectCoinsState,
    fromCoins.selectCoinEntities
);
export const selectAllCoins = createSelector(
    selectCoinsState,
    fromCoins.selectAllCoins
);
export const selectCurrentCoinId = createSelector(
    selectCoinsState,
    fromCoins.getSelectedCoinId
);

const emptyCoin: Coin = {
    id: null,
    name: '', 
    rank: null,
    price_usd: '',
    percent_change_24h: '', 
    percent_change_7d: '',
};

export const selectCurrentCoin = createSelector(
    selectCoinEntities,
    selectCurrentCoinId,
    (coinEntities, coinId) => {
        return coinId ? coinEntities[coinId] : emptyCoin;
    }
);