import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book, BooksService, BooksFacade } from '@level/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'level-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  form: FormGroup;
  searchResults$: Observable<Book[]> = this.booksFacade.allBooks$;
  selectedBook$: Observable<Book> = this.booksFacade.selectedBooks$;

  constructor(
    private booksService: BooksService,
    private booksFacade: BooksFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.bookForm();
    this.resetBook();
    
  }

  searchBooks(search) {
    console.log(this.selectedBook$);
    this.booksFacade.searckBooks(search);
  }

  selectBook(book) {
    this.booksFacade.selectBook(book);
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
        volumeInfo: this.formBuilder.group({
          title: {value: '', disabled: true},
          authors: {value: '', disabled: true},
          description: {value: '', disabled: true}    
        })
      })
    });
  }
}