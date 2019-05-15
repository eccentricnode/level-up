import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllVolumes, selectCurrentVolume } from '..';
import * as VolumesActions from './volumes.actions';
import { VolumesState } from './volumes.reducer';

@Injectable()
export class VolumesFacade {
  allVolumes$ = this.store.pipe(select(selectAllVolumes));
  selectedVolumes$ = this.store.pipe(select(selectCurrentVolume));

  constructor(private store: Store<VolumesState>) {}

  searchVolumes(search) {
    this.store.dispatch(new VolumesActions.SearchVolumes(search));
  }

  loadVolumes(volume) {
    this.store.dispatch(new VolumesActions.SearchVolumes(volume));
  }
}
