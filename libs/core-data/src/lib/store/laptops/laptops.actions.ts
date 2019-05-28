import { Action } from '@ngrx/store';
import { Entity } from './laptops.reducer';

export enum LaptopsActionTypes {
  LoadLaptops = '[Laptops] Load Laptops',
  LaptopsLoaded = '[Laptops] Laptops Loaded',
  LaptopsLoadError = '[Laptops] Laptops Load Error'
}

export class LoadLaptops implements Action {
  readonly type = LaptopsActionTypes.LoadLaptops;
}

export class LaptopsLoadError implements Action {
  readonly type = LaptopsActionTypes.LaptopsLoadError;
  constructor(public payload: any) {}
}

export class LaptopsLoaded implements Action {
  readonly type = LaptopsActionTypes.LaptopsLoaded;
  constructor(public payload: Entity[]) {}
}

export type LaptopsAction = LoadLaptops | LaptopsLoaded | LaptopsLoadError;

export const fromLaptopsActions = {
  LoadLaptops,
  LaptopsLoaded,
  LaptopsLoadError
};
