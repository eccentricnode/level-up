import { Action } from '@ngrx/store';
import { Drink } from '../../drinks/drink.model';

export enum DrinksActionTypes {
  DrinksAction = '[Drinks] Action',
  LoadDrinks = '[Drinks] Load Drinks',
  DrinksLoaded = '[Drinks] Drinks Loaded',
}

export class Drinks implements Action {
  readonly type = DrinksActionTypes.DrinksAction;
}

export class LoadDrinks implements Action {
  readonly type = DrinksActionTypes.LoadDrinks;
}

export class DrinksLoaded implements Action {
  readonly type = DrinksActionTypes.DrinksLoaded;
  constructor(public payload: Drink[]) {}
}

export type DrinksAction = Drinks
  | LoadDrinks
  | DrinksLoaded 
;