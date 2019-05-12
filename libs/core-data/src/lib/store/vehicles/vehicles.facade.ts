import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllVehicles, selectCurrentVehicle } from '..';
import * as VehiclesActions from './vehicles.actions';
import { VehiclesState } from './vehicles.reducer';

@Injectable()
export class VehiclesFacade {
  allVehicles$ = this.store.pipe(select(selectAllVehicles));
  selectedVehicles$ = this.store.pipe(select(selectCurrentVehicle));

  constructor(private store: Store<VehiclesState>) {}

  selectVehicle(vehicle) {
    this.store.dispatch(new VehiclesActions.VehicleSelected(vehicle));
  }
  
  loadVehicles() {
    this.store.dispatch(new VehiclesActions.LoadVehicles());
  }
}
