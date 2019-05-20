import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { InstrumentsState } from './instruments.reducer';
import {
  LoadInstruments,
  InstrumentsLoaded,
  InstrumentsActionTypes,
  AddInstrument,
  InstrumentAdded,
  UpdateInstrument,
  DeleteInstrument,
  InstrumentUpdated,
  InstrumentDeleted
} from './instruments.actions';

import { InstrumentsService } from '../../instruments/instruments.service';
import { Instrument } from '../../instruments/instrument.model';

@Injectable()
export class InstrumentsEffects {
  @Effect() loadInstruments$ = this.dataPersistence.fetch(InstrumentsActionTypes.LoadInstruments, {
      run: (action: LoadInstruments, state: InstrumentsState) => {
        return this.instrumentsService.all().pipe(map((res: Instrument[]) => new InstrumentsLoaded(res)));
      },

      onError: (action: LoadInstruments, error) => {
        console.error('Error', error);
      }
    }
  );

  @Effect()
    AddInstrument$ = this.dataPersistence.pessimisticUpdate(InstrumentsActionTypes.AddInstrument, {
      run: (action: AddInstrument, state: InstrumentsState) => {
        return this.instrumentsService.create(action.payload).pipe(map((res: Instrument) => new InstrumentAdded(res)));
      },

      onError: (action: AddInstrument, error) => {
        console.error('Error', error);
      }
    });

  @Effect()
    updateInstrument$ = this.dataPersistence.pessimisticUpdate(InstrumentsActionTypes.UpdateInstrument, {
      run: (action: UpdateInstrument, state: InstrumentsState) => {
        return this.instrumentsService.update(action.payload).pipe(map((res: Instrument) => new InstrumentUpdated(res)));
      },

      onError: (action: UpdateInstrument, error) => {
        console.error('Error', error);
      }
    });

  @Effect()
      deleteInstrument$ = this.dataPersistence.pessimisticUpdate(InstrumentsActionTypes.DeleteInstrument, {
        run: (action: DeleteInstrument, state: InstrumentsState) => {
          return this.instrumentsService.create(action.payload).pipe(map((res: Instrument) => new InstrumentDeleted(action.payload)))
        },

        onError: (action: DeleteInstrument, error) => {
          console.error('Error', error);
        }
      })

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<InstrumentsState>,
    private instrumentsService: InstrumentsService
  ) {}
}
