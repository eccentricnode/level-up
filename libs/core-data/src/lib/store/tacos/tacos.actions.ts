import { Action } from '@ngrx/store';
import { Taco } from '../../tacos/taco.model';

export enum TacosActionTypes {
  TacosAction = '[Tacos] Action',
  LoadTacos = '[Tacos] Load Tacos',
  TacosLoaded = '[Tacos] Tacos Loaded',
}

export class Tacos implements Action {
  readonly type = TacosActionTypes.TacosAction
}

export class LoadTacos implements Action {
  readonly type = TacosActionTypes.LoadTacos;
}

export class TacosLoaded implements Action {
  readonly type = TacosActionTypes.TacosLoaded;
  constructor(public payload: Taco[]) {}
}

export type TacosAction = Tacos
  | LoadTacos
  | TacosLoaded 
;
