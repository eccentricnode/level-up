import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { TacosPartialState } from './tacos.reducer';
import {
  LoadTacos,
  TacosLoaded,
  TacosLoadError,
  TacosActionTypes
} from './tacos.actions';

@Injectable()
export class TacosEffects {
  @Effect() loadTacos$ = this.dataPersistence.fetch(
    TacosActionTypes.LoadTacos,
    {
      run: (action: LoadTacos, state: TacosPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new TacosLoaded([]);
      },

      onError: (action: LoadTacos, error) => {
        console.error('Error', error);
        return new TacosLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TacosPartialState>
  ) {}
}
