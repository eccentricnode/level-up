import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { Team } from '../../teams/team.model';
import { TeamsService } from '../../teams/teams.service';

import {
  LoadTeams,
  TeamsLoaded,
  TeamsActionTypes
} from './teams.actions';
import { TeamsState } from './teams.reducer';

@Injectable()
export class TeamsEffects {
  @Effect() loadTeams$ = this.dataPersistence.fetch(TeamsActionTypes.LoadTeams, {
      run: (action: LoadTeams, state: TeamsState) => {
        return this.teamsService.all().pipe(map((res: Team[]) => new TeamsLoaded(res)));
      },

      onError: (action: LoadTeams, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TeamsState>,
    private teamsService: TeamsService
  ) {}
}
