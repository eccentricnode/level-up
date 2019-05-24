import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllBurgers } from '..';
import * as BurgersActions from './burgers.actions';
import { BurgersState } from './burgers.reducer';

@Injectable()
export class BurgersFacade {
  allBurgers$ = this.store.pipe(select(selectAllBurgers));

  constructor(private store: Store<BurgersState>) {}

  loadAll() {
    this.store.dispatch(new BurgersActions.LoadBurgers());
  }
}
