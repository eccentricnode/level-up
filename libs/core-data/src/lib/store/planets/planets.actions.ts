import { Action } from '@ngrx/store';
import { Planet } from '../../planets/planet.model';

export enum PlanetsActionTypes {
  PlanetsAction = '[Planets] Action',
  PlanetSelected = '[Planets] Selected',
  LoadPlanets = '[Planets] Load Planets',
  PlanetsLoaded = '[Planets] Planets Loaded',
}

export class Planets implements Action {
  readonly type = PlanetsActionTypes.PlanetsAction;
}

export class PlanetSelected implements Action {
  readonly type = PlanetsActionTypes.PlanetSelected;
  constructor(public payload) { }
}

export class LoadPlanets implements Action {
  readonly type = PlanetsActionTypes.LoadPlanets;
}

export class PlanetsLoaded implements Action {
  readonly type = PlanetsActionTypes.PlanetsLoaded;
  constructor(public payload: Planet[]) {}
}

export type PlanetsAction = Planets
  | PlanetSelected
  | LoadPlanets 
  | PlanetsLoaded
;