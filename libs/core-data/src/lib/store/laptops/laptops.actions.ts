import { Action } from '@ngrx/store';
import { Laptop } from '../../laptops/laptop.model';

export enum LaptopsActionTypes {
  LaptopsAction = '[Laptops] Action',
  LoadLaptops = '[Laptops] Load Laptops',
  LaptopsLoaded = '[Laptops] Laptops Loaded',
}

export class Laptops implements Action {
  readonly type = LaptopsActionTypes.LaptopsAction;
}

export class LoadLaptops implements Action {
  readonly type = LaptopsActionTypes.LoadLaptops;
}

export class LaptopsLoaded implements Action {
  readonly type = LaptopsActionTypes.LaptopsLoaded;
  constructor(public payload: Laptop[]) {}
}

export type LaptopsAction = Laptops
  | LoadLaptops
  | LaptopsLoaded
;
