import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllMmos } from '..';
import * as MmosActions from './mmos.actions';
import { MmosState } from './mmos.reducer';


@Injectable()
export class MmosFacade {
  allMmos$ = this.store.pipe(select(selectAllMmos));

  constructor(private store: Store<MmosState>) {}

  loadAll() {
    this.store.dispatch(new MmosActions.LoadMmos());
  }
}
