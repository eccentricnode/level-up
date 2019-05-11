import { Action } from '@ngrx/store';
import { Person } from '../../people/person.model';

export enum PeopleActionTypes {
  PeopleAction = '[People] Action',
  PeopleSelected = '[People] Selected',
  LoadPeople = '[People] Load People',
  PeopleLoaded = '[People] People Loaded',
}

export class People implements Action {
  readonly type = PeopleActionTypes.PeopleAction;
}

export class PeopleSelected implements Action {
  readonly type = PeopleActionTypes.PeopleSelected;
  constructor(public payload) { };
}

export class LoadPeople implements Action {
  readonly type = PeopleActionTypes.LoadPeople;
}

export class PeopleLoaded implements Action {
  readonly type = PeopleActionTypes.PeopleLoaded;
  constructor(public payload: Person[]) {}
}

export type PeopleAction = People
  | PeopleSelected
  | LoadPeople 
  | PeopleLoaded;