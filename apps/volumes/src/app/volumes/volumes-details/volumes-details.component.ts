import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Volume } from '@level/core-data';

@Component({
  selector: 'level-volumes-details',
  templateUrl: './volumes-details.component.html',
  styleUrls: ['./volumes-details.component.scss']
})
export class VolumesDetailsComponent {
  @Input() detailsGroup: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedBook(value: Volume) {
    if(!value) return;
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
