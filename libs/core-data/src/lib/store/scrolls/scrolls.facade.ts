import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllScrolls } from '..';
import * as ScrollsActions from './scrolls.actions';
import { ScrollsState } from './scrolls.reducer';

@Injectable()
export class ScrollsFacade {
  allScrolls$ = this.store.pipe(select(selectAllScrolls));

  constructor(private store: Store<ScrollsState>) {}

  loadAll() {
    this.store.dispatch(new ScrollsActions.LoadScrolls());
  }
}