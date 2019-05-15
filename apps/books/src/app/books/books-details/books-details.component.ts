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
    console.log(value);
    if(Object.keys(value).length === 0) return;
    this.detailsGroup.patchValue({
        title: value.volumeInfo.title,
        authors: value.volumeInfo.authors,
        description: value.volumeInfo.description,
    });
  }

  resetBookForm() {
    this.reset.emit();
  }
}
