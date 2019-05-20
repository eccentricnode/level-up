import { Action } from '@ngrx/store';
import { Entity } from './pizzas.reducer';

export enum PizzasActionTypes {
  LoadPizzas = '[Pizzas] Load Pizzas',
  PizzasLoaded = '[Pizzas] Pizzas Loaded',
  PizzasLoadError = '[Pizzas] Pizzas Load Error'
}

export class LoadPizzas implements Action {
  readonly type = PizzasActionTypes.LoadPizzas;
}

export class PizzasLoadError implements Action {
  readonly type = PizzasActionTypes.PizzasLoadError;
  constructor(public payload: any) {}
}

export class PizzasLoaded implements Action {
  readonly type = PizzasActionTypes.PizzasLoaded;
  constructor(public payload: Entity[]) {}
}

export type PizzasAction = LoadPizzas | PizzasLoaded | PizzasLoadError;

export const fromPizzasActions = {
  LoadPizzas,
  PizzasLoaded,
  PizzasLoadError
};
