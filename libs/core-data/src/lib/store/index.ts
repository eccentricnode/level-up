import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStarships from './starships/starships.reducer';
import * as fromRockets from './rockets/rockets.reducer';
import * as fromDota2 from './dota2/dota2.reducer';
import * as fromAchievements from './guild/achievements.reducer';
import * as fromCoins from './coins/coins.reducer';
import * as fromCities from './cities/cities.reducer';
import * as fromManufacturers from './manufacturers/manufacturers.reducer';
import * as fromTeams from './teams/teams.reducer';
import * as fromVideos from './videos/videos.reducer';
import * as fromBooks from './books/books.reducer';

import { Starship } from '../starships/starship.model';
import { Rocket } from '../rockets/rocket.model';
import { Dota2 } from '../dota2/dota2.model';
import { Guild } from '../guild/guild.model';
import { Coin } from '../crypto/crypto.model';
import { Air } from '../air/air.model';
import { Manufacturer } from '../cars/manufacturer.model';
import { Team } from '../teams/team.model';
import { Video } from '../youtube/video.model';
import { Book } from '../books/book.model';

export interface AppState {
    starships: fromStarships.StarshipsState
    rockets: fromRockets.RocketsState
    teams: fromDota2.Dota2State
    achievements: fromAchievements.AchievementsState
    coins: fromCoins.CoinsState
    cities: fromCities.CitiesState
    manufacturers: fromManufacturers.ManufacturersState
    nflTeams: fromTeams.TeamsState
    videos: fromVideos.VideosState
    books: fromBooks.BooksState
}

export const reducers: ActionReducerMap<AppState> = {
    starships: fromStarships.starshipsReducer,
    rockets: fromRockets.rocketsReducer,
    teams: fromDota2.dota2Reducer,
    achievements: fromAchievements.achievementsReducer,
    coins: fromCoins.coinsReducer,
    cities: fromCities.citiesReducer,
    manufacturers: fromManufacturers.manufacturersReducer,
    nflTeams: fromTeams.teamsReducer,
    videos: fromVideos.videosReducer,
    books: fromBooks.booksReducer,
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

//-------------------------------------------------------------------
// CITIES SELECTORS
//-------------------------------------------------------------------

export const selectCitiesState = createFeatureSelector<fromCities.CitiesState>('cities');

export const selectCityIds = createSelector(
    selectCitiesState,
    fromCities.selectCityIds
);
export const selectCityEntities = createSelector(
    selectCitiesState,
    fromCities.selectCityEntities
);
export const selectAllCities = createSelector(
    selectCitiesState,
    fromCities.selectAllCities
);
export const selectCurrentCityId = createSelector(
    selectCitiesState,
    fromCities.getSelectedCityId
);

const emptyCity: Air = {
    id: null,
    city: '',
    country: '',
    locations: null,
    count: null,
};

export const selectCurrentCity = createSelector(
    selectCityEntities,
    selectCurrentCityId,
    (cityEntities, cityId) => {
        return cityId ? cityEntities[cityId] : emptyCity;
    }
);

//-------------------------------------------------------------------
// MANUFACTURERS SELECTORS
//-------------------------------------------------------------------

export const selectManufacturersState = createFeatureSelector<fromManufacturers.ManufacturersState>('manufacturers');

export const selectManufacturerIds = createSelector(
    selectManufacturersState,
    fromManufacturers.selectManufacturerIds
);
export const selectManufacturerEntities = createSelector(
    selectManufacturersState,
    fromManufacturers.selectManufacturerEntities 
);
export const selectAllManufacturers = createSelector(
    selectManufacturersState,
    fromManufacturers.selectAllManufacturers
);
export const selectCurrentManufacturerId = createSelector(
    selectManufacturersState,
    fromManufacturers.getSelectedManufacturerId
);

const emptyManufacturer: Manufacturer = {
    id: null,
    Mfr_Name: '',
    Country: ''
};

export const selectCurrentManufacturer = createSelector(
    selectManufacturerEntities,
    selectCurrentManufacturerId,
    (manufacturerEntities, manufacturerId) => {
        return manufacturerId ? manufacturerEntities[manufacturerId] : emptyManufacturer;
    }
);

//-------------------------------------------------------------------
// NFL TEAMS SELECTORS
//-------------------------------------------------------------------

export const selectNflTeamsState = createFeatureSelector<fromTeams.TeamsState>('nflTeams');

export const selectNflTeamIds = createSelector(
    selectNflTeamsState,
    fromTeams.selectNflTeamIds
);
export const selectNflTeamEntities = createSelector(
    selectNflTeamsState,
     fromTeams.selectNflTeamEntities
);
export const selectAllNflTeams = createSelector(
    selectNflTeamsState,
    fromTeams.selectAllNflTeams
);
export const selectCurrentNflTeamId = createSelector(
    selectNflTeamsState,
    fromTeams.getSelectedTeamId
);

const emptyNflTeam: Team = {
    id: null, 
    Team_preffered_name: '',
    Team_Conference_Division: '',
    arrest_count: ''
};

export const selectCurrentNflTeam = createSelector(
    selectNflTeamEntities,
    selectCurrentNflTeamId,
    (teamEntities, teamId) => {
        return teamId ? teamEntities[teamId] : emptyNflTeam;
    }
);

//-------------------------------------------------------------------
// VIDEOS SELECTORS
//-------------------------------------------------------------------

export const selectVideosState = createFeatureSelector<fromVideos.VideosState>('videos');

export const selectVideoIds = createSelector(
    selectVideosState, 
    fromVideos.selectVideoIds
);
export const selectVideoEntities = createSelector(
    selectVideosState,
    fromVideos.selectVideoEntities
);
export const selectAllVideos = createSelector(
    selectVideosState,
    fromVideos.selectAllVideos
);
export const selectCurrentVideoId = createSelector(
    selectVideosState,
    fromVideos.getSelectedVideoId
);

export const selectCurrentVideo = createSelector(
    selectVideoEntities,
    selectCurrentVideoId,
    (videoEntities, videoId) => {
        return videoId ? videoEntities[videoId] : {} as Video;
    }
);

//-------------------------------------------------------------------
// BOOKS SELECTORS
//-------------------------------------------------------------------

export const selectBooksState = createFeatureSelector<fromBooks.BooksState>('books');

export const selectBookIds = createSelector(
    selectBooksState, 
    fromBooks.selectBookIds
);
export const selectBookEntities = createSelector(
    selectBooksState,
    fromBooks.selectBookEntities
);
export const selectAllBooks = createSelector(
    selectBooksState,
    fromBooks.selectAllBooks
);
export const selectCurrentBookId = createSelector(
    selectBooksState, 
    fromBooks.getSelectedBookId
);

export const selectCurrentBook = createSelector(
    selectBookEntities, 
    selectCurrentBookId,
    (bookEntities, bookId) => {
        return bookId ? bookEntities[bookId] : {} as Book;
    }
)