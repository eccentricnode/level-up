import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { MmosState } from './mmos.reducer';
import {
  LoadMmos,
  MmosLoaded,
  MmosActionTypes
} from './mmos.actions';

import { MmosService } from '../../mmos/mmos.service';
import { Mmo } from '../../mmos/mmo.model';

@Injectable()
export class MmosEffects {
  @Effect() loadMmos$ = this.dataPersistence.fetch(MmosActionTypes.LoadMmos, {
    run: (action: LoadMmos, state: MmosState) => {
      return this.mmosService.all().pipe(map((res: Mmo[]) => new MmosLoaded(res)));
    },

    onError: (action: LoadMmos, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<MmosState>,
    private mmosService: MmosService
  ) {}
}
