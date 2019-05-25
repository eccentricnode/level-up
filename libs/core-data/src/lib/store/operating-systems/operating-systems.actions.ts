import { Action } from '@ngrx/store';
import { OperatingSystem } from '../../operating-systems/operating-system.model';

export enum OperatingSystemsActionTypes {
  OperatingSystemsAction = '[OperatingSystems] Action',
  LoadOperatingSystems = '[OperatingSystems] Load OperatingSystems',
  OperatingSystemsLoaded = '[OperatingSystems] OperatingSystems Loaded',
}

export class OperatingSystems implements Action {
  readonly type = OperatingSystemsActionTypes.OperatingSystemsAction
}

export class LoadOperatingSystems implements Action {
  readonly type = OperatingSystemsActionTypes.LoadOperatingSystems;
}

export class OperatingSystemsLoaded implements Action {
  readonly type = OperatingSystemsActionTypes.OperatingSystemsLoaded;
  constructor(public payload: OperatingSystem[]) {}
}

export type OperatingSystemsAction = OperatingSystems
  | LoadOperatingSystems
  | OperatingSystemsLoaded
;