import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllManufacturers, selectCurrentManufacturer } from '..';
import * as ManufacturersActions from './manufacturers.actions';
import { ManufacturersState } from './manufacturers.reducer';

@Injectable()
export class ManufacturersFacade {
  allManufacturers$ = this.store.pipe(select(selectAllManufacturers));
  selectedManufacturers$ = this.store.pipe(select(selectCurrentManufacturer));

  constructor(private store: Store<ManufacturersState>) {}

  selectManufacturer(manufacturer) {
    this.store.dispatch(new ManufacturersActions.ManufacturerSelected(manufacturer));
  }

  loadAManufacturers() {
    this.store.dispatch(new ManufacturersActions.LoadManufacturers());
  }
}
