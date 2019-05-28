import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllBrands } from '..';
import * as BrandsActions from './brands.actions';
import { BrandsState } from './brands.reducer';

@Injectable()
export class BrandsFacade {
  allBrands$ = this.store.pipe(select(selectAllBrands));

  constructor(private store: Store<BrandsState>) {}

  loadAll() {
    this.store.dispatch(new BrandsActions.LoadBrands());
  }
}
