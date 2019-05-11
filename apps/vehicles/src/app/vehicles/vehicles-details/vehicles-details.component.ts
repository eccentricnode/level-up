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
    if(!value) return;
    this.group.patchValue({
      id: null,
      name: '',
      manufacturer: '',
      vehicle_class: '',
      crew: '',
      passengers: '',
    });
  }

  resetForm() {
    this.reset.emit();
  }
}
