import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Vehicle } from '@level/core-data';

@Component({
  selector: 'level-vehicles-details',
  templateUrl: './vehicles-details.component.html',
  styleUrls: ['./vehicles-details.component.scss']
})
export class VehiclesDetailsComponent {
  @Input() group: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedVehicle(value: Vehicle) {
    console.log(value);
    if(!value) return;
    this.group.patchValue({
      id: null,
      name: value.name,
      manufacturer: value.manufacturer,
      vehicle_class: value.vehicle_class,
      crew: value.crew,
      passengers: value.passengers,
    });
  }

  resetForm() {
    this.reset.emit();
  }
}
