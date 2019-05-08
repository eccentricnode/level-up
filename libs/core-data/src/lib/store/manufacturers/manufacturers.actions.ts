import { Action } from '@ngrx/store';
import { Manufacturer } from '../../cars/manufacturer.model';

export enum ManufacturersActionTypes {
  ManufacturersAction = '[Manufacturers] Action',
  ManufacturerSelected = '[Manufacturers] Selected',
  LoadManufacturers = '[Manufacturers] Load Manufacturers',
  ManufacturersLoaded = '[Manufacturers] Manufacturers Loaded',
}

export class Manufacturers implements Action {
  readonly type = ManufacturersActionTypes.ManufacturersAction;
}

export class ManufacturerSelected implements Action {
  readonly type = ManufacturersActionTypes.ManufacturerSelected;
  constructor(public payload) { }
}

export class LoadManufacturers implements Action {
  readonly type = ManufacturersActionTypes.LoadManufacturers;
}

export class ManufacturersLoaded implements Action {
  readonly type = ManufacturersActionTypes.ManufacturersLoaded;
  constructor(public payload: Manufacturer[]) {}
}

export type ManufacturersAction = Manufacturers
  | ManufacturerSelected
  | LoadManufacturers
  | ManufacturersLoaded
;
