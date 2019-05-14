import { Action } from '@ngrx/store';
import { League } from '../../leagues/league.model';

export enum LeaguesActionTypes {
  LeaguesAction = '[Leagues] Action',
  LeagueSelected = '[Leagues] Selected',
  LoadLeagues = '[Leagues] Load Leagues',
  LeaguesLoaded = '[Leagues] Leagues Loaded',
}

export class Leagues implements Action {
  readonly type = LeaguesActionTypes.LeaguesAction;
}

export class LeagueSelected implements Action {
  readonly type = LeaguesActionTypes.LeagueSelected;
  constructor(public payload) { }
}

export class LoadLeagues implements Action {
  readonly type = LeaguesActionTypes.LoadLeagues;
}

export class LeaguesLoaded implements Action {
  readonly type = LeaguesActionTypes.LeaguesLoaded;
  constructor(public payload: League[]) {}
}

export type LeaguesAction = Leagues
  | LeagueSelected
  | LoadLeagues 
  | LeaguesLoaded;