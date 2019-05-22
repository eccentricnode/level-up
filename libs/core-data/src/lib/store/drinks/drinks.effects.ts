import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { DrinksState } from './drinks.reducer';
import {
  LoadDrinks,
  DrinksLoaded,
  DrinksActionTypes
} from './drinks.actions';

import { DrinksService } from '../../drinks/drinks.service';
import { Drink } from '../../drinks/drink.model';

@Injectable()
export class DrinksEffects {
  @Effect() loadDrinks$ = this.dataPersistence.fetch(DrinksActionTypes.LoadDrinks, {
      run: (action: LoadDrinks, state: DrinksState) => {
        return this.drinksService.all().pipe(map((res: Drink[]) => new DrinksLoaded(res)));
      },

      onError: (action: LoadDrinks, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<DrinksState>,
    private drinksService: DrinksService
  ) {}
}
