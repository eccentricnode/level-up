import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { selectAllBooks, selectCurrentBook } from '..';
import * as BooksActions from './books.actions';
import { BooksState } from './books.reducer';

@Injectable()
export class BooksFacade {
  allBooks$ = this.store.pipe(select(selectAllBooks));
  selectedBooks$ = this.store.pipe(select(selectCurrentBook));

  constructor(private store: Store<BooksState>) {}

  searckBooks(search) {
    this.store.dispatch(new BooksActions.SearchBooks(search));
  }

  selectBook(book) {
    this.store.dispatch(new BooksActions.BookSelected(book));
  }
}
