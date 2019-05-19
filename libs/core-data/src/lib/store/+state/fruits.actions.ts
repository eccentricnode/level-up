import { Action } from '@ngrx/store';
import { Entity } from './fruits.reducer';

export enum FruitsActionTypes {
  LoadFruits = '[Fruits] Load Fruits',
  FruitsLoaded = '[Fruits] Fruits Loaded',
  FruitsLoadError = '[Fruits] Fruits Load Error'
}

export class LoadFruits implements Action {
  readonly type = FruitsActionTypes.LoadFruits;
}

export class FruitsLoadError implements Action {
  readonly type = FruitsActionTypes.FruitsLoadError;
  constructor(public payload: any) {}
}

export class FruitsLoaded implements Action {
  readonly type = FruitsActionTypes.FruitsLoaded;
  constructor(public payload: Entity[]) {}
}

export type FruitsAction = LoadFruits | FruitsLoaded | FruitsLoadError;

export const fromFruitsActions = {
  LoadFruits,
  FruitsLoaded,
  FruitsLoadError
};
