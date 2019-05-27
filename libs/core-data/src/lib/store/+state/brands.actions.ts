import { Action } from '@ngrx/store';
import { Entity } from './brands.reducer';

export enum BrandsActionTypes {
  LoadBrands = '[Brands] Load Brands',
  BrandsLoaded = '[Brands] Brands Loaded',
  BrandsLoadError = '[Brands] Brands Load Error'
}

export class LoadBrands implements Action {
  readonly type = BrandsActionTypes.LoadBrands;
}

export class BrandsLoadError implements Action {
  readonly type = BrandsActionTypes.BrandsLoadError;
  constructor(public payload: any) {}
}

export class BrandsLoaded implements Action {
  readonly type = BrandsActionTypes.BrandsLoaded;
  constructor(public payload: Entity[]) {}
}

export type BrandsAction = LoadBrands | BrandsLoaded | BrandsLoadError;

export const fromBrandsActions = {
  LoadBrands,
  BrandsLoaded,
  BrandsLoadError
};
