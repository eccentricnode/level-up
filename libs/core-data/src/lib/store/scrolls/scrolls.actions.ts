import { Action } from '@ngrx/store';
import { ScrollModel } from '../../scrolls/scroll.model';

export enum ScrollsActionTypes {
  ScrollsAction = '[Scrolls] Action',
  LoadScrolls = '[Scrolls] Load Scrolls',
  ScrollsLoaded = '[Scrolls] Scrolls Loaded',
}

export class Scrolls implements Action {
  readonly type = ScrollsActionTypes.ScrollsAction;
}

export class LoadScrolls implements Action {
  readonly type = ScrollsActionTypes.LoadScrolls;
}

export class ScrollsLoaded implements Action {
  readonly type = ScrollsActionTypes.ScrollsLoaded;
  constructor(public payload: ScrollModel[]) {}
}

export type ScrollsAction = Scrolls
 | LoadScrolls
 | ScrollsLoaded 
;
