import {Action} from '@ngrx/store';
import { Dota2 } from '@level/core-data';

export enum Dota2ActionTypes {
  Dota2Action = '[Dota2] Action',
  Dota2Selected = '[Dota2] Selected',
  LoadDota2 = "[Dota2] Load Dota2",
  Dota2Loaded = "[Dota2] Dota2 Loaded",
}

export class Dota2s implements Action {
  readonly type = Dota2ActionTypes.Dota2Action;
}

export class Dota2Selected implements Action {
  readonly type = Dota2ActionTypes.Dota2Selected;
  constructor(public payload) { }
}

export class LoadDota2 implements Action {
 readonly type = Dota2ActionTypes.LoadDota2;
}

export class Dota2Loaded implements Action {
 readonly type = Dota2ActionTypes.Dota2Loaded;
 constructor(public payload: Dota2[]) { }
}

export type Dota2Action = Dota2s
  | Dota2Selected
  | LoadDota2
  | Dota2Loaded 
;