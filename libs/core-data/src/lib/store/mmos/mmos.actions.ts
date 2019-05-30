import { Action } from '@ngrx/store';
import { Mmo } from '../../mmos/mmo.model';

export enum MmosActionTypes {
  MmosAction = '[Mmos] Action',
  LoadMmos = '[Mmos] Load Mmos',
  MmosLoaded = '[Mmos] Mmos Loaded',
}

export class Mmos implements Action {
  readonly type = MmosActionTypes.MmosAction;
}

export class LoadMmos implements Action {
  readonly type = MmosActionTypes.LoadMmos;
}

export class MmosLoaded implements Action {
  readonly type = MmosActionTypes.MmosLoaded;
  constructor(public payload: Mmo[]) {}
}

export type MmosAction = Mmos
  | LoadMmos
  | MmosLoaded
;
