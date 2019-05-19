import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { FruitsPartialState } from './fruits.reducer';
import {
  LoadFruits,
  FruitsLoaded,
  FruitsLoadError,
  FruitsActionTypes
} from './fruits.actions';

@Injectable()
export class FruitsEffects {
  @Effect() loadFruits$ = this.dataPersistence.fetch(
    FruitsActionTypes.LoadFruits,
    {
      run: (action: LoadFruits, state: FruitsPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new FruitsLoaded([]);
      },

      onError: (action: LoadFruits, error) => {
        console.error('Error', error);
        return new FruitsLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<FruitsPartialState>
  ) {}
}
