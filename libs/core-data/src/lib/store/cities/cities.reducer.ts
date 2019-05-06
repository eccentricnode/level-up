import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Air } from '../../air/air.model';

import { CitiesAction, CitiesActionTypes } from './cities.actions';

export interface CitiesState extends EntityState<Air> {
  selectedCityId: string | null;
}

export const adapter: EntityAdapter<Air> = createEntityAdapter<Air>();
export const initialState: CitiesState = adapter.getInitialState ({
  selectedCityId: null,
});

export function citiesReducer(state: CitiesState = initialState, action: CitiesAction): CitiesState {
  switch (action.type) {
    case CitiesActionTypes.CitySelected: {
      return Object.assign({}, state, { selectedCityId: action.payload.id });
    }

    case CitiesActionTypes.CitiesLoaded: {
      return adapter.addAll(action.payload, state);
    }

    default: 
      return state;
  }
}

export const getSelectedCityId = (state: CitiesState) => state.selectedCityId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select th array of city ids
export const selectCityIds = selectIds;

// select the dictionary of city entities
export const selectCityEntities = selectEntities;

// select the array of cities
export const selectAllCities = selectAll;

// select the total city count
export const selectCityTotal = selectTotal;
