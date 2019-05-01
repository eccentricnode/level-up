import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStarships from './starships/starships.reducer';

import { Starship } from '../starships/starship.model';

export interface AppState {
    starships: fromStarships.StarshipsState
}

export const reducers: ActionReducerMap<AppState> = {
    starships: fromStarships.starshipsReducer
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
    name: '',
    model: '',
    manufacturer: '',
    crew: '',
    passengers: '',
    cargo_capacity: ''
};

export const selectCurrentStarship = createSelector(
    selectStarshipEntities,
    selectCurrentStarshipId,
    (starshipEntities, starshipId) => {
        return starshipId ? starshipEntities[starshipId] : emptyStarship;
    }
);