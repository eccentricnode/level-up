import { Action } from '@ngrx/store';
import { Burger } from '../../burgers/burger.model';

export enum BurgersActionTypes {
  BurgersAction = '[Burgers] Action',
  LoadBurgers = '[Burgers] Load Burgers',
  BurgersLoaded = '[Burgers] Burgers Loaded',
}

export class Burgers implements Action {
  readonly type = BurgersActionTypes.BurgersAction;
}

export class LoadBurgers implements Action {
  readonly type = BurgersActionTypes.LoadBurgers;
}

export class BurgersLoaded implements Action {
  readonly type = BurgersActionTypes.BurgersLoaded;
  constructor(public payload: Burger[]) {}
}

export type BurgersAction = Burgers
  | LoadBurgers
  | BurgersLoaded 
;
