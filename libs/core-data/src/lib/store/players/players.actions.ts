import { Action } from '@ngrx/store';
import { Player } from '../../players/player.model';

export enum PlayersActionTypes {
  PlayersAction = '[Players] Action',
  PlayerSelected = '[Players] Selected',
  LoadPlayers = '[Players] Load Players',
  PlayersLoaded = '[Players] Players Loaded',
}

export class Players implements Action {
  readonly type = PlayersActionTypes.PlayersAction;
}

export class PlayerSelected implements Action {
  readonly type = PlayersActionTypes.PlayerSelected;
  constructor(public payload) { }
}

export class LoadPlayers implements Action {
  readonly type = PlayersActionTypes.LoadPlayers;
}

export class PlayersLoaded implements Action {
  readonly type = PlayersActionTypes.PlayersLoaded;
  constructor(public payload: Player[]) { }
}

export type PlayersAction = Players
  | PlayerSelected
  | LoadPlayers
  | PlayersLoaded
;