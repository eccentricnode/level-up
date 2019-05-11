import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { PlanetsState } from './planets.reducer';
import {
  LoadPlanets,
  PlanetsLoaded,
  PlanetsActionTypes
} from './planets.actions';

import { PlanetsService } from '../../planets/planets.service';
import { Planet } from '../../planets/planet.model';

@Injectable()
export class PlanetsEffects {
  @Effect() loadPlanets$ = this.dataPersistence.fetch(PlanetsActionTypes.LoadPlanets, {
      run: (action: LoadPlanets, state: PlanetsState) => {
        return this.planetsService.all().pipe(map((res: Planet[]) => new PlanetsLoaded(res)));
      },

      onError: (action: LoadPlanets, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PlanetsState>,
    private planetsService: PlanetsService
  ) {}
}
