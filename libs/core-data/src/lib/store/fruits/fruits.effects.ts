import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { FruitsState } from './fruits.reducer';
import {
  LoadFruits,
  FruitsLoaded,
  FruitsActionTypes,
  AddFruit,
  FruitAdded,
  UpdateFruit,
  FruitUpdated,
  DeleteFruit,
  FruitDeleted
} from './fruits.actions';

import { FruitsService } from '../../fruits/fruits.service';
import { Fruit } from '@level/core-data';

@Injectable()
export class FruitsEffects {
  @Effect() loadFruits$ = this.dataPersistence.fetch(FruitsActionTypes.LoadFruits, {
      run: (action: LoadFruits, state: FruitsState) => {
        return this.fruitsService.all().pipe(map((res: Fruit[]) => new FruitsLoaded(res)));
      },

      onError: (action: LoadFruits, error) => {
        console.error('Error', error);
      }
    }
  );

  @Effect()
  addFruit$ = this.dataPersistence.pessimisticUpdate(FruitsActionTypes.AddFruit, {
    run: (action: AddFruit, state: FruitsState) => {
      return this.fruitsService.create(action.payload).pipe(map((res: Fruit) => new FruitAdded(res)));
    },

    onError: (action: AddFruit, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateFruit$ = this.dataPersistence.pessimisticUpdate(FruitsActionTypes.UpdateFruit, {
    run: (action: UpdateFruit, state: FruitsState) => {
      return this.fruitsService.update(action.payload).pipe(map((res: Fruit) => new FruitUpdated(res)));
    },
     
    onError: (action: UpdateFruit, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deleteFruit$ = this.dataPersistence.pessimisticUpdate(FruitsActionTypes.DeleteFruit, {
    run: (action: DeleteFruit, state: FruitsState) => {
      return this.fruitsService.delete(action.payload.id).pipe(map(_ => new FruitDeleted(action.payload)));
    },

    onError: (action: DeleteFruit, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<FruitsState>,
    private fruitsService: FruitsService
  ) {}
}
