import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllPeople, selectCurrentPerson } from '..';
import * as PeopleActions from './people.actions';
import { PeopleState } from './people.reducer';

@Injectable()
export class PeopleFacade {
  allPeople$ = this.store.pipe(select(selectAllPeople));
  selectedPeople$ = this.store.pipe(select(selectCurrentPerson));

  constructor(private store: Store<PeopleState>) {}

  selectPerson(person) {
    this.store.dispatch(new PeopleActions.PeopleSelected(person));
  }

  loadPeople() {
    this.store.dispatch(new PeopleActions.LoadPeople());
  }
}
