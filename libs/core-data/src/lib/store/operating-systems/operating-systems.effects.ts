import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { OperatingSystemsState } from './operating-systems.reducer';
import {
  LoadOperatingSystems,
  OperatingSystemsLoaded,
  OperatingSystemsActionTypes
} from './operating-systems.actions';

import { OperatingSystemsService } from '../../operating-systems/operating-systems.service';
import { OperatingSystem } from '../../operating-systems/operating-system.model';

@Injectable()
export class OperatingSystemsEffects {
  @Effect() loadOperatingSystems$ = this.dataPersistence.fetch(OperatingSystemsActionTypes.LoadOperatingSystems, {
      run: (action: LoadOperatingSystems, state: OperatingSystemsState) => {
        return this.osService.all().pipe(map((res: OperatingSystem[]) => new OperatingSystemsLoaded(res)));
      },

      onError: (action: LoadOperatingSystems, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<OperatingSystemsState>,
    private osService: OperatingSystemsService
  ) {}
}
