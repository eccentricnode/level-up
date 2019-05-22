import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { TacosState } from './tacos.reducer';
import {
  LoadTacos,
  TacosLoaded,
  TacosActionTypes
} from './tacos.actions';

import { TacosService } from '../../tacos/tacos.service';
import { Taco } from '../../tacos/taco.model';

@Injectable()
export class TacosEffects {
  @Effect() loadTacos$ = this.dataPersistence.fetch(TacosActionTypes.LoadTacos, {
      run: (action: LoadTacos, state: TacosState) => {
        return this.tacosService.all().pipe(map((res: Taco[]) => new TacosLoaded(res)));
      },

      onError: (action: LoadTacos, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TacosState>,
    private tacosService: TacosService
  ) {}
}
