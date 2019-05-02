import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { Rocket } from '../../rockets/rocket.model';
import { RocketsService } from '../../rockets/rockets.service';

import {
  LoadRockets,
  RocketsLoaded,
  RocketsActionTypes
} from './rockets.actions';
import { RocketsState } from './rockets.reducer';

@Injectable()
export class RocketsEffects {
  @Effect() effect$ = this.actions$.pipe(ofType(RocketsActionTypes.RocketsAction))

  @Effect() 
  loadRockets$ = this.dataPersistence.fetch(RocketsActionTypes.LoadRockets, {
      run: (action: LoadRockets, state: RocketsState) => {
        return this.rocketsService.all().pipe(map((res: Rocket[]) => new RocketsLoaded(res)));
      },

      onError: (action: LoadRockets, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<RocketsState>,
    private rocketsService: RocketsService
  ) {}
}
