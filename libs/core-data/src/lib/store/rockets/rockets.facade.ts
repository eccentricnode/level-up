import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { RocketsPartialState } from './rockets.reducer';
import { rocketsQuery } from './rockets.selectors';
import { LoadRockets } from './rockets.actions';

@Injectable()
export class RocketsFacade {
  loaded$ = this.store.pipe(select(rocketsQuery.getLoaded));
  allRockets$ = this.store.pipe(select(rocketsQuery.getAllRockets));
  selectedRockets$ = this.store.pipe(select(rocketsQuery.getSelectedRockets));

  constructor(private store: Store<RocketsPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadRockets());
  }
}
