import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllPlanets, selectCurrentPlanet } from '..';
import * as PlanetsActions from './planets.actions';
import { PlanetsState } from './planets.reducer';

@Injectable()
export class PlanetsFacade {
  allPlanets$ = this.store.pipe(select(selectAllPlanets));
  selectedPlanet$ = this.store.pipe(select(selectCurrentPlanet));

  constructor(private store: Store<PlanetsState>) {}

  selectPlanet(planet) {
    this.store.dispatch(new PlanetsActions.PlanetSelected(planet));
  }

  loadPlanets() {
    this.store.dispatch(new PlanetsActions.LoadPlanets());
  }
}
