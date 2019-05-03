import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllAchievements, selectCurrentAchievement } from '..';
import { AchievementsActionTypes } from './achievements.actions';
import * as AchievementsActions from './achievements.actions';
import { AchievementsState } from './achievements.reducer';

@Injectable()
export class AchievementsFacade {
  allAchievements$ = this.store.pipe(select(selectAllAchievements));
  currentAchievements$ = this.store.pipe(select(selectCurrentAchievement));

  constructor(private store: Store<AchievementsState>) {}

  selectAchievement(achievement) {
    this.store.dispatch(new AchievementsActions.AchievementSelected(achievement));
  }

  loadAchievements() {
    this.store.dispatch(new AchievementsActions.LoadAchievements());
  }
}
