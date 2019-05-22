import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllTacos } from '..';
import * as TacosActions from './tacos.actions';
import { TacosState } from './tacos.reducer';

@Injectable()
export class TacosFacade {
  allTacos$ = this.store.pipe(select(selectAllTacos));

  constructor(private store: Store<TacosState>) {}

  loadAll() {
    this.store.dispatch(new TacosActions.LoadTacos());
  }
}
