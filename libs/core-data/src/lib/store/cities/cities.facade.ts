import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllCities, selectCurrentCity} from '..';
import { CitiesActionTypes } from './cities.actions';
import * as CitiesActions from './cities.actions';
import { CitiesState } from './cities.reducer';

@Injectable()
export class CitiesFacade {
  allCities$ = this.store.pipe(select(selectAllCities));
  selectedCities$ = this.store.pipe(select(selectCurrentCity));

  constructor(private store: Store<CitiesState>) {}

  selectCity(city) { 
    this.store.dispatch(new CitiesActions.CitySelected(city))
  }
  
  loadCities() {
    this.store.dispatch(new CitiesActions.LoadCities());
  }
}
