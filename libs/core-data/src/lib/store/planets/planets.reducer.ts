import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { PlanetsAction, PlanetsActionTypes } from './planets.actions';
import { Planet } from '../../planets/planet.model';

export interface PlanetsState extends EntityState<Planet> {
  selectedPlanetId: string | null;
}

export const adapter: EntityAdapter<Planet> = createEntityAdapter<Planet>();
export const initialState: PlanetsState = adapter.getInitialState ({
  selectedPlanetId: null
});

export function planetsReducer(state: PlanetsState = initialState, action: PlanetsAction): PlanetsState {
  switch (action.type) {
    case PlanetsActionTypes.PlanetSelected: {
      return Object.assign({}, state, { selectedPlanetId: action.payload.id });
    }

    case PlanetsActionTypes.PlanetsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    default: 
      return state;
  }
}

export const getSelectedPlanetId = (state: PlanetsState) => state.selectedPlanetId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of planet ids
export const selectPlanetIds = selectIds;

// select the dictionary of planet entities
export const selectPlanetEntities = selectEntities;

// select the array of planets
export const selectAllPlanets = selectAll;

// select the total planet count
export const selectPlanetTotal = selectTotal;