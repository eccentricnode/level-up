import { Action } from '@ngrx/store';
import { Entity } from './leagues.reducer';

export enum LeaguesActionTypes {
  LoadLeagues = '[Leagues] Load Leagues',
  LeaguesLoaded = '[Leagues] Leagues Loaded',
  LeaguesLoadError = '[Leagues] Leagues Load Error'
}

export class LoadLeagues implements Action {
  readonly type = LeaguesActionTypes.LoadLeagues;
}

export class LeaguesLoadError implements Action {
  readonly type = LeaguesActionTypes.LeaguesLoadError;
  constructor(public payload: any) {}
}

export class LeaguesLoaded implements Action {
  readonly type = LeaguesActionTypes.LeaguesLoaded;
  constructor(public payload: Entity[]) {}
}

export type LeaguesAction = LoadLeagues | LeaguesLoaded | LeaguesLoadError;

export const fromLeaguesActions = {
  LoadLeagues,
  LeaguesLoaded,
  LeaguesLoadError
};
