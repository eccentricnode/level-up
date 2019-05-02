import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllRockets, selectCurrentRocket } from '..';
import { RocketsActionTypes } from './rockets.actions';
import * as RocketsActions from './rockets.actions';
import { RocketsState } from './rockets.reducer';

@Injectable()
export class RocketsFacade {
  allRockets$ = this.store.pipe(select(selectAllRockets));
  currentRocket$ = this.store.pipe(select(selectCurrentRocket));

  constructor(private store: Store<RocketsState>) {}

  selectRocket(rocket) {
    this.store.dispatch(new RocketsActions.RocketSelected(rocket));
  }

  loadRockets() {
    this.store.dispatch(new RocketsActions.LoadRockets());
  }
}
