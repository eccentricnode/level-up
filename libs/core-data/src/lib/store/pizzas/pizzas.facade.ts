import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllPizzas } from '..';
import * as PizzasActions from './pizzas.actions';
import { PizzasState } from './pizzas.reducer';


@Injectable()
export class PizzasFacade {
  allPizzas$ = this.store.pipe(select(selectAllPizzas));

  constructor(private store: Store<PizzasState>) {}

  loadAll() {
    this.store.dispatch(new PizzasActions.LoadPizzas());
  }
}
