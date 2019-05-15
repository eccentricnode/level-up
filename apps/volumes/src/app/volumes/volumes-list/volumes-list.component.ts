import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Volume } from '@level/core-data';

@Component({
  selector: 'level-volumes-list',
  templateUrl: './volumes-list.component.html',
  styleUrls: ['./volumes-list.component.scss']
})
export class VolumesListComponent {
  @Input() searchGroup: FormGroup;
  @Input() books: Volume;
  @Output() searchQuery = new EventEmitter();
  @Output() selected = new EventEmitter();

  searchBookSubmit(search) {
    this.searchQuery.emit(search.searchField);
  }

  selectedBookSubmit(book) {
    this.selected.emit(book);
  }
}
