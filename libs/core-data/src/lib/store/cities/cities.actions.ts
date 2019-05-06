import { Action } from '@ngrx/store';
import { Air } from '../../air/air.model';

export enum CitiesActionTypes {
  CitiesAction = '[Cities] Action',
  CitySelected = '[Cities] Selected',
  LoadCities = '[Cities] Load Cities',
  CitiesLoaded = '[Cities] Cities Loaded',
}

export class Cities implements Action {
  readonly type = CitiesActionTypes.CitiesAction;
}

export class CitySelected implements Action {
  readonly type = CitiesActionTypes.CitySelected;
  constructor(public payload) { }
}

export class LoadCities implements Action {
  readonly type = CitiesActionTypes.LoadCities;
}

export class CitiesLoaded implements Action {
  readonly type = CitiesActionTypes.CitiesLoaded;
  constructor(public payload: Air[]) {}
}

export type CitiesAction = Cities
  | CitySelected
  | LoadCities
  | CitiesLoaded
;