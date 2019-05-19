import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { select, Store, ActionsSubject } from '@ngrx/store';

import { selectAllFruits, selectCurrentFruit } from '..';
import { FruitsActionTypes } from './fruits.actions';
import * as FruitsActions from './fruits.actions';
import { FruitsState } from './fruits.reducer';

@Injectable()
export class FruitsFacade {
  allFruits$ = this.store.pipe(select(selectAllFruits));
  selectedFruit$ = this.store.pipe(select(selectCurrentFruit));

  mutations$ = this.actions$
    .pipe(
      filter(action => 
      action.type === FruitsActionTypes.AddFruit
      || action.type === FruitsActionTypes.UpdateFruit
      || action.type === FruitsActionTypes.DeleteFruit
      )
    );

  constructor(
    private store: Store<FruitsState>,
    private actions$: ActionsSubject
  ) {}

  selectFruit(itemId) {
    this.store.dispatch(new FruitsActions.FruitSelected(itemId));
  }

  loadFruits() {
    this.store.dispatch(new FruitsActions.LoadFruits());
  }

  addFruit(item) {
    this.store.dispatch(new FruitsActions.AddFruit(item));
  }

  updateFruit(item) {
    this.store.dispatch(new FruitsActions.UpdateFruit(item));
  }

  deleteFruit(item) {
    this.store.dispatch(new FruitsActions.DeleteFruit(item));
  }
}
