import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { PizzasPartialState } from './pizzas.reducer';
import {
  LoadPizzas,
  PizzasLoaded,
  PizzasLoadError,
  PizzasActionTypes
} from './pizzas.actions';

@Injectable()
export class PizzasEffects {
  @Effect() loadPizzas$ = this.dataPersistence.fetch(
    PizzasActionTypes.LoadPizzas,
    {
      run: (action: LoadPizzas, state: PizzasPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new PizzasLoaded([]);
      },

      onError: (action: LoadPizzas, error) => {
        console.error('Error', error);
        return new PizzasLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PizzasPartialState>
  ) {}
}
