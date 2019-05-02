import { Action } from '@ngrx/store';
import { Rocket } from '../../rockets/rocket.model';

export enum RocketsActionTypes {
  RocketsAction = '[Rockets] Action',
  RocketSelected = '[Rockets] Selected',
  LoadRockets = '[Rockets] Load Rockets',
  RocketsLoaded = '[Rockets] Rockets Loaded',
}

export class Rockets implements Action {
  readonly type = RocketsActionTypes.RocketsAction;
}

export class RocketSelected implements Action {
  readonly type = RocketsActionTypes.RocketSelected;
  constructor(public payload) { }
}

export class LoadRockets implements Action {
  readonly type = RocketsActionTypes.LoadRockets;
}

export class RocketsLoaded implements Action {
  readonly type = RocketsActionTypes.RocketsLoaded;
  constructor(public payload: Rocket[]) {}
}

export type RocketsAction = Rockets
  | RocketSelected
  | LoadRockets
  | RocketsLoaded 
;