import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BooksAction, BooksActionTypes } from './books.actions';

import { Book } from '../../books/book.model';

export interface BooksState extends EntityState<Book> {
selectedBookId: string | null;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();
export const initialState: BooksState = adapter.getInitialState ({
  selectedBookId: null
});

export function booksReducer(state: BooksState = initialState, action: BooksAction): BooksState {
  switch (action.type) {
    case BooksActionTypes.BookSelected: {
      return Object.assign({}, state, { selectedBookId: action.payload.id });
    }

    case BooksActionTypes.BooksLoaded: {
      console.log(action.payload);
      return adapter.upsertMany(action.payload, state);
    }
    default: 
      return state;
  }
}

export const getSelectedBookId = (state: BooksState) => state.selectedBookId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of book ids
export const selectBookIds = selectIds;

// select the dictionary of book entities
export const selectBookEntities = selectEntities;

// select the array of books
export const selectAllBooks = selectAll;

// select the total book count
export const selectBookTotal = selectTotal;