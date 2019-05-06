import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { CitiesPartialState } from './cities.reducer';
import { citiesQuery } from './cities.selectors';
import { LoadCities } from './cities.actions';

@Injectable()
export class CitiesFacade {
  loaded$ = this.store.pipe(select(citiesQuery.getLoaded));
  allCities$ = this.store.pipe(select(citiesQuery.getAllCities));
  selectedCities$ = this.store.pipe(select(citiesQuery.getSelectedCities));

  constructor(private store: Store<CitiesPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadCities());
  }
}
