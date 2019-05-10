import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Book } from '@level/core-data';

@Component({
  selector: 'level-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent {
  @Input() searchGroup: FormGroup;
  @Input() books;
  @Output() searchQuery = new EventEmitter();
  @Output() selected = new EventEmitter();

  searchBooksSubmit(search) {
    console.log(this.books);
    this.searchQuery.emit(search.searchField);
  }

  selectBookSubmit(book) {
    this.selected.emit(book);
  }
}
