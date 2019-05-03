import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { Guild } from '../../guild/guild.model';
import { GuildService } from '../../guild/guild.service';

import {
  LoadAchievements,
  AchievementsLoaded,
  AchievementsActionTypes
} from './achievements.actions';
import { AchievementsState } from './achievements.reducer';

@Injectable()
export class AchievementsEffects {
  @Effect() effect$ = this.actions$.pipe(ofType(AchievementsActionTypes.AchievementsAction))

  @Effect() 
  loadAchievements$ = this.dataPersistence.fetch(AchievementsActionTypes.LoadAchievements, {
      run: (action: LoadAchievements, state: AchievementsState) => {
        return this.guildService.getAchievements().pipe(map((res: Guild[]) => new AchievementsLoaded(res)));
      },

      onError: (action: LoadAchievements, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AchievementsState>,
    private guildService: GuildService,
  ) {}
}
