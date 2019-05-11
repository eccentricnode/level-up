import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Planet } from '@level/core-data';

@Component({
  selector: 'level-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent {
  @Input() planets: Planet;
  @Output() selected = new EventEmitter();

  submitSelectedPlanet(planet) {
    this.selected.emit(planet);
  }
}
