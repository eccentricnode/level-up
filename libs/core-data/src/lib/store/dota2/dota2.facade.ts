import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllTeams, selectCurrentTeam } from '..';
import { Dota2ActionTypes} from './dota2.actions';
import * as Dota2Actions from './dota2.actions';
import { Dota2State } from './dota2.reducer';

@Injectable()
export class Dota2Facade {
  teams$ = this.store.pipe(select(selectAllTeams));
  selectedDota2$ = this.store.pipe(select(selectCurrentTeam));
  
  constructor(private store: Store<Dota2State>) { }
 
  selectTeam(team) {
    this.store.dispatch(new Dota2Actions.Dota2Selected(team))
  }
  
  loadTeams() {
    this.store.dispatch(new Dota2Actions.LoadDota2());
  }  
}
