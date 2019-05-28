import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { LaptopsPartialState } from './laptops.reducer';
import { laptopsQuery } from './laptops.selectors';
import { LoadLaptops } from './laptops.actions';

@Injectable()
export class LaptopsFacade {
  loaded$ = this.store.pipe(select(laptopsQuery.getLoaded));
  allLaptops$ = this.store.pipe(select(laptopsQuery.getAllLaptops));
  selectedLaptops$ = this.store.pipe(select(laptopsQuery.getSelectedLaptops));

  constructor(private store: Store<LaptopsPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadLaptops());
  }
}
