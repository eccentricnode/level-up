import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Manufacturer } from '@level/core-data';

@Component({
  selector: 'level-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.scss']
})
export class CarsDetailsComponent {
  @Input() detailsGroup: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedManufacturer(value: Manufacturer) {
    if(!value) return;
    this.detailsGroup.patchValue({
      id: null,
      Mfr_Name: value.Mfr_Name,
      Country: value.Country,
    });
  }

  resetForm() { 
    this.reset.emit();
  }
}
