import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { BrandsState } from './brands.reducer';
import {
  LoadBrands,
  BrandsLoaded,
  BrandsActionTypes
} from './brands.actions';

import { BrandsService } from '../../brands/brands.service';
import { Brand } from '../../brands/brand.model';

@Injectable()
export class BrandsEffects {
  @Effect() loadBrands$ = this.dataPersistence.fetch(BrandsActionTypes.LoadBrands, {
      run: (action: LoadBrands, state: BrandsState) => {
        return this.brandsService.all().pipe(map((res: Brand[]) => new BrandsLoaded(res)));
      },

      onError: (action: LoadBrands, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<BrandsState>,
    private brandsService: BrandsService
  ) {}
}
