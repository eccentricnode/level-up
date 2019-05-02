import { Action } from '@ngrx/store';
import { Entity } from './rockets.reducer';

export enum RocketsActionTypes {
  LoadRockets = '[Rockets] Load Rockets',
  RocketsLoaded = '[Rockets] Rockets Loaded',
  RocketsLoadError = '[Rockets] Rockets Load Error'
}

export class LoadRockets implements Action {
  readonly type = RocketsActionTypes.LoadRockets;
}

export class RocketsLoaded implements Action {
  readonly type = RocketsActionTypes.RocketsLoaded;
  constructor(public payload: Entity[]) {}
}

export type RocketsAction = 
  | LoadRockets
  | RocketsLoaded 
;