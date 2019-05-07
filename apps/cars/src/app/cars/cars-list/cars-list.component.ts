import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Manufacturer } from '@level/core-data';

@Component({
  selector: 'level-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {
  @Input() manufacturers: Manufacturer;
  @Output() selected = new EventEmitter();

  submitSelectedManufacturer(manufacturer) {
    this.selected.emit(manufacturer);
  }
}
