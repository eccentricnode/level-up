import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Air } from '@level/core-data';

@Component({
  selector: 'level-air-details',
  templateUrl: './air-details.component.html',
  styleUrls: ['./air-details.component.scss']
})
export class AirDetailsComponent {
  @Input() detailsGroup: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedCity(value: Air) {
    if(!value) return;
    this.detailsGroup.patchValue({
      id: null,
      city: value.city,
      country: value.country,
      locations: value.locations,
      count: value.count
    });
  }

  resetForm() {
    this.reset.emit();
  }
}
