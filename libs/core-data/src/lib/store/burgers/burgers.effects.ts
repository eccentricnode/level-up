import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { BurgersState } from './burgers.reducer';
import {
  LoadBurgers,
  BurgersLoaded,
  BurgersActionTypes
} from './burgers.actions';

import { BurgersService } from '../../burgers/burgers.service';
import { Burger } from '../../burgers/burger.model';

@Injectable()
export class BurgersEffects {
  @Effect() loadBurgers$ = this.dataPersistence.fetch(BurgersActionTypes.LoadBurgers, {
      run: (action: LoadBurgers, state: BurgersState) => {
        return this.burgersService.all().pipe(map((res: Burger[]) => new BurgersLoaded(res)));
      },

      onError: (action: LoadBurgers, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<BurgersState>,
    private burgersService: BurgersService
  ) {}
}
