import { Action } from '@ngrx/store';
import { Starship } from '../../starships/starship.model'

export enum StarshipsActionTypes {
  StarshipsAction = '[Starships] Action',
  StarshipSelected = '[Starships] Selected',
  LoadStarships = '[Starships] Load Starships',
  StarshipsLoaded = '[Starships] Starships Loaded',
}

export class Starships implements Action {
  readonly type = StarshipsActionTypes.StarshipsAction;
}

export class StarshipSelected implements Action {
  readonly type = StarshipsActionTypes.StarshipSelected;
  constructor(public payload) { }
}

export class LoadStarships implements Action {
  readonly type = StarshipsActionTypes.LoadStarships;
}

export class StarshipsLoaded implements Action {
  readonly type = StarshipsActionTypes.StarshipsLoaded;
  constructor(public payload: Starship[]) {}
}

export type StarshipsAction = Starships
  | StarshipSelected
  | LoadStarships
  | StarshipsLoaded;

