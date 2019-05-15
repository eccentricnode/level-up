import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { VolumesService, Volume, VolumesFacade } from '@level/core-data';

@Component({
  selector: 'level-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.scss']
})
export class VolumesComponent implements OnInit {
  search: FormGroup;
  book: FormGroup;
  searchResults$: Observable<Volume[]> = this.volumesFacade.allVolumes$;
  selectedBook$: Observable<Volume> = this.volumesFacade.selectedVolumes$;

  constructor(
    private volumesService: VolumesService,
    private volumesFacade: VolumesFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.searchForm();
    this.bookForm();
    this.resetBook();
  }

  searchBooks(search) {
    this.volumesFacade.searchVolumes(search);
  }

  selectBook(book) {
    this.volumesFacade.selectVolume(book);
  }

  resetBook() {
    this.book.reset();
    this.selectBook({id: null});
  }

  searchForm() {
    this.search = this.formBuilder.group({
        searchField: ['', Validators.required]
    });
  }

  bookForm() {
    this.book = this.formBuilder.group({
      id: null,
      volumeInfo: this.formBuilder.group({
        title: {value: '', disabled: true},
        authors: {value: '', disabled: true},
        description: {value: '', disabled: true},
      })
    })
  }
}
