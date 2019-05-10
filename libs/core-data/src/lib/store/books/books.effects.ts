import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { BooksState } from './books.reducer';
import {
  BooksLoaded,
  BooksActionTypes,
  SearchBooks
} from './books.actions';
import { BooksService } from '../../books/books.service';
import { Book } from '../../books/book.model';


@Injectable()
export class BooksEffects {
  @Effect() searchBooks$ = this.dataPersistence.fetch(BooksActionTypes.SearchBooks, {
      run: (action: SearchBooks, state: BooksState) => {
        return this.booksService.searchBooksApi(action.payload).pipe(map((res => new BooksLoaded(res))));
      },

      onError: (action: SearchBooks, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<BooksState>, 
    private booksService: BooksService
  ) {}
}
