import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllLeagues, selectCurrentLeague } from '..';
import * as LeaguesActions from './leagues.actions';
import { LeaguesState } from './leagues.reducer';

@Injectable()
export class LeaguesFacade {
  allLeagues$ = this.store.pipe(select(selectAllLeagues));
  selectedLeague$ = this.store.pipe(select(selectCurrentLeague));

  constructor(private store: Store<LeaguesState>) {}

  selectLeague(league) {
    this.store.dispatch(new LeaguesActions.LeagueSelected(league));
  }

  loadLeagues() {
    this.store.dispatch(new LeaguesActions.LoadLeagues());
  }
}
