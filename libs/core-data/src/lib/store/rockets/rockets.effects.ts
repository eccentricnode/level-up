import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { RocketsPartialState } from './rockets.reducer';
import {
  LoadRockets,
  RocketsLoaded,
  RocketsLoadError,
  RocketsActionTypes
} from './rockets.actions';

@Injectable()
export class RocketsEffects {
  @Effect() loadRockets$ = this.dataPersistence.fetch(
    RocketsActionTypes.LoadRockets,
    {
      run: (action: LoadRockets, state: RocketsPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new RocketsLoaded([]);
      },

      onError: (action: LoadRockets, error) => {
        console.error('Error', error);
        return new RocketsLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<RocketsPartialState>
  ) {}
}
