import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllPlayers, selectCurrentPlayer } from '..';
import * as PlayersActions from './players.actions';
import { PlayersState } from './players.reducer';

@Injectable()
export class PlayersFacade {
  allPlayers$ = this.store.pipe(select(selectAllPlayers));
  selectedPlayer$ = this.store.pipe(select(selectCurrentPlayer));

  constructor(private store: Store<PlayersState>) {}

  selectPlayer(player) {
    this.store.dispatch(new PlayersActions.PlayerSelected(player));
  }

  loadPlayers() {
    this.store.dispatch(new PlayersActions.LoadPlayers());
  }
}
