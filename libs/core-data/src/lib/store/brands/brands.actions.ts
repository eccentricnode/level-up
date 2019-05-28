import { Action } from '@ngrx/store';
import { Brand } from '../../brands/brand.model';

export enum BrandsActionTypes {
  BrandsAction = '[Brands] Action',
  LoadBrands = '[Brands] Load Brands',
  BrandsLoaded = '[Brands] Brands Loaded',
}

export class Brands implements Action {
  readonly type = BrandsActionTypes.BrandsAction;
}

export class LoadBrands implements Action {
  readonly type = BrandsActionTypes.LoadBrands;
}

export class BrandsLoaded implements Action {
  readonly type = BrandsActionTypes.BrandsLoaded;
  constructor(public payload: Brand[]) {}
}

export type BrandsAction = Brands
  | LoadBrands
  | BrandsLoaded
;
