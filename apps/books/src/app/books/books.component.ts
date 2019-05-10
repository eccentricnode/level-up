import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book, BooksService } from '@level/core-data';

@Component({
  selector: 'level-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  form: FormGroup;
  searchResults$;
  selectedBook: Book;

  constructor(
    private booksService: BooksService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.bookForm();
    this.resetBook();
  }

  searchBooks(search) {
    this.searchResults$ = this.booksService.searchBooksApi(search);
  }

  selectBook(book) {
    console.log(book);
    this.selectedBook = book.volumeInfo;
  }

  resetBook() {
    this.form.reset();
    this.selectBook({id: null});
  }

  bookForm() {
    this.form = this.formBuilder.group({
      search: this.formBuilder.group({
        searchField: ['', Validators.required]
      }),
      bookDetails: this.formBuilder.group({
        id: null,
        title: {value: '', disabled: true},
        authors: {value: '', disabled: true},
        description: {value: '', disabled: true}        
      })
    });
  }
}