import { Action } from '@ngrx/store';
import { Entity } from './cities.reducer';

export enum CitiesActionTypes {
  LoadCities = '[Cities] Load Cities',
  CitiesLoaded = '[Cities] Cities Loaded',
  CitiesLoadError = '[Cities] Cities Load Error'
}

export class LoadCities implements Action {
  readonly type = CitiesActionTypes.LoadCities;
}

export class CitiesLoadError implements Action {
  readonly type = CitiesActionTypes.CitiesLoadError;
  constructor(public payload: any) {}
}

export class CitiesLoaded implements Action {
  readonly type = CitiesActionTypes.CitiesLoaded;
  constructor(public payload: Entity[]) {}
}

export type CitiesAction = LoadCities | CitiesLoaded | CitiesLoadError;

export const fromCitiesActions = {
  LoadCities,
  CitiesLoaded,
  CitiesLoadError
};
