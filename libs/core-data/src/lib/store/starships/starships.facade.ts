import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllStarships, selectCurrentStarship } from '..';
import { StarshipsActionTypes } from './starships.actions';
import * as StarshipsActions from './starships.actions';
import { StarshipsState } from './starships.reducer';

@Injectable()
export class StarshipsFacade {
  allStarships$ = this.store.pipe(select(selectAllStarships));
  currentStarships$ = this.store.pipe(select(selectCurrentStarship));

  constructor(private store: Store<StarshipsState>) {}

  selectStarship(starship) {
    this.store.dispatch(new StarshipsActions.StarshipSelected(starship));
  }

  loadStarships() {
    this.store.dispatch(new StarshipsActions.LoadStarships());
  }
}
