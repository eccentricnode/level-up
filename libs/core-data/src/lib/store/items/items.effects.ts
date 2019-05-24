import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { ItemsState } from './items.reducer';
import {
  LoadItems,
  ItemsLoaded,
  ItemsActionTypes
} from './items.actions';

import { ItemsService } from '../../items/items.service';
import { Item } from '../../items/item.model';

@Injectable()
export class ItemsEffects {
  @Effect() loadItems$ = this.dataPersistence.fetch(
    ItemsActionTypes.LoadItems,
    {
      run: (action: LoadItems, state: ItemsState) => {
        return this.itemsService.all().pipe(map((res: Item[]) => new ItemsLoaded(res)));
      },

      onError: (action: LoadItems, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ItemsState>,
    private itemsService: ItemsService
  ) {}
}
