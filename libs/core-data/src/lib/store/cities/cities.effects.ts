import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { CitiesPartialState } from './cities.reducer';
import {
  LoadCities,
  CitiesLoaded,
  CitiesLoadError,
  CitiesActionTypes
} from './cities.actions';

@Injectable()
export class CitiesEffects {
  @Effect() loadCities$ = this.dataPersistence.fetch(
    CitiesActionTypes.LoadCities,
    {
      run: (action: LoadCities, state: CitiesPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new CitiesLoaded([]);
      },

      onError: (action: LoadCities, error) => {
        console.error('Error', error);
        return new CitiesLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CitiesPartialState>
  ) {}
}
