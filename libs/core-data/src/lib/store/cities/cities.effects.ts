import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { Air } from '../../air/air.model';
import { AirService } from '../../air/air.service';

import {
  LoadCities,
  CitiesLoaded,
  CitiesActionTypes
} from './cities.actions';
import { CitiesState } from './cities.reducer';

@Injectable()
export class CitiesEffects {
  @Effect() loadCities$ = this.dataPersistence.fetch(CitiesActionTypes.LoadCities, {
      run: (action: LoadCities, state: CitiesState) => {
        return this.airService.getAirData().pipe(map((res: Air[]) => new CitiesLoaded(res)));
      },

      onError: (action: LoadCities, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CitiesState>,
    private airService: AirService
  ) {}
}
