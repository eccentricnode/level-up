import { Action } from '@ngrx/store';
import { Guild } from '../../guild/guild.model';

export enum AchievementsActionTypes {
  AchievementsAction = '[Achievements] Action',
  AchievementSelected = '[Achievements] Selected',
  LoadAchievements = '[Achievements] Load Achievements',
  AchievementsLoaded = '[Achievements] Achievements Loaded'
}

export class Achievements implements Action {
  readonly type = AchievementsActionTypes.AchievementsAction;
}

export class AchievementSelected implements Action {
  readonly type = AchievementsActionTypes.AchievementSelected;
  constructor(public payload) { }
}

export class LoadAchievements implements Action {
  readonly type = AchievementsActionTypes.LoadAchievements;
}

export class AchievementsLoaded implements Action {
  readonly type = AchievementsActionTypes.AchievementsLoaded;
  constructor(public payload: Guild[]) {}
}

export type AchievementsAction = Achievements
  | AchievementSelected
  | LoadAchievements
  | AchievementsLoaded
;