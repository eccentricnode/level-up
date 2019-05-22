import { Action } from '@ngrx/store';
import { Entity } from './tacos.reducer';

export enum TacosActionTypes {
  LoadTacos = '[Tacos] Load Tacos',
  TacosLoaded = '[Tacos] Tacos Loaded',
  TacosLoadError = '[Tacos] Tacos Load Error'
}

export class LoadTacos implements Action {
  readonly type = TacosActionTypes.LoadTacos;
}

export class TacosLoadError implements Action {
  readonly type = TacosActionTypes.TacosLoadError;
  constructor(public payload: any) {}
}

export class TacosLoaded implements Action {
  readonly type = TacosActionTypes.TacosLoaded;
  constructor(public payload: Entity[]) {}
}

export type TacosAction = LoadTacos | TacosLoaded | TacosLoadError;

export const fromTacosActions = {
  LoadTacos,
  TacosLoaded,
  TacosLoadError
};
