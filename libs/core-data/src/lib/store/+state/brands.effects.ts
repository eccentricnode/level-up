import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { BrandsPartialState } from './brands.reducer';
import {
  LoadBrands,
  BrandsLoaded,
  BrandsLoadError,
  BrandsActionTypes
} from './brands.actions';

@Injectable()
export class BrandsEffects {
  @Effect() loadBrands$ = this.dataPersistence.fetch(
    BrandsActionTypes.LoadBrands,
    {
      run: (action: LoadBrands, state: BrandsPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new BrandsLoaded([]);
      },

      onError: (action: LoadBrands, error) => {
        console.error('Error', error);
        return new BrandsLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<BrandsPartialState>
  ) {}
}
