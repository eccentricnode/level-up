import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Instrument } from '../../instruments/instrument.model';

import { InstrumentsAction, InstrumentsActionTypes } from './instruments.actions';


export interface InstrumentsState extends EntityState<Instrument> {
  selectedInstrumentId: string | null;
}

export const adapter: EntityAdapter<Instrument> = createEntityAdapter<Instrument>();
export const initialState: InstrumentsState = adapter.getInitialState({
  selectedInstrumentId: null,
});

export function instrumentsReducer(state: InstrumentsState = initialState, action: InstrumentsAction): InstrumentsState {
  switch (action.type) {
    case InstrumentsActionTypes.InstrumentSelected: {
      return Object.assign({}, state, { selectedInstrumentId: action.payload });
    }

    case InstrumentsActionTypes.InstrumentsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case InstrumentsActionTypes.InstrumentAdded: {
      return adapter.addOne(action.payload, state);
    }

    case InstrumentsActionTypes.InstrumentUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case InstrumentsActionTypes.InstrumentsDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default: 
      return state;
  }
}

export const getSelectedInstrumentId = (state: InstrumentsState) => state.selectedInstrumentId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array instruments ids
export const selectInstrumentIds = selectIds;

// select the dictionary of instrument entities
export const selectInstrumentEntities = selectEntities;

// select the array of instruments
export const selectAllInstruments = selectAll;

// select the total instrument count
export const selectInstrumentTotal = selectTotal;
