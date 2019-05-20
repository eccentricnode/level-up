import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { PizzasPartialState } from './pizzas.reducer';
import { pizzasQuery } from './pizzas.selectors';
import { LoadPizzas } from './pizzas.actions';

@Injectable()
export class PizzasFacade {
  loaded$ = this.store.pipe(select(pizzasQuery.getLoaded));
  allPizzas$ = this.store.pipe(select(pizzasQuery.getAllPizzas));
  selectedPizzas$ = this.store.pipe(select(pizzasQuery.getSelectedPizzas));

  constructor(private store: Store<PizzasPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadPizzas());
  }
}
