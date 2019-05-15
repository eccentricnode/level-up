import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { VolumesState } from './volumes.reducer';
import {
  VolumesLoaded,
  VolumesActionTypes,
  SearchVolumes
} from './volumes.actions';
import { VolumesService } from '../../volumes/volumes.service';

@Injectable()
export class VolumesEffects {
  @Effect() searchVolumes$ = this.dataPersistence.fetch(VolumesActionTypes.SearchVolumes, {
      run: (action: SearchVolumes, state: VolumesState) => {
        return this.volumesService.searchBooksApi(action.payload).pipe(map((res => new VolumesLoaded(res))));
      },

      onError: (action: SearchVolumes, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<VolumesState>,
    private volumesService: VolumesService
  ) {}
}
