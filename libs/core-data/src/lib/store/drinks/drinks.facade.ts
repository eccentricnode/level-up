import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllDrinks } from '..';
import * as DrinksActions from './drinks.actions';
import { DrinksState } from './drinks.reducer';

@Injectable()
export class DrinksFacade {
  allDrinks$ = this.store.pipe(select(selectAllDrinks));

  constructor(private store: Store<DrinksState>) {}

  loadAll() {
    this.store.dispatch(new DrinksActions.LoadDrinks());
  }
}
