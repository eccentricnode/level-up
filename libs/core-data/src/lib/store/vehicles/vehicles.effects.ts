import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { VehiclesState } from './vehicles.reducer';
import {
  LoadVehicles,
  VehiclesLoaded,
  VehiclesActionTypes
} from './vehicles.actions';

import { VehiclesService } from '../../vehicles/vehicles.service';
import { Vehicle } from '../../vehicles/vehicle.model';

@Injectable()
export class VehiclesEffects {
  @Effect() loadVehicles$ = this.dataPersistence.fetch(VehiclesActionTypes.LoadVehicles, {
      run: (action: LoadVehicles, state: VehiclesState) => {
        return this.vehiclesService.all().pipe(map((res: Vehicle[]) => new VehiclesLoaded(res)));
      },

      onError: (action: LoadVehicles, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<VehiclesState>,
    private vehiclesService: VehiclesService
  ) {}
}
