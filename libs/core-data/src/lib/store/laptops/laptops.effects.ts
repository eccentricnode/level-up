import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { LaptopsPartialState } from './laptops.reducer';
import {
  LoadLaptops,
  LaptopsLoaded,
  LaptopsLoadError,
  LaptopsActionTypes
} from './laptops.actions';

@Injectable()
export class LaptopsEffects {
  @Effect() loadLaptops$ = this.dataPersistence.fetch(
    LaptopsActionTypes.LoadLaptops,
    {
      run: (action: LoadLaptops, state: LaptopsPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new LaptopsLoaded([]);
      },

      onError: (action: LoadLaptops, error) => {
        console.error('Error', error);
        return new LaptopsLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<LaptopsPartialState>
  ) {}
}
