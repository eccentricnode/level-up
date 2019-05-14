import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { LeaguesPartialState } from './leagues.reducer';
import {
  LoadLeagues,
  LeaguesLoaded,
  LeaguesLoadError,
  LeaguesActionTypes
} from './leagues.actions';

@Injectable()
export class LeaguesEffects {
  @Effect() loadLeagues$ = this.dataPersistence.fetch(
    LeaguesActionTypes.LoadLeagues,
    {
      run: (action: LoadLeagues, state: LeaguesPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new LeaguesLoaded([]);
      },

      onError: (action: LoadLeagues, error) => {
        console.error('Error', error);
        return new LeaguesLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<LeaguesPartialState>
  ) {}
}
