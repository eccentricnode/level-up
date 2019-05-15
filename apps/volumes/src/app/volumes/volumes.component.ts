import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VolumesService, Volume } from '@level/core-data';

@Component({
  selector: 'level-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.scss']
})
export class VolumesComponent implements OnInit {
  form: FormGroup;
  searchResults$;
  selectedBook: Volume;

  constructor(
    private volumesService: VolumesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.bookForm();
    this.resetBook();
  }

  searchBooks(search) {
    this.searchResults$ = this.volumesService.searchBooksApi(search);
  }

  selectBook(book) {
    this.selectBook = book;
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
      booksDetails: this.formBuilder.group({
        id: null,
        volumeInfo: this.formBuilder.group({
          title: {value: '', disabled: true},
          authors: {value: '', disabled: true},
          description: {value: '', disabled: true},
        })
      })
    });
  }
}
