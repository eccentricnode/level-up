import { Action } from '@ngrx/store';
import { Volume } from '../../volumes/volume.model';

export enum VolumesActionTypes {
  VolumesAction = '[Volumes] Action',
  VolumeSelected = '[Volumes] Selected',
  SearchVolumes = '[Volumes] Search Volumes',
  VolumesLoaded = '[Volumes] Volumes Loaded',
}

export class Volumes implements Action {
  readonly type = VolumesActionTypes.VolumesAction;
}

export class VolumeSelected implements Action {
  readonly type = VolumesActionTypes.VolumeSelected;
  constructor(public payload) { }
}

export class SearchVolumes implements Action {
  readonly type = VolumesActionTypes.SearchVolumes;
  constructor(public payload) { }
}

export class VolumesLoaded implements Action {
  readonly type = VolumesActionTypes.VolumesLoaded;
  constructor(public payload: Volume[]) {}
}

export type VolumesAction = Volumes
  | VolumeSelected
  | SearchVolumes 
  | VolumesLoaded
;