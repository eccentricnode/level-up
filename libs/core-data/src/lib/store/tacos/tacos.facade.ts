import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { TacosPartialState } from './tacos.reducer';
import { tacosQuery } from './tacos.selectors';
import { LoadTacos } from './tacos.actions';

@Injectable()
export class TacosFacade {
  loaded$ = this.store.pipe(select(tacosQuery.getLoaded));
  allTacos$ = this.store.pipe(select(tacosQuery.getAllTacos));
  selectedTacos$ = this.store.pipe(select(tacosQuery.getSelectedTacos));

  constructor(private store: Store<TacosPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadTacos());
  }
}
