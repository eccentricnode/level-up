import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { select, Store, ActionsSubject } from '@ngrx/store';

import { selectAllInstruments, selectCurrentInstrument } from '..';
import { InstrumentsActionTypes } from './instruments.actions';
import * as InstrumentsActions from './instruments.actions';
import { InstrumentsState } from './instruments.reducer';

@Injectable()
export class InstrumentsFacade {
  allInstruments$ = this.store.pipe(select(selectAllInstruments));
  selectedInstrument$ = this.store.pipe(select(selectCurrentInstrument));

  mutations$ = this.actions$
    .pipe(
      filter(action => 
      action.type === InstrumentsActionTypes.AddInstrument
      || action.type === InstrumentsActionTypes.UpdateInstrument
      || action.type === InstrumentsActionTypes.DeleteInstrument
      )
    );

  constructor(
    private store: Store<InstrumentsState>,
    private actions$: ActionsSubject
  ) {}

  selectInstrument(itemId) {
    this.store.dispatch(new InstrumentsActions.InstrumentSelected(itemId));
  }

  loadInstruments() {
    this.store.dispatch(new InstrumentsActions.LoadInstruments());
  }

  addInstrument(item) {
    this.store.dispatch(new InstrumentsActions.AddInstrument(item));
  }

  updateInstrument(item) {
    this.store.dispatch(new InstrumentsActions.UpdateInstrument(item));
  }

  deleteInstrument(item) {
    this.store.dispatch(new InstrumentsActions.DeleteInstrument(item));
  }
}
