import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { Manufacturer } from '../../cars/manufacturer.model';
import { CarsService } from '../../cars/cars.service';

import {
  LoadManufacturers,
  ManufacturersLoaded,
  ManufacturersActionTypes
} from './manufacturers.actions';
import { ManufacturersState } from './manufacturers.reducer';

@Injectable()
export class ManufacturersEffects {
  @Effect() loadManufacturers$ = this.dataPersistence.fetch(
    ManufacturersActionTypes.LoadManufacturers,
    {
      run: (action: LoadManufacturers, state: ManufacturersState) => {
        return this.carsService.all().pipe(map((res: Manufacturer[]) => new ManufacturersLoaded(res)));
      },

      onError: (action: LoadManufacturers, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ManufacturersState>,
    private carsService: CarsService
  ) {}
}
