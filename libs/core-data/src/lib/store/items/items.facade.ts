import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllItems } from '..';
import * as ItemsActions from './items.actions';
import { ItemsState } from './items.reducer';

@Injectable()
export class ItemsFacade {
  allItems$ = this.store.pipe(select(selectAllItems));

  constructor(private store: Store<ItemsState>) {}

  loadAll() {
    this.store.dispatch(new ItemsActions.LoadItems());
  }
}
