import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllNflTeams, selectCurrentNflTeam } from '..';
import * as TeamsActions from './teams.actions';
import { TeamsState } from './teams.reducer';

@Injectable()
export class NflTeamsFacade {
  allTeams$ = this.store.pipe(select(selectAllNflTeams));
  selectedTeams$ = this.store.pipe(select(selectCurrentNflTeam));

  constructor(private store: Store<TeamsState>) {}

  selectTeam(team) {
    this.store.dispatch(new TeamsActions.TeamSelected(team));
  }

  loadTeams() {
    this.store.dispatch(new TeamsActions.LoadTeams());
  }
}
