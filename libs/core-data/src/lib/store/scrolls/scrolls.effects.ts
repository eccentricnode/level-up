import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { ScrollsState } from './scrolls.reducer';
import {
  LoadScrolls,
  ScrollsLoaded,
  ScrollsActionTypes
} from './scrolls.actions';

import { ScrollsService } from '../../scrolls/scrolls.service';
import { ScrollModel } from '../../scrolls/scroll.model';

@Injectable()
export class ScrollsEffects {
  @Effect() loadScrolls$ = this.dataPersistence.fetch(ScrollsActionTypes.LoadScrolls, {
      run: (action: LoadScrolls, state: ScrollsState) => {
        return this.scrollsService.all().pipe(map((res: ScrollModel[]) => new ScrollsLoaded(res)));
      },

      onError: (action: LoadScrolls, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ScrollsState>,
    private scrollsService: ScrollsService
  ) {}
}
