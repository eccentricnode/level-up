import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vehicle } from '@level/core-data';

@Component({
  selector: 'level-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent {
  @Input() vehicles: Vehicle;
  @Output() selected = new EventEmitter();

  submitSelectedVehicle(vehicle) {
    this.selected.emit(vehicle);
  }
}
