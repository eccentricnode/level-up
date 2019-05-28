import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllLaptops } from '..';
import * as LaptopsActions from './laptops.actions';
import { LaptopsState } from './laptops.reducer';

@Injectable()
export class LaptopsFacade {
  allLaptops$ = this.store.pipe(select(selectAllLaptops));

  constructor(private store: Store<LaptopsState>) {}

  loadAll() {
    this.store.dispatch(new LaptopsActions.LoadLaptops());
  }
}
