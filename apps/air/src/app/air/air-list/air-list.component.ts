import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Air } from '@level/core-data';

@Component({
  selector: 'level-air-list',
  templateUrl: './air-list.component.html',
  styleUrls: ['./air-list.component.scss']
})
export class AirListComponent {
  @Input() cities: Air;
  @Output() selected = new EventEmitter();

  selectedCitySubmit(city) {
    this.selected.emit(city);
  }
}
