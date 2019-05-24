import { Action } from '@ngrx/store';
import { Item } from '../../items/item.model';

export enum ItemsActionTypes {
  ItemsAction = '[Items] Action',
  LoadItems = '[Items] Load Items',
  ItemsLoaded = '[Items] Items Loaded',
}

export class Items implements Action {
  readonly type = ItemsActionTypes.ItemsAction
}

export class LoadItems implements Action {
  readonly type = ItemsActionTypes.LoadItems;
}

export class ItemsLoaded implements Action {
  readonly type = ItemsActionTypes.ItemsLoaded;
  constructor(public payload: Item[]) {}
}

export type ItemsAction = Items
  | LoadItems 
  | ItemsLoaded 
;
