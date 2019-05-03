import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllCoins, selectCurrentCoin } from '..';
import { CoinsActionTypes } from './coins.actions';
import * as CoinsActions from './coins.actions';
import { CoinsState } from './coins.reducer';

@Injectable()
export class CoinsFacade {
  allCoins$ = this.store.pipe(select(selectAllCoins));
  selectedCoins$ = this.store.pipe(select(selectCurrentCoin));

  constructor(private store: Store<CoinsState>) {}

  selectCoin(coin) {
    this.store.dispatch(new CoinsActions.CoinSelected(coin));
  }

  loadCoins() {
    this.store.dispatch(new CoinsActions.LoadCoins());
  }
}
