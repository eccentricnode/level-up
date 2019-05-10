import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Book } from '@level/core-data';

@Component({
  selector: 'level-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss']
})
export class BooksDetailsComponent {
  @Input() detailsGroup: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedBook(value: Book) {
    if(!value) return;
    this.detailsGroup.patchValue({
      id: null,
      title: value.title,
      authors: value.authors,
      description: value.description,
    });
  }

  resetBookForm() {
    this.reset.emit();
  }
}
