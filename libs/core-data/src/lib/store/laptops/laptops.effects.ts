import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { LaptopsState } from './laptops.reducer';
import {
  LoadLaptops,
  LaptopsLoaded,
  LaptopsActionTypes
} from './laptops.actions';

import { LaptopsService } from '../../laptops/laptops.service';
import { Laptop } from '../../laptops/laptop.model';

@Injectable()
export class LaptopsEffects {
  @Effect() loadLaptops$ = this.dataPersistence.fetch(LaptopsActionTypes.LoadLaptops, {
      run: (action: LoadLaptops, state: LaptopsState) => {
        return this.laptopsService.all().pipe(map((res: Laptop[]) => new LaptopsLoaded(res)))
      },

      onError: (action: LoadLaptops, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<LaptopsState>,
    private laptopsService: LaptopsService
  ) {}
}
