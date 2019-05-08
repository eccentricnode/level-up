import { Action } from '@ngrx/store';
import { Team } from '../../teams/team.model';

export enum TeamsActionTypes {
  TeamsAction = '[Teams] Action',
  TeamSelected = '[Teams] Selected',
  LoadTeams = '[Teams] Load Teams',
  TeamsLoaded = '[Teams] Teams Loaded',
}

export class Teams implements Action {
  readonly type = TeamsActionTypes.TeamsAction;
}

export class TeamSelected implements Action {
  readonly type = TeamsActionTypes.TeamSelected;
  constructor(public payload) { }
}

export class LoadTeams implements Action {
  readonly type = TeamsActionTypes.LoadTeams;
}

export class TeamsLoaded implements Action {
  readonly type = TeamsActionTypes.TeamsLoaded;
  constructor(public payload: Team[]) {}
}

export type TeamsAction = Teams
  | TeamSelected
  | LoadTeams
  | TeamsLoaded
;

