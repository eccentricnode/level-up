import { Action } from '@ngrx/store';

export enum BooksActionTypes {
  BooksAction = '[Books] Action',
  BookSelected = '[Books] Selected',
  SearchBooks = '[Books] Search',
  BooksLoaded = '[Books] Books Loaded',
}

export class Books implements Action {
 readonly type = BooksActionTypes.BooksAction;
}

export class BookSelected implements Action {
  readonly type = BooksActionTypes.BookSelected;
  constructor(public payload) { }
}

export class SearchBooks implements Action {
  readonly type = BooksActionTypes.SearchBooks;
  constructor(public payload) { }
}

export class BooksLoaded implements Action {
  readonly type = BooksActionTypes.BooksLoaded;
  constructor(public payload) {}
}

export type BooksAction = Books
  | BookSelected
  | SearchBooks 
  | BooksLoaded
;