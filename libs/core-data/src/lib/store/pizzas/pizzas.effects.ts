import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { PizzasState } from './pizzas.reducer';
import {
  LoadPizzas,
  PizzasLoaded,
  PizzasActionTypes
} from './pizzas.actions';

import { PizzaService } from '../../pizza/pizza.service';
import { Pizza } from '../../pizza/pizza.model';

@Injectable()
export class PizzasEffects {
  @Effect() loadPizzas$ = this.dataPersistence.fetch(PizzasActionTypes.LoadPizzas, {
      run: (action: LoadPizzas, state: PizzasState) => {
        return this.pizzaService.all().pipe(map((res: Pizza[]) => new PizzasLoaded(res)));
      },

      onError: (action: LoadPizzas, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PizzasState>,
    private pizzaService: PizzaService
  ) {}
}
