import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { BrandsPartialState } from './brands.reducer';
import { brandsQuery } from './brands.selectors';
import { LoadBrands } from './brands.actions';

@Injectable()
export class BrandsFacade {
  loaded$ = this.store.pipe(select(brandsQuery.getLoaded));
  allBrands$ = this.store.pipe(select(brandsQuery.getAllBrands));
  selectedBrands$ = this.store.pipe(select(brandsQuery.getSelectedBrands));

  constructor(private store: Store<BrandsPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadBrands());
  }
}
