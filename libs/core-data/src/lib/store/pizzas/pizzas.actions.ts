import { Action } from '@ngrx/store';
import { Pizza } from '../../pizza/pizza.model';

export enum PizzasActionTypes {
  PizzasAction = '[Pizzas] Action',
  LoadPizzas = '[Pizzas] Load Pizzas',
  PizzasLoaded = '[Pizzas] Pizzas Loaded',
}

export class Pizzas implements Action {
  readonly type = PizzasActionTypes.PizzasAction;
}

export class LoadPizzas implements Action {
  readonly type = PizzasActionTypes.LoadPizzas;
}

export class PizzasLoaded implements Action {
  readonly type = PizzasActionTypes.PizzasLoaded;
  constructor(public payload: Pizza[]) {}
}

export type PizzasAction = Pizzas
  | LoadPizzas
  | PizzasLoaded  
;
