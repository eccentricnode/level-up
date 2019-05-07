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
    this.detailsGroup.patchValue({
      id: null,
      Mfr_CommonName: value.Mfr_CommonName,
      Country: value.Country,
      VehicleTypes: value.VehicleTypes
    });
  }

  resetForm() { 
    this.reset.emit();
  }
}
