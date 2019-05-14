import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { LeaguesState } from './leagues.reducer';
import {
  LoadLeagues,
  LeaguesLoaded,
  LeaguesActionTypes
} from './leagues.actions';

import { LeaguesService } from '../../leagues/leagues.service';
import { League } from '../../leagues/league.model';

@Injectable()
export class LeaguesEffects {@Effect() loadLeagues$ = this.dataPersistence.fetch(LeaguesActionTypes.LoadLeagues, {
      run: (action: LoadLeagues, state: LeaguesState) => {
        return this.leaguesService.all().pipe(map((res: League[]) => new LeaguesLoaded(res)));
      },

      onError: (action: LoadLeagues, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<LeaguesState>,
    private leaguesService: LeaguesService
  ) {}
}
