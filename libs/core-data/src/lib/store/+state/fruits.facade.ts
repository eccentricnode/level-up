import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { FruitsPartialState } from './fruits.reducer';
import { fruitsQuery } from './fruits.selectors';
import { LoadFruits } from './fruits.actions';

@Injectable()
export class FruitsFacade {
  loaded$ = this.store.pipe(select(fruitsQuery.getLoaded));
  allFruits$ = this.store.pipe(select(fruitsQuery.getAllFruits));
  selectedFruits$ = this.store.pipe(select(fruitsQuery.getSelectedFruits));

  constructor(private store: Store<FruitsPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadFruits());
  }
}
