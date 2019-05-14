import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { LeaguesPartialState } from './leagues.reducer';
import { leaguesQuery } from './leagues.selectors';
import { LoadLeagues } from './leagues.actions';

@Injectable()
export class LeaguesFacade {
  loaded$ = this.store.pipe(select(leaguesQuery.getLoaded));
  allLeagues$ = this.store.pipe(select(leaguesQuery.getAllLeagues));
  selectedLeagues$ = this.store.pipe(select(leaguesQuery.getSelectedLeagues));

  constructor(private store: Store<LeaguesPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadLeagues());
  }
}
