import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllOSs } from '..';
import * as OSsActions from './operating-systems.actions';
import { OperatingSystemsState } from './operating-systems.reducer';

@Injectable()
export class OperatingSystemsFacade {
  allOperatingSystems$ = this.store.pipe(select(selectAllOSs));

  constructor(private store: Store<OperatingSystemsState>) {}

  loadAll() {
    this.store.dispatch(new OSsActions.LoadOperatingSystems());
  }
}
