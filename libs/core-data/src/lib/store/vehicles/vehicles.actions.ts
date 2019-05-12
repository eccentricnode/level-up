import { Action } from '@ngrx/store';
import { Vehicle } from '../../vehicles/vehicle.model';

export enum VehiclesActionTypes {
  VehiclesAction = '[Vehicles] Action',
  VehicleSelected = '[Vehicles] Selected',
  LoadVehicles = '[Vehicles] Load Vehicles',
  VehiclesLoaded = '[Vehicles] Vehicles Loaded',
}

export class Vehicles implements Action {
  readonly type = VehiclesActionTypes.VehiclesAction
}

export class VehicleSelected implements Action {
  readonly type = VehiclesActionTypes.VehicleSelected;
  constructor(public payload) { }
}

export class LoadVehicles implements Action {
  readonly type = VehiclesActionTypes.LoadVehicles;
}

export class VehiclesLoaded implements Action {
  readonly type = VehiclesActionTypes.VehiclesLoaded;
  constructor(public payload: Vehicle[]) {}
}

export type VehiclesAction = Vehicles
  | VehicleSelected
  | LoadVehicles 
  | VehiclesLoaded
;
