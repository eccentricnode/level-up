import { Action } from '@ngrx/store';
import { Animal } from '../../animals/animal.model';

export enum AnimalsActionTypes {
  AnimalsAction = '[Animals] Action',
  AnimalSelected = '[Animals] Selected',
  LoadAnimals = '[Animals] Load Data',
  AnimalsLoaded = '[Animals] Data Loaded',
  AddAnimal = '[Animals] Add Data',
  AnimalAdded = '[Animals] Data Added',
  UpdateAnimal = '[Animals] Update Data',
  AnimalUpdated = '[Animals] Data Updated',
  DeleteAnimal = '[Animals] Delete Data',
  AnimalDeleted = '[Animals] Data Deleted'
}

export class Animals implements Action {
  readonly type = AnimalsActionTypes.AnimalsAction;
}

export class AnimalSelected implements Action {
  readonly type = AnimalsActionTypes.AnimalSelected;
  constructor(public payload) { }
}

export class LoadAnimals implements Action {
  readonly type = AnimalsActionTypes.LoadAnimals;
}

export class AnimalsLoaded implements Action {
  readonly type = AnimalsActionTypes.AnimalsLoaded;
  constructor(public payload: Animal[]) {}
}

export class AddAnimal implements Action {
  readonly type = AnimalsActionTypes.AddAnimal;
  constructor(public payload: Animal) { }
}

export class AnimalAdded implements Action {
  readonly type = AnimalsActionTypes.AnimalAdded;
  constructor(public payload: Animal) { }
}

export class UpdateAnimal implements Action {
  readonly type = AnimalsActionTypes.UpdateAnimal;
  constructor(public payload: Animal) { }
}

export class AnimalUpdated implements Action {
  readonly type = AnimalsActionTypes.AnimalUpdated;
  constructor(public payload: Animal) { }
}

export class DeleteAnimal implements Action {
  readonly type = AnimalsActionTypes.DeleteAnimal;
  constructor(public payload: Animal) { }
}

export class AnimalDeleted implements Action {
  readonly type = AnimalsActionTypes.AnimalDeleted;
  constructor(public payload: Animal) { }
}

export type AnimalsAction = Animals 
  | AnimalSelected
  | LoadAnimals
  | AnimalsLoaded 
  | AddAnimal
  | AnimalAdded
  | UpdateAnimal
  | AnimalUpdated
  | DeleteAnimal
  | AnimalDeleted
;
